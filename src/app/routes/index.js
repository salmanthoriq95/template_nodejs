// @ts-check
"use strict";

const { Router } = require("express");
const router = Router();

const Template = require("../services/template/routes.template");

module.exports = {
	template: router.use("/", Template),
};
