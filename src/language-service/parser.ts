import {
  ScriptGrammarParser,
  StartContext,
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
  const ast = parser.start();
  console.log(ast);
  const errors: IScriptError[] = scriptErrorListeners.getErrors();
  return { ast, errors };
}
export function parseAndGetASTRoot(code: string): StartContext {
  const { ast } = parse(code);
  return ast;
}
export function parseAndGetSyntaxErrors(code: string): IScriptError[] {
  const { errors } = parse(code);
  return errors;
}
