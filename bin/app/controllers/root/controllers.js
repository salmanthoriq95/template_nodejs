// @ts-check

// eslint-disable-next-line no-unused-vars
import { Request, Response, NextFunction } from "express";

import {
  getValidator,
  postValidator,
  putValidator,
  deleteValidator,
} from "./validators";
import { getService, postService, putService, deleteService } from "./services";

/**
 * hello this is get root
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<any>}
 */
export async function getController(req, res, next) {
  try {
    // validating and formatting inputs
    const validateResult = getValidator(req);
    // service
    const serviceResult = await getService(validateResult);
    res.status(200).send(serviceResult);
  } catch (error) {
    next(error);
  }
}

export async function postController(req, res, next) {
  try {
    // validating and formatting inputs
    const validateResult = postValidator(req);
    // service
    const serviceResult = await postService(validateResult);
    res.status(200).send(serviceResult);
  } catch (error) {
    next(error);
  }
}
export async function putController(req, res, next) {
  try {
    // validating and formatting inputs
    const validateResult = putValidator(req);
    // service
    const serviceResult = await putService(validateResult);
    res.status(200).send(serviceResult);
  } catch (error) {
    next(error);
  }
}
export async function deleteController(req, res, next) {
  try {
    // validating and formatting inputs
    const validateResult = deleteValidator(req);
    // service
    const serviceResult = await deleteService(validateResult);
    res.status(200).send(serviceResult);
  } catch (error) {
    next(error);
  }
}
