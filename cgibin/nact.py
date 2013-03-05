#!/usr/bin/env python

import cgi
import json
from math import exp
import sys
import traceback

from periodictable import elements, activation, formula, neutron_scattering, xray_sld, nsf

DEBUG=True

#import nsf_sears

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
    def capture(name):
        if DEBUG:
            errors[name] = traceback.format_exc()
        else:
            errors[name] = str(sys.exec_info()[1])
    try: chem = formula(form.getfirst('sample'))
    except: capture('sample')
    try: fluence = float(form.getfirst('flux',100000))
    except: capture('flux')
    try: fast_ratio = float(form.getfirst('fast','0'))
    except: capture('fast')
    try: Cd_ratio = float(form.getfirst('Cd','0'))
    except: capture('Cd')
    try: exposure = float(form.getfirst('exposure','1'))
    except: capture('exposure')
    try: mass = float(form.getfirst('mass','1'))
    except: capture('mass')
    try: density = float(form.getfirst('density','0'))
    except: capture('density')
    try: 
        rest_times = [float(v) for v in form.getlist('rest[]')]
        if not rest_times: rest_times = [0,1,24,360]
    except: capture('rest')
    try: decay_level = float(form.getfirst('activity','0.001'))
    except: capture('activity')
    try: thickness = float(form.getfirst('thickness', '1'))
    except: capture('thickness')
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
    except: capture('wavelength')
    try:
        xray_source = form.getfirst('xray','Cu')
        try:
            xray_wavelength = elements.symbol(xray_source).K_alpha
        except ValueError:
            xray_wavelength = float(xray_source)
    except: capture('xray')
    try:
        abundance_source = form.getfirst('abundance','NIST')
        if abundance_source == "NIST":
            abundance = activation.NIST2001_isotopic_abundance
        elif abundance_source == "IAEA":
            abundance = activation.IAEA1987_isotopic_abundance
        else:
            raise ValueError("abundance should be NIST or IAEA")
    except: capture('abundance')
        

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
        decay_time = sample.decay_time(decay_level)
        total = [0]*len(sample.rest_times)
        rows = []
        for el,activity_el in activation._sorted_activity(sample.activity.items()):
            total = [t+a for t,a in zip(total,activity_el)]
            rows.append([el.isotope,el.daughter,el.reaction,el.Thalf_str]+activity_el)
    except: capture('activation')

    #nsf_sears.replace_neutron_data()
    try: sld,xs,penetration = neutron_scattering(chem, wavelength=wavelength)
    except: capture('scattering')
    if sld is None:
        missing = (str(el) for el in chem.atoms if not el.neutron.has_sld())
        errors['scattering'] = 'Neutron cross sections unavailable for '+", ".join(missing)

    try: xsld = xray_sld(chem, wavelength=wavelength) 
    except: capture('xrayscattering')

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
