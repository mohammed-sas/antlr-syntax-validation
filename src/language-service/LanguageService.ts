
import { parseAndGetASTRoot, parseAndGetSyntaxErrors } from "./Parser";
import { IScriptError } from "./ScriptErrorListener";

export default class ScriptService {
    validate(code: string): IScriptError[] {
        const syntaxErrors: IScriptError[] = parseAndGetSyntaxErrors(code);
        //Later we will append semantic errors
        return syntaxErrors;
    }
}