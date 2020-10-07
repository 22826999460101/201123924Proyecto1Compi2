
// atributos
Igual.prototype.expresionDerecha;
Igual.prototype.tipo;
Igual.prototype.hashCode;

// linea y columna
Igual.prototype.linea;
Igual.prototype.columna;

function Igual(expresionDerecha){
  this.expresionDerecha = expresionDerecha;
  this.hashCode = obtenerHash();
}

Igual.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = valorIzquierdo == this.expresionDerecha.ejecutarExpresion(null);

  return valorEjecucion;
}

Igual.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);
  this.tipo = tipoIzquierda == tipoDerecha ? tipoIzquierda : TIPO_VALOR.ERROR;
  /*Guardar error en tabla de simbolos*/
  return this.tipo;
}

Igual.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Igual_Relacional";
  graphivz += "\"];\n";
  graphivz += Igual.prototype.graficarHijos();
  return graphivz;
}

Igual.prototype.graficarHijos   = Relacional.prototype.graficarHijos;
Igual.prototype.setLineaColumna = Expresion.prototype.setLineaColumna;
