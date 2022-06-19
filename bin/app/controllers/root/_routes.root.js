// @ts-check

import { Router } from "express";

import {
  getController,
  postController,
  putController,
  deleteController,
} from "./controllers";

const router = Router();

router.get("/:id?", getController);
router.post("/", postController);
router.put("/:id", putController);
router.delete("/:id", deleteController);

export default router;
