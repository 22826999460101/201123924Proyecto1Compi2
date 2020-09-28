// atributos
Resta.prototype.expresionDerecha;
Resta.prototype.expresionPrima;
Resta.prototype.tipo;
Resta.prototype.hashCode;

// linea y columna
Resta.prototype.linea;
Resta.prototype.columna;

function Resta(expresionDerecha,expresionPrima){
  this.expresionDerecha   = expresionDerecha;
  this.expresionPrima     = expresionPrima;
  this.hashCode = obtenerHash();
}

Resta.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = valorIzquierdo - this.expresionDerecha.ejecutarExpresion(null);

  if(this.expresionPrima){
    valorEjecucion = this.expresionPrima.ejecutarExpresion(valorEjecucion);
  }

  return valorEjecucion;
}

Resta.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);
  this.tipo = tipoIzquierda > tipoDerecha ? tipoIzquierda : tipoDerecha;

  if(this.expresionPrima){
    this.tipo = this.expresionPrima.getTipo(this.tipo);
  }

  return this.tipo;
}

Resta.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Resta";
  graphivz += "\"];\n";
  graphivz += Resta.prototype.graficarHijos();
  return graphivz;
}

Resta.prototype.graficarHijos   = Binaria.prototype.graficarHijos;
Resta.prototype.setLineaColumna = Binaria.prototype.setLineaColumna;
