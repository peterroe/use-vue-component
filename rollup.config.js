import { terser } from "rollup-plugin-terser";

export default {
    input: "./index.js",
    output: {
        file: 'dist/uvc.esm.js',
        format: "esm",
    },
    plugins: [
        terser({ compress: { drop_console: true } })
    ]
}