// @ts-check
"use strict";

const Joi = require("joi");
const HttpExpection = require("../../../../../errors/HttpExpection");
const { Logger } = require("../../../../../utils");
const logger = new Logger();
/**
 * @typedef {import('../get.interfaces.template/get.interfaces.template').IGetValidatorInputReturn} IGetValidatorInputReturn
 * @typedef {import('../get.interfaces.template/get.interfaces.template').IGetByIdParamsValidatorInputReturn} IGetByIdParamsValidatorInputReturn
 */

/**
 * @class
 * @classdesc template input validator
 */
module.exports = class validatorsTemplate {
	/**
	 * Get validator input template
	 * @param {*} payload
	 * @returns {IGetValidatorInputReturn}
	 */
	getValidatorinput(payload) {
		const trace = logger.startTrace(new Error(), +payload.query.trace);
		const schema = Joi.object({
			debug: Joi.number().valid(1).optional(),
			trace: Joi.number().valid(1).optional(),
		});

		const validate = schema.validate({
			debug: payload.query.debug,
			trace: payload.query.trace,
		});

		if (validate.error) {
			throw new HttpExpection(400, {
				message: "Fail to Validate",
				data: validate.value,
			});
		}

		logger.endTrace(trace, +payload.query.trace);
		return validate.value;
	}

	/**
	 * get by id params validator input template
	 * @param {*} payload
	 * @returns {IGetByIdParamsValidatorInputReturn}
	 */
	getByIdParamsValidatorinput(payload) {
		const trace = logger.startTrace(new Error(), +payload.query.trace);
		const schema = Joi.object({
			debug: Joi.number().valid(1).optional(),
			trace: Joi.number().valid(1).optional(),
			id: Joi.number().required(),
		});

		const validate = schema.validate({
			debug: payload.query.debug,
			trace: payload.query.trace,
			id: payload.params.id,
		});

		if (validate.error) {
			throw new HttpExpection(400, {
				message: "Fail to Validate",
				data: validate.value,
			});
		}

		logger.endTrace(trace, +payload.query.trace);
		return validate.value;
	}
};
