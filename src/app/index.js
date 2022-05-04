// @ts-check
"use strict";

import { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import errorHandler from "./errors";
import routes from "./routes";

/**
 * default export express modules and middleware
 * @param {Application} app
 * @returns {void}
 */
export default (app) => {
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
