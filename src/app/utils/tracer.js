//@ts-check
"use strict";

const clc = require("cli-color");
const { JSDOM } = require("jsdom");
const { window } = new JSDOM();

/**
 * @typedef ITraceData
 * @type {object}
 * @property {string} fileName
 * @property {string} line
 * @property {string} functionName
 * @property {number} startCalled
 */

/**
 * @class
 * @classdesc trace all function everytime developing
 */
module.exports = class Tracer {
	/**
	 * Tracing all function
	 * @param {Error} error
	 * @param {number} consoleIt
	 * @returns {ITraceData}
	 */
	startTrace(error, consoleIt) {
		// time when function called
		const calledFnStartTime = window.performance.now();

		// Get info tracer
		const trace = error.stack;

		// split into some array, it can use for another needs
		const traceArr = trace.split("\n");

		// get the function called info
		const traceFnInfo = traceArr[1].trim().split(" ");

		// get the function name
		const fnName = traceFnInfo[1];

		// get the line number
		let fileDir = traceFnInfo[2];
		fileDir = fileDir.replace(/\(|\)/g, "");
		const fileDirArr = fileDir.split(".js");
		const lineNumber = fileDirArr[1].slice(1);

		// get file name
		const fileName = `${fileDirArr[0]}.js`;

		// formatting return
		const returnedData = {
			fileName: fileName,
			line: lineNumber,
			functionName: fnName,
			startCalled: calledFnStartTime,
		};

		//return
		if (process.env.APP_HOST !== "PROD" && +consoleIt === 1) {
			console.log(
				`${clc.bold.cyan("[START]")} ${clc.bold(
					fnName
				)} - Details : ${JSON.stringify(returnedData)}`
			);
		}
		return returnedData;
	}
	/**
	 * end of tracing functions
	 * @param {ITraceData} traceData
	 * @param {number} consoleIt
	 * @returns {void}
	 */
	endTrace(traceData, consoleIt) {
		if (process.env.APP_HOST !== "PROD" && +consoleIt === 1) {
			const traceResult = {
				functionName: traceData.functionName,
				fileName: traceData.fileName,
				line: traceData.line,
				executionTime:
					(window.performance.now() - traceData.startCalled) / 1000,
			};
			console.log(
				`${clc.bold.cyan("[END]")} ${clc.bold(
					traceResult.functionName
				)} - Details : ${JSON.stringify(traceResult)}`
			);
		}
		return;
	}
};
