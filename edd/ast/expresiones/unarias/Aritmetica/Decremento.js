
// atributos
Decremento.prototype.expresion;
Decremento.prototype.tipo;
Decremento.prototype.hashCode;

// linea y columna
Decremento.prototype.linea;
Decremento.prototype.columna;

function Decremento(){
  this.hashCode = obtenerHash();
}

Decremento.prototype.ejecutarExpresion = function (valorIzquierdo) {

  return valorIzquierdo-1;
}

Decremento.prototype.getTipo = function (tipoIzquierda) {
  this.tipo = tipoIzquierda;
  return tipoIzquierda;
}

Decremento.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Decremento ";
  graphivz += "\"];\n";
  return graphivz;
}

Decremento.prototype.setLineaColumna = Expresion.prototype.setLineaColumna;
