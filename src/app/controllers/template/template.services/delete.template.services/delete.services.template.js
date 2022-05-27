// @ts-check
"use strict";

const { Logger } = require("../../../../utils");
const logger = new Logger();

const Queries = require("../../../../db.Interface/mySql/queries/queries.template");
const query = new Queries();

const HttpExpection = require("../../../../errors/HttpExpection");

/**
 * @typedef {import('./delete.interfaces.template/delete.interfaces.template').IGetByIdParamsValidatorInputReturn} IGetByIdParamsValidatorInputReturn
 */

/**
 * @class
 * @classdesc Template Create The Class
 */
module.exports = class DeleteTemplateServices {
	/**
	 * get by id params template servide
	 * @param {IGetByIdParamsValidatorInputReturn} payload
	 * @returns {Promise<{success: boolean, message:string}>}
	 */
	async deleteTemplateService(payload) {
		const trace = logger.startTrace(new Error(), +payload.trace);
		const isIdExisted = await query.getByIdQueryTemplate(
			+payload.trace,
			payload.id
		);

		if (!isIdExisted || Object.keys(isIdExisted).length === 0) {
			throw new HttpExpection(404, { message: "Data not Found!" });
		}

		const result = await query.deleteQueryTemplate(
			+payload.trace,
			payload.id
		);
		logger.endTrace(trace, +payload.trace);
		return { success: true, message: "Success delete a data" };
	}
};
