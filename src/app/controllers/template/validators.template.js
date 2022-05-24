// @ts-check
"use strict";

const Joi = require("joi");
const HttpExpection = require("../../errors/HttpExpection");
const { Logger } = require("../../utils");
const logger = new Logger();
/**
 * @typedef {import('./interfaces.template.js').IGetValidatorInputReturn} IGetValidatorInputReturn
 * @typedef {import('./interfaces.template.js').IGetByIdParamsValidatorInputReturn} IGetByIdParamsValidatorInputReturn
 * @typedef {import('./interfaces.template.js').IPostValidatorInputReturn} IPostValidatorInputReturn
 * @typedef {import('./interfaces.template.js').IPutValidatorInputReturn} IPutValidatorInputReturn
 */

/**
 * @class
 * @classdesc template input validator
 */
module.exports = class validatorsTemplate {
	/**
	 * get by id params validator input template
	 * @param {*} payload
	 * @returns {IGetByIdParamsValidatorInputReturn}
	 */
	deleteValidatorinput(payload) {
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
