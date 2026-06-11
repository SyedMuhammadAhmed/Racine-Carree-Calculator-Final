import http.server
import socketserver
import sys

port = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", port), handler) as httpd:
    print(f"Serving at port {port}", flush=True)
    httpd.serve_forever()
