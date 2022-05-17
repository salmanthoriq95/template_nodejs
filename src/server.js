// @ts-check
"use strict";

// import express
const express = require("express");

// coloring terminal
const clc = require("cli-color");

// Environment variables
const path = require("path");
const envName = !process.env.ENV_NAME ? "PROD" : `${process.env.ENV_NAME}`;
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, `../env/${envName}.env`) });

const config = require("./app/config");
const loaderApp = require("./app");

const app = express();

// Load App
loaderApp(app);

app.listen(+config.app.PORT, () => {
	console.log(
		`${clc.bgBlue(
			clc.white.bold(`[${config.app.HOST}] : ${config.app.PORT}`)
		)}-${clc.bgBlue(new Date().toUTCString())} ${clc.whiteBright.bold(
			"is Running"
		)}`
	);
});
