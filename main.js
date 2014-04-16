var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function (req, res) {
  console.log("Remote Request!");
  req.headers.host = "localhost:19455";
  proxy.web(req, res, { target: "http://127.0.0.1:19455" });
});

server.listen(19454);
