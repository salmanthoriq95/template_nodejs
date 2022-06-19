//@ts-check
"use strict";

// eslint-disable-next-line no-unused-vars
const { Request, Response, NextFunction } = require("express");

const validators = require("./validators");
const services = require("./services");
const returnFormatter = require("../../utilities/return.formatter");

/**
 * hello this is get root
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
module.exports.getController = (req, res, next) => {
	try {
		// validating and formatting inputs
		const validateResult = validators.getValidator(req);
		// service
		const serviceResult = services.getService(validateResult);
		// return formatting
		const formatted = returnFormatter(serviceResult);
		return res.status(200).send(formatted);
	} catch (error) {
		next(error);
	}
};
