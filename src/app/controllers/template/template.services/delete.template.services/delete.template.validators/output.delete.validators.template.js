// @ts-check
"use strict";

const { Logger } = require("../../../../../utils");
const logger = new Logger();
/**
 * @typedef {import('../delete.interfaces.template/delete.interfaces.template').IDeleteValidatorOutputReturn} IDeleteValidatorOutputReturn
 */

/**
 * @class
 * @classdesc template input validator
 */
module.exports = class DeleteValidatorsTemplate {
	/**
	 * validating body and request parameters, also cofigure the inputs
	 * @param {boolean} status
	 * @param {number} traceIt
	 * @param {string} [message]
	 * @returns {IDeleteValidatorOutputReturn}
	 */
	deleteValidatorOutput(status, traceIt, message) {
		const trace = logger.startTrace(new Error(), +traceIt);

		logger.endTrace(trace, +traceIt);
		return {
			success: status,
			message,
			data: {},
		};
	}
};
