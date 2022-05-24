const { Router } = require("express");
const TemplateController = require("./controllers.template");

const router = Router();
const templateController = new TemplateController();

router.get("/", templateController.getTemplate);
router.get("/:id", templateController.getByParamsIdTemplate);
router.post("/", templateController.postControllerTemplate);
router.delete("/:id", templateController.deleteControllerTemplate);
router.put("/:id", templateController.putControllerTemplate);

module.exports = router;

