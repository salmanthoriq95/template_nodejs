// @ts-check
"use strict";

const GetServicesTemplate = require("./get.template.services/get.services.template");
const InputGetValidatorTemplate = require("./get.template.services/get.template.validators/input.get.validators.template");
const OutputGetValidatorTemplate = require("./get.template.services/get.template.validators/output.get.validators.template");

const PostTemplateServices = require("./post.template.services/post.services.template");
const InputPostValidatorTemplate = require("./post.template.services/post.template.validators/input.post.validators.template");
const OutputPostValidatorTemplate = require("./post.template.services/post.template.validators/output.post.validators.template");

const PutTemplateService = require("./put.template.services/put.services.template");
const InputPutValidatorTemplate = require("./put.template.services/put.template.validators/input.put.validators.template");
const OutputPutValidatorTemplate = require("./put.template.services/put.template.validators/output.put.validators.template");

const DeleteTemplateServices = require("./delete.template.services/delete.services.template");
const InputDeleteValidatorTemplate = require("./delete.template.services/delete.template.validators/input.delete.validators.template");
const OutputDeleteValidatorTemplate = require("./delete.template.services/delete.template.validators/output.delete.validators.template");

module.exports = {
	// GET validators and Services
	getServicesTemplate: new GetServicesTemplate(),
	inputGetValidatorTemplate: new InputGetValidatorTemplate(),
	OutputGetValidatorTemplate: new OutputGetValidatorTemplate(),

	// POST validators and services
	postTemplateServices: new PostTemplateServices(),
	inputPostValidatorTemplate: new InputPostValidatorTemplate(),
	OutputPostValidatorTemplate: new OutputPostValidatorTemplate(),

	// PUT validators and services
	putTemplateService: new PutTemplateService(),
	inputPutValidatorTemplate: new InputPutValidatorTemplate(),
	OutputPutValidatorTemplate: new OutputPutValidatorTemplate(),

	// DELETE validators and services
	deleteTemplateServices: new DeleteTemplateServices(),
	inputDeleteValidatorTemplate: new InputDeleteValidatorTemplate(),
	outputDeleteValidatorTemplate: new OutputDeleteValidatorTemplate(),
};
