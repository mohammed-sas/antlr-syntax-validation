grammar ScriptGrammar;

start
 : statement* EOF
 ;

function_block
 : data_type function_name_declare OPEN_PARANTHESIS (function_param)*(COMMA function_param)* CLOSE_PARANTHESIS OPEN_BRACE block CLOSE_BRACE 
 ;
 
function_name_declare: VAR ;

function_param: data_type VAR ;


 
 block
 : statement*
 ;
 
try_catch
 : TRY OPEN_BRACE try_statement* CLOSE_BRACE CATCH OPEN_BRACE catch_statement* CLOSE_BRACE
 ; 
 
try_statement
 :statement
 ;
 
catch_statement
 :statement
 ;

statement
 : assignment
 | if_statement
 | for_each_statement
 | log
 | stand_alone_expr SEMICOLON
 | function_return
 | try_catch
 | function_block
 | OTHER {System.err.println("unknown char: " + $OTHER.text);}
 ;

assignment
 : assignment_var ASSIGN expr SEMICOLON
 ;

assignment_var
 : VAR																			#assignSingleVar
 | VAR (OPEN_BRACKET expr CLOSE_BRACKET)										#assignSingleBracketVar
 | VAR(DOT VAR)+																#assignMultiDotVar
 ;

if_statement
 : IF condition_block (ELSE IF condition_block)* (ELSE statement_block)?
 ;

condition_block
 : boolean_expr statement_block
 ;

statement_block
 : OPEN_BRACE block CLOSE_BRACE
 | statement
 ;
 
for_each_statement
 : FOR_EACH VAR(COMMA VAR)* 'in' expr statement_block
 ;

log
 : LOG expr SEMICOLON
 ;
 
function_return
 : RETURN expr SEMICOLON
 ;
 
 boolean_expr
 : OPEN_PARANTHESIS boolean_expr_atom CLOSE_PARANTHESIS									
 ;
 
boolean_expr_atom																				
 : expr																												#exprForBoolean		
 | boolean_expr_atom op=(AND | OR) boolean_expr_atom																#booleanExprCalculation							
 | OPEN_PARANTHESIS boolean_expr_atom CLOSE_PARANTHESIS																#boolExprParanthesis
 ;
 
expr
 : MINUS expr                           																			#unaryMinusExpr
 | NOT expr                             																			#notExpr
 | expr op=(MULT | DIV | MOD) expr  	    																		#arithmeticFirstPrecedenceExpr
 | expr op=(PLUS | MINUS) expr  	    																			#arithmeticSecondPrecedenceExpr
 | expr op=(LTEQ | GTEQ | LT | GT | EQ | NEQ) expr     			    												#relationalExpr
 | expr op=(SINGLE_AND | SINGLE_OR) expr																			#booleanExpr
 | atom                                				    															#atomExpr
 | calender_clock_expr																								#calClockExpr
 | stand_alone_expr																									#standAloneStatements
 | db_param																											#dbParamInitialization
 | criteria																											#criteriaInitialization
 ;
 
stand_alone_expr
 : atom (recursive_expression)+																						#recursive_expr
 ;
 
calender_clock_expr
 : 'Calender.' calender_var																							#calenderExpr
 | 'Clock.' clock_var																								#clockExpr	
 ;
 
calender_var
 : VAR
 | INT
 ;
 
clock_var
 : VAR
 | INT
 | INT ':' INT
 ;
 
recursive_expression
 : '.' VAR OPEN_PARANTHESIS (expr)*(COMMA expr)* CLOSE_PARANTHESIS
 | '.' VAR
 | OPEN_BRACKET atom CLOSE_BRACKET
 ;													

atom
 : OPEN_PARANTHESIS expr CLOSE_PARANTHESIS 												#paranthesisExpr
 | (INT | FLOAT)  																		#numberAtom
 | (TRUE | FALSE) 																		#booleanAtom
 | STRING         																		#stringAtom
 | NULL           						    											#nullAtom
 | VAR           						    											#varAtom
 | 'new ' VAR OPEN_PARANTHESIS (expr)*(COMMA expr)* CLOSE_PARANTHESIS 					#newKeywordIntitialization
 | 'Module' OPEN_PARANTHESIS expr CLOSE_PARANTHESIS										#customModuleInitialization
 | 'Reading' OPEN_PARANTHESIS expr ',' expr CLOSE_PARANTHESIS							#readingInitialization
 | VAR OPEN_PARANTHESIS (expr)*(COMMA expr)* CLOSE_PARANTHESIS							#moduleAndSystemNameSpaceInitialization
 | list_opperations																		#listOpp
 | map_opperations																		#mapOpps
 ;
 
list_opperations
 : (OPEN_BRACKET CLOSE_BRACKET)+														#listInitialisation
 | OPEN_BRACKET (atom)+(COMMA atom)* CLOSE_BRACKET										#listInitialisationWithElements
 ;
 
map_opperations
 : (OPEN_BRACE CLOSE_BRACE)+															#mapInitialisation
 ;	

db_param
 : OPEN_BRACE db_param_criteria (db_param_group)* CLOSE_BRACE
 ;
 
db_param_group
 : db_param_field
 | db_param_field_criteria
 | db_param_aggr
 | db_param_limit
 | db_param_range
 | db_param_group_by
 | db_param_sort
 ;
 
db_param_criteria
 : 'criteria' COLON expr (COMMA)*
 ;
 
db_param_field_criteria
 : 'fieldCriteria' COLON criteria (COMMA)*
 ;

db_param_field
 : 'field' COLON expr (COMMA)*
 ;
 
db_param_aggr
 : 'aggregation' COLON expr (COMMA)*
 ;
 
db_param_limit
 : 'limit' COLON expr (COMMA)*
 ;
 
db_param_range
 : 'range' COLON expr 'to' expr (COMMA)*
 ;
 
db_param_group_by
 : 'groupBy' COLON expr (COMMA)*
 ;
 
db_param_sort
 : 'orderBy' COLON expr op=('asc' | 'desc') (COMMA)*
 ;
 
criteria
 : OPEN_BRACKET condition CLOSE_BRACKET									
 ;
 
condition																				
 : condition_atom																		
 | condition op=(AND | OR) condition													
 | OPEN_PARANTHESIS condition CLOSE_PARANTHESIS											
 ;
 
condition_atom
 : VAR op=(LTEQ | GTEQ | LT | GT | EQ | NEQ) expr
 ;
 data_type
 : op=(VOID | DATA_TYPE_STRING | DATA_TYPE_NUMBER | DATA_TYPE_BOOLEAN | DATA_TYPE_MAP | DATA_TYPE_LIST | DATA_TYPE_CRITERIA | DATA_TYPE_OBJECT)
 ;
VOID : 'void';
DATA_TYPE_STRING : 'String';
DATA_TYPE_NUMBER : 'Number';
DATA_TYPE_BOOLEAN : 'Boolean';
DATA_TYPE_MAP : 'Map';
DATA_TYPE_LIST : 'List';
DATA_TYPE_CRITERIA : 'Criteria';
DATA_TYPE_OBJECT : 'Object';
RETURN : 'return';

TRY : 'try';
CATCH : 'catch';
  
OR : '||';
SINGLE_OR : '|';
DOT : '.';
AND : '&&';
SINGLE_AND : '&';
EQ : '==';
NEQ : '!=';
GT : '>';
LT : '<';
GTEQ : '>=';
LTEQ : '<=';
PLUS : '+';
MINUS : '-';
MULT : '*';
DIV : '/';
MOD : '%';
POW : '^';
NOT : '!';
COMMA : ',';

SEMICOLON : ';';
COLON : ':';
ASSIGN : '=';
OPEN_PARANTHESIS : '(';
CLOSE_PARANTHESIS : ')';
OPEN_BRACE : '{';
CLOSE_BRACE : '}';
OPEN_BRACKET : '[';
CLOSE_BRACKET : ']';

TRUE : 'true';
FALSE : 'false';
NULL : 'null';
IF : 'if';
ELSE : 'else';
FOR_EACH : 'for each';
LOG : 'log';

VAR : [a-zA-Z_] [a-zA-Z_0-9]*;
 
INT : [0-9]+;

FLOAT : [0-9]+ '.' [0-9]* | '.' [0-9]+;

fragment ESCAPED_QUOTE : '\\"';
STRING :   '"' ( ESCAPED_QUOTE | ~('\n'|'\r') )*? '"';

COMMENT : '//' ~[\r\n]* -> skip ;

BLOCKCOMMENT 
    : '/*' .*? '*/' -> skip
    ;

SPACE : [ \t\r\n] -> skip ;

OTHER : . ;