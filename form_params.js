var http = require("http"),// indico que es un tipo http
    fs = require("fs");
    http.createServer(function(req,res) {
      // buscamos si hay alguna incidencia con la palabra favicon
      if(req.url.indexOf("favicon.ico") > 0){
        return;// para que no siga con el resto del codigo
      }
      // //imprimimos solicitud
      // console.log("=========\n\n");
      // console.log(req);
      // console.log("=========\n\n");

     fs.readFile("./index.html",function (err,html) {
       var html_string = html.toString();// convertimos el html en cadena
       var variables = html_string.match(/[^\{\}]+(?=\})/g); // expresion regular?¿?...
       var nombre = ";"
       var array_params = [];
       var parametros = {} // hash con parametros
       // buscamos ? quiere decir que no estan enviado parametros
       if (req.url.indexOf("?") < 0){
         // /?nombre  -> separamos el path que es lo que sea que va despues de /
         var url_data = req.url.split("?");
         // & -> se usa para separar parametros
         var array_params = url_data[1].split("&");
         // obtenemos: [nombre=nombre,data=loquesea]
       }
       for (var i = array_params.length-1; i >=0; i--) {
         var param = array_params[i];
         // nombre= Nombre;
         var param_data = param.split("=");
         //[nombre,Nombre]
         parametros[param_data[0]] = param_data[1];
         //{nombre: Nombre}
       }

       for (var i = variables.length-1; i >= 0; i--) {
         //var value = eval(variables[i]);
         //[nombre: Nombre]
         var variable = variables[i];
         // parametros[variable[i]]
         //parametros[]
         html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]);

       }

       res.writeHead(200,{"Content-Type":"text/html"});// se agrega encabzados JSON
       res.write(html_string);
       res.end();
     });// version asincrona para leer datos
     }).listen(8080);
