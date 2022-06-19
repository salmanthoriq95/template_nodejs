// @ts-check
"use strict";

/**
 * @namespace MysqlConfiguration
 * @description
 * ID: </br>
 * Ini adalah pengaturan awal untuk mengkoneksikan server ke MySql database.
 * Semua pengaturan tentang host, username, password, nama database, dan lain-lain ada
 * di file ini. </br></br>
 *
 * EN:
 * This is default configure file for MySql connection.
 * you can config host, username, password, database name, etc in this file.
 */

const mysql = require("mysql2");
// eslint-disable-next-line no-unused-vars
const { RowDataPacket, OkPacket, ResultSetHeader } = require("mysql2");

/**
 * @class
 * @classdesc
 * IN: </br>
 * Ini adalah class untuk konfigurasi, mengecek koneksi, dan melakukan query dasar menggunakan
 * MySql. Pastikan sebelum melakukan query untuk melakukan escaping pada karakter-karakter
 * khusus yang mungkin bisa merusak query kita di database nanti. untuk melakukan escaping karakter
 * sudah ada di class ini. </br></br>
 *
 * EN: </br>
 * This is class to config, check connection, and execute query using MySql. Please sanitize query
 * from spesial characters may break your query. In this class you can call sanitizeQuery() to
 * sanitize your query before execution.
 * @memberof MysqlConfiguration
 */
class MysqlConfig {
	/**
	 * ID: ini adalah constructor yang bertujuan untuk inisialisasi koneksi ke MySql </br>
	 * EN: This construct configuration for MySql connection.
	 * @constructor
	 */
	constructor() {
		this.connection = mysql.createConnection({
			// port: process.env.DB_PORT,
			host: process.env.DB_HOST,
			user: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME,
			multipleStatements: true,
		});
	}

	/**
	 * ID: Ini adalah method untuk melakukan tes koneksi ke MySql server </br>
	 * EN: This method doing connection test to MySql server
	 * @see https://github.com/mysqljs/mysql#error-handling for error handling
	 * @returns {any}
	 */
	checkConnection() {
		return this.connection.connect((err) => {
			if (err) {
				console.log(err);
				process.kill(process.pid, "SIGTERM");
			}
		});
	}

	/**
	 * ID: Ini adalah method untuk melakukan query ke MySql, semua query sudah di sanitize sebelum dieksekusi. </br>
	 * EN: This method doing query execution to MySql, all query has been sanitized before execution.
	 * @param {*} queries
	 * @returns {Promise<RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader>}
	 */
	async execQuery(queries) {
		const connection = this.connection;
		queries = this.sanitizeQuery(queries);
		const [rows] = await connection.promise().query(queries);
		return rows;
	}

	/**
	 * ID: Ini adalah method untuk escaping karakter query-query MySql. </br>
	 * EN: This method doing sanitize query and escaping characters for MySql queries
	 * @param {Object|string|any[]} queries
	 * @returns {string|string[]}
	 */
	sanitizeQuery(queries) {
		const connection = this.connection;
		if ((Array.isArray(queries) && queries.length > 0) || (!!queries && queries.constructor === Object && Object.keys(queries).length > 0)) {
			for (const key in queries) {
				queries[key] = connection.escape(queries[key]);
			}
		} else {
			queries = connection.escape(queries);
		}
		return queries;
	}
}
const queryConfig = new MysqlConfig();
module.exports.default = queryConfig.execQuery;
module.exports = queryConfig.execQuery;
module.exports.query = queryConfig;
module.exports.checkConnection = queryConfig.checkConnection();
