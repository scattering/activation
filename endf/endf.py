#!/usr/bin/env python
"""
Run PREPRO filters on ENDF data to define linear interpolation
tables.

See `https://www-nds.iaea.org/public/endf/prepro`_ for details
on the individual programs.  Executables can be downloaded from
there as well.

Once you have downloaded the PREPRO executable, e.g., into
PREPRO12, add this program to the PREPRO binary directory, or set
ENDF_PROGRAMS to the path to the PREPRO directory in this file.

ENDF files can be retrieved from
`https://www-nds.iaea.org/public/download-endf`.
This code was tested with
`https://www-nds.iaea.org/public/download-endf/ENDF-B-VII.1/n-index.htm`.
The program fetch_endf.sh downloads the files and stores them in the
ENDF-B-VII.1 directory.

Each filter takes infile and step as its first two arguments,
returning outfile and step+1.  The outfile name is constructed
by _next_step from the step number and the step name.  If
KEEP_INTERMEDIATES is True, then the name is "STEP-#-name.OUT"
otherwise it is "STEP-0.OUT" or "STEP-1.OUT" alternating.

Run using::

    ./fetch_endf.sh
    mkdir interp
    cd interp
    python ../endf.py ../ENDF-B-VII.1/*.zip

This produces a set of "*.out" files containing the interpolated data.
You can plot individual resonances using, e.g.:

    python ../endf.py --pyplot *Sm-144*.out

The plotter is set to plot the elastic cross section (column 2) and the
capture cross section (column 102). See *ENDF_COLUMNS* for the column names.

To generate the images used on the web modify the code, uncommenting the
lines labeled "For resonance.html". Then run with all interpolated data::

    python ../endf.py --pyplot *

Note: ENDF data only roughly corresponds to activation data from calculator.
Even for thermal activation, some reactions in ENDF do not appear in
the activation data table and some reactions in the activation data table do
not appear in ENDF. This is after accounting for stable daughter products
(not listed in activation table) and nuclear isomers (not listed in ENDF?).
For cross sections that appear in both they have approximately the same order
of magnitude, though specific values may differ.
"""
#TODO: Look up the source for tabulated cross sections in the original paper

import sys
import os
import math
import shutil
import zipfile
import glob
import warnings

import numpy as np
from numpy import nan as NaN

ROOT=os.path.abspath(os.path.dirname(__file__))
#ENDF_PROGRAMS=os.path.join(ROOT, "PREPRO12")
ENDF_PROGRAMS=os.path.join(ROOT, "MAC")
ENDF_DATA=os.path.join(ROOT,"ENDF-B-VII.1")
KEEP_INTERMEDIATES=False

# See sec 3.4 and Appendix B of the ENDF manual
# https://www.oecd-nea.org/dbdata/data/endf102.htm#LinkTarget_11914
# https://www.oecd-nea.org/dbdata/data/endf102.htm#LinkTarget_42352
ENDF_COLUMNS = {
    "total": 1, # = 2 + 3
    "elastic": 2,
    "nonelastic": 3, # = 4 + a bunch of other stuff
    "inelastic": 4, # = sum (51 to 91)
    "absorption": 27, # = 18 + sum(102 to 117); rarely provided
    "n,2n": 16, # n -> 2n
    "n,3n": 17, # n -> 3n
    "n,na": 22, # n -> n+alpha
    "n,np": 28, # n -> n+proton
    "fission": 18, # =19+20+21+38 [first, second, third, fourth-chance fission]
    "disappearance": 101, # = sum(102 to 117); rarely provided
    # Capture products: 102 to 117
    # gamma, H, D, T, He3, He, 2He 3He - 2H H+He T+2He D+2He H+D H+T D+He
    "act": 102, # (n, gamma)
    "n,p": 103, # (n, p)
    "n,d": 104,
    "n,t": 105,
    "n,He3": 106,
    "n,a": 107, # (n, a)
    "n,2a": 108, # (n, 2a)
}
ENDF_LABELS = {v:k for k,v in ENDF_COLUMNS.items()}
# Change in (proton,neutron) count after neutron capture, used to determine
# if the daughter product is stable.
ENDF_DELTA = {
    #xs: (proton, neutron)
    16: (0, -1), # n,2n
    17: (0, -2), # n,3n
    22: (-2, -2), # n,na
    28: (-1, 0), # n,np
    102: (0, 1), # act
    103: (-1, 1), # n,p
    104: (-1, 0), # n,d
    105: (-1, -1), # n,t
    106: (-2, 0), # n,He3
    107: (-2, -1), # n,a
    108: (-4, -3), # n,2a
}

def _next_step(step, name):
    if KEEP_INTERMEDIATES:
        return "STEP-%d-%s.OUT"%(step,name)
    else:
        return "STEP-%d.OUT"%(step%2), step+1

def _efmt(val,width,digits):
    tens = 0 if val==0 else math.floor(math.log10(abs(val)))
    return "%*.*f%+03d"%(width-3,digits,val/10**tens,tens)

def _run(prog, files):
    if os.system(os.path.join(ENDF_PROGRAMS,prog)) != 0:
        raise RuntimeError("error in %r"%prog)
    if not KEEP_INTERMEDIATES:
        for f in files:
            if os.path.exists(f): os.unlink(f)
    print(f":======== Done {prog} ========", file=sys.stderr)

def linear(infile, step, MTs=None):
    """
    run the endf program LINEAR to set up simple linear
    interpolation throughout the entire range

    *MTs* is the list of MTs to interpolate, or None for all.
    """
    outfile, step = _next_step(step, "LINEAR")
    selection_criteria = 0 # 0:MAT, 1:ZA
    monitor = 0 # 0:quiet, 1: noisy
    min_xs = 1e-10 # minimum cross section, or 0 if 1e-10
    keep_points = 1 # 0:keep only interpolated points, 1: keep original and interpolated
    with open("LINEAR.INP","w") as fid:
        fid.write(" %10d%10d%s%10d\n"
                  %(selection_criteria, monitor, _efmt(min_xs,10,4), keep_points))
        fid.write("%s\n"%infile)
        fid.write("%s\n"%outfile)
        if MTs:
            for c in MTs:
                fid.write("     0 0%3d99999999%3d\n"%(c,c))
        else:
            fid.write("     0 0  099999999999\n") # do everything
        fid.write("""\
                        (BLANK CARD TERMINATES MAT REQUEST RANGES)
 0.00000-00 1.00000-04
                        (BLANK CARD TERMINATES FILE 3 ERROR LAW)
""")
    _run("linear",["LINEAR.INP","LINEAR.LST"])
    return outfile, step

def recent(infile, step, range=None):
    """
    run the endf program RECENT to add resonance effects to the
    cross sections.

    This is only needed for a few cross sections in the thermal
    neutron range.

    *range* is None or [min, max] in eV.  If running ranges in
    sections, always run from lowest to highest.
    """
    outfile, step = _next_step(step, "RESONANCE")
    if range is not None:
        rangestr=_efmt(range[0],10,5)+_efmt(range[0],10,5)
    else:
        rangestr=""
    with open("RECENT.INP","w") as fid:
        fid.write("""\
          0 1.00000-10          1          1          1          1
%s
%s
          1       9999%s
                        (BLANK CARD TERMINATES MAT REQUEST RANGES)
 0.00000-00 1.00000-04
 1.00000+00 1.00000-04
 2.00000+00 1.00000-03
 2.00000+07 1.00000-03
                        (BLANK CARD TERMINATES FILE 3 ERROR LAW)
"""%(infile,outfile,rangestr))
    _run("recent",["RECENT.INP","RECENT.LST"])
    return outfile, step

def sigma1(infile, step, T=293.6):
    """
    run the endf program SIGMA1 to adjust the temperature of the
    sample that the neutrons are inteeffects to the
    cross sections.

    This is only needed for a few cross sections in the thermal
    neutron range.

    *range* is None or [min, max] in eV.  If running ranges in
    sections, always run from lowest to highest.
    """
    outfile, step = _next_step(step, "SIGMA1")
    with open("SIGMA1.INP","w") as fid:
        fid.write("""\
          0          0%s  1.00000-10          1          0
%s
%s
          1       9999
                       (BLANK CARD TERMINATES MAT RANGE REQUESTS)
 0.00000+ 0 1.00000-04
 1.00000+ 0 1.00000-04
 2.00000+ 0 1.00000-03
 2.00000+ 7 1.00000-03
                       (BLANK CARD TERMINATES FILE 3 ERROR LAW)
"""%(_efmt(T,10,5),infile,outfile))
    _run("sigma1",["SIGMA1.INP","SIGMA1.LST"])
    return outfile, step

def activate(infile, step):
    """
    run the endf program ACTIVATE to set activation cross sections
    """
    outfile, step = _next_step(step, "ACTIVATE")
    with open("ACTIVATE.INP","w") as fid:
        fid.write("%s\n%s\n"%(infile,outfile))
    _run("activate",["ACTIVATE.INP","ACTIVATE.LST"])
    return outfile, step

def legend(infile, step):
    """
    run the endf program LEGEND to set legendre interpolation
    """
    outfile, step = _next_step(step, "LEGEND")
    with open("LEGEND.INP","w") as fid:
        fid.write("""\
 1.00000-02      20000          2          1          2          0
%s
%s
     0 0  0  999999999 0.00000+00 1.00000+09 1.00000-03 1.00000-02
"""%(infile,outfile))
    _run("legend",["LEGEND.INP","LEGEND.LST","LEGEND.TMP"])
    return outfile, step

def fixup(infile, step):
    """
    run the endf program FIXUP to clean up summed columns
    """
    outfile, step = _next_step(step, "FIXUP")
    with open("FIXUP.INP","w") as fid:
        fid.write("""\
10002111111001          (col. 11 = 1 = allow MT reconstruction)
%s
%s
 0.0       0.0                  0          0   0  1  (total)
 0.0       0.0                  0          0
 0.0       0.0                  0          0   0  4  (total inelastic)
 0.0       0.0                  0          0
 0.0       0.0                  0          0   0 16  (total n,2n)
 0.0       0.0                  0          0
 0.0       0.0                  0          0   0103  (total n,p)
 0.0       0.0                  0          0
 0.0       0.0                  0          0   0104  (total n,d)
 0.0       0.0                  0          0
 0.0       0.0                  0          0   0105  (total n,t)
 0.0       0.0                  0          0
 0.0       0.0                  0          0   0106  (total n,He-3)
 0.0       0.0                  0          0
 0.0       0.0                  0          0   0107  (total n,alpha)
 0.0       0.0                  0          0
"""%(infile,outfile))

    _run("fixup",["FIXUP.INP","FIXUP.LST"])
    return outfile, step

def dictin(infile, step):
    """
    run DICTIN to update ENDF dictionary
    """
    outfile, step = _next_step(step, "DICTIN")
    with open("DICTIN.INP","w") as fid:
        fid.write("%s\n%s\n"%(infile,outfile))
    _run("dictin",["DICTIN.INP","DICTIN.LST"])
    return outfile, step

def evalplot(infile):
    shutil.copyfile(os.path.join(ENDF_PROGRAMS,"PLOT.CHR"),"PLOT.CHR")
    shutil.copyfile(os.path.join(ENDF_PROGRAMS,"PLOT.SYM"),"PLOT.SYM")
    shutil.copyfile(os.path.join(ENDF_PROGRAMS,"MT.DAT"),"MT.DAT")
    with open("EVALPLOT.INP","w") as fid:
        fid.write(f"""\
        0.0       12.5        0.0        2.0          1          1 1.5
{infile}
          0          0          0          0          0 1.00000-08   1
     1 3  1            99999 3999                     1          0

=== This and the below lines are NOT read as input, so you can store ===
=== anything you want below. Here I have defined how the input data  ===
=== is interpreted = so you know what each input field means.        ===
------------------------------------------------------------------------
 Description of Plotter and Plots per Frame
 -----------------------------------------------------------------------
 X Dimensions (X-Min to X-Max)-----------------     0.0000 to     13.500
 Y Dimensions (Y-Min to Y-Max)-----------------     0.0000 to     10.000
 Layout of Plots per Frame (X by Y)------------          1 by 1
 Character Size Multiplier---------------------       1.50
 -----------------------------------------------------------------------
 ENDF/B Data Filename
------------------------------------------------------------------------
 EVALPLOT.IN
 -----------------------------------------------------------------------
 -----------------------------------------------------------------------
 Input Parameters
 -----------------------------------------------------------------------
 Retrieval Criteria----------------------------        MAT
 Grid Type-------------------------------------Tick Marks
 Should Border be Plotted on Each Plot---------         No
 Line Thickness--------------------------------          0
 Cross Section Temperature on Plots------------        Yes
 Mimimum Ratio of Y Min to Max Range of Plot--- 1.00000-08
 On Screen Background Color--------------------White
 -----------------------------------------------------------------------
 Request Ranges
 -----------------------------------------------------------------------
         Mimimum                      Maximum
    MAT MF  MT Energy-eV         MAT MF  MT Energy-eV    Type
 -----------------------------------------------------------------------
      1  3   1 0.00000+ 0      99999  3 999 0.00000+ 0      0
 -----------------------------------------------------------------------
""")

    _run("evalplot",["EVALPLOT.INP","EVALPLOT.LST","PLOT.CHR","PLOT.SYM","MT.DAT"])

def endf_read1d(head, fid):
    # skip two tab records
    line1 = fid.readline()
    line2 = fid.readline()
    num_pairs = int(line1[55:66])

    pairs = []
    while fid:
        line = fid.readline()
        #print line[:-1]
        col = [line[0:11], line[11:22], line[22:33],
                line[33:44], line[44:55], line[55:66]]
        if num_pairs >= 3:
            pairs.extend([(float(col[0]),float(col[1])),
                          (float(col[2]),float(col[3])),
                          (float(col[4]),float(col[5]))])
            num_pairs -= 3
            if num_pairs == 0: break
        elif num_pairs == 2:
            pairs.extend([(float(col[0]),float(col[1])),
                          (float(col[2]),float(col[3]))])
            break
        elif num_pairs == 1:
            pairs.extend([(float(col[0]),float(col[1]))])
            break
    line = fid.readline() # skip the "SEND" record
    return [np.array(v) for v in zip(*pairs)]

def endf_load(infile, columns):
    result = {}
    with open(infile, "r") as fid:
        while True:
            line = fid.readline()
            if line == "": break
            # TODO: if asking for 101, then add 102 through 117
            #ns = int(line[75:80])) # sequence number
            if line[70:75] in columns:
                mat = int(line[66:70]) #material code
                mf = int(line[70:72])
                mt = int(line[72:75])
                result[(mat,mf,mt)] = endf_read1d(line, fid)
    return result

def select(x,y,lo,hi):
    idx = (x>=lo)&(x<=hi)
    #print "selected",x[idx]
    return x[idx],y[idx]

def xs_table(infile, columns):
    """
    Extract the linear interpolation table for an MF=3
    cross section into a file.
    """
    items = [f" 3{c:3d}" for c in columns]
    data = endf_load(infile, items)
    data = dict((k[2],v) for k,v in data.items())
    if not data: return None
    #print infile,[v[0].shape for v in data.values()]
    x = np.unique(np.hstack(tuple(v[0] for v in data.values())))
    #print "x",x
    ypairs = [(data[c] if c in data and len(data[c][0])>0 else ((x.min(),x.max()),(NaN, NaN)))
              for c in columns]
    table = np.array([x] + [np.interp(x, v[0],v[1]) for v in ypairs])
    return table

def save_table(outfile, table, range=None):
    if range:
        x = table[0,:]
        idx = (x>=range[0])&(x<=range[1])
        table = table[:,idx]
    np.savetxt(outfile, table.T)

def expand_zip(infile):
    archive = zipfile.ZipFile(infile)
    members = archive.infolist()
    if len(members) != 1:
        archive.close()
        raise RuntimeError(f"Too many entries in '{infile}'")
    archive.extract(members[0])
    archive.close()
    return members[0].filename

# red   green   yellow   blue   magenta  cyan  gray
colors = ["#"+c for c in """
ff0000  00ff00  e4e400  b0b0ff  ff00ff  00ffff  b0b0b0
b00000  00b000  baba00  8484ff  b000b0  00b0b0  848484
870000  008700  878700  4949ff  870087  008787  494949
550000  005500  545400  0000ff  550055  005555  000000
""".split()]
del colors[7:21]  # remove second & third row
del colors[7:] # remove fourth row
del colors[6::7]  # remove gray
lines = ["-","--","-.",":"]

# Line positions Angstroms to eV
L0p1  =8180.420*1e-3
L0p2  =2045.105*1e-3
L0p5  =327.2168*1e-3
V2200 =25.29886*1e-3
L5    =3.272168*1e-3
L6    =2.272339*1e-3
L15   =0.3635742*1e-3
L20   =0.2045105*1e-3

FIGURES = [] # [fig, ...]
LINENUM = -1 # int
ISO_COLOR = {} # {f: fig}
def iso_color(f):
    import matplotlib.pyplot as plt
    global LINENUM
    if f not in ISO_COLOR:
        first = LINENUM < 0
        LINENUM += 1
        if LINENUM >= len(colors):
            showplot(show=False)
            LINENUM = 0
        if LINENUM == 0:
            if not first: FIGURES.append(plt.gcf())
            plt.figure(figsize=(18,3), tight_layout={'pad':0})
            plt.subplot2grid((1,5),(0,0),colspan=4)
            #pylab.figure(figsize=(8,2.3), tight_layout={'pad':0})
            #pylab.subplot2grid((1,3),(0,0),colspan=2)
        ISO_COLOR[f] = colors[LINENUM]
    return ISO_COLOR[f]

_first_row = True
def pyplot(f, table, columns, resonance):
    import matplotlib.pyplot as plt
    first = LINENUM < 0

    #print "shape",table.shape
    name = os.path.splitext(os.path.basename(f))[0]
    if '-' in name: name = "-".join(name.split('-')[1:])
    label=name
    p = abundance(f)
    if p: label += " %.1f%%"%p
    #label += " res: %.2fA"%wavelength(resonance)
    x = table[0, :]
    index = slice(None) # all energy
    #index = x < 1 # thermal energy plus some epithermal
    for k, ck in enumerate(columns):
        y = table[k+1, :]
        capture_abundance = abundance(f, ck)
        if not (y[index] > 1e-9).any(): continue  # Skip empty cross sections
        #if capture_abundance > 0: continue # Skip stable daughter products
        plt.loglog(
            x, y,
            label=f"{label} {ENDF_LABELS[ck]}",
            linestyle=lines[k%len(lines)],
            color=iso_color(f),
        )
        # label='_nolegend_'

    # Table of relative total cross section
    global _first_row
    if False:
      if _first_row:
        print(" "*(8*table.shape[0])+"%7s %7s %7s %7s"%("0.5A","6A","15A","20A"))
      TARGET=V2200
      y0 = [np.interp(TARGET,table[0,:],table[i,:])
          for i in range(1,table.shape[0])]
      b_c = np.sqrt(y0[0]/(0.01*4*np.pi))
      b_cL = np.sqrt(np.interp([L0p1,L0p2,L0p5,L6,L15,L20],table[0,:],table[1,:])/(0.01*4*np.pi))
      delta = (b_cL-b_c)/b_c*100
      #y0[0] = np.sqrt(y0[0]/(4*np.pi))
      print("%7s"%name," ".join("%7.3f"%vi for vi in y0)," ".join("%6.1f%%"%vi for vi in delta))
    else:
        if _first_row:
            print("%7s %7s %15s"%("name","%","res. onset Ang/meV"))
        print("%7s %7s %7.2f %9.2f"%(
            name, ("%.3f"%p if p else "-"),
            wavelength(resonance), resonance*1e3))
    _first_row = False

def wavelength(eV):
    return np.sqrt(81.80420235572412/(eV*1e3))

def showplot(show=True):
    import pylab
    from matplotlib import transforms as mtransforms
    pylab.grid(True)
    # Axis limits, or none for auto range
    #pylab.axis([5e0,20e3,1e-1,9e3]) # For resonances.html
    #pylab.axis([1e-2,10e3,1e-1,5e3])
    #pylab.axis([1e1,1e8,1e-6,1e2]) # For epithermal
    #pylab.axis([5e0,1e8,1e-1,9e3]) # For full range
    pylab.title('Elastic scattering from ENDF/B-VII.1 nuclear database')
    pylab.xlabel('Energy (eV)')
    #pylab.gca().set_xticklabels([])
    pylab.ylabel('Cross section (barns)')
    #pylab.xscale('linear')
    #pylab.yscale('linear')
    pylab.legend(bbox_to_anchor=(1.05, 1), loc=2, borderaxespad=0.)
    ax = pylab.gca()
    trans = mtransforms.blended_transform_factory(
        ax.transData, ax.transAxes)
    for E,L in (L20,20),(L6,6),(V2200,1.78),(L0p5,0.5),(L0p1,0.1):
    #for E,L in (V2200,1.78),(L0p5,0.5),(L0p1,0.1):
    #if False:
        pylab.axvline(E)
        pylab.text(E,0.05,'%g A'%L,transform=trans)
    if show:
        FIGURES.append(pylab.gcf())
        #for i,h in enumerate(FIGURES): h.savefig('figure_%d.png'%(i+1))
        pylab.show()

def run(infile, outfile=None):
    global KEEP_INTERMEDIATES
    #KEEP_INTERMEDIATES=True
    out,step = infile, 1
    if '.' not in infile: # isotope
        if not outfile: outfile = infile+".dat"
        pattern = os.path.join(ENDF_DATA, f"*-{infile}.zip")
        match = list(glob.glob(pattern))
        if len(match) != 1:
            raise RuntimeError(f"'{infile}' is not an isotope")
        infile = match[0]
    if infile.endswith('.zip'):
        out = "STEP-0.OUT"
        zipname = expand_zip(infile)
        os.rename(zipname,out)
    out,step = linear(out, step)  # must be first
    out,step = recent(out, step)  # add resonances
    out,step = sigma1(out, step, 293.16) # set temperature to 20 C
    out,step = activate(out, step)
    #out,step = legend(out, step)
    #out,step = sixpak(out, step)
    #out,step = spectra(out, step)
    out,step = fixup(out, step)
    out,step = dictin(out, step)
    if outfile is None:
        outfile = os.path.splitext(os.path.basename(infile))[0]+".out"
    os.rename(out,outfile)
    if os.path.exists("STEP-0.OUT"): os.unlink("STEP-0.OUT")
    if os.path.exists("STEP-1.OUT"): os.unlink("STEP-1.OUT")
    return outfile

def first_resonance(table):
    # 20 A => 0.2 meV; 0.1 A => 8180 meV
    # Arcs: 1500, Sequoia: 2000, Vision: 1000, Powgen, Nomad: 8180
    slope = np.diff(table[1,:])/np.diff(table[0,:])
    #import pylab
    #pylab.semilogx(table[0,lo:hi-1],slope,table[0,lo:hi-2],np.diff(slope))
    #pylab.figure()
    #print slope.max(),slope.min(),np.diff(slope).max(),np.diff(slope).min()
    #print "f'",slope[slope>0.1]
    #print "f''",np.diff(slope)[np.diff(slope)<-0.1]
    up = np.where(slope>0.2)[0]
    down = np.where(np.diff(slope)<-0.2)[0]
    if len(up) == 0 and len(down) == 0:
        return table[0,-1]
    elif len(up) == 0:
        return table[0,down[0]]
    elif len(down) == 0:
        return table[0,up[0]]
    else:
        return table[0,min(up[0],down[0])]

def abundance(filename, xs=-1):
    """
    Return abundance of element given in endf output file, for example
    'n_6152_61-Pm-148.out'. If xs is given, then return the abundance
    of the element after neutron capture. For example, xs=102 is for n,g
    neutron capture. See ENDF_COLUMNS for the cross section numbers.
    """
    try:
        import periodictable as pt
    except:
        warnings.warn(f"periodictable not available so no abundance values")
        return 1

    # Parse filename into element,isotope
    # n_6152_61-Pm-148.out
    # n_6153_61-Pm-148M.out  # nuclear isomer
    try:
        _, el, iso = filename.split('.')[0].split('-')
        z = pt.elements.symbol(el).number
        n = int(iso.rstrip('M')) - z
    except Exception:
        raise RuntimeError(f"Could not parse '{f}' as 'id-El-###.ext'")
    if iso.endswith('M'):
        return 0 # nuclear isomers have no natural abundance (?)
    # Get change in proton and neutron count for the daughter product of the
    # capture, or (0,0) for parent if not looking at a capture cross section.
    dp, dn = ENDF_DELTA.get(xs, (0,0))
    try:
        daughter = pt.elements[z + dp][z + dp + n + dn]
        #if dp or dn:
        #    parent = pt.elements[z][z + n]
        #    print(f"{parent} {ENDF_LABELS[xs]} -> {daughter} [{daughter.abundance*100:.1f}%]")
        return daughter.abundance
    except KeyError:
        return 0

if __name__ == "__main__":
    import sys
    if sys.argv[1] == "--plot":
        # plot using endf program
        #KEEP_INTERMEDIATES = True
        for f in sys.argv[2:]:
            evalplot(f)
    elif sys.argv[1] in ("--table", "--pyplot"):
        # plot using matplotlib
        for f in sys.argv[2:]:
            if '*' in f or "-O-" in f:
                print(f"no data for {f}")
                continue
            #if abundance(f) < 0.1: continue # only common isotopes
            #if abundance(f) <= 0: continue # For resonances.html, only naturally occurring isotopes
            #columns = [1,2,3,4,102,103,104,105,106,107]
            #columns = [1,2,102,107] # total coh act n,a
            #columns = [1] # total cross section
            columns = [2] # For resonances.html, show elastic cross sections
            #columns = [102] # act
            #columns = [107] # n,a
            #columns = [16, 102, 103, 107] # n,2n act n,p n,a
            table = xs_table(f, columns)
            #save_table(os.path.splitext(f)[0]+".tab", table, range=(1e0,1e2))
            if table is not None and sys.argv[1] == "--pyplot":
                #print f
                res = first_resonance(table)
                if res > L0p1: continue # For resonances.html, only consider thermal resonances
                pyplot(f,table,columns,res)
        if sys.argv[1] == "--pyplot":
            showplot()
    else:
        # convert endf data to plottable columns
        for f in sys.argv[1:]:
            run(f)

