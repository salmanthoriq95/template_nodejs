// @ts-check
"use strict";

const mysql = require("mysql2/promise");

module.exports = async (queries) => {
	const connection = await mysql.createConnection({
		host: process.env.DB_HOST,
		user: process.env.DB_NAME,
		password: process.env.DB_PORT,
		database: process.env.DB_PASS,
		multipleStatements: true,
	});

	const [rows] = await connection.query(queries);
	return rows;
};
