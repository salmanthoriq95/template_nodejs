// @ts-check
"use strict";

const GetServicesTemplate = require("./get.template.services/get.services.template");
const InputGetValidatorTemplate = require("./get.template.services/get.template.validators/input.get.validators.template");
const OutputGetValidatorTemplate = require("./get.template.services/get.template.validators/output.get.validators.template");

module.exports = {
	// GET validators and Services
	getServicesTemplate: new GetServicesTemplate(),
	inputGetValidatorTemplate: new InputGetValidatorTemplate(),
	OutputGetValidatorTemplate: new OutputGetValidatorTemplate(),
};
