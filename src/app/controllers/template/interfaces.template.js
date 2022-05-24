//@ts-check
"use strict";

/**
 * @typedef {import('../../utils/globalInterfaces').IPostBodyFormatInput} IPostBodyFormatInput
 * @typedef {import('../../utils/globalInterfaces').IPutBodyFormatInput} IPutBodyFormatInput
 */

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
 * @typedef {object} IPutValidatorInputReturn
 * @property {number} debug
 * @property {number} trace
 * @property {IPutBodyFormatInput} data
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
