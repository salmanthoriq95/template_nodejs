// @ts-check
"use strict";

/**
 * @class
 * @classdesc
 * ID:</br>
 * </br></br>
 * EN:
 */
class NewsTable {
	/**
	 * ID:</br>
	 * </br></br>
	 * EN:
	 * @constructor
	 */
	constructor() {
		this.PROPERTIES = {
			TABLE_NAME: "news",
			COLOUMNS: {
				ID: {
					name: "id",
					type: "int",
					maxLen: 11,
				},
				TITLE: {
					name: "title",
					type: "str",
				},
				CONTENT: { name: "title", type: "str" },
				AUTHOR: { name: "title", type: "str", default: null },
			},
		};
	}
}

const newsTable = new NewsTable();
module.exports = newsTable;
module.exports.default = newsTable;
module.exports.properties = newsTable.PROPERTIES;
