let hashCode = 0;

function obtenerHash(){
  return hashCode++;
}

Raiz.prototype.listaExpresiones;

function Raiz(listaExpresiones){
  this.listaExpresiones = listaExpresiones;
}

Raiz.prototype.ejecutarExpresiones = function(){
  let impresionConsola = '';

  for(let expresion of this.listaExpresiones){
    impresionConsola += '> ' + expresion.ejecutarExpresion(null) +'\n';
  }

  return impresionConsola;
}
