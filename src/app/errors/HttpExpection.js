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
	 * @constructor
	 * @param {number} statusCode
	 * @param {IHttpData} httpData
	 */
	constructor(statusCode, httpData) {
		super(httpData.message);
		this.name = "HttpExpection";
		/** @type {number} */
		this.statusCode = statusCode;
		/** @type {any[]} */
		this.data = httpData.data || null;
	}
}

module.exports = HttpExpection;

