// atributos
Potencia.prototype.expresionDerecha;
Potencia.prototype.expresionPrima;
Potencia.prototype.tipo;
Potencia.prototype.hashCode;

// linea y columna
Potencia.prototype.linea;
Potencia.prototype.columna;

function Potencia(expresionDerecha,expresionPrima){
  this.expresionDerecha   = expresionDerecha;
  this.expresionPrima     = expresionPrima;
  this.hashCode = obtenerHash();
}

Potencia.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = Math.pow( valorIzquierdo ,  this.expresionDerecha.ejecutarExpresion(null) );

  if(this.expresionPrima){
    valorEjecucion = this.expresionPrima.ejecutarExpresion(valorEjecucion);
  }

  return valorEjecucion;
}

Potencia.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);

  if(tipoIzquierda == TIPO_VALOR.NUMERO && tipoDerecha == TIPO_VALOR.NUMERO){
    this.tipo = TIPO_VALOR.NUMERO;
  }else{
    this.tipo = TIPO_VALOR.ERROR;
    /*grabar error semantico de tipos con linea y columna*/
  }

  if(this.expresionPrima && this.tipo != TIPO_VALOR.ERROR){
    this.tipo = this.expresionPrima.getTipo(this.tipo);
  }

  return this.tipo;
}

Potencia.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Potencia";
  graphivz += "\"];\n";
  graphivz += Potencia.prototype.graficarHijos();
  return graphivz;
}

Potencia.prototype.graficarHijos   = Binaria.prototype.graficarHijos;
Potencia.prototype.setLineaColumna = Binaria.prototype.setLineaColumna;
