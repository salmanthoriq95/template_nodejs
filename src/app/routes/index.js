// @ts-check
"use strict";

const { Router } = require("express");
const router = Router();

const Template = require("../controllers/template/routes.template");

module.exports = {
	template: router.use("/", Template),
};
