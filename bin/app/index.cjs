// @ts-check
"use strict";

const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./errors/index.cjs");
const routes = require("./routes/index.cjs");
const Logger = require("./utils/logger.cjs");

const logger = new Logger();

/**
 * default export express modules and middleware
 * @param {any} app
 * @returns {void}
 */
module.exports = (app) => {
	// Middleware
	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	// Logger
	// app.set("trust proxy", true);
	app.use(logger.log);

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
			logger.fatalLog(error);
			process.exit(1);
		}
	);

	// closing the app gracefully
	const gracefulShutdownHandler = () => {
		process.exit();
	};
	process.on("SIGINT", gracefulShutdownHandler);
	process.on("SIGTERM", gracefulShutdownHandler);
};
