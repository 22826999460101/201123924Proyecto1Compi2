
// atributos
MayorIgual.prototype.expresionDerecha;
MayorIgual.prototype.tipo;
MayorIgual.prototype.hashCode;

// linea y columna
MayorIgual.prototype.linea;
MayorIgual.prototype.columna;

function MayorIgual(expresionDerecha){
  this.expresionDerecha   = expresionDerecha;
  this.hashCode = obtenerHash();
}

MayorIgual.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = valorIzquierdo >= this.expresionDerecha.ejecutarExpresion(null);

  return valorEjecucion;
}

MayorIgual.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);
  this.tipo = tipoIzquierda > tipoDerecha ? tipoIzquierda : tipoDerecha;
  //Todo: validar que no vaya un tipo error en el hijo izquierdo o derecho
  return this.tipo;
}

MayorIgual.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" MayorIgual";
  graphivz += "\"];\n";
  graphivz += MayorIgual.prototype.graficarHijos();
  return graphivz;
}

MayorIgual.prototype.graficarHijos   = Relacional.prototype.graficarHijos;
MayorIgual.prototype.setLineaColumna = Expresion.prototype.setLineaColumna;
