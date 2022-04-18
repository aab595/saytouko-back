const router = require("express").Router();
const controller = require("../controllers/niveau");

router.get("/", controller.all);

module.exports = router;
