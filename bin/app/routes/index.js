// @ts-check

import { Router } from "express";

import root from "../controllers/root/_routes.root";

const router = Router();

export default { root: router.use("/", root) };
