
TablaAmbito.prototype.tablaAnterior;
TablaAmbito.prototype.variablesAmbito;

function TablaAmbito(tablaAnterior){
  this.tablaAnterior = tablaAnterior;
  this.variablesAmbito = {};
}

TablaAmbito.prototype.insertarVariable = function(variable){
  if(this.variablesAmbito[variable.getName()]){
    /*variable ya declarada*/
    console.log('Variable ya declarada: '+variable.getName());
  }else{
    this.variablesAmbito[variable.getName()] = variable;
  }
}

TablaAmbito.prototype.obtenerVariable = function(nombre){
  let variable = null;
  if(!this.variablesAmbito[nombre]){
    variable = this.tablaAnterior.obtenerVariable(nombre);
    if(!variable){
      variable = tablaGlobal.obtenerVariable(nombre);
    }
    /*preguntar si es nula en ese caso marcar como error*/
    console.log('Variable no ha sido declarada: '+variable.getName());
  }
  variable = this.variablesAmbito[nombre];
  return variable;
}

TablaAmbito.prototype.modificarValorVariable = function(variable){
  let nombreVariable = variable.getNombre();
  if(!variablesGlobales[nombreVariable]){
    /*grabar error no ha sido declarada*/
  }
  variablesGlobales[nombreVariable].setValor(variable.getValor());
  if(variable.getTipo()){
    variablesGlobales[nombreVariable].setTipo(variable.getTipo());
  }
}

