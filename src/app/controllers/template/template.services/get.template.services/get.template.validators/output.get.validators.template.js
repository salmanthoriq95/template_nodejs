// @ts-check
"use strict";

const { Logger } = require("../../../../../utils");
const logger = new Logger();
/**
 * @typedef {import('../get.interfaces.template/get.interfaces.template').IGetValidatorOutputReturn} IGetValidatorOutputReturn
 * @typedef {import('../get.interfaces.template/get.interfaces.template').IGetDataServiceResult} IGetDataServiceResult
 * @typedef {import('../get.interfaces.template/get.interfaces.template').IGetByIdParamsValidatorInputReturn} IGetByIdParamsValidatorInputReturn
 */

/**
 * @class
 * @classdesc template input validator
 */
module.exports = class validatorsTemplate {
	/**
	 * Get validator input template
	 * @param {Array<IGetDataServiceResult>} datas
	 * @param {number} traceIt
	 * @param {string} [message]
	 * @returns {IGetValidatorOutputReturn}
	 */
	getValidatorOutput(datas, traceIt, message) {
		const trace = logger.startTrace(new Error(), +traceIt);

		logger.endTrace(trace, +traceIt);
		return {
			success: true,
			message,
			data: datas,
		};
	}

	/**
	 * get by id params validator input template
	 * @param {IGetDataServiceResult} data
	 * @param {number} traceIt
	 * @param {string} [message]
	 * @returns {IGetValidatorOutputReturn}
	 */
	getByIdParamsValidatorOutput(data, traceIt, message) {
		const trace = logger.startTrace(new Error(), +traceIt);

		logger.endTrace(trace, +traceIt);
		return {
			success: true,
			message,
			data,
		};
	}
};
