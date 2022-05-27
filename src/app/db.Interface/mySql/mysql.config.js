// @ts-check
"use strict";

const mysql = require("mysql2/promise");

module.exports = async (queries) => {
	const connection = await mysql.createConnection({
		// port: process.env.DB_PORT,
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		multipleStatements: true,
	});

	const [rows] = await connection.query(queries);
	return rows;
};
