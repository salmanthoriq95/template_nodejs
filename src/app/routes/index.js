// @ts-check
"use strict";

import { Router } from "express";
// Import Routes
// import GetFile from "../services/getFile/_routes.getFile";

// import CompanyBank from '../services/company_bank/_routes.company_bank';

const router = Router();

export default {
	getFile: router.use("/file", GetFile),
};
