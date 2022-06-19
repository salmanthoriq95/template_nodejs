// @ts-check

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

import { createPool } from "mysql2/promise";
// eslint-disable-next-line no-unused-vars
import { RowDataPacket, OkPacket, ResultSetHeader } from "mysql2";

/**
 * ID: Ini adalah method untuk melakukan query ke MySql, semua query sudah di sanitize sebelum dieksekusi. </br>
 * EN: This method doing query execution to MySql, all query has been sanitized before execution.
 * @param {*} queries
 * @returns {Promise<RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader>}
 */
export default async function execQuery(queries) {
  const connection = createPool({
    // port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements: true,
  });
  const [rows] = await connection.query(queries);
  return rows;
}
