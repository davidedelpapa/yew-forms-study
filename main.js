import init, { run_app } from "./pkg/yew_devenv.js";
import { __compiled } from "./src/js/version.js";

// Add compilation time
console.log("WASM program compiled: " + __compiled());

async function main() {
  await init("/pkg/yew_devenv_bg.wasm");
  run_app();
}
main();
