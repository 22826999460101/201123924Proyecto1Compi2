
// atributos
MenorIgual.prototype.expresionDerecha;
MenorIgual.prototype.tipo;
MenorIgual.prototype.hashCode;

// linea y columna
MenorIgual.prototype.linea;
MenorIgual.prototype.columna;

function MenorIgual(expresionDerecha){
  this.expresionDerecha   = expresionDerecha;
  this.hashCode = obtenerHash();
}

MenorIgual.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = valorIzquierdo <= this.expresionDerecha.ejecutarExpresion(null);

  return valorEjecucion;
}

MenorIgual.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);
  this.tipo = tipoIzquierda > tipoDerecha ? tipoIzquierda : tipoDerecha;
  //Todo: validar que no vaya un tipo error en el hijo izquierdo o derecho
  return this.tipo;
}

MenorIgual.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" MenorIgual";
  graphivz += "\"];\n";
  graphivz += MenorIgual.prototype.graficarHijos();
  return graphivz;
}

MenorIgual.prototype.graficarHijos   = Relacional.prototype.graficarHijos;
MenorIgual.prototype.setLineaColumna = Expresion.prototype.setLineaColumna;
