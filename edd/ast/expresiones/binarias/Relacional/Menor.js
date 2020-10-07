
// atributos
Menor.prototype.expresionDerecha;
Menor.prototype.tipo;
Menor.prototype.hashCode;

// linea y columna
Menor.prototype.linea;
Menor.prototype.columna;

function Menor(expresionDerecha){
  this.expresionDerecha   = expresionDerecha;
  this.hashCode = obtenerHash();
}

Menor.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = valorIzquierdo < this.expresionDerecha.ejecutarExpresion(null);

  return valorEjecucion;
}

Menor.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);
  this.tipo = tipoIzquierda > tipoDerecha ? tipoIzquierda : tipoDerecha;
  //Todo: validar que no vaya un tipo error en el hijo izquierdo o derecho
  return this.tipo;
}

Menor.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Menor";
  graphivz += "\"];\n";
  graphivz += Menor.prototype.graficarHijos();
  return graphivz;
}

Menor.prototype.graficarHijos   = Relacional.prototype.graficarHijos;
Menor.prototype.setLineaColumna = Expresion.prototype.setLineaColumna;
