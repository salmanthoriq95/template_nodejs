// @ts-check
"use strict";

const { Router } = require("express");
const router = Router();

const controllers = require("./controllers");

router.get("/:id?", controllers.getController);
// router.post("/:id?", controllers.get);
// router.put("/:id?", controllers.get);
// router.delete("/:id?", controllers.get);

module.exports = router;
