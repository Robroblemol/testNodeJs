var http = require("http"),// indico que es un tipo http
    fs = require("fs");

//var html = fs.readFileSync("./index.html");// leemos el archivo
http.createServer(function(req,res) {
 fs.readFile("./index.html",function (err,html) {
   res.write(html);
   res.end();
 });// version asincrona para leer datos
 }).listen(8080);

// http.createServer(function(req,res) {
//   res.write(html);
//   res.end();
// }).listen(8080);
