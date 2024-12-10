const express = require('express')
const router = express.Router()
const urlRouter = require("./url.router")

router.use("/",urlRouter)


module.exports = router