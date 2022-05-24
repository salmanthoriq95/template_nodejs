// @ts-check
"use strict";

const Joi = require("joi");
const { Logger } = require("../../../../../utils");
const logger = new Logger();
/**
 * @typedef {import('../post.interfaces.template/post.interfaces.template').IPostValidatorOutputReturn} IPostValidatorOutputReturn
 */

/**
 * @class
 * @classdesc template input validator
 */
module.exports = class OutputValidatorsTemplate {
	/**
	 * validating body and request parameters, also cofigure the inputs
	 * @param {boolean} status
	 * @param {number} traceIt
	 * @param {string} [message]
	 * @returns {IPostValidatorOutputReturn}
	 */
	postValidatorinput(status, traceIt, message) {
		const trace = logger.startTrace(new Error(), +traceIt);

		logger.endTrace(trace, +traceIt);
		return {
			success: status,
			message,
			data: {},
		};
	}
};
