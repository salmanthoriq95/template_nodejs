// @ts-check
"use strict";

const Joi = require("joi");
const HttpException = require("../../errors/HttpExpection");
const { Tracer } = require("../../utils");
const tracer = new Tracer();
/**
 * @typedef {import('./interfaces.template.js').IGetValidatorInputReturn} IGetValidatorInputReturn
 * @typedef {import('./interfaces.template.js').IGetByIdParamsValidatorInputReturn} IGetByIdParamsValidatorInputReturn
 * @typedef {import('./interfaces.template.js').IPostValidatorInputReturn} IPostValidatorInputReturn
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

	/**
	 * get by id params validator input template
	 * @param {*} payload
	 * @returns {IGetByIdParamsValidatorInputReturn}
	 */
	getByIdParamsValidatorinput(payload) {
		const trace = tracer.startTrace(new Error(), +payload.query.trace);
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
			throw new HttpException(400, {
				message: "Fail to Validate",
				data: validate.value,
			});
		}

		tracer.endTrace(trace, +payload.query.trace);
		return validate.value;
	}

	/**
	 *
	 * @param {*} payload
	 * @returns {IPostValidatorInputReturn}
	 */
	postValidatorinput(payload) {
		const trace = tracer.startTrace(new Error(), +payload.query.trace);
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
			throw new HttpException(400, {
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

		tracer.endTrace(trace, +payload.query.trace);
		return returnedDataFormat;
	}
};
