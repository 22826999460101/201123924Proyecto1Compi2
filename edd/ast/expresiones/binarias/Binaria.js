
// atributos
Binaria.prototype.expresionPrima;
Binaria.prototype.expresionDerecha;
Binaria.prototype.hashCode;
// linea y columna
Binaria.prototype.linea;
Binaria.prototype.columna;

function Binaria(expresionPrima,expresionDerecha){
  this.expresionPrima = expresionPrima;
  this.expresionDerecha   = expresionDerecha;
  this.hashCode = obtenerHash();
}

Binaria.prototype.graficarHijos = function(){
  var graphivz = " ";

  graphivz += this.expresionDerecha.graficarAST() ;
  graphivz += this.expresionPrima ? this.expresionPrima.graficarAST() : '';
  graphivz += "nodo_"+this.hashCode +"--nodo_"+this.expresionDerecha.hashCode+";\n" ;
  graphivz += this.expresionPrima ? "nodo_"+this.hashCode +"--nodo_"+this.expresionPrima.hashCode+";\n" : '';

  return graphivz;
}

Binaria.prototype.setLineaColumna = function(linea, columna){
  this.linea = linea;
  this.columna = columna;
}
