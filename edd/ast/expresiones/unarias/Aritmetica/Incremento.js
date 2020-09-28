
// atributos
Incremento.prototype.expresion;
Incremento.prototype.tipo;
Incremento.prototype.hashCode;

// linea y columna
Incremento.prototype.linea;
Incremento.prototype.columna;

function Incremento(){
  this.hashCode = obtenerHash();
}

Incremento.prototype.ejecutarExpresion = function (valorIzquierdo) {

  return valorIzquierdo+1;
}

Incremento.prototype.getTipo = function (tipoIzquierda) {
  this.tipo = tipoIzquierda;
  return tipoIzquierda;
}

Incremento.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Incremento ";
  graphivz += "\"];\n";
  return graphivz;
}

Incremento.prototype.setLineaColumna = Expresion.prototype.setLineaColumna;
