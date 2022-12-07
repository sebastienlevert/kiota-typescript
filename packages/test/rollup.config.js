/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
 import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

const config = [{
    input: ["dist/es/tests/index.js"],
    output: {
        file: "rolledUpFile.js",
        format: "esm",
        name: "BrowserTest",
    },
    plugins: [
        commonjs(),
        resolve({
            browser: true,
            preferBuiltins: false,

        }),
        //terser()
    ],
}];

export default config;