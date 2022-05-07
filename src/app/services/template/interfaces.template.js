//@ts-check
"use strict";

/**
 * @typedef {object} IGetValidatorInputReturn
 * @property {number} debug
 * @property {number} trace
 */

/**
 * @typedef {object} IGetByIdParamsValidatorInputReturn
 * @property {number} debug
 * @property {number} trace
 * @property {number} id
 */

/**
 * @typedef {object} IPostValidatorInputReturn
 * @property {number} debug
 * @property {number} trace
 * @property {IPostBodyFormatInput} data
 */

/**
 * @typedef {object} IPostBodyFormatInput
 * @property {string} title
 * @property {string} content
 * @property {string} author
 */

/**
 * @typedef {object} IFormatDBReturn
 * @property {number} id
 * @property {string} title
 * @property {string} content
 * @property {string} author
 */

/**
 * @typedef {Array<IFormatDBReturn>} IReturnDataFromDB
 */

exports.unused = {};
