
// atributos
Negacion.prototype.expresion;
Negacion.prototype.tipo;
Negacion.prototype.hashCode;

// linea y columna
Negacion.prototype.linea;
Negacion.prototype.columna;

function Negacion(expresion){
  this.expresion   = expresion;
  this.hashCode = obtenerHash();
}

Negacion.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = this.expresion.ejecutarExpresion(null);

  return !valorEjecucion;
}

Negacion.prototype.getTipo = function (tipoIzquierda) {
  this.tipo = this.expresion.getTipo(null);

  return this.tipo;
}

Negacion.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Negacion";
  graphivz += "\"];\n";
  graphivz += this.graficarHijos();
  return graphivz;
}

Negacion.prototype.graficarHijos = function(){
  var graphivz = " ";

  graphivz += this.expresion.graficarAST() ;
  graphivz += "nodo_"+this.hashCode +"--nodo_"+this.expresion.hashCode+";\n" ;

  return graphivz;
}


Negacion.prototype.setLineaColumna = Expresion.prototype.setLineaColumna;
