// @ts-check
"use strict";

const mysql = require("mysql2/promise");
const config = require("./index");

module.exports = async (queries) => {
	const connection = await mysql.createConnection({
		host: config.db.HOST,
		user: config.db.USER,
		password: config.db.PASSWORD,
		database: config.db.DATABASE,
		multipleStatements: true,
	});

	const [rows] = await connection.query(queries);
	return rows;
};
