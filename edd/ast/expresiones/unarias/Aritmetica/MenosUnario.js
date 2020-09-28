
// atributos
MenosUnario.prototype.expresion;
MenosUnario.prototype.tipo;
MenosUnario.prototype.hashCode;

// linea y columna
MenosUnario.prototype.linea;
MenosUnario.prototype.columna;

function MenosUnario(expresion){
  this.expresion   = expresion;
  this.hashCode = obtenerHash();
}

MenosUnario.prototype.ejecutarExpresion = function (valorIzquierdo) {
  let valorEjecucion = this.expresion.ejecutarExpresion(null);

  return valorEjecucion*-1;
}

MenosUnario.prototype.getTipo = function (tipoIzquierda) {
  this.tipo = this.expresion.getTipo(null);

  return this.tipo;
}

MenosUnario.prototype.graficarAST = function () {
  var graphivz = " ";
  graphivz += "nodo_"+this.hashCode+ "[label= \" Menos";
  graphivz += "\"];\n";
  graphivz += this.graficarHijos();
  return graphivz;
}

MenosUnario.prototype.graficarHijos = function(){
  var graphivz = " ";

  graphivz += this.expresion.graficarAST() ;
  graphivz += "nodo_"+this.hashCode +"--nodo_"+this.expresion.hashCode+";\n" ;

  return graphivz;
}


MenosUnario.prototype.setLineaColumna = Expresion.prototype.setLineaColumna;
