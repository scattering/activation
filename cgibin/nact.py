#!/usr/bin/env python

import cgi
import json
from math import exp
from periodictable import elements, activation, formula, neutron_scattering, xray_sld, nsf
import sys

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
    try: chem = formula(form.getfirst('sample'))
    except Exception, exc: errors['sample'] = str(exc)
    try: fluence = float(form.getfirst('flux',100000))
    except Exception, exc: errors['flux'] = str(exc)
    try: fast_ratio = float(form.getfirst('fast','0'))
    except Exception, exc: errors['fast'] = str(exc)
    try: Cd_ratio = float(form.getfirst('Cd','0'))
    except Exception, exc: errors['Cd'] = str(exc)
    try: exposure = float(form.getfirst('exposure','1'))
    except Exception, exc: errors['exposure'] = str(exc)
    try: mass = float(form.getfirst('mass','1'))
    except Exception, exc: errors['mass'] = str(exc)
    try: density = float(form.getfirst('density','0'))
    except Exception, exc: errors['density'] = str(exc)
    try: 
        rest_times = [float(v) for v in form.getlist('rest[]')]
        if not rest_times: rest_times = [0,1,24,360]
    except Exception, exc: errors['rest'] = str(exc)
    try: thickness = float(form.getfirst('thickness', '1'))
    except Exception, exc: errors['thickness'] = str(exc)
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
    except Exception, exc: errors['wavelength'] = str(exc)
    try:
        xray_source = form.getfirst('xray','Cu')
        try:
            xray_wavelength = elements.symbol(xray_source).K_alpha
        except ValueError:
            xray_wavelength = float(xray_source)
    except Exception, exc: errors['xray'] = str(exc)
    try:
        abundance_source = form.getfirst('abundance','NIST')
        if abundance_source == "NIST":
            abundance = activation.NIST2001_isotopic_abundance
        elif abundance_source == "IAEA":
            abundance = activation.IAEA1987_isotopic_abundance
        else:
            raise ValueError("abundance should be NIST or IAEA")
    except Exception, exc: errors['abundance'] = str(exc)
        

    if errors: return {'success':False, 'error':'invalid request', 'detail':errors}

    # Fill in defaults
    if density == 0:
        # default to a density of 1
        if chem.density is None: chem.density = 1
    else:
        # if density is given, assume it is for natural abundance
        chem.natural_density = density

    # Run calculations
    try:
        env = activation.ActivationEnvironment(fluence=fluence,fast_ratio=fast_ratio, Cd_ratio=Cd_ratio)
        sample = activation.Sample(chem, mass=mass)
        sample.calculate_activation(env,exposure=exposure,rest_times=rest_times,abundance=abundance)
        total = [0]*len(sample.rest_times)
        rows = []
        for el,activity_el in activation._sorted_activity(sample.activity.items()):
            total = [t+a for t,a in zip(total,activity_el)]
            rows.append([el.isotope,el.daughter,el.reaction,el.Thalf_str]+activity_el)
    except Exception, exc: errors['activation'] = str(exc)

    try: sld,xs,penetration = neutron_scattering(chem, wavelength=wavelength)
    except Exception, exc: errors['scattering'] = str(exc)

    try: xsld = xray_sld(chem, wavelength=wavelength) 
    except Exception, exc: errors['xray scattering'] = str(exc)

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
        },
        'scattering': {
           'wavelength': wavelength,
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
