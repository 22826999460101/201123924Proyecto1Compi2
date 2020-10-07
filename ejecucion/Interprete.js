/*variables globales del compilador*/
var tablaGlobal;


Interprete.prototype.entrada;
Interprete.prototype.ast;

function Interprete(entrada){
  this.entrada = entrada;
  tablaGlobal = new TablaGlobal();
}

Interprete.prototype.parser = function (){
  this.ast = gramatica.parse(this.entrada);
}

Interprete.prototype.ejecutar = function (){
  this.ast.llenarTablaGlobal();

  return this.ast.ejecutarExpresiones(null);
}
