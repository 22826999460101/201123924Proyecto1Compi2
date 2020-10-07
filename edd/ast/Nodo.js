
Nodo.prototype.expresion;
Nodo.prototype.expresionPrima;
Nodo.prototype.tipo;

function Nodo(expresion, expresionPrima){
  this.expresion = expresion;
  this.expresionPrima = expresionPrima;
  this.hashCode = obtenerHash();
}



Nodo.prototype.setLineaColumna = function(linea, columna){
  this.linea = linea;
  this.columna = columna;
}
