// Create canvas context
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Render circles on canvas
const render = (dataLenght, circlesStructSize) => {
	console.log("Data length" + dataLenght);

	// Get circles on canvas
	// !IMPORTANT -> use only 'buffer' instead Module.buffer
	let circles = new Int32Array(buffer, _getCircles(canvas.width, canvas.height), dataLenght);
	// console.log(circles, "circles added!");

	// Clear existing canvas to re-render
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Loop data and get circles
	for (let i = 0; i < circles.length; i += circlesStructSize) {
		let circle = circles.slice(i, i + circlesStructSize);

		// Draw circle
		context.beginPath();
		context.arc(circle[0], circle[1], circle[2], 0, 2 * Math.PI, false);
		context.fillStyle = `rgb(${circle[3]}, ${circle[4]}, ${circle[5]})`;
		context.fill();
	}

	// console.log("Rendered!");

	// Request next animation frame and re-render with updated circles
	window.requestAnimationFrame(() => render(dataLenght, circlesStructSize));
};
