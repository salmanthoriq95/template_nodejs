//@ts-check
"use strict";

// eslint-disable-next-line no-unused-vars
const { Request, Response, NextFunction } = require("express");

const validators = require("./validators");
const services = require("./services");

/**
 * hello this is get root
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
module.exports.getController = async (req, res, next) => {
	try {
		// validating and formatting inputs
		const validateResult = validators.getValidator(req);
		// service
		const serviceResult = await services.getService(validateResult);
		return res.status(200).send(serviceResult);
	} catch (error) {
		next(error);
	}
};
