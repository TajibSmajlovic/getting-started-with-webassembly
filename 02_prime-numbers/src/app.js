const primes = 400000;

const isPrime = (n) => {
	for (let i = 2; i < n; i++) if (n % i === 0) return false;

	return n !== 1 && n !== 0;
};

const checkPrimes = (n) => {
	let count = 0;

	for (let i = 0; i < n; i++) {
		if (isPrime(i)) count++;
	}

	return count;
};

// Check both JS and Cpp once WASM is ready
Module["onRuntimeInitialized"] = () => {
	// Check JS
	let jsStart = performance.now();
	let jsPrimes = checkPrimes(primes);

	console.log("JS:", jsPrimes, Math.round(performance.now() - jsStart) / 1000);

	// Check Cpp
	let cppStart = performance.now();
	let cppPrimes = _checkPrimes(primes);

	console.log("C++:", cppPrimes, Math.round(performance.now() - cppStart) / 1000);
};
