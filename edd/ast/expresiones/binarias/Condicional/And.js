
// atributos
And.prototype.expresionDerecha;
And.prototype.expresionPrima;
And.prototype.tipo;
And.prototype.hashCode;

// linea y columna
And.prototype.linea;
And.prototype.columna;

function And(expresionDerecha,expresionPrima){
  this.expresionDerecha   = expresionDerecha;
  this.expresionPrima     = expresionPrima;
  this.hashCode = obtenerHash();
}

And.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = valorIzquierdo && this.expresionDerecha.ejecutarExpresion(null);

  if(this.expresionPrima){
    valorEjecucion = this.expresionPrima.ejecutarExpresion(valorEjecucion);
  }

  return valorEjecucion;
}

And.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);
  this.tipo = tipoIzquierda == TIPO_VALAnd.BOOLEANO && tipoDerecha == TIPO_VALAnd.BOOLEANO ?
    TIPO_VALAnd.BOOLEANO :
    TIPO_VALAnd.ERROR;
  //TODO EN TODAS LAS VALIDACIONES DE TIPO CUANDO SE DETECTE UN ERROR DEJAR DE BAJAR EL VALOR Y RETORNAR
  if(this.expresionPrima){
    this.tipo = this.expresionPrima.getTipo(this.tipo);
  }

  return this.tipo;
}

And.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" AND ";
  graphivz += "\"];\n";
  graphivz += And.prototype.graficarHijos();
  return graphivz;
}

And.prototype.graficarHijos   = Binaria.prototype.graficarHijos;
And.prototype.setLineaColumna = Expresion.prototype.setLineaColumna;
