// @ts-check
"use strict";

const { Application } = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./errors");
const routes = require("./routes");

/**
 * default export express modules and middleware
 * @param {Application} app
 * @returns {void}
 */
module.exports = (app) => {
	// Middleware
	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	// Api Handling
	Object.keys(routes).forEach((key) => {
		app.use("/", routes[key]);
	});

	// Error Handling
	app.use(errorHandler);

	// Unhandling Rejection Expection
	process.on(
		"unhandledRejection",
		/**
		 *
		 * @param {string} reason
		 * @param {Promise<any>} p
		 */
		(reason, p) => {
			console.log(p);
			throw reason;
		}
	);

	process.on(
		"uncaughtException",
		/**
		 *
		 * @param {Error} error
		 */
		(error) => {
			console.log(error);
			process.exit(1);
		}
	);
};
