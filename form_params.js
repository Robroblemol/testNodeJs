var http = require("http"),// indico que es un tipo http
    fs = require("fs");
    parser =require("./params_parse.js");// importamos el scrips
    var p = parser.parse;// declaramos una variables con la funcion parse
    http.createServer(function(req,res) {
      // buscamos si hay alguna incidencia con la palabra favicon
      if(req.url.indexOf("favicon.ico") > 0){
        return;// para que no siga con el resto del codigo
      }

     fs.readFile("./index.html",function (err,html) {
       var html_string = html.toString();// convertimos el html en cadena
       var variables = html_string.match(/[^\{\}]+(?=\})/g); // expresion regular?¿?...
       var nombre = "";

       var parametros = p(req);// llamamos la funcion que creamos

       for (var i = variables.length-1; i >= 0; i--) {
         //var value = eval(variables[i]);
         //[nombre: Nombre]
         var variable = variables[i];
         // parametros[variable]
         //parametros[nombre]
         html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]);

       }

       res.writeHead(200,{"Content-Type":"text/html"});// se agrega encabzados JSON
       res.write(html_string);
       res.end();
     });// version asincrona para leer datos
     }).listen(8080);
