const router = require("express").Router();
const controller = require("../controllers/appel");

router.get("/", controller.all);
router.post("/", controller.create);
router.get("/:id", controller.single);
router.put("/:id/edit", controller.edit);
router.delete("/:id/remove", controller.remove);

module.exports = router;
