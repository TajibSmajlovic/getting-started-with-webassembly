// Initialise wasm with custom memory (array buffer)
// 2 pages: 2 * 64kb
const wasmMemory = new WebAssembly.Memory({ initial: 2 });

// Read a string out of Web Assembly memory
const readMemoryString = (offset, lenght) => {
	// const stringBuffer = new Uint8Array(wasm.instance.exports.memory.buffer, offset, lenght);
	const stringBuffer = new Uint8Array(wasmMemory.buffer, offset, lenght);
	const str = new TextDecoder().decode(stringBuffer);

	// Notify and make use of new string
	window.dispatchEvent(new CustomEvent("wasmValue", { detail: str }));
};

// Listen for new wasm strings
window.addEventListener("wasmValue", (str) => console.log("Received a new string from C:", str.detail));

// Imports object
const imports = {
	env: {
		numLog: console.log,
		stringLog: readMemoryString,
		memory: wasmMemory
	}
};

// Load WASM
WebAssembly.instantiateStreaming(fetch("main.wasm"), imports).then((wasm) => {
	// Make the wasm object accessible
	window.wasm = wasm;

	// Log out all exported functions
	console.log(WebAssembly.Module.exports(wasm.module));

	// Log out all imported functions
	console.log(WebAssembly.Module.imports(wasm.module));

	// getDoubleNumber function is called
	wasm.instance.exports.getDoubleNumber(66);

	// greet()
	wasm.instance.exports.greet();
});
