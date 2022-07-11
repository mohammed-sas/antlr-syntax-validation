const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    resolve:{
        fallback:{
            "assert":require.resolve("assert/")
        }
    },
    entry: {
        app: './src/index.tsx',
        "editor.worker": 'monaco-editor-core/esm/vs/editor/editor.worker.js',
        "scriptWorker": './src/script-lang/script.worker.ts'
    },
    output: {
        globalObject: 'self',
        filename: (chunkData) => {
            switch (chunkData.chunk.name) {
                case 'editor.worker':
                    return 'editor.worker.js';
                case 'scriptWorker':
                    return "scriptWorker.js"
                default:
                    return 'bundle.[hash].js';
            }
        },
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'ts-loader'
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            process:'process/browser'
        })
    ]
}