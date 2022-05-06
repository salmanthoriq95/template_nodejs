const { Router } = require("express");
const TemplateController = require("./controllers.template");

const router = Router();
const templateController = new TemplateController();

router.get("/", templateController.getTemplate);
router.get("/:id", templateController.getTemplate);
router.post("/", templateController.getTemplate);
router.delete("/:id", templateController.getTemplate);
router.put("/:id", templateController.getTemplate);

module.exports = router;

