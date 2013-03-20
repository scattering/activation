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
server_address = ("", 8000)
handler.cgi_directories = ["/cgi-bin"]
 
httpd = server(server_address, handler)
httpd.serve_forever()

