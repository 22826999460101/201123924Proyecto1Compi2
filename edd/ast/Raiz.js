let hashCode = 0;

function obtenerHash(){
  return hashCode++;
}

Raiz.prototype.listaInstrucciones;

function Raiz(listaExpresiones){
  this.listaInstrucciones = listaExpresiones;
}

Raiz.prototype.llenarTablaGlobal = function(){

  for(let instruccion of this.listaInstrucciones){
    if(instruccion.tipoInstruccion == TIPO_INSTRUCCION.DECLARACION){
      instruccion.insertarEnTSGlobal();
    }
  }

}

Raiz.prototype.ejecutarExpresiones = function(){
  let impresionConsola = '';

  for(let instruccion of this.listaInstrucciones){
    if(instruccion.tipoInstruccion == TIPO_INSTRUCCION.IMPRIMIR){
      impresionConsola += '> ' + instruccion.ejecutarInstruccion(null) +'\n';
    }else{
      /*parametro es la tabla de ambito*/
      instruccion.ejecutarInstruccion(null);
    }
  }

  return impresionConsola;
}
