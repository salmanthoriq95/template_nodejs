//@ts-check
"use strict";

const { Logger } = require("../../../utils");
const logger = new Logger();

const connect = require("../mysql.config");

/**
 * @typedef {import('../../../utils/globalInterfaces').IPostBodyFormatInput} IPostBodyFormatInput
 * @typedef {import('../../../utils/globalInterfaces').IPutBodyFormatInput} IPutBodyFormatInput
 */

/**
 * @class
 * @classdesc queries template
 */
module.exports = class QueriesTemplate {
	/**
	 * get all list template
	 * @param {number} traceIt
	 */
	async getAllQueryTemplate(traceIt) {
		const trace = logger.startTrace(new Error(), +traceIt);
		const result = await connect("select * from news");
		logger.endTrace(trace, +traceIt);
		return result;
	}

	/**
	 * get data by id query template
	 * @param {number} traceIt
	 * @param {number} id
	 */
	async getByIdQueryTemplate(traceIt, id) {
		const trace = logger.startTrace(new Error(), +traceIt);
		const result = await connect(`select * from news where id = ${id}`);
		logger.endTrace(trace, +traceIt);
		return result[0];
	}

	/**
	 * delete data by id query template
	 * @param {number} traceIt
	 * @param {number} id
	 */
	async deleteQueryTemplate(traceIt, id) {
		const trace = logger.startTrace(new Error(), +traceIt);
		const query = `
			DELETE FROM
				news
			WHERE
				news.id = ${id}
		`;
		const result = await connect(query);
		logger.endTrace(trace, +traceIt);
		return result[0];
	}

	/**
	 * create query template
	 * @param {number} traceIt
	 * @param {IPostBodyFormatInput} body
	 * @returns
	 */
	async postQueryTemplate(traceIt, body) {
		const trace = logger.startTrace(new Error(), +traceIt);
		const query = `
			INSERT INTO 
				news
			(
				title,
				content,
				author
			)
			VALUES
			(
				'${body.title}',
				'${body.content}',
				'${body.author}'
			)
		`;
		const result = await connect(query);
		logger.endTrace(trace, +traceIt);
		return result[0];
	}

	/**
	 * update query template
	 * @param {number} traceIt
	 * @param {IPutBodyFormatInput} body
	 * @returns
	 */
	async putQueryTemplate(traceIt, body) {
		const trace = logger.startTrace(new Error(), +traceIt);
		const query = `
			UPDATE 
				news
			SET
				title = '${body.title}',
				content = '${body.content}',
				author = '${body.author}'
			WHERE
				news.id = ${body.id}
		`;
		const result = await connect(query);
		logger.endTrace(trace, +traceIt);
		return result[0];
	}
};
