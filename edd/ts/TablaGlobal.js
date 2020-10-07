
TablaGlobal.prototype.variablesGlobales;
TablaGlobal.prototype.funciones;

function TablaGlobal(){
  this.variablesGlobales = {};
  this.funciones = {};
}

TablaGlobal.prototype.insertarVariable = function(variable){
  if(this.variablesGlobales[variable.getName()]){
    /*variable ya declarada*/
    console.log('Variable ya declarada: '+variable.getName());
  }else{
    this.variablesGlobales[variable.getName()] = variable;
  }
}

TablaGlobal.prototype.obtenerVariable = function(nombre){
  let variable = null;
  if(!this.variablesGlobales[nombre]){
    /*grabar error no ha sido declarada*/
    console.log('Variable no ha sido declarada: '+variable.getName());
  }
  variable = this.variablesGlobales[nombre];
  return variable;
}

TablaGlobal.prototype.modificarValorVariable = function(variable){
  let nombreVariable = variable.getNombre();
  if(!this.variablesGlobales[nombreVariable]){
    /*grabar error no ha sido declarada*/
  }
  this.variablesGlobales[nombreVariable].setValor(variable.getValor());
  if(variable.getTipo()){
    this.variablesGlobales[nombreVariable].setTipo(variable.getTipo());
  }
}

