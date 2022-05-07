// @ts-check
"use strict";

const { Tracer } = require("../../utils");
const tracer = new Tracer();

const Queries = require("./queries.template");
const query = new Queries();

/**
 * @typedef {import('./Interfaces.template.js').IGetValidatorInputReturn} IGetValidatorInputReturn
 * @typedef {import('./Interfaces.template.js').IGetByIdParamsValidatorInputReturn} IGetByIdParamsValidatorInputReturn
 * @typedef {import('./Interfaces.template.js').IPostValidatorInputReturn} IPostValidatorInputReturn
 */

/**
 * @class
 * @classdesc Template Create The Class
 */
module.exports = class TemplateServices {
	/**
	 * get method templateS
	 * @param {IGetValidatorInputReturn} payload
	 */
	async getTemplateService(payload) {
		const trace = tracer.startTrace(new Error(), +payload.trace);
		const result = await query.getAllQueryTemplate(+payload.trace);
		tracer.endTrace(trace, +payload.trace);
		return result;
	}

	/**
	 * get by id params template servide
	 * @param {IGetByIdParamsValidatorInputReturn} payload
	 */
	async getbyIdParamsTemplateService(payload) {
		const trace = tracer.startTrace(new Error(), +payload.trace);
		const result = await query.getByIdQueryTemplate(
			+payload.trace,
			payload.id
		);
		tracer.endTrace(trace, +payload.trace);
		return result;
	}

	/**
	 * post template service
	 * @param {IPostValidatorInputReturn} payload
	 */
	async postTemplateService(payload) {
		const trace = tracer.startTrace(new Error(), +payload.trace);
		const result = await query.postQueryTemplate(
			+payload.trace,
			payload.data
		);
		tracer.endTrace(trace, +payload.trace);
		return { success: true };
	}
};
