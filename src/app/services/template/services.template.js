// @ts-check
"use strict";

const { Tracer } = require("../../utils");
const tracer = new Tracer();

const Queries = require("./queries.template");
const query = new Queries();

/**
 * @typedef {import('./Interfaces.template.js').IGetValidatorInputReturn} IGetValidatorInputReturn
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
};

