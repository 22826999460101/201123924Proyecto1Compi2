
// atributos
Mayor.prototype.expresionDerecha;
Mayor.prototype.tipo;
Mayor.prototype.hashCode;

// linea y columna
Mayor.prototype.linea;
Mayor.prototype.columna;

function Mayor(expresionDerecha){
  this.expresionDerecha   = expresionDerecha;
  this.hashCode = obtenerHash();
}

Mayor.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = valorIzquierdo > this.expresionDerecha.ejecutarExpresion(null);

  return valorEjecucion;
}

Mayor.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);
  this.tipo = tipoIzquierda > tipoDerecha ? tipoIzquierda : tipoDerecha;
  //Todo: validar que no vaya un tipo error en el hijo izquierdo o derecho
  return this.tipo;
}

Mayor.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Mayor";
  graphivz += "\"];\n";
  graphivz += Mayor.prototype.graficarHijos();
  return graphivz;
}

Mayor.prototype.graficarHijos   = Relacional.prototype.graficarHijos;
Mayor.prototype.setLineaColumna = Expresion.prototype.setLineaColumna;
