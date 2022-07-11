import * as worker from 'monaco-editor-core/esm/vs/editor/editor.worker';
import { ScriptWorker } from './scriptWorker';

self.onmessage = () => {
	worker.initialize((ctx) => {
		return new ScriptWorker(ctx)
	});
};