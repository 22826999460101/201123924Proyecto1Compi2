/*
ACCESO { $$ = new Acceso($1,$2); }
       ;

ACCESO_PRIMITIVO : ID  {  $$ = new AccesoVariable($1);
                          $$.setLineaColumna( this._$.first_line , this._$.first_column);
                       }
                 | ID '[' CONDICION ']' PROFUNDIDAD  {  let profundidad = [$3];
                                                        if($5){ profundidad.push(...$5); }
                                                        $$ = new AccesoArreglo($1,profundidad);
                                                        $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                                     }
* */

Acceso.prototype.accesoTabla;
Acceso.prototype.listaAccesos;

function Acceso(accesoTabla,listaAccesos){
  this.accesoTabla = accesoTabla;
  this.listaAccesos = listaAccesos;
}

Acceso.prototype.modificarValor = function(padre,tablaAmbito,valorNuevo){
  let variableModificar;
  if(tablaAmbito){
    variableModificar = tablaAmbito.obtenerVariable(this.accesoTabla.nombre);
  }else{
    variableModificar = tablaGlobal.obtenerVariable(this.accesoTabla.nombre)
  }

  if(variableModificar){
    if(this.listaAccesos){
      /*agregar accesos types y arreglos*/
    }else{/*validar el tipo*/
      if(variableModificar.getTipo()){
        if(valorNuevo.getTipo() > variableModificar.getTipo() ){
          /*error de tipos*/
        }
      }else{
        variableModificar.setTipo(valorNuevo.getTipo());
      }
      variableModificar.setValor(valorNuevo.getValor());
    }
  }

  if(tablaAmbito){
    tablaAmbito.modificarValorVariable(variableModificar);
  }else{
    tablaGlobal.modificarValorVariable(variableModificar);
  }
}

Acceso.prototype.ejecutarExpresion = function(valorIzquierdo,tablaAmbito){
  let variable;
  let valor;

  if(tablaAmbito){
    variable = tablaAmbito.obtenerVariable(this.accesoTabla.nombre);
  }else{
    variable = tablaGlobal.obtenerVariable(this.accesoTabla.nombre)
  }

  if(variable){
    if(this.listaAccesos){
      /*agregar accesos types y arreglos*/
    }else{/*validar el tipo*/
      valor = variable.getValor();
    }
  }
  return valor;
}

Acceso.prototype.getTipo = function(valorIzquierdo,tablaAmbito){
  let variable;
  let tipo;

  if(tablaAmbito){
    variable = tablaAmbito.obtenerVariable(this.accesoTabla.nombre);
  }else{
    variable = tablaGlobal.obtenerVariable(this.accesoTabla.nombre)
  }

  if(variable){
    if(this.listaAccesos){
      /*agregar accesos types y arreglos*/
    }else{/*validar el tipo*/
      tipo = variable.getTipo();
    }
  }
  return tipo;
}
