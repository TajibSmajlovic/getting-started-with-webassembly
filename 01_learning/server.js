const express = require("express");

const app = express();

app.use(
	express.static("public", {
		// This is not needed, express do this BTS
		setHeaders: (res, path, start) => {
			// Serve .wasm files with correct mime type
			if (path.endsWith(".wasm")) {
				res.set("Content-Type", "application/wasm");
			}
		}
	})
);

app.listen(2222, () => console.log("Server is UP!"));
