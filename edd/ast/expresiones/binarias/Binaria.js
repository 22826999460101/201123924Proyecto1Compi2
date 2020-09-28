
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

Binaria.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \""+this.tipo;
  graphivz += " : "+this.valor;
  graphivz += "\"];\n";
  return graphivz;
}

Binaria.prototype.graficarAST = function(){
  var cadena = " ";
  cadena += "nodo_"+this.hashCode+ "[label= \""+this.etiqueta;
  //this.valor = this.hashCode + "";
  cadena += " : "+this.valor;
  cadena +="\"];\n";
  cadena += this.cadGrafHijos();
  return cadena;
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
