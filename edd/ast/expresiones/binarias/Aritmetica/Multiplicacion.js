// atributos
Multiplicacion.prototype.expresionDerecha;
Multiplicacion.prototype.expresionPrima;
Multiplicacion.prototype.tipo;
Multiplicacion.prototype.hashCode;

// linea y columna
Multiplicacion.prototype.linea;
Multiplicacion.prototype.columna;

function Multiplicacion(expresionDerecha,expresionPrima){
  this.expresionDerecha   = expresionDerecha;
  this.expresionPrima     = expresionPrima;
  this.hashCode = obtenerHash();
}

Multiplicacion.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = valorIzquierdo * this.expresionDerecha.ejecutarExpresion(null);

  if(this.expresionPrima){
    valorEjecucion = this.expresionPrima.ejecutarExpresion(valorEjecucion);
  }

  return valorEjecucion;
}

Multiplicacion.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);
  this.tipo = tipoIzquierda > tipoDerecha ? tipoIzquierda : tipoDerecha;

  if(this.expresionPrima){
    this.tipo = this.expresionPrima.getTipo(this.tipo);
  }

  return this.tipo;
}

Multiplicacion.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Multiplicacion";
  graphivz += "\"];\n";
  graphivz += Multiplicacion.prototype.graficarHijos();
  return graphivz;
}

Multiplicacion.prototype.graficarHijos   = Binaria.prototype.graficarHijos;
Multiplicacion.prototype.setLineaColumna = Binaria.prototype.setLineaColumna;
