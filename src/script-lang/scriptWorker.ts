import * as monaco from "monaco-editor-core";

import IWorkerContext = monaco.worker.IWorkerContext;
import ScriptService from "../language-service/LanguageService";
import { IScriptError } from "../language-service/ScriptErrorListener";


export class ScriptWorker {

    private _ctx: IWorkerContext;
    private languageService: ScriptService;
    constructor(ctx: IWorkerContext) {
        this._ctx = ctx;
        this.languageService = new ScriptService();
    }

    doValidation(): Promise<IScriptError[]> {
        const code = this.getTextDocument();
        return Promise.resolve(this.languageService.validate(code));
    }
    private getTextDocument(): string {
        const model = this._ctx.getMirrorModels()[0];// When there are multiple files open, this will be an array
        return model.getValue();
    }

}