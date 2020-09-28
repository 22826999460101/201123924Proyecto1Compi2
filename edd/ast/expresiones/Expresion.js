

Expresion.prototype.expresion;
Expresion.prototype.expresionPrima;
Expresion.prototype.tipo;

function Expresion(expresion, expresionPrima){
  this.expresion = expresion;
  this.expresionPrima = expresionPrima;
  this.hashCode = obtenerHash();
}

Expresion.prototype.ejecutarExpresion = function (valorIzquierda) {
  let valorEjecucion = this.expresion.ejecutarExpresion(null);

  if(this.expresionPrima){
    valorEjecucion = this.expresionPrima.ejecutarExpresion(valorEjecucion);
  }

  return valorEjecucion;
}

Expresion.prototype.getTipo = function (tipoIzquierda) {
  this.tipo = this.expresion.getTipo(null);

  if(this.expresionPrima){
    this.tipo = this.expresionPrima.getTipo(this.tipo);
  }

  return this.tipo;
}


Expresion.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Expresion" ;
  graphivz += "\"];\n";
  graphivz += this.graficarHijos;
  return graphivz;
}

Expresion.prototype.graficarHijos = function(){
  var graphivz = " ";

  graphivz += this.expresion.graficarAST() ;
  graphivz += this.expresionPrima ? this.expresionPrima.graficarAST() : '';
  graphivz += "nodo_"+this.hashCode +"--nodo_"+this.expresion.hashCode+";\n" ;
  graphivz += this.expresionPrima ? "nodo_"+this.hashCode +"--nodo_"+this.expresionPrima.hashCode+";\n" : '';

  return graphivz;
}

Expresion.prototype.setLineaColumna = function(linea, columna){
  this.linea = linea;
  this.columna = columna;
}
