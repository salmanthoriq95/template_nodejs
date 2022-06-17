// NOTE learn how to refac this
//@ts-check
"use strict";

const { Request, Response, NextFunction } = require("express");
const clc = require("cli-color");
const { JSDOM } = require("jsdom");
const { window } = new JSDOM();
const path = require("path");

/**
 * @typedef ITraceData
 * @type {object}
 * @property {string} fileName
 * @property {string} line
 * @property {string} functionName
 * @property {number} startCalled
 */

// NOTE : this function it's not binding with "this", "this" empty object
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
const _PrintConsole = (consoleType, time, endPoint, method, userAgent, ipAddress, reqData) => {
	const INFO = clc.bgBlue.white;
	const ERROR = clc.bgRed.white;
	const WARN = clc.bgYellow.black;
	const TRACE = clc.bgWhite.black;

	const _method = method ? method : "";
	const _userAgent = userAgent ? userAgent : "";
	const _ipAddress = ipAddress ? ipAddress : "";
	const _reqData = Object.entries(reqData).length !== 0 ? `[${clc.italic(JSON.stringify(reqData))}]` : "";

	let reqInfo = `${endPoint}`;
	if (_method !== "") reqInfo = `${clc.bold(_method)} | ` + reqInfo;
	if (_userAgent !== "") reqInfo = reqInfo + ` | ${_userAgent}`;
	if (_ipAddress !== "") reqInfo = reqInfo + ` | ${_ipAddress}`;

	const MSG = `${clc.bold(`[${consoleType.toUpperCase()}]`)} [${time}] [${reqInfo}] ${_reqData}`;

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
	 * console the error
	 * @param {string} endPoint
	 * @param {string} [method]
	 * @param {string} [userAgent]
	 * @param {string} [ipAddress]
	 * @param {object} [reqData]
	 */
	errorLog(endPoint, method, userAgent, ipAddress, reqData) {
		if (process.env.APP_HOST !== "TEST") {
			_PrintConsole("error", new Date().toLocaleString(), endPoint, method, userAgent, ipAddress, reqData);
		}
	}

	/**
	 * console the fatal error
	 * @param {Error} error
	 */
	fatalLog(error) {
		// Get info error
		const trace = error.stack;
		// split into some array, it can use for another needs
		const traceArr = trace.split("\n");
		const traceFnInfo = [];

		// filter stack
		traceArr.forEach((value, index) => {
			// get that no "node_module" inside
			if (!value.match("node_modules") && index !== 0) traceFnInfo.push(value.trim());
		});

		// filter fn name, file name, and line
		const errorInfo = { message: error.message, stack: [] };
		traceFnInfo.forEach((e) => {
			const val = e.split(" ");
			// get the function name
			const fnName = val[1];
			// get file name
			let fileDir = val[2];
			fileDir = fileDir.replace(/\(|\)/g, "");
			const fileDirArr = fileDir.split(".js");
			// get the line number
			const lineNumber = fileDirArr[1].slice(1);
			const stacked = {
				functionName: fnName,
				fileName: fileDir.replace(path.resolve(__dirname, "../../../"), ""),
				line: lineNumber,
			};
			errorInfo.stack.push(stacked);
		});

		if (process.env.APP_HOST !== "TEST") {
			_PrintConsole("fatal", new Date().toLocaleString(), error.name, "", "", "", errorInfo);
		}
	}

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
			params: Object.entries(req.params).length !== 0 ? req.params : undefined,
			query: Object.entries(req.query).length !== 0 ? req.query : undefined,
		};

		for (const key in request) if (!request[key]) delete request[key];

		if (process.env.APP_HOST !== "TEST") {
			_PrintConsole("INFO", timestamp, req.url, req.method, req.headers["user-agent"], req.ip, request);
		}

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
		if (process.env.APP_HOST !== "PROD") {
			const executeTime = (window.performance.now() - startTime) / 1000;
			if (process.env.APP_HOST !== "TEST") {
				_PrintConsole("trace", new Date().toLocaleString(), endPoint, "", "", "", {
					executionTime: `${executeTime}s`,
				});
			}
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
			status: "start",
			fileName: fileName.replace(path.resolve(__dirname, "../../../"), ""),
			line: lineNumber,
			functionName: fnName,
			startCalled: calledFnStartTime,
		};

		//return
		if (process.env.APP_HOST !== "PROD" && +consoleIt === 1) {
			if (process.env.APP_HOST !== "TEST") {
				_PrintConsole(
					"trace",
					new Date().toLocaleString(),
					returnedData.functionName,
					"",
					"",
					"",
					returnedData
				);
			}
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
				status: "end",
				functionName: traceData.functionName,
				fileName: traceData.fileName.replace(path.resolve(__dirname, "../../../"), ""),
				line: traceData.line,
				executionTime: (window.performance.now() - traceData.startCalled) / 1000,
			};
			if (process.env.APP_HOST !== "TEST") {
				_PrintConsole("trace", new Date().toLocaleString(), traceResult.functionName, "", "", "", traceResult);
			}
		}
		return;
	}
};
