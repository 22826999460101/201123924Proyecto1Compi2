
%lex
%%

/* COMENTARIO */
"//".*										               // comentario simple línea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]			// comentario multiple líneas

/*     palabras y simbolos reservados      */
/* palabras reservadas */

"let"           return  'let';
"const"         return  'const';
"push"          return  'push';
"pop"           return  'pop';
"length"        return  'length';
"true"          return  'true';
"false"         return  'false';
"null"          return  'null';
"void"          return  'void';
"if"            return  'if';
"else"          return  'else';
"while"         return  'while';
"switch"        return  'switch_term';
"case"          return  'case_term';
"default"       return  'default_term';
"do"            return  'do';
"let"           return  'let';
"const"         return  'const';
"of"            return  'of';
"in"            return  'in';
"for"           return  'for';
"number"        return  'number';
"string"        return  'string';
"boolean"       return  'boolean';
"Array"         return  'Array';
"function"      return  'function';
"return"        return  'return';
"break"         return  'break';
"continue"      return  'continue';
"type"          return  'type';
"graficar_ts"   return  'graficar_ts';
"console"       return  'console';
"log"           return  'log';


/* simbolos usados*/
"{"         return '{';
"}"         return '}';
"("         return '(';
")"         return ')';
"["         return '[';
"]"         return ']';
"."         return '.';
":"         return ':';
";"         return ';';
","         return ',';
"?"         return '?';


/* OPERADORES RELACIONALES */
"||"        return '||';
"|?"        return '|?';
"&&"        return '&&';
"&?"        return '&?';
"|&"        return '|&';

/* operadores relacionales */
">="        return '>=';
"<="        return '<=';
"=="        return '==';
"!="        return '!=';
"!"         return '!';
">"         return '>';
"<"         return '<';

/* operadores aritmeticos */
"**"        return '**';
"++"        return '++';
"--"        return '--';
"+"         return '+';
"-"         return '-';
"*"         return '*';
"/"         return '/';
"%"         return '%';

/* asignacion */
"="         return '=';


<<EOF>>               return 'EOF';

/* expresiones regulares*/
[0-9]+("."[0-9]+)?\b                  return 'NUMBER';
[a-zA-ZñÑ_]([a-zA-ZñÑ_0-9])*          return 'ID';
\"[^\"]*\"|\'[^\']*\'|\`[^\`]*\`      yytext = yytext.substr(1,yyleng-2); return 'STRING';

// \"[^\"]*\"|\'[^\']*\'           yytext = yytext.substr(1,yyleng-2); return 'STRING';


/* token de error para este analisis */
\s+                   /* skip whitespace */
.                     errorLexico(yytext, yylineno); //return 'INVALID'

/lex

/* operator associations and precedence */


%{

function errorSintactico(a, linea){
  console.log( "Error Sintactico => " + a +" linea: "+linea );
}

function errorLexico(a, linea){
  console.log( "Error Lexico => " + a +" linea: "+linea);
}

function write(a){
	console.log("token: "+ a);
}

function eliminarComillasa(texto){
    console.log(texto);
    var t = "";
    for(var i = 0; i < texto.length; i++){
        if(texto[i] !== '"'){
            t += texto[i];
        }
    }
    return t;
}

%}

%left '+' '-'
%left '*' '/' '%'
%left '**'
%right '++' '--'
%left '>' '<' '>=' '<=' '==' '!='
%left '||' '|?'
%left '&&' '&?'
%left '|&'
%right '!'

%start INICIO

%%
/*
INICIO : SENTENCIAS EOF
        { return 'LECTURA EXITOSA' ; }
       ;
*/

SENTENCIAS : SENTENCIA SENTENCIA_PRIMA
            ;

SENTENCIA_PRIMA : SENTENCIA SENTENCIA_PRIMA
                | /*VACIO*/
                ;

SENTENCIA : ESTRUCTURA_CONTROL
          | DECLARACION
          | ASIGNACION
          | TYPES
          | LLAMADA ';'
          | FUNCIONES_NATIVAS
          | FUNCION
          | RETORNO
          | BREAK
          | CONTINUE
          | error { console.log('ERROR: ' + $1 +', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column+ ', esperado: '+this._terminals) ; }
          ;

FUNCIONES_NATIVAS : 'console' '.' 'log' '(' LISTA_EXPRESIONES ')' ';'
                  | 'graficar_ts' '(' CONDICION ')' ';'
                  ;

FUNCION : 'function' ID '(' PARAMETROS ')' ':' TIPO '{' SENTENCIAS '}'
        | 'function' ID '(' PARAMETROS ')' '{' SENTENCIAS '}'
        | 'function' ID '('  ')' ':' TIPO '{' SENTENCIAS '}'
        | 'function' ID '('  ')' '{' SENTENCIAS '}'
        ;

RETORNO : 'return' CONDICION ';'
        | 'return' ';'
        ;

BREAK : 'break' ';'
      ;

CONTINUE : 'continue' ';'
         ;

ESTRUCTURA_CONTROL : ESTRUCTURA_IF
                   | ESTRUCTURA_WHILE
                   | ESTRUCTURA_SWITCH
                   | ESTRUCTURA_DO_WHILE
                   | ESTRUCTURA_FOR
                   ;

ESTRUCTURA_IF : S_IF S_IF_PRIMA
               ;

S_IF : 'if' '(' CONDICION ')' '{' SENTENCIAS '}'
     ;

S_IF_PRIMA : 'else' 'if' '(' CONDICION ')' '{' SENTENCIAS '}' S_IF_ELSE
           | 'else' '{' SENTENCIAS '}'
           | /*VACIO*/
           ;

S_IF_ELSE : 'else' 'if' '(' CONDICION ')' '{' SENTENCIAS '}' S_IF_ELSE
          | 'else' '{' SENTENCIAS '}'
          | /*VACIO*/
          ;


ESTRUCTURA_WHILE : 'while' '(' CONDICION ')' '{' SENTENCIAS '}'
                 ;

ESTRUCTURA_SWITCH : 'switch_term' '(' CONDICION ')' '{' SWITCH_CASES '}'
                  ;

SWITCH_CASES : SWITCH_CASE SWITCH_CASES_PRIMA
             ;

SWITCH_CASE : 'case_term' CONDICION ':' SENTENCIAS
     ;

SWITCH_CASES_PRIMA : SWITCH_CASE  SWITCH_CASES_PRIMA
                   | DEFAULT_CASE
                   | /*VACIO*/
                   ;

DEFAULT_CASE : 'default_term' ':' SENTENCIAS
             ;

ESTRUCTURA_DO_WHILE : 'do' '{' SENTENCIAS '}' 'while' '(' CONDICION ')' ';'
                    ;

ESTRUCTURA_FOR : 'for' '(' CONDICIONES_FOR ')' '{' SENTENCIAS '}'
               ;

CONDICIONES_FOR : CONDICION_FOR_NORMAL
                | CONDICION_FOR_OF
                | CONDICION_FOR_IN
                ;

CONDICION_FOR_NORMAL : PRIMERA_CONDICION_FOR  CONDICION ';' CONDICION
                     ;

PRIMERA_CONDICION_FOR: ASIGNACION
                     | DECLARACION
                     ;

CONDICION_FOR_OF : 'let' ID 'of' CONDICION
                 ;

CONDICION_FOR_IN : 'let' ID 'in' CONDICION
                 ;

/* DECLARACIONES  ------- ASIGNACIONES ----------- LLAMADAS ------------- EXPRESIONES ---------- CONDICIONES  */

DECLARACION : 'let' ID ':' TIPO '=' CONDICION LISTA_DECLARACION ';' { $$ = new Declaracion($2);
                                                                      $$.setTipo($4);
                                                                      $$.setExpresion($6);
                                                                      $$.setListaExpresiones($7);
                                                                      $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                                                    }
            | 'let' ID '=' CONDICION  LISTA_DECLARACION ';' { $$ = new Declaracion($2);
                                                              $$.setExpresion($4);
                                                              $$.setListaExpresiones($5);
                                                              $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                                            }
            | 'let' ID ':' TIPO '=' ASIGNACION_ARREGLO ';'
            | 'let' ID ':' TIPO '=' ASIGNACION_TYPES ';'
            | 'const' ID ':' TIPO '=' CONDICION LISTA_DECLARACION ';'
            | 'const' ID '=' CONDICION LISTA_DECLARACION ';'
            | 'const' ID ':' TIPO '=' ASIGNACION_ARREGLO ';'
            | 'const' ID ':' TIPO '=' ASIGNACION_TYPES ';'
            | 'let' ID ':' TIPO ';' { $$ = new Declaracion($2);
                                      $$.setTipo($4);
                                      $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                    }
            | 'let' ID  ';' { $$ = new Declaracion($2);
                              $$.setLineaColumna( this._$.first_line , this._$.first_column);
                            }
            ;

LISTA_DECLARACION : ',' ID '=' CONDICION LISTA_DECLARACION {  let nuevaDeclaracion = new Declaracion($2);
                                                              nuevaDeclaracion.setExpresion($4);
                                                              $$ = [nuevaDeclaracion];
                                                              if($5){ $$.push(...$5); }
                                                           }
                  | /*VACIO*/ { $$ = null; }
                  ;

ASIGNACION : ACCESO '=' CONDICION ';' { $$ = new Asignacion($1);
                                        $$.setExpresion($3);
                                        $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                      }
           | ACCESO '=' ASIGNACION_TYPES ';'
           | ACCESO '=' ASIGNACION_ARREGLO ';'
           | ACCESO '++' ';'
           | ACCESO '--' ';'
           ;

ASIGNACION_ARREGLO : '[' LISTA_ARREGLO ']'
                   | '[' ']'
                   ;

LISTA_ARREGLO : ELEMENTO_ARREGLO LISTA_ARREGLO_PRIMA
              ;

ELEMENTO_ARREGLO : CONDICION
                 | ASIGNACION_ARREGLO
                 ;

LISTA_ARREGLO_PRIMA : ',' ELEMENTO_ARREGLO LISTA_ARREGLO_PRIMA
                    | /*VACIO*/
                    ;

ASIGNACION_TYPES : '{' VALORES_TYPE '}'
                 ;

VALORES_TYPE :  VALOR_TYPE VALORES_TYPE_PRIMA
             ;

VALOR_TYPE : ID ':' CONDICION
           ;

VALORES_TYPE_PRIMA : ',' VALOR_TYPE VALORES_TYPE_PRIMA
                   | /*VACIO*/
                   ;

LLAMADA : ID '(' ')'
        | ID '(' LISTA_EXPRESIONES ')'
        ;

LISTA_EXPRESIONES : CONDICION LISTA_EXPRESIONES_PRIMA
                  ;

LISTA_EXPRESIONES_PRIMA : ',' CONDICION LISTA_EXPRESIONES_PRIMA
                        | /*VACIO*/
                        ;

PARAMETROS : PARAMETRO PARAMETROS_PRIMA
           ;

PARAMETRO : ID ':' TIPO
          ;

PARAMETROS_PRIMA : ',' PARAMETRO PARAMETROS_PRIMA
                 | /*VACIO*/
                 ;

TYPES : 'type' ID '=' '{' PARAMETROS '}' ';'
      ;


TIPO : 'number'  DIMENSION_ARREGLO
     | 'string'  DIMENSION_ARREGLO
     | 'boolean' DIMENSION_ARREGLO
     |  ID       DIMENSION_ARREGLO
     | 'Array' '<' TIPO '>'
     | 'void'
     ;

DIMENSION_ARREGLO : '[' ']' DIMENSION_ARREGLO
                  | /*VACIO*/
                  ;

INICIO : CONDICION LISTA_EXPRESION EOF { console.log('LECTURA EXITOSA');
                                         let listaExpresiones = [$1]; if($2){ listaExpresiones.push(...$2); }
                                         return new Raiz(listaExpresiones);
                                       }
       ;

LISTA_EXPRESION : ',' CONDICION LISTA_EXPRESION {  $$ = [$2]; if($3){ $$.push(...$3); }  }
                | /*VACIO*/{ $$ = null; }
                ;

CONDICION : CONDICION_BETA CONDICION_PRIMA { $$ = new Expresion($1,$2); }
          | CONDICION '?' EXPRESION ':' EXPRESION { $$ = new Ternario($1,$3,$5);
                                                    $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                                  }
          ;

CONDICION_BETA : '!' D { $$ = new Negacion($2);
                         $$.setLineaColumna( this._$.first_line , this._$.first_column);
                       }
               | D { $$ = $1; }
               ;

CONDICION_PRIMA : '||' CONDICION_BETA CONDICION_PRIMA { $$ = new Or($2 ,$3);
                                                        $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                                      }
                | '&&' CONDICION_BETA CONDICION_PRIMA { $$ = new And($2 ,$3);
                                                        $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                                      }
                | /*VACIO*/ { $$ = null; }
                ;

D : RELACIONAL { $$ = $1; }
  ;

RELACIONAL : EXPRESION F { $$ = new Expresion($1,$2); }
           ;

F : '>=' EXPRESION { $$ = new MayorIgual($2);
                     $$.setLineaColumna( this._$.first_line , this._$.first_column);
                   }
  | '<=' EXPRESION { $$ = new MenorIgual($2);
                     $$.setLineaColumna( this._$.first_line , this._$.first_column);
                   }
  | '==' EXPRESION { $$ = new Igual($2);
                     $$.setLineaColumna( this._$.first_line , this._$.first_column);
                   }
  | '!=' EXPRESION { $$ = new Diferente($2);
                     $$.setLineaColumna( this._$.first_line , this._$.first_column);
                   }
  | '>' EXPRESION  { $$ = new Mayor($2);
                     $$.setLineaColumna( this._$.first_line , this._$.first_column);
                   }
  | '<' EXPRESION  { $$ = new Menor($2);
                     $$.setLineaColumna( this._$.first_line , this._$.first_column);
                   }
  | /*VACIO*/ { $$ = null; }
  ;

EXPRESION : H EXPRESION_PRIMA { $$ = new Expresion($1,$2); }
          ;

EXPRESION_PRIMA : '+'  H EXPRESION_PRIMA  { $$ = new Suma($2,$3);
                                             $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                          }
                | '-'  H EXPRESION_PRIMA  { $$ = new Resta($2,$3);
                                            $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                          }
                | /*VACIO*/ { $$ = null; }
                ;

H : G MULTIPLICACION_PRIMA { $$ = new Expresion($1,$2); }
  ;

MULTIPLICACION_PRIMA :   '*'  G MULTIPLICACION_PRIMA  { $$ = new Multiplicacion($2,$3);
                                                                        $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                                                      }
                       | '/'  G MULTIPLICACION_PRIMA  { $$ = new Division($2,$3);
                                                                        $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                                                      }
                       | '%'  G MULTIPLICACION_PRIMA  { $$ = new Modulo($2,$3);
                                                                        $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                                                      }
                       |  { $$ = null }
                       ;


G : OPCION_EXPRESION POTENCIA_PRIMA { $$ = new Expresion($1,$2); }
  ;

POTENCIA_PRIMA :  '**' OPCION_EXPRESION POTENCIA_PRIMA { $$ = new Potencia($2,$3);
                                                                $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                                              }
                | '++' { $$ = new Incremento();
                         $$.setLineaColumna( this._$.first_line , this._$.first_column);
                       }
                | '--' { $$ = new Decremento();
                         $$.setLineaColumna( this._$.first_line , this._$.first_column);
                       }
                | /*VACIO*/ { $$ = null; }
                ;

OPCION_EXPRESION : '-' T { $$ = new MenosUnario($2);
                           $$.setLineaColumna( this._$.first_line , this._$.first_column);
                         }
                 | T { $$ = $1; }
                 ;

T : 'NUMBER' { $$ = new ValorBasico(TIPO_VALOR.NUMERO, Number($1));
               $$.setLineaColumna( this._$.first_line , this._$.first_column);
             }
  | 'STRING' { $$ = new ValorBasico(TIPO_VALOR.CADENA, $1);
               $$.setLineaColumna( this._$.first_line , this._$.first_column);
             }
  | 'true'   { $$ = new ValorBasico(TIPO_VALOR.BOOLEANO, true);
               $$.setLineaColumna( this._$.first_line , this._$.first_column);
             }
  | 'false'  { $$ = new ValorBasico(TIPO_VALOR.BOOLEANO, false);
               $$.setLineaColumna( this._$.first_line , this._$.first_column);
             }
  | 'null'   { $$ = new ValorBasico(TIPO_VALOR.NULO, null);
               $$.setLineaColumna( this._$.first_line , this._$.first_column);
             }
  | ACCESO   { $$ = $1; }
  | LLAMADA
  | '(' CONDICION ')'
  ;

ACCESO : ACCESO_PRIMITIVO ACCESO_PRIMA { $$ = new Acceso($1,$2); }
       ;

ACCESO_PRIMITIVO : ID  {  $$ = new AccesoVariable($1);
                          $$.setLineaColumna( this._$.first_line , this._$.first_column);
                       }
                 | ID '[' CONDICION ']' PROFUNDIDAD  {  let profundidad = [$3];
                                                        if($5){ profundidad.push(...$5); }
                                                        $$ = new AccesoArreglo($1,profundidad);
                                                        $$.setLineaColumna( this._$.first_line , this._$.first_column);
                                                     }
                 ;

PROFUNDIDAD : '[' CONDICION ']' PROFUNDIDAD {  $$ = [$2]; if($4){ $$.push(...$4); }  }
            | /*VACIO*/ { $$ = null; }
            ;

ACCESO_PRIMA :  '.' ACCESO_PRIMITIVO ACCESO_PRIMA {  $$ = [$2]; if($3){ $$.push(...$3); }  }
             |  '.' 'length'
             |  '.' 'push' '(' CONDICION ')'
             |  '.' 'pop' '(' ')'
             | /*VACIO*/ { $$ = null; }
             ;
