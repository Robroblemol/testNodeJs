function parse(req) {
  var array_params = [];
  var parametros = {} // hash con parametros

  // buscamos ? quiere decir que no estan enviado parametros
  if (req.url.indexOf("?") > 0){
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
  return parametros
}
module.exports.parse = parse;// indicamos que lo que valos a compartir es la funcion parse
