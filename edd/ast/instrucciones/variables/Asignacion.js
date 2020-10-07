/*
  'let' ID '=' CONDICION  LISTA_DECLARACION ';'
| 'let' ID ':' TIPO '=' ASIGNACION_ARREGLO ';'
| 'let' ID ':' TIPO '=' ASIGNACION_TYPES ';'
| 'let' ID ':' TIPO '=' CONDICION ';'
| 'const' ID '=' CONDICION LISTA_DECLARACION ';'
| 'const' ID ':' TIPO '=' ASIGNACION_ARREGLO ';'
| 'const' ID ':' TIPO '=' ASIGNACION_TYPES ';'
| 'const' ID ':' TIPO '=' CONDICION ';'
| 'let' ID ':' TIPO ';'
| 'let' ID  ';'
* */

Asignacion.prototype.tipoInstruccion;
Asignacion.prototype.acceso;
Asignacion.prototype.expresion;

Asignacion.prototype.linea;
Asignacion.prototype.columna;

function Asignacion(acceso){
  this.tipoInstruccion = TIPO_INSTRUCCION.ASIGNACION;
  this.acceso = acceso;
}

Asignacion.prototype.ejecutarInstruccion = function(tablaAmbito){
  let tipo;
  let valor;
  let valorNuevo;

  if(this.expresion){
    tipo = expresion.getTipo(null,tablaAmbito);
    if(tipo != TIPO_VALOR.ERROR){
      valor = expresion.ejecutarExpresion(null,tablaAmbito);
      valorNuevo = new ValorBasico(tipo,valor);
    }else{
      //error en la expresion no guardo en la ts
      return;
    }
  }

  this.acceso.modificarValor(null,tablaAmbito,valorNuevo);

  if(tablaAmbito){
    tablaAmbito.modificarValorVariable(variableModificar);
  }else{
    tablaGlobal.modificarValorVariable(variableModificar);
  }
}

Asignacion.prototype.setTipo = function(tipo){
  this.tipo = tipo;
}

Asignacion.prototype.setExpresion = function(expresion){
  this.expresion = expresion;
}

Asignacion.prototype.setListaExpresiones = function(listaExpresiones){
  this.listaExpresiones = listaExpresiones;
}

Asignacion.prototype.setLineaColumna = Nodo.setLineaColumna;
