var http = require("http"),// indico que es un tipo http
    fs = require("fs");
    http.createServer(function(req,res) {
      // buscamos si hay alguna incidencia con la palabra favicon
      if(req.url.indexOf("favicon.ico") > 0){
        return;// para que no siga con el resto del codigo
      }
      //imprimimos solicitud
      console.log("=========\n\n");
      console.log(req);
      console.log("=========\n\n");

     fs.readFile("./index.html",function (err,html) {
       var html_string = html.toString();// convertimos el html en cadena
       var variables = html_string.match(/[^\{\}]+(?=\})/g); // expresion regular?¿?...
       var nombre = ";"
       //if (req.url.indexOf("?"))

       for (var i = variables.length-1; i >= 0; i--) {
         var value = eval(variables[i]);
         html_string = html_string.replace("{"+variables[i]+"}",value);
       }

       res.writeHead(200,{"Content-Type":"text/html"});// se agrega encabzados JSON
       res.write(html_string);
       res.end();
     });// version asincrona para leer datos
     }).listen(8080);
