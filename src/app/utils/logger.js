//@ts-check
"use strict";

const { Request, Response, NextFunction } = require("express");
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

// NOTE : this function it's not binding with this, "this" empty object
/**
 * print log to terminal or console
 * @param {string} consoleType type of console INFO, ERROR, FATAL, DEBUG, WARN, TRACE
 * @param {string} time date time when the endpoint or function called
 * @param {string} endPoint end point or function name user called
 * @param {string} [method] method that user use
 * @param {string} [userAgent] user agent of browser user use
 * @param {string} [ipAddress] ip address of user
 * @param {object} [reqData] data that passed by user
 * @returns {void}
 */
const _PrintConsole = (
	consoleType,
	time,
	endPoint,
	method,
	userAgent,
	ipAddress,
	reqData
) => {
	const INFO = clc.bgBlue.white;
	const ERROR = clc.bgRed.white;
	const WARN = clc.bgYellow.black;
	const TRACE = clc.bgWhite.black;

	const _method = method ? method : "";
	const _userAgent = userAgent ? userAgent : "";
	const _ipAddress = ipAddress ? ipAddress : "";
	const _reqData =
		Object.entries(reqData).length !== 0
			? `[${clc.italic(JSON.stringify(reqData))}]`
			: "";

	let reqInfo = `${endPoint}`;
	if (_method !== "") reqInfo = `${clc.bold(_method)} | ` + reqInfo;
	if (_userAgent !== "") reqInfo = reqInfo + ` | ${_userAgent}`;
	if (_ipAddress !== "") reqInfo = reqInfo + ` | ${_ipAddress}`;

	const MSG = `${clc.bold(
		`[${consoleType.toUpperCase()}]`
	)} [${time}] [${reqInfo}] ${_reqData}`;

	switch (consoleType.toLowerCase()) {
		case "info":
			console.log(INFO(MSG));
			break;
		case "fatal":
		case "error":
			console.log(ERROR(MSG));
			break;
		case "warn":
		case "debug":
			console.log(WARN(MSG));
			break;
		case "trace":
		default:
			console.log(TRACE(MSG));
			break;
	}
};

/**
 * @class
 * @classdesc logger manual, it could be changed following needs
 */
module.exports = class Debugger {
	/**
	 * create a log everytime user hit api
	 * @param {Request} req
	 * @param {Response} res
	 * @param {NextFunction} next
	 * @returns {void}
	 */
	log(req, res, next) {
		const timestamp = new Date().toLocaleString();

		const request = {
			body: Object.entries(req.body).length !== 0 ? req.body : undefined,
			params:
				Object.entries(req.params).length !== 0
					? req.params
					: undefined,
			query:
				Object.entries(req.query).length !== 0 ? req.query : undefined,
		};

		for (const key in request) if (!request[key]) delete request[key];

		_PrintConsole(
			"INFO",
			timestamp,
			req.url,
			req.method,
			req.headers["user-agent"],
			req.ip,
			request
		);

		req._startRequest = window.performance.now();
		return next();
	}

	/**
	 * end of request logs
	 * @param {number} startTime
	 * @param {string} endPoint
	 * @returns {void}
	 */
	endLog(startTime, endPoint) {
		// TODO : refactoring for better log template
		if (process.env.APP_HOST !== "PROD") {
			const executeTime = (window.performance.now() - startTime) / 1000;
			_PrintConsole(
				"trace",
				new Date().toLocaleString(),
				endPoint,
				"",
				"",
				"",
				{ executionTime: `${executeTime}s` }
			);
		}
		return;
	}

	/**
	 * Tracing all function
	 * @param {Error} error
	 * @param {number} consoleIt
	 * @returns {ITraceData}
	 */
	startTrace(error, consoleIt) {
		// time when function called
		const calledFnStartTime = window.performance.now();

		// Get info logger
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
			_PrintConsole(
				"trace",
				new Date().toLocaleString(),
				returnedData.functionName,
				"",
				"",
				"",
				returnedData
			);

			// console.log(
			// 	`${clc.bold.cyan("[START]")} ${clc.bold(
			// 		fnName
			// 	)} - Details : ${JSON.stringify(returnedData)}`
			// );
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
			_PrintConsole(
				"trace",
				new Date().toLocaleString(),
				traceResult.functionName,
				"",
				"",
				"",
				traceResult
			);
			// console.log(
			// 	`${clc.bold.cyan("[END]")} ${clc.bold(
			// 		traceResult.functionName
			// 	)} - Details : ${JSON.stringify(traceResult)}`
			// );
		}
		return;
	}
};
