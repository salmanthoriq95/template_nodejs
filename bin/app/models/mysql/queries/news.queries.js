// @ts-check
"use strict";

const { execQuery } = require("../config");
const tableProp = require("../table.properties/news");

module.exports.getData = async (id) => {
	let sql = `select * from ${tableProp.PROPERTIES.TABLE_NAME}`;
	if (id) sql = sql + ` where ${tableProp.PROPERTIES.COLOUMNS.ID.name} = ${id}`;
	return await execQuery(sql);
};
