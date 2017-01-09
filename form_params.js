var http = require("http"),// indico que es un tipo http
    fs = require("fs");
    parser = require("./params_parse.js");// importamos el scrips
    render = require("./render_view.js");
    var p = parser.parse;// declaramos una variables con la funcion parse
    var render = render.render;

    http.createServer(function(req,res) {
      // buscamos si hay alguna incidencia con la palabra favicon
      if(req.url.indexOf("favicon.ico") > 0){
        return;// para que no siga con el resto del codigo
      }

     fs.readFile("./index.html",function (err,html) {
       var html_string = html.toString();// convertimos el html en cadena
       var parametros = p(req);// llamamos la funcion que creamos
       res.writeHead(200,{"Content-Type":"text/html"});// se agrega encabzados JSON
       res.write(render(html_string,parametros));
       res.end();
     });// version asincrona para leer datos
     }).listen(8080);
