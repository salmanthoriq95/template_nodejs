//@ts-check
"use strict";

module.exports = class QueriesMockMysql {
	getDataByKeyName() {
		return JSON.stringify({ startAttemp: 1654238692500, attempCount: 1, nextAttemp: 0 });
	}

	setDataByKeyValue() {}

	delDataByKey() {}
};
