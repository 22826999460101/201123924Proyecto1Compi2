
// atributos
Or.prototype.expresionDerecha;
Or.prototype.expresionPrima;
Or.prototype.tipo;
Or.prototype.hashCode;

// linea y columna
Or.prototype.linea;
Or.prototype.columna;

function Or(expresionDerecha,expresionPrima){
  this.expresionDerecha   = expresionDerecha;
  this.expresionPrima     = expresionPrima;
  this.hashCode = obtenerHash();
}

Or.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = valorIzquierdo || this.expresionDerecha.ejecutarExpresion(null);

  if(this.expresionPrima){
    valorEjecucion = this.expresionPrima.ejecutarExpresion(valorEjecucion);
  }

  return valorEjecucion;
}

Or.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);
  this.tipo = tipoIzquierda == TIPO_VALOR.BOOLEANO && tipoDerecha == TIPO_VALOR.BOOLEANO ?
                  TIPO_VALOR.BOOLEANO :
                  TIPO_VALOR.ERROR;
  //TODO EN TODAS LAS VALIDACIONES DE TIPO CUANDO SE DETECTE UN ERROR DEJAR DE BAJAR EL VALOR Y RETORNAR
  if(this.expresionPrima){
    this.tipo = this.expresionPrima.getTipo(this.tipo);
  }

  return this.tipo;
}

Or.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" OR";
  graphivz += "\"];\n";
  graphivz += Or.prototype.graficarHijos();
  return graphivz;
}

Or.prototype.graficarHijos   = Binaria.prototype.graficarHijos;
Or.prototype.setLineaColumna = Expresion.prototype.setLineaColumna;
