#!/usr/bin/env python3
# - *- coding: utf- 8 - *-

import cgi
import traceback
import sys
import json
from html import escape

from periodictable import formula

DEBUG = False

def error():
    if DEBUG:
        return traceback.format_exc()
    else:
        return str(sys.exc_info()[1])

def respond(result):
    jsonstr = json.dumps(result)
    # Cross-site scripting (XSS) defense. There is no reason for the returned
    # JSON strings to include an unescaped "<" character, so if one slips
    # through from malicious inputs or from code in an error traceback it will
    # be sanitized here. Note that this is not true in general; if your web
    # service returns html strings instead of adding markup in the browser,
    # then you will need to sanitize the inputs instead of the outputs.
    jsonstr = escape(jsonstr, quote=False)
    #print(jsonstr, file=sys.stderr)
    print("Content-Type: application/json; charset=UTF-8")
    print("Access-Control-Allow-Origin: *")
    print("Content-Length: %d\n"%(len(jsonstr)+1))
    print(jsonstr)

def cgi_call():
    form = cgi.FieldStorage()
    #print(form, file=sys.stderr)
    #print >>sys.stderr, "sample",form.getfirst('sample')
    #print >>sys.stderr, "mass",form.getfirst('mass')

    # Parse inputs
    errors = {}
    sample = form.getfirst('sample')
    chem = formula(sample)
    mass_fraction = chem.mass_fraction
    mass_fraction = dict([(str(k), v) for k,v in mass_fraction.items()])
    result = {'success': True}
    result['mass_fractions'] = mass_fraction

    return result

if __name__ == "__main__":
    try:
        response = cgi_call()
    except Exception:
        response = {
            'success':False,
            'error': 'unexpected exception',
            'detail':{'query': error()},
        }
    respond(response)