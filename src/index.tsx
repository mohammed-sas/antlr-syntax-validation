import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {setupLanguage} from "./script-lang/setup";
// @ts-ignore
import { Editor } from './components/Editor/Editor.tsx';
import { languageID } from './script-lang/config';
import { parseAndGetSyntaxErrors, parseAndGetASTRoot } from './language-service/Parser';

setupLanguage();
const App = () => <Editor language={languageID}></Editor>;

const rootElement = document.getElementById('container')
const root = createRoot(rootElement);
root.render(<App/>, );