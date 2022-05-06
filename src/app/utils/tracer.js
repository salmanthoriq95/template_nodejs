//@ts-check
"use strict";

module.exports = {
	/**
	 * Tracing all function
	 * @param {Error} error
	 */
	startTrace: (error) => {
		const trace = error.stack;
		console.log(trace);
		const traceArr = trace.split("\n");
		console.log("hasil=>", traceArr[1].trim());
	},
	endTrace: () => {},
};
