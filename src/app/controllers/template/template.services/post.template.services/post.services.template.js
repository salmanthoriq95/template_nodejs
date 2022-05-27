// @ts-check
"use strict";

const { Logger } = require("../../../../utils");
const logger = new Logger();

const Queries = require("../../../../db.Interface/mySql/queries/queries.template");
const query = new Queries();

const HttpExpection = require("../../../../errors/HttpExpection");

/**
 * @typedef {import('./post.interfaces.template/post.interfaces.template').IPostValidatorInputReturn} IPostValidatorInputReturn
 */

/**
 * @class
 * @classdesc Template POST service
 */
module.exports = class PostTemplateServices {
	/**
	 * post template service
	 * @param {IPostValidatorInputReturn} payload
	 * @returns {Promise<{success:boolean, message: string}>}
	 */
	async postTemplateService(payload) {
		const trace = logger.startTrace(new Error(), +payload.trace);
		const result = await query.postQueryTemplate(
			+payload.trace,
			payload.data
		);
		console.log("the result", result);
		logger.endTrace(trace, +payload.trace);
		return { success: true, message: "Success add a data" };
	}
};
