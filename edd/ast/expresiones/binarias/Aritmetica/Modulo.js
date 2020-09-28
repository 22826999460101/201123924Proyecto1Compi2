// atributos
Modulo.prototype.expresionDerecha;
Modulo.prototype.expresionPrima;
Modulo.prototype.tipo;
Modulo.prototype.hashCode;

// linea y columna
Modulo.prototype.linea;
Modulo.prototype.columna;

function Modulo(expresionDerecha,expresionPrima){
  this.expresionDerecha   = expresionDerecha;
  this.expresionPrima     = expresionPrima;
  this.hashCode = obtenerHash();
}

Modulo.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = valorIzquierdo % this.expresionDerecha.ejecutarExpresion(null);

  if(this.expresionPrima){
    valorEjecucion = this.expresionPrima.ejecutarExpresion(valorEjecucion);
  }

  return valorEjecucion;
}

Modulo.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);
  this.tipo = tipoIzquierda > tipoDerecha ? tipoIzquierda : tipoDerecha;

  if(this.expresionPrima){
    this.tipo = this.expresionPrima.getTipo(this.tipo);
  }

  return this.tipo;
}

Modulo.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Modulo";
  graphivz += "\"];\n";
  graphivz += Modulo.prototype.graficarHijos();
  return graphivz;
}

Modulo.prototype.graficarHijos   = Binaria.prototype.graficarHijos;
Modulo.prototype.setLineaColumna = Binaria.prototype.setLineaColumna;
