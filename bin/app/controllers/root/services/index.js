// @ts-check
"use strict";

const { getData } = require("../../../models/mysql/queries/news.queries");
const formatReturn = require("../../../utilities/return.formatter");

module.exports.getService = async (payload) => {
	const data = await getData(payload.id);
	return formatReturn({ success: true, data, message: "success get data" });
};
