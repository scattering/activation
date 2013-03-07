#!/usr/bin/env python

import cgi
import json
from math import exp
import sys
import traceback

from periodictable import elements, activation, formula, neutron_scattering, xray_sld, nsf, util

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
    if ':' in value_str:
        pairs = (vi.split(':') for vi in value_str.split())
        kw = dict((k,float(v)) for k,v in pairs)
        if 'alpha' in kw:
            if not 'beta' in kw: kw['beta'] = kw['alpha']
            if not 'gamma' in kw: kw['gamma'] = kw['alpha']
        return {'volume': util.cell_volume(**kw)*1e-24}
    else:
        return float(value_str)

def json_response(result):
    jsonstr = json.dumps(result)
    #print >>sys.stderr, jsonstr
    print "Content-Type: application/json; charset=UTF-8"
    print "Access-Control-Allow-Origin: *"
    print "Content-Length: %d"%(len(jsonstr)+1)
    print
    print jsonstr
respond = json_response
    
def cgi_call():
    form = cgi.FieldStorage()
    #print >>sys.stderr, form
    
    # Parse inputs
    errors = {};
    def error(name):
        if DEBUG:
            errors[name] = traceback.format_exc()
        else:
            errors[name] = str(sys.exc_info()[1])
    try: chem = formula(form.getfirst('sample'))
    except: error('sample')
    try: fluence = float(form.getfirst('flux',100000))
    except: error('flux')
    try: fast_ratio = float(form.getfirst('fast','0'))
    except: error('fast')
    try: Cd_ratio = float(form.getfirst('Cd','0'))
    except: error('Cd')
    try: exposure = float(form.getfirst('exposure','1'))
    except: error('exposure')
    try: mass = float(form.getfirst('mass','1'))
    except: error('mass')
    try: density = parse_density(form.getfirst('density','0'))
    except: error('density')
    try: 
        rest_times = [float(v) for v in form.getlist('rest[]')]
        if not rest_times: rest_times = [0,1,24,360]
    except: error('rest')
    try: decay_level = float(form.getfirst('activity','0.001'))
    except: error('activity')
    try: thickness = float(form.getfirst('thickness', '1'))
    except: error('thickness')
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
    except: error('wavelength')
    try:
        xray_source = form.getfirst('xray','Cu')
        try:
            xray_wavelength = elements.symbol(xray_source).K_alpha
        except ValueError:
            xray_wavelength = float(xray_source)
    except: error('xray')
    try:
        abundance_source = form.getfirst('abundance','NIST')
        if abundance_source == "NIST":
            abundance = activation.NIST2001_isotopic_abundance
        elif abundance_source == "IAEA":
            abundance = activation.IAEA1987_isotopic_abundance
        else:
            raise ValueError("abundance should be NIST or IAEA")
    except: error('abundance')
        

    if errors: return {'success':False, 'error':'invalid request', 'detail':errors}

    # Fill in defaults
    if density == 0:
        # default to a density of 1
        if chem.density is None: chem.density = 1
    elif type(density) is dict:
        chem.density = chem.molecular_mass/density['volume']
    else:
        # if density is given, assume it is for natural abundance
        chem.natural_density = density

    # Run calculations
    try:
        env = activation.ActivationEnvironment(fluence=fluence,fast_ratio=fast_ratio, Cd_ratio=Cd_ratio)
        sample = activation.Sample(chem, mass=mass)
        sample.calculate_activation(env,exposure=exposure,rest_times=rest_times,abundance=abundance)
        decay_time = sample.decay_time(decay_level)
        total = [0]*len(sample.rest_times)
        rows = []
        for el,activity_el in activation._sorted_activity(sample.activity.items()):
            total = [t+a for t,a in zip(total,activity_el)]
            rows.append([el.isotope,el.reaction,el.daughter,el.Thalf_str]+activity_el)
    except: error('activation')

    #nsf_sears.replace_neutron_data()
    try: sld,xs,penetration = neutron_scattering(chem, wavelength=wavelength)
    except: error('scattering')
    if sld is None:
        missing = (str(el) for el in chem.atoms if not el.neutron.has_sld())
        errors['scattering'] = 'Neutron cross sections unavailable for '+", ".join(missing)

    try: xsld = xray_sld(chem, wavelength=wavelength) 
    except: error('xrayscattering')

    if errors: return {'success':False, 'error':'invalid request', 'detail':errors}

    return { 
        'success': True,
        'sample': {
            'formula': str(chem),
            'mass': mass,
            'density': chem.density,
            'thickness': thickness,
            'natural_density': chem.natural_density
        },
        'activation': {
            'flux': fluence,
            'fast': fast_ratio,
            'Cd': Cd_ratio,
            'exposure': exposure,
            'rest': rest_times,
            'activity': rows, 
            'total': total,
            'decay_level': decay_level,
            'decay_time': decay_time,
        },
        'scattering': {
            'neutron': {
                'wavelength': wavelength,
                'energy': nsf.neutron_energy(wavelength),
                'velocity': nsf.VELOCITY_FACTOR/wavelength,
            },
            'sld': {'real': sld[0], 'imag': sld[1], 'incoh': sld[2]},
            'xs': {'coh': xs[0], 'abs': xs[1], 'incoh': xs[2]},
            'penetration': penetration,
            'transmission': 100*exp(-thickness/penetration),
        },
        'xray_scattering': {
            'wavelength': xray_wavelength,
            'sld': {'real': xsld[0], 'imag': xsld[1]},
        },
    }


if __name__ == "__main__":
    respond(cgi_call())
