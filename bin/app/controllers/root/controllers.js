// @ts-check

// eslint-disable-next-line no-unused-vars
const { Request, Response, NextFunction } = require("express");

const validators = require("./validators");
const services = require("./services");

/**
 * hello this is get root
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns
 */
module.exports.getController = async (req, res, next) => {
  try {
    // validating and formatting inputs
    const validateResult = validators.getValidator(req);
    // service
    const serviceResult = await services.getService(validateResult);
    return res.status(200).send(serviceResult);
  } catch (error) {
    next(error);
  }
};

module.exports.postController = async (req, res, next) => {
  try {
    // validating and formatting inputs
    const validateResult = validators.postValidator(req);
    // service
    const serviceResult = await services.postService(validateResult);
    return res.status(200).send(serviceResult);
  } catch (error) {
    next(error);
  }
};
module.exports.putController = async (req, res, next) => {
  try {
    // validating and formatting inputs
    const validateResult = validators.putValidator(req);
    // service
    const serviceResult = await services.putService(validateResult);
    return res.status(200).send(serviceResult);
  } catch (error) {
    next(error);
  }
};
module.exports.deleteController = async (req, res, next) => {
  try {
    // validating and formatting inputs
    const validateResult = validators.deleteValidator(req);
    // service
    const serviceResult = await services.deleteService(validateResult);
    return res.status(200).send(serviceResult);
  } catch (error) {
    next(error);
  }
};
