// @ts-check
"use strict";

const { NextFunction, Request, Response } = require("express");
const { Logger } = require("../utils");

const logger = new Logger();
/**
 * @typedef IErrorResponse
 * @type {object}
 * @property {string} name
 * @property {string} message
 * @property {string} [stack]
 * @property {string} [data]
 */

/**
 * Default Error handler, please pass param debug=1 if you want return an error message
 * @param {*} error
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {*}
 */
module.exports = (error, req, res, next) => {
	/**
	 * @type {IErrorResponse}
	 */
	const errorResponse = {
		name: error.name,
		message: error.message,
		data: error.data,
	};

	// TODO : console name that fn broken
	logger.errorLog(
		req.url,
		req.method,
		req.headers["user-agent"],
		req.ip,
		errorResponse
	);

	if (req.query.debug === "1") errorResponse.stack = error.stack;

	if (error.name === "HttpExpection") {
		return res.status(error.statusCode).json(errorResponse);
	}

	return res.status(500).json(
		req.query.debug === "1"
			? errorResponse
			: {
					name: "Internal Server Error",
					message: "Please contact administrator",
			  }
	);
};

