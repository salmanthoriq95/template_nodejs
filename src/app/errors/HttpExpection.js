// @ts-check
"use strict";

/**
 * @typedef IHttpData
 * @type {object}
 * @property {string} message
 * @property {*} [data]
 */

/**
 * @extends {Error}
 */
class HttpExpection extends Error {
	/**
	 *
	 * @param {number} statusCode
	 * @param {IHttpData} httpData
	 */
	constructor(statusCode, httpData) {
		console.log(httpData.message);
		super(httpData.message);
		this.name = "HttpExpection";
		/** @type {number} */
		this.statusCode = statusCode;
		/** @type {any[]} */
		this.data = httpData.data || null;
	}
}

export default HttpExpection;
