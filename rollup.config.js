export default {
  input: "src/index.js",
  output: {
    file: "dist/mi-widget.esm.js",
    format: "es", // necesario para importarlo en Observable
    sourcemap: false
  }
}
