// @ts-check
"use strict";

const Joi = require("joi");
const { Logger } = require("../../../../../utils");
const logger = new Logger();
/**
 * @typedef {import('../put.interfaces.template/put.interfaces.template').IPutValidatorOutputReturn} IPutValidatorOutputReturn
 */

/**
 * @class
 * @classdesc template input validator
 */
module.exports = class PutOutputValidatorsTemplate {
	/**
	 * validating body and request parameters, also cofigure the inputs
	 * @param {boolean} status
	 * @param {number} traceIt
	 * @param {string} [message]
	 * @returns {IPutValidatorOutputReturn}
	 */
	putValidatorinput(status, traceIt, message) {
		const trace = logger.startTrace(new Error(), +traceIt);

		logger.endTrace(trace, +traceIt);
		return {
			success: status,
			message,
			data: {},
		};
	}
};
