Interprete.prototype.entrada;
Interprete.prototype.ast;

function Interprete(entrada){
  this.entrada = entrada;
}

Interprete.prototype.parser = function (){
  this.ast = gramatica.parse(this.entrada);
}

Interprete.prototype.ejecutar = function (){
  return this.ast.ejecutarExpresiones();
}
