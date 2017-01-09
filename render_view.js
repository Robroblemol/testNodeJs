function render(html,parametros) {
  var variables = html.match(/[^\{\}]+(?=\})/g); // expresion regular?¿?...
  var nombre = "";

  for (var i = variables.length-1; i >= 0; i--) {
    //var value = eval(variables[i]);
    //[nombre: Nombre]
    var variable = variables[i];
    // parametros[variable]
    //parametros[nombre]
    html= html.replace("{"+variables[i]+"}",parametros[variable]);

  }
  return html;
}
module.exports.render = render;// indicamos que lo que valos a compartir es la funcion parse
