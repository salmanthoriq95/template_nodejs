// @ts-check
"use strict";

const Joi = require("joi");
const HttpException = require("../../errors/HttpExpection");
const { Tracer } = require("../../utils");
const tracer = new Tracer();
/**
 * @typedef {import('./interfaces.template.js').IGetValidatorInputReturn} IGetValidatorInputReturn
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
		const trace = tracer.startTrace(new Error(), +payload.query.trace);
		const schema = Joi.object({
			debug: Joi.number().valid(1).optional(),
			trace: Joi.number().valid(1).optional(),
		});

		const validate = schema.validate({
			debug: payload.query.debug,
			trace: payload.query.trace,
		});

		if (validate.error) {
			throw new HttpException(400, {
				message: "Fail to Validate",
				data: validate.value,
			});
		}

		tracer.endTrace(trace, +payload.query.trace);
		return validate.value;
	}
};
