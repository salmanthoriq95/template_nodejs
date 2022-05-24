// TODO : refac this laterS
//@ts-check
"use strict";

const { Request, Response, NextFunction } = require("express");
const { Logger } = require("../../utils");
const ServiceTemplate = require("./services.template");
const ValidatorsTemplate = require("./validators.template");

const logger = new Logger();

const services = new ServiceTemplate();
const validators = new ValidatorsTemplate();

/**
 * @class
 * @classdesc template controller
 */
module.exports = class TemplateController {
	/**
	 * get controller temlate
	 * @param {Request} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 */
	async getTemplate(req, res, next) {
		try {
			const trace = logger.startTrace(new Error(), +req.query.trace);
			const validateResult = validators.getValidatorinput(req);
			const serviceResult = await services.getTemplateService(
				validateResult
			);
			res.status(200).send(serviceResult);
			logger.endTrace(trace, +req.query.trace);
			logger.endLog(req._startRequest, req.url);
		} catch (error) {
			next(error);
		}
	}

	/**
	 * get data by id params controller template
	 * @param {Request} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 */
	async getByParamsIdTemplate(req, res, next) {
		try {
			const trace = logger.startTrace(new Error(), +req.query.trace);
			const validateResult = validators.getByIdParamsValidatorinput(req);
			const serviceResult = await services.getbyIdParamsTemplateService(
				validateResult
			);
			res.status(200).send(serviceResult);
			logger.endTrace(trace, +req.query.trace);
			logger.endLog(req._startRequest, req.url);
		} catch (error) {
			next(error);
		}
	}

	/**
	 * create new data and store to database
	 * @param {Request} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 */
	async postControllerTemplate(req, res, next) {
		try {
			const trace = logger.startTrace(new Error(), +req.query.trace);
			const validateResult = validators.postValidatorinput(req);
			const serviceResult = await services.postTemplateService(
				validateResult
			);
			res.status(200).send(serviceResult);
			logger.endTrace(trace, +req.query.trace);
			logger.endLog(req._startRequest, req.url);
		} catch (error) {
			next(error);
		}
	}

	/**
	 * Update data and store to database
	 * @param {Request} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 */
	async putControllerTemplate(req, res, next) {
		try {
			const trace = logger.startTrace(new Error(), +req.query.trace);
			const validateResult = validators.putValidatorinput(req);
			const serviceResult = await services.putTemplateService(
				validateResult
			);
			res.status(200).send(serviceResult);
			logger.endTrace(trace, +req.query.trace);
			logger.endLog(req._startRequest, req.url);
		} catch (error) {
			next(error);
		}
	}

	/**
	 * delete data from database
	 * @param {Request} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 */
	async deleteControllerTemplate(req, res, next) {
		try {
			const trace = logger.startTrace(new Error(), +req.query.trace);
			const validateResult = validators.deleteValidatorinput(req);
			const serviceResult = await services.deleteTemplateService(
				validateResult
			);
			res.status(200).send(serviceResult);
			logger.endTrace(trace, +req.query.trace);
			logger.endLog(req._startRequest, req.url);
		} catch (error) {
			next(error);
		}
	}
};

