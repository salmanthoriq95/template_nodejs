//@ts-check
"use strict";

const { Tracer } = require("../../utils");
const tracer = new Tracer();

const connect = require("../../config/connection");

/**
 * @class
 * @classdesc queries template
 */
module.exports = class QueriesTemplate {
	/**
	 * get all list template
	 * @param {number} traceIt
	 * @returns {Promise<*>}
	 */
	async getAllQueryTemplate(traceIt) {
		const trace = tracer.startTrace(new Error(), +traceIt);
		const result = await connect("select * from news");
		tracer.endTrace(trace, +traceIt);
		return result;
	}
};
