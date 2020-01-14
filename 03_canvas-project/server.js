const express = require("express");

const app = express();

app.use(
	express.static(__dirname, {
		setHeaders: (res, path, start) => {
			if (path.endsWith(".wasm")) {
				res.set("Content-Type", "application/wasm");
			}
		}
	})
);
app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

app.listen(1234, () => console.log("Server is UP!"));
