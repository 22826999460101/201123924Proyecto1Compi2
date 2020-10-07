// Constantes para los tipos de 'instrucciones' válidas en nuestra gramática.
const TIPO_INSTRUCCION = {
  IMPRIMIR:    'INSTR_IMPRIMIR',
  MIENTRAS:    'INSTR_MIENTRAS',
  DECLARACION: 'INSTR_DECLARACION',
  ASIGNACION:  'INSTR_ASIGANCION',
  IF:          'INSTR_IF',
  IF_ELSE:     'INSTR_ELSE'
}

// Constantes para los tipos de 'operaciones' que soporta nuestra gramática.
const TIPO_OPERACION = {
  SUMA:           'SUMA',
  RESTA:          'RESTA',
  MULTIPLICACION: 'MULTIPLICACION',
  DIVISION:       'DIVISION',
  NEGATIVO:       'OP_NEGATIVO',
  MAYOR_QUE:      'OP_MAYOR_QUE',
  MENOR_QUE:      'OP_MENOR_QUE',
  CONCATENACION:  'OP_CONCATENACION'
};

// Constantes para los tipos de 'valores' que reconoce nuestra gramática.
const TIPO_VALOR = {
  BOOLEANO:      0,
  NUMERO:        1,
  CADENA:        2,
  NULO:          3,
  ERROR:         4
}
