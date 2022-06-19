// @ts-check

import { object, number, string } from "joi";
import HttpExpection from "../../../errors/HttpExpection";

export function getValidator(payload) {
  const schema = object({
    debug: number().valid(1).optional(),
    trace: number().valid(1).optional(),
    id: number().optional(),
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
}

export function postValidator(payload) {
  const schema = object({
    debug: number().valid(1).optional(),
    trace: number().valid(1).optional(),
    title: string().required(),
    content: string().required(),
    author: string().optional().allow("", null),
  });

  const validate = schema.validate({
    debug: payload.query.debug,
    trace: payload.query.trace,
    title: payload.body.title,
    content: payload.body.content,
    author: payload.body.author,
  });

  if (validate.error) {
    throw new HttpExpection(400, {
      message: "Fail to Validate",
      data: validate.value,
    });
  }

  return validate.value;
}

export function putValidator(payload) {
  const schema = object({
    debug: number().valid(1).optional(),
    trace: number().valid(1).optional(),
    title: string().required(),
    content: string().required(),
    author: string().optional().allow("", null),
    id: number().required(),
  });

  const validate = schema.validate({
    debug: payload.query.debug,
    trace: payload.query.trace,
    title: payload.body.title,
    content: payload.body.content,
    author: payload.body.author,
    id: payload.params.id,
  });

  if (validate.error) {
    throw new HttpExpection(400, {
      message: "Fail to Validate",
      data: validate.value,
    });
  }

  return validate.value;
}

export function deleteValidator(payload) {
  const schema = object({
    debug: number().valid(1).optional(),
    trace: number().valid(1).optional(),
    id: number().required(),
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
}
