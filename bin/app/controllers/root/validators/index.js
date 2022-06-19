// @ts-check
"use strict";

const Joi = require("joi");
const HttpExpection = require("../../../errors/HttpExpection");

module.exports.getValidator = (payload) => {
	const schema = Joi.object({
		debug: Joi.number().valid(1).optional(),
		trace: Joi.number().valid(1).optional(),
		id: Joi.number().optional(),
	});

	const validate = schema.validate({
		debug: payload.query.debug,
		trace: payload.query.trace,
		id: payload.params.id,
	});

	if (validate.error) {
		throw new HttpExpection(400, {
			message: "Fail to Validate",
			data: validate.value,
		});
	}

	return validate.value;
};
