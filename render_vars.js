var http = require("http"),// indico que es un tipo http
    fs = require("fs");
    http.createServer(function(req,res) {
     fs.readFile("./index.html",function (err,html) {

       var html_string = html.toString();// convertimos el html en cadena
       var variables = html_string.match(/[^\{\}]+(?=\})/g); // expresion regular?¿?...
       // nos devuelve el arreglo con lo que encontró entre llaves
       // asi que lo iteramos
       for (var i = variables.length-1; i >= 0; i--) {
         var value = eval(variables[i]);//evaluamos el string
         html_string = html_string.replace("{"+variables[0]+"}",value);
       }
       var nombre = "Roberto";// variable a cambiar

       res.writeHead(200,{"Content-Type":"text/html"});// se agrega encabzados JSON
       res.write(html_string);
       res.end();
     });// version asincrona para leer datos
     }).listen(8080);
