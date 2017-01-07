var http = require("http"),// indico que es un tipo http
    fs = require("fs");

var html = fs.readFileSync("./index.html");

http.createServer(function(req,res) {
  res.write(html);
  res.end();
}).listen(8080);
