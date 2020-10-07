
Variable.prototype.name;
Variable.prototype.valor;
Variable.prototype.tipo;

function Variable(name){
  this.name = name;
}

Variable.prototype.setTipo = function(tipo){
  this.tipo = tipo;
}

Variable.prototype.setValor = function(valor){
  this.valor = valor;
}

Variable.prototype.getValor = function(){
  return this.valor;
}

Variable.prototype.getTipo = function(){
  return this.tipo;
}

Variable.prototype.getName = function(){
  return this.name;
}
