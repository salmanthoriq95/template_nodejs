const { Request, Response, NextFunction } = require("express");
const ServiceTemplate = require("./services.template");

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
			services.getTemplateService(req);
			res.send("hello world");
		} catch (error) {
			next(error);
		}
	}
};

