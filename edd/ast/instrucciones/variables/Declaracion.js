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

Declaracion.prototype.tipoInstruccion;
Declaracion.prototype.id;
Declaracion.prototype.tipo;
Declaracion.prototype.expresion;
Declaracion.prototype.listaExpresiones;

Declaracion.prototype.linea;
Declaracion.prototype.columna;

function Declaracion(id){
  this.tipoInstruccion = TIPO_INSTRUCCION.DECLARACION;
  this.id = id;
}

Declaracion.prototype.ejecutarInstruccion = function(tablaAmbito){
  let nuevaVariable = new Variable(this.id);
  let tipo;
  let valor;

  nuevaVariable.setTipo(this.tipo);
  if(this.expresion){
    tipo = expresion.getTipo(null,tablaAmbito);
    if(tipo != TIPO_VALOR.ERROR){
      valor = expresion.ejecutarExpresion(null,tablaAmbito);
      nuevaVariable.setValor(valor);
    }else{
      //error en la expresion no guardo en la ts
      return;
    }
  }

  if(tablaAmbito){
    tablaAmbito.insertarVariable(nuevaVariable);
  }else{
    tablaGlobal.insertarVariable(nuevaVariable);
  }
}

Declaracion.prototype.insertarEnTSGlobal = function(){
  let nuevaVariable = new Variable(this.id);
  nuevaVariable.setTipo(this.tipo);
  tablaGlobal.insertarVariable(nuevaVariable);
}

Declaracion.prototype.setTipo = function(tipo){
  this.tipo = tipo;
}

Declaracion.prototype.setExpresion = function(expresion){
  this.expresion = expresion;
}

Declaracion.prototype.setListaExpresiones = function(listaExpresiones){
  this.listaExpresiones = listaExpresiones;
}

Declaracion.prototype.setLineaColumna = Nodo.setLineaColumna;
