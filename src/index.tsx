import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {setupLanguage} from "./script-lang/setup";
import { Editor } from './Components/Editor/Editor';
import { languageID } from './script-lang/config';


setupLanguage();
const App = () => <Editor language={languageID}></Editor>;

const rootElement = document.getElementById('container')
const root = createRoot(rootElement);
root.render(<App/>, );