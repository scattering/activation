#!/usr/bin/env python

import cgi
import re
import json
from math import exp
import sys
import traceback

from periodictable import elements, activation, formula, neutron_scattering, xray_sld, nsf, util, xsf

#DEBUG=True
DEBUG=False

#import nsf_sears


# Crystal structures:
#
# cubic:         a = b = c and alpha = beta = gamma = 90.0 degrees.
# tetragonal:    a = b and alpha = beta = gamma = 90.0 degrees.
# orthorhombic:  alpha = beta = gamma = 90.0 degrees.
# monoclinic:    alpha = gamma = 90.0 degrees.
# triclinic:     no restrictions on a, b, c, alpha, beta or gamma.
# hexagonal:     a = b,  alpha = beta = 90.0 degrees and gamma = 120.0
# rhombohedral:  a = b = c ; alpha=beta=gamma<120  (trigonal)
# octahedral:    a = b = c, alpha = beta = gamma = 109.4712206344907
# RHDO (Rhombic Dodecahedron):
#                a = b = c, alpha = gamma = 60.0 and beta = 90.0
#
# Density:
#   a:value  => cubic
#   a:value c:value => tetragonal
#   a:value b:value c:value => orthorhombic
#   a:value b:value c:value beta:value => monoclinic
#   a:value b:value c:value alpha:value beta:value gamma:value => triclinic
#   a:value c:value gamma:value => hexagonal
#   a:value alpha:value => rhomboherdral (triagonal)
#   a:value alpha:acos(-1/3) => octahedral
#
#   a:value => a=b=c=value
#   alpha:value => alpha=beta=gamma=value
#   beta:value => alpha=gamma=90
# 

def parse_density(value_str):
    if value_str == '':
        return 'default', 0
    if value_str.endswith('A3'):
        return 'volume', float(value_str[:-2])*1e-24
    if value_str.endswith('i'):
        return 'isotope', float(value_str[:-1])
    try:
        value = float(value_str)
        return ('natural', value) if value > 0 else ('default',0)
    except ValueError:
        pass

    # Be generous, and allow a: a= or just a, and commas or semicolons between parts
    # This will allow poor grammar such as "a,1 : c,2"
    parts = re.split(" *[,;=: ] *", value_str.strip())
    #print >>sys.stderr,parts
    key = [v.lower() for v in parts[::2]]
    try:
        val = [float(v) for v in parts[1::2]]
    except ValueError:
        raise ValueError("Expected key value pairs for lattice consants")  
    if len(key) != len(val):
        raise ValueError("Expected key value pairs for lattice consants")  
    if any(k not in set(('a','b','c','b/a','c/a','alpha','beta','gamma'))
           for k in key):
        raise ValueError("Lattice contants are a, b or b/a, c or c/a, alpha, beta, gamma")
    kw = dict(zip(key,val))
    
    if 'b/a' in kw:
        if 'a' not in kw: raise ValueError("Lattice constant b/a requires a value for a")
        kw['b'] = kw['b/a']*kw['a']
        del kw['b/a']
    if 'c/a' in kw:
        if 'a' not in kw: raise ValueError("Lattice constant c/a requires a value for a")
        kw['c'] = kw['c/a']*kw['a']
        del kw['c/a']
    if 'alpha' in kw:
        if not 'beta' in kw: kw['beta'] = kw['alpha']
        if not 'gamma' in kw: kw['gamma'] = kw['alpha']
    #print >>sys.stderr,kw
    return 'volume', util.cell_volume(**kw)*1e-24

def json_response(result):
    jsonstr = json.dumps(result)
    #print >>sys.stderr, jsonstr #, result
    print "Content-Type: application/json; charset=UTF-8"
    print "Access-Control-Allow-Origin: *"
    print "Content-Length: %d"%(len(jsonstr)+1)
    print
    print jsonstr
respond = json_response

def error():
    if DEBUG:
        return traceback.format_exc()
    else:
        return str(sys.exc_info()[1])
    
HOUR_SCALE = {
    'h': 1,
    'm': 1./60,
    's': 1./3600,
    'd': 24,
    'w': 24*7,
    'y': 365.2425*24,
}

def parse_hours(s):
    try:
        s = s.strip()
        if s[-1] in 'hmsdwy':
            value,units = float(s[:-1]),s[-1]
        else:
            value,units = float(s),'h'
        return value*HOUR_SCALE[units] 
    except:
        raise ValueError("expected time as value and units (h,m,s,d,w,y)")

def cgi_call():
    form = cgi.FieldStorage()
    #print >>sys.stderr, form
    #print >>sys.stderr, "sample",form.getfirst('sample')
    
    # Parse inputs
    errors = {};
    calculate = form.getfirst('calculate','all')
    if calculate not in ('scattering','activation','all'):
        errors['calculate'] = "calculate should be one of 'scattering', 'activation' or 'all'"
    try: chem = formula(form.getfirst('sample'))
    except: errors['sample'] = error()
    try: fluence = float(form.getfirst('flux',100000))
    except: errors['flux'] = error()
    try: fast_ratio = float(form.getfirst('fast','0'))
    except: errors['fast'] = error()
    try: Cd_ratio = float(form.getfirst('Cd','0'))
    except: errors['Cd'] = error()
    try: exposure = parse_hours(form.getfirst('exposure','1'))
    except: errors['exposure'] = error()
    try: 
        mass_str = form.getfirst('mass','1')
        if mass_str.endswith('kg'):
           mass = 1000*float(mass_str[:-2])
        elif mass_str.endswith('mg'):
           mass = 0.001*float(mass_str[:-2])
        elif mass_str.endswith('ug'):
           mass = 1e-6*float(mass_str[:-2])
        elif mass_str.endswith('g'):
           mass = 1e-6*float(mass_str[:-1])
        else:
           mass = float(mass_str)
    except: errors['mass'] = error()
    try: density_type,density_value = parse_density(form.getfirst('density','0'))
    except: errors['density'] = error()
    try: 
        #print >>sys.stderr,form.getlist('rest[]')
        rest_times = [parse_hours(v) for v in form.getlist('rest[]')]
        if not rest_times: rest_times = [0,1,24,360]
    except: errors['rest'] = error()
    try: decay_level = float(form.getfirst('decay','0.001'))
    except: errors['decay'] = error()
    try: thickness = float(form.getfirst('thickness', '1'))
    except: errors['thickness'] = error()
    try:
        wavelength_str = form.getfirst('wavelength','1').strip()
        if wavelength_str.endswith('meV'):
             wavelength = nsf.neutron_wavelength(float(wavelength_str[:-3]))
        elif wavelength_str.endswith('m/s'):
             wavelength = nsf.neutron_wavelength_from_velocity(float(wavelength_str[:-3]))
        elif wavelength_str.endswith('Ang'):
             wavelength = float(wavelength_str[:-3])
        else:
             wavelength = float(wavelength_str)
        #print >>sys.stderr,wavelength_str
    except: errors['wavelength'] = error()
    try:
        xray_source = form.getfirst('xray','Cu Ka').strip()
        if xray_source.endswith('Ka'):
            xray_wavelength = elements.symbol(xray_source[:-2].strip()).K_alpha
        elif xray_source.endswith('keV'):
            xray_wavelength = xsf.xray_wavelength(float(xray_source[:-3]))
        elif xray_source.endswith('Ang'):
            xray_wavelength = float(xray_source[:-3])
        elif xray_source[0].isalpha():
            xray_wavelength = elements.symbol(xray_source).K_alpha
        else:
            xray_wavelength = float(xray_source)
        #print >>sys.stderr,"xray",xray_source,xray_wavelength
    except: errors['xray'] = error()
    try:
        abundance_source = form.getfirst('abundance','IAEA')
        if abundance_source == "NIST":
            abundance = activation.NIST2001_isotopic_abundance
        elif abundance_source == "IAEA":
            abundance = activation.IAEA1987_isotopic_abundance
        else:
            raise ValueError("abundance should be NIST or IAEA")
    except: errors['abundance'] = error()
        

    if errors: return {'success':False, 'error':'invalid request', 'detail':errors}

    # Fill in defaults
    #print >>sys.stderr,density_type,density_value,chem.density
    if density_type == 'default' or density_value == 0:
        # default to a density of 1
        if chem.density is None: chem.density = 1
    elif density_type == 'volume':
        chem.density = chem.molecular_mass/density_value
    elif density_type == 'natural':
        # if density is given, assume it is for natural abundance
        chem.natural_density = density_value
    elif density_type == 'isotope':
        chem.density = density_value
    else:
        raise ValueError("unknown density type %r"%density_type)

    result = {'success': True}
    result['sample'] = {
            'formula': str(chem),
            'mass': mass,
            'density': chem.density,
            'thickness': thickness,
            'natural_density': chem.natural_density,
        }
        
    # Run calculations
    if calculate in ('activation', 'all'):
      try:
        env = activation.ActivationEnvironment(fluence=fluence,fast_ratio=fast_ratio, Cd_ratio=Cd_ratio)
        sample = activation.Sample(chem, mass=mass)
        sample.calculate_activation(env,exposure=exposure,rest_times=rest_times,abundance=abundance)
        decay_time = sample.decay_time(decay_level)
        total = [0]*len(sample.rest_times)
        rows = []
        for el,activity_el in activation.sorted_activity(sample.activity.items()):
            total = [t+a for t,a in zip(total,activity_el)]
            rows.append({'isotope':el.isotope,'reaction':el.reaction,'product':el.daughter,
                         'halflife':el.Thalf_str,'comments':el.comments,'levels':activity_el})
        result['activation'] = {
            'flux': fluence,
            'fast': fast_ratio,
            'Cd': Cd_ratio,
            'exposure': exposure,
            'rest': rest_times,
            'activity': rows, 
            'total': total,
            'decay_level': decay_level,
            'decay_time': decay_time,
        }
        #print >>sys.stderr,result
      except:
        result['activation'] = {"error": error()}
        
    #nsf_sears.replace_neutron_data()
    if calculate in ('scattering', 'all'):
      try: 
        sld,xs,penetration = neutron_scattering(chem, wavelength=wavelength)
        result['scattering'] = {
            'neutron': {
                'wavelength': wavelength,
                'energy': nsf.neutron_energy(wavelength),
                'velocity': nsf.VELOCITY_FACTOR/wavelength,
            },
            'xs': {'coh': xs[0], 'abs': xs[1], 'incoh': xs[2]},
            'sld': {'real': sld[0], 'imag': sld[1], 'incoh': sld[2]},
            'penetration': penetration,
            'transmission': 100*exp(-thickness/penetration),
        }
        
      except:
        missing = [str(el) for el in chem.atoms if not el.neutron.has_sld()]
        if any(missing):
            msg = "missing neutron cross sections for "+", ".join(missing)
        else:
            msg = error()
        result['scattering'] = {'error': msg }


      try: 
        xsld = xray_sld(chem, wavelength=xray_wavelength) 
        result['xray_scattering'] = {
            'xray': {
                'wavelength': xray_wavelength,
                'energy': xsf.xray_energy(xray_wavelength),
            },
            'sld': {'real': xsld[0], 'imag': xsld[1]},
        }
      except: 
        result['xray_scattering'] = {'error': error()}

    return result


if __name__ == "__main__":
    try: response = cgi_call()
    except: response = {
        'success':False, 
        'error': 'unexpected exception', 
        'detail':{'query': error()},
    }
    respond(response)
