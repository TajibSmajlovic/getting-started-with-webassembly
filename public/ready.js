// Wrap C _greet as a JS function
const greet = cwrap("greet", "string", [ "string" ]);
