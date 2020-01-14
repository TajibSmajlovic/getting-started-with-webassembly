// Wrap C _greet as a JS function
// const greet = cwrap("greet", "string", [ "string" ]);
// const play = cwrap("play", "number", [ "number" ]);

// function playing(n) {
// 	for (let i = 0; i < n; n--) {
// 		console.log(n);
// 	}
// }

Module["onRuntimeInitialized"] = () => {
	console.log("Runtime Ready");
	console.log(UTF8ToString(_getStr()));
};
