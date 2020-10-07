
// atributos
Ternario.prototype.condicion;
Ternario.prototype.expresionIzquierda;
Ternario.prototype.expresionDerecha;
Ternario.prototype.tipo;
Ternario.prototype.hashCode;

// linea y columna
Ternario.prototype.linea;
Ternario.prototype.columna;

function Ternario(condicion, expresionIzquierda, expresionDerecha){
  this.condicion = condicion;
  this.expresionIzquierda   = expresionIzquierda;
  this.expresionDerecha     = expresionDerecha;
  this.hashCode = obtenerHash();
}

Ternario.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorCondicion = this.condicion.ejecutarExpresion(null);
  let valorEjecucion;

  if(valorCondicion){
    valorEjecucion = this.expresionIzquierda.ejecutarExpresion(null);
  }else{
    valorEjecucion = this.expresionDerecha.ejecutarExpresion(null);
  }

  return valorEjecucion;
}

Ternario.prototype.getTipo = function (tipoIzquierda) {
  let tipoCondicion = this.condicion.getTipo(null);
  if(tipoCondicion==TIPO_VALOR.BOOLEANO){
    this.tipo = this.expresionIzquierda.getTipo(null);
  }else{
    this.tipo = TIPO_VALOR.ERROR;
  }
  //TODO SI LA CONDICION NO ES BOLEANA GRABAR ERROR
  return this.tipo;
}

Ternario.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Ternario ";
  graphivz += "\"];\n";
  graphivz += this.graficarHijos();
  return graphivz;
}

Ternario.prototype.graficarHijos   = function (){
  var graphivz = " ";

  graphivz += this.condicion.graficarAST() ;
  graphivz += this.expresionIzquierda.graficarAST() ;
  graphivz += this.expresionDerecha.graficarAST() ;
  graphivz += "nodo_"+this.hashCode +"--nodo_"+this.condicion.hashCode+";\n" ;
  graphivz += "nodo_"+this.hashCode +"--nodo_"+this.expresionIzquierda.hashCode+";\n" ;
  graphivz += "nodo_"+this.hashCode +"--nodo_"+this.expresionDerecha.hashCode+";\n" ;

  return graphivz;
}
Ternario.prototype.setLineaColumna = Expresion.prototype.setLineaColumna;
