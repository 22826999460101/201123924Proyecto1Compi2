
// atributos
ValorBasico.prototype.tipo;
ValorBasico.prototype.valor;
ValorBasico.prototype.hashCode;
// linea y columna
ValorBasico.prototype.linea;
ValorBasico.prototype.columna;

function ValorBasico(tipo,valor){
  this.tipo = tipo;
  this.valor = valor;
  this.hashCode = obtenerHash();
}

ValorBasico.prototype.ejecutarExpresion = function (valorIzquierdo) {
  return this.valor;
}

ValorBasico.prototype.getTipo = function (tipoIzquierdo) {
  return this.tipo;
}

ValorBasico.prototype.graficarAST = function () {
  var graphivz = " ";
      graphivz += "nodo_"+this.hashCode+ "[label= \""+this.tipo;
      graphivz += " : "+this.valor;
      graphivz += "\"];\n";
  return graphivz;
}

ValorBasico.prototype.setLineaColumna = function(linea, columna){
  this.linea = linea;
  this.columna = columna;
}
