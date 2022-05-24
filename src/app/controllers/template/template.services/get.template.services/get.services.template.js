// @ts-check
"use strict";

const { Logger } = require("../../../../utils");
const logger = new Logger();

const Queries = require("../../../../DbInterface/mySql/queries/queries.template");
const query = new Queries();

const HttpExpection = require("../../../../errors/HttpExpection");

/**
 * @typedef {import('./get.interfaces.template/get.interfaces.template').IGetValidatorInputReturn} IGetValidatorInputReturn
 * @typedef {import('./get.interfaces.template/get.interfaces.template').IGetByIdParamsValidatorInputReturn} IGetByIdParamsValidatorInputReturn
 */

/**
 * @class
 * @classdesc Template Create The Class
 */
module.exports = class GetTemplateServices {
	/**
	 * get method templateS
	 * @param {IGetValidatorInputReturn} payload
	 * @returns {Promise<*>}
	 */
	async getTemplateService(payload) {
		const trace = logger.startTrace(new Error(), +payload.trace);

		const result = await query.getAllQueryTemplate(+payload.trace);

		logger.endTrace(trace, +payload.trace);
		return result;
	}

	/**
	 * get by id params template servide
	 * @param {IGetByIdParamsValidatorInputReturn} payload
	 * @returns {Promise<*>}
	 */
	async getbyIdParamsTemplateService(payload) {
		const trace = logger.startTrace(new Error(), +payload.trace);
		const result = await query.getByIdQueryTemplate(
			+payload.trace,
			payload.id
		);
		logger.endTrace(trace, +payload.trace);
		return result;
	}
};
