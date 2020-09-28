
// atributos
Suma.prototype.expresionDerecha;
Suma.prototype.expresionPrima;
Suma.prototype.tipo;
Suma.prototype.hashCode;

// linea y columna
Suma.prototype.linea;
Suma.prototype.columna;

function Suma(expresionDerecha,expresionPrima){
  this.expresionDerecha   = expresionDerecha;
  this.expresionPrima     = expresionPrima;
  this.hashCode = obtenerHash();
}

Suma.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = valorIzquierdo + this.expresionDerecha.ejecutarExpresion(null);

  if(this.expresionPrima){
    valorEjecucion = this.expresionPrima.ejecutarExpresion(valorEjecucion);
  }

  return valorEjecucion;
}

Suma.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);
  this.tipo = tipoIzquierda > tipoDerecha ? tipoIzquierda : tipoDerecha;

  if(this.expresionPrima){
    this.tipo = this.expresionPrima.getTipo(this.tipo);
  }

  return this.tipo;
}

Suma.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Suma";
  graphivz += "\"];\n";
  graphivz += Suma.prototype.graficarHijos();
  return graphivz;
}

Suma.prototype.graficarHijos   = Binaria.prototype.graficarHijos;
Suma.prototype.setLineaColumna = Binaria.prototype.setLineaColumna;
