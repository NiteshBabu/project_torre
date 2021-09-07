const config = require("./config/config");
const express = require("express");
const request = require("request");
const cors = require("cors");
const path = require("path");
const app = express();
const port = config.port;

// use cors for cors handling
app.use(cors());

// set path for static files
app.use(express.static(path.join(__dirname, "/build")));

// proxy to bypass the api request from here
app.use("/proxy/bios", function (req, res) {
	let url = config.apiUrlBios + req.url;
	req.pipe(request({ uri: url })).pipe(res);
});
app.use("/proxy/jobs", function (req, res) {
	let url = config.apiUrlJobs + req.url;
	req.pipe(request({ uri: url })).pipe(res);
});

app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
	console.log(`On Port ${port}`);
});
