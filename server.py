#!/usr/bin/env python
 
import os
from BaseHTTPServer import HTTPServer
from SocketServer import ThreadingMixIn
import CGIHTTPServer
import cgitb; cgitb.enable()  ## This line enables CGI error reporting
 
class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    allow_reuse_address = True
    request_queue_size = 50

server = ThreadedHTTPServer
handler = CGIHTTPServer.CGIHTTPRequestHandler
server_address = ("", 8008)
handler.cgi_directories = ["/cgi-bin"]
 
host,port = server_address
if not host: host = "localhost"
print "serving on http://%s:%d/activation/"%(host,port)
httpd = server(server_address, handler)
httpd.serve_forever()

