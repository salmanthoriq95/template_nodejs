// TODO : refac this laterS
//@ts-check
"use strict";

const { Request, Response, NextFunction } = require("express");
const { Logger } = require("../../utils");

const {
	getServicesTemplate,
	inputGetValidatorTemplate,
	OutputGetValidatorTemplate,
	postTemplateServices,
	inputPostValidatorTemplate,
	OutputPostValidatorTemplate,
	putTemplateService,
	inputPutValidatorTemplate,
	OutputPutValidatorTemplate,
	deleteTemplateServices,
	inputDeleteValidatorTemplate,
	outputDeleteValidatorTemplate,
} = require("./template.services");

const logger = new Logger();

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

			const validateResult =
				inputGetValidatorTemplate.getValidatorinput(req);
			const serviceResult = await getServicesTemplate.getTemplateService(
				validateResult
			);
			const formatReturn = OutputGetValidatorTemplate.getValidatorOutput(
				serviceResult,
				+req.query.trace
			);

			res.status(200).send(formatReturn);

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
			const validateResult =
				inputGetValidatorTemplate.getByIdParamsValidatorinput(req);
			const serviceResult =
				await getServicesTemplate.getbyIdParamsTemplateService(
					validateResult
				);
			const formatReturn =
				OutputGetValidatorTemplate.getByIdParamsValidatorOutput(
					serviceResult,
					+req.query.trace
				);
			res.status(200).send(formatReturn);
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

			const validateResult =
				inputPostValidatorTemplate.postValidatorinput(req);
			const serviceResult =
				await postTemplateServices.postTemplateService(validateResult);
			const formatReturn = OutputPostValidatorTemplate.postValidatorinput(
				serviceResult.success,
				+req.query.trace,
				serviceResult.message
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
			const validateResult =
				inputPutValidatorTemplate.putValidatorinput(req);
			const serviceResult = await putTemplateService.putTemplateService(
				validateResult
			);
			const formatReturn = OutputPutValidatorTemplate.putValidatorinput(
				serviceResult.success,
				+req.query.trace,
				serviceResult.message
			);
			res.status(200).send(formatReturn);
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

			const validateResult =
				inputDeleteValidatorTemplate.deleteValidatorinput(req);
			const serviceResult =
				await deleteTemplateServices.deleteTemplateService(
					validateResult
				);
			const formatReturn =
				outputDeleteValidatorTemplate.deleteValidatorOutput(
					serviceResult.success,
					+req.query.trace,
					serviceResult.message
				);

			res.status(200).send(serviceResult);
			logger.endTrace(trace, +req.query.trace);
			logger.endLog(req._startRequest, req.url);
		} catch (error) {
			next(error);
		}
	}
};

