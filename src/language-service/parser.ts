import {
  ScriptGrammarParser,
  StartContext,
  Function_blockContext,
  Function_name_declareContext,
  Function_paramContext,
  BlockContext,
  Try_catchContext,
  Try_statementContext,
  Catch_statementContext,
  StatementContext,
  AssignmentContext,
  AssignSingleVarContext,
  If_statementContext,
  Condition_blockContext,
  Statement_blockContext,
  For_each_statementContext,
  LogContext,
  Function_returnContext,
  Boolean_exprContext,
  Boolean_expr_atomContext,
  ExprContext,
  Stand_alone_exprContext,
  Calender_clock_exprContext,
  Calender_varContext,
  Clock_varContext,
  Recursive_expressionContext,
  AtomContext,
  List_opperationsContext,
  Map_opperationsContext,
} from "../ANTLR/ScriptGrammarParser";
import { ScriptGrammarLexer } from "../ANTLR/ScriptGrammarLexer";
import { CommonTokenStream, CharStreams } from "antlr4ts";
import ScriptErrorListener, { IScriptError } from "./ScriptErrorListener";

function parse(code: string): {
  ast: StartContext;
  errors: IScriptError[];
} {
  const inputStream = CharStreams.fromString(code);
  const lexer = new ScriptGrammarLexer(inputStream);
  lexer.removeErrorListeners();
  const scriptErrorListeners = new ScriptErrorListener();
  lexer.addErrorListener(scriptErrorListeners);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ScriptGrammarParser(tokenStream);
  parser.removeErrorListeners();
  parser.addErrorListener(scriptErrorListeners);
  const ast = parser.start() ;
  console.log(ast);
  const errors: IScriptError[] = scriptErrorListeners.getErrors();
  return { ast, errors };
}
export function parseAndGetASTRoot(
  code: string
): StartContext {
  const { ast } = parse(code);
  return ast;
}
export function parseAndGetSyntaxErrors(code: string): IScriptError[] {
  const { errors } = parse(code);
  return errors;
}
