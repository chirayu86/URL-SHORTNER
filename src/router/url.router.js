const express = require("express")
const router = express.Router();
const controller = require("../controller/url.controller")
const blackListUrl = require("../middleware/blacklist.middleware")

router.get("/health",controller.getHealth)

router.use(blackListUrl)
router.post("/encode",controller.encodeUrl)
router.post("/decode",controller.decodeUrl)




module.exports = router