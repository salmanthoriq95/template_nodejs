//@ts-check
"use strict";

const request = require("supertest");
const server = require("../../../index");
const dotenv = require("dotenv");
const path = require("path");
const app = require("express")();

jest.mock("../../../db.Interface/mySql/queries/queries.template", () =>
	require("../../../db.Interface/mySql/mock/queries.mock")
);

describe("HTTP Request get /", () => {
	beforeAll(() => {
		dotenv.config({
			path: path.resolve(__dirname, `../../../../../env/test.env`),
		});
		server(app);
	});

	afterAll(() => {
		jest.resetModules();
	});

	it("Get / 200", (done) => {
		request(app).get("/").expect(200, done);
	});
});
