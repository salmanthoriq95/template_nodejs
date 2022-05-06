//@ts-check
"use strict";

const { Request, Response, NextFunction } = require("express");
const ServiceTemplate = require("./services.template");
const utils = require("../../utils/tracer");

const services = new ServiceTemplate();

module.exports = class TemplateController {
	/**
	 * get controller temlate
	 * @param {Request} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 */
	async getTemplate(req, res, next) {
		try {
			console.log(req._startRequest);
			utils.startTrace(new Error());
			console.table({
				name1: { a: 1, b: "Y" },
				naem2: { a: "Z", b: 2 },
			});
			services.getTemplateService(req);
			res.send("hello world");
		} catch (error) {
			next(error);
		}
	}
};

