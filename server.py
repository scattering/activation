#!/usr/bin/env python
 
import sys
import os
if sys.version_info[0] >= 3:
    from http.server import HTTPServer, CGIHTTPRequestHandler
    from socketserver import ThreadingMixIn
else:
    from BaseHTTPServer import HTTPServer
    from SocketServer import ThreadingMixIn
    from CGIHTTPServer import CGIHTTPRequestHandler
import cgitb; cgitb.enable()  ## This line enables CGI error reporting
 
class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    allow_reuse_address = True
    request_queue_size = 50

server = ThreadedHTTPServer
handler = CGIHTTPRequestHandler
server_address = ("", 8008)
handler.cgi_directories = ["/cgi-bin"]
 
host,port = server_address
if not host: host = "localhost"
print("serving on http://%s:%d/activation/"%(host,port))
httpd = server(server_address, handler)
httpd.serve_forever()

