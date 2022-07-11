import * as monaco from "monaco-editor-core";

import Uri = monaco.Uri;
import { ScriptWorker } from './scriptWorker';
import { languageID } from './config';

export class WorkerManager {

	private worker: monaco.editor.MonacoWebWorker<ScriptWorker>;
	private workerClientProxy: Promise<ScriptWorker>;

	constructor() {
		this.worker = null;
	}

	private getClientproxy(): Promise<ScriptWorker> {

		if (!this.workerClientProxy) {
			this.worker = monaco.editor.createWebWorker<ScriptWorker>({
				// module that exports the create() method and returns a `JSONWorker` instance
				moduleId: 'ScriptWorker',
				label: languageID,
				// passed in to the create() method
				createData: {
					languageId: languageID,
				}
			});

			this.workerClientProxy = <Promise<ScriptWorker>><any>this.worker.getProxy();
		}

		return this.workerClientProxy;
	}

	async getLanguageServiceWorker(...resources: Uri[]): Promise<ScriptWorker> {
		const _client: ScriptWorker = await this.getClientproxy();
		await this.worker.withSyncedResources(resources)
		return _client;
	}
}