
// atributos
Diferente.prototype.expresionDerecha;
Diferente.prototype.tipo;
Diferente.prototype.hashCode;

// linea y columna
Diferente.prototype.linea;
Diferente.prototype.columna;

function Diferente(expresionDerecha){
  this.expresionDerecha   = expresionDerecha;
  this.hashCode = obtenerHash();
}

Diferente.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = valorIzquierdo != this.expresionDerecha.ejecutarExpresion(null);

  return valorEjecucion;
}

Diferente.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);
  this.tipo = tipoIzquierda == tipoDerecha ? tipoIzquierda : TIPO_VALOR.ERROR;
  /*Guardar error en tabla de simbolos*/
  return this.tipo;
}

Diferente.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Diferente";
  graphivz += "\"];\n";
  graphivz += Diferente.prototype.graficarHijos();
  return graphivz;
}

Diferente.prototype.graficarHijos   = Relacional.prototype.graficarHijos;
Diferente.prototype.setLineaColumna = Expresion.prototype.setLineaColumna;
