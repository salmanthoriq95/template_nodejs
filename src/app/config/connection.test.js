// @ts-check
"use strict";

const connect = require("./connection");
const HttpException = require("../errors/HttpExpection");

/**
 * return ing status of connection to database
 * @returns {Promise<{success: true, message: string}>}
 */
module.exports = async () => {
	const result = await connect("SELECT 1+1 AS result");
	if (result[0].result !== 2) {
		throw new HttpException(500, {
			message:
				"Disable connect to database, please check your connection!",
		});
	}
	return {
		success: true,
		message: "Connection established!",
	};
};
