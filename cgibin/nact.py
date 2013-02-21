#!/usr/bin/env python

import cgi
import json
from periodictable import activation, formula
import sys

def json_response(result):
    jsonstr = json.dumps(result)
    #print >>sys.stderr, jsonstr
    print "Content-Type: application/json; charset=UTF-8"
    print "Content-Length: %d"%(len(jsonstr)+1)
    print
    print jsonstr
    

def cgi_call():
    form = cgi.FieldStorage()
    try:
        chem = formula(form.getfirst('sample'))
        fluence = float(form.getfirst('flux',100000))
        fast_ratio = float(form.getfirst('fast','0'))
        Cd_ratio = float(form.getfirst('Cd','0'))
        exposure = float(form.getfirst('exposure','1'))
        mass = float(form.getfirst('mass','1'))
        rest_times = [float(v) for v in form.getfirst('rest','0,1,24,360').split(',')]
    except:
        json_response({'success':False, 'error':'invalid request'})

  
    env = activation.ActivationEnvironment(fluence=fluence,fast_ratio=fast_ratio, Cd_ratio=Cd_ratio)
    sample = activation.Sample(chem, mass=mass)
    sample.calculate_activation(env,exposure=exposure,rest_times=rest_times)

    total = [0]*len(sample.rest_times)
    rows = []
    for el,activity_el in activation._sorted_activity(sample.activity.items()):
        total = [t+a for t,a in zip(total,activity_el)]
        rows.append([el.isotope,el.daughter,el.reaction,el.Thalf_str]+activity_el)

    result = { 
        'success': True,
        'sample': str(chem),
        'mass': mass,
        'flux': fluence,
        'fast': fast_ratio,
        'Cd': Cd_ratio,
        'exposure': exposure,
        'rest': rest_times,
        'activity': rows, 
        'total': total,
    }
    json_response(result)


if __name__ == "__main__":
    cgi_call()
