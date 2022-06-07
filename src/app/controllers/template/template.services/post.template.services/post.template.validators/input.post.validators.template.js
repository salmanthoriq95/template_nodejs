// @ts-check
"use strict";

const Joi = require("joi");
const HttpExpection = require("../../../../../errors/HttpExpection");
const { Logger } = require("../../../../../utils");
const logger = new Logger();
/**
 * @typedef {import('../post.interfaces.template/post.interfaces.template').IPostValidatorInputReturn} IPostValidatorInputReturn
 */

/**
 * @class
 * @classdesc template input validator
 */
module.exports = class PostValidatorsTemplate {
	/**
	 * validating body and request parameters, also cofigure the inputs
	 * @param {*} payload
	 * @returns {IPostValidatorInputReturn}
	 */
	postValidatorinput(payload) {
		const trace = logger.startTrace(new Error(), +payload.query.trace);
		const schema = Joi.object({
			debug: Joi.number().valid(1).optional(),
			trace: Joi.number().valid(1).optional(),
			title: Joi.string().required(),
			content: Joi.string().required(),
			author: Joi.string().required(),
		});

		const validate = schema.validate({
			debug: payload.query.debug,
			trace: payload.query.trace,
			title: payload.body.title,
			content: payload.body.content,
			author: payload.body.author,
		});

		if (validate.error) {
			throw new HttpExpection(400, {
				message: "Fail to Validate",
				data: validate.value,
			});
		}

		const returnedDataFormat = {
			trace: validate.value.trace,
			debug: validate.value.debug,
			data: {
				title: validate.value.title,
				content: validate.value.content,
				author: validate.value.author,
			},
		};

		logger.endTrace(trace, +payload.query.trace);
		return returnedDataFormat;
	}
};
