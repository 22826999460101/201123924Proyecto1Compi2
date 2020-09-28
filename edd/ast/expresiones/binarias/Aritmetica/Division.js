// atributos
Division.prototype.expresionDerecha;
Division.prototype.expresionPrima;
Division.prototype.tipo;
Division.prototype.hashCode;

// linea y columna
Division.prototype.linea;
Division.prototype.columna;

function Division(expresionDerecha,expresionPrima){
  this.expresionDerecha   = expresionDerecha;
  this.expresionPrima     = expresionPrima;
  this.hashCode = obtenerHash();
}

Division.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorDerecho = this.expresionDerecha.ejecutarExpresion(null);
  let valorEjecucion;

  if(valorDerecho == 0){
    /*grabar error division dentro de cero*/
  }else{
     valorEjecucion = valorIzquierdo / valorDerecho;
  }

  if(this.expresionPrima && valorEjecucion){
    valorEjecucion = this.expresionPrima.ejecutarExpresion(valorEjecucion);
  }

  return valorEjecucion;
}

Division.prototype.getTipo = function (tipoIzquierda) {
  let tipoDerecha = this.expresionDerecha.getTipo(null);
  this.tipo = tipoIzquierda > tipoDerecha ? tipoIzquierda : tipoDerecha;

  if(this.expresionPrima){
    this.tipo = this.expresionPrima.getTipo(this.tipo);
  }

  return this.tipo;
}

Division.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Division";
  graphivz += "\"];\n";
  graphivz += Division.prototype.graficarHijos();
  return graphivz;
}

Division.prototype.graficarHijos   = Binaria.prototype.graficarHijos;
Division.prototype.setLineaColumna = Binaria.prototype.setLineaColumna;
