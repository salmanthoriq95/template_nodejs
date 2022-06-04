// @ts-check
"use strict";

const { redis } = require("../redis.config");

module.exports = class RequestLimiterQueries {
	/**
	 * queries to redis to get data by key name
	 * @param {string} key
	 * @returns {Promise<any>}
	 */
	async getDataByKeyName(key) {
		return await redis.get(key);
	}

	/**
	 * store data to redis using key-value case, it can be overwrite old data if data already exist
	 * @param {string} KeyName
	 * @param {string} value
	 * @returns {Promise<any>}
	 */
	async setDataByKeyValue(KeyName, value) {
		return await redis.set(KeyName, value);
	}

	/**
	 * delete data by key name in redis
	 * @param {string} key
	 * @returns {Promise<*>}
	 */
	async delDataByKey(key) {
		return await redis.del(key);
	}
};
