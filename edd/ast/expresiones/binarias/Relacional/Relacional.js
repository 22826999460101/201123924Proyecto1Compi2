
// atributos
Relacional.prototype.expresionDerecha;
Relacional.prototype.hashCode;

function Relacional(expresionDerecha){
  this.expresionDerecha   = expresionDerecha;
  this.hashCode = obtenerHash();
}

Relacional.prototype.graficarHijos = function(){
  var graphivz = " ";

  graphivz += this.expresionDerecha.graficarAST() ;
  graphivz += "nodo_"+this.hashCode +"--nodo_"+this.expresionDerecha.hashCode+";\n" ;

  return graphivz;
}
