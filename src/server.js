// @ts-check
"use strict";

const express = require("express");
const config = require("./app/config");
const loaderApp = require("./app");

const app = express();

// Load App
loaderApp(app);

app.listen(+config.app.PORT, config.app.HOST, () => {
	console.log(`Server listen on PORT ${config.app.PORT}`);
});
