// @ts-check
"use strict";

export default {
	app: {
		HOST: process.env.APP_HOST || "127.0.0.1",
		PORT: process.env.APP_PORT || 3000,
	},
	db: {
		HOST: process.env.DB_HOST || "127.0.0.1",
		DATABASE: process.env.DB_NAME || "dbName",
		PORT: process.env.DB_PORT || 3000,
		USER: process.env.DB_USER || "root",
		PASSWORD: process.env.DB_PASS || "",
	},
};
