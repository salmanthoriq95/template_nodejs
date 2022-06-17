// @ts-check
"use strict";

const { Logger } = require("../../../../utils");
const logger = new Logger();

const Queries = require("../../../../db.Interface/mySql/queries/queries.template");
const query = new Queries();

const HttpExpection = require("../../../../errors/HttpExpection");

/**
 * @typedef {import('./put.interfaces.template/put.interfaces.template').IPutValidatorInputReturn} IPutValidatorInputReturn
 */

/**
 * @class
 * @classdesc Template Create The Class
 */
module.exports = class PutTemplateServices {
	/**
	 * put template service
	 * @param {IPutValidatorInputReturn} payload
	 * @returns {Promise<{success:boolean, message:string}>}
	 */
	async putTemplateService(payload) {
		const trace = logger.startTrace(new Error(), +payload.trace);
		const isIdExisted = await query.getByIdQueryTemplate(+payload.trace, payload.data.id);

		if (!isIdExisted || Object.keys(isIdExisted).length === 0) {
			throw new HttpExpection(404, { message: "Data not Found!" });
		}

		await query.putQueryTemplate(+payload.trace, payload.data);
		logger.endTrace(trace, +payload.trace);
		return { success: true, message: "success edit a data" };
	}
};
