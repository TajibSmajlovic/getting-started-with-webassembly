const express = require("express");

const app = express();

app.use(
	express.static(__dirname, {
		// This is not needed, express do this BTS
		setHeaders: (res, path, start) => {
			// Serve .wasm files with correct mime type
			if (path.endsWith(".wasm")) {
				res.set("Content-Type", "application/wasm");
			}
		}
	})
);
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(2222, () => console.log("Server is UP!"));
