//@ts-check
"use strict";

const { Request, Response, NextFunction } = require("express");
const clc = require("cli-color");

/**
 * @class
 * @classdesc logger manual, it could be changed following needs
 */
module.exports = class Logger {
	/**
	 * create a log everytime user hit api
	 * @param {Request} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 * @returns {void}
	 */
	log(req, res, next) {
		const timestamp = clc.cyan.bold(`[${new Date().toUTCString()}]`);

		const request = clc.italic.bold(
			JSON.stringify({
				body: req.body,
				params: req.params,
				query: req.query,
			})
		);
		let method;
		switch (req.method.toString().toLowerCase()) {
			case "get":
				method = clc.cyan.bold(
					`[${req.get("User-Agent")} | ${req.ip} | GET | ${clc.italic(
						req.url
					)}]`
				);
				break;
			case "post":
				method = clc.blue.bold(
					`[${req.get("User-Agent")} | ${
						req.ip
					} | POST | ${clc.italic(req.url)}]`
				);
				break;
			case "put":
				method = clc.blueBright.bold(
					`[${req.get("User-Agent")} | ${req.ip} | PUT | ${clc.italic(
						req.url
					)}]`
				);
				break;
			case "delete":
				method = clc.red.bold(
					`[${req.get("User-Agent")} | ${
						req.ip
					} | DELETE | ${clc.italic(req.url)}]`
				);
				break;
			default:
				method = clc.redBright.bold(
					`[${req.get("User-Agent")} | ${
						req.ip
					} | ${req.method.toUpperCase()} | ${clc.italic(req.url)}]`
				);
		}
		console.log(`${timestamp} ${method} [${request}]`);
		req._startRequest = performance.now();
		return next();
	}
};
