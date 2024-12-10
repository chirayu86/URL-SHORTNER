const express = require("express")
const router = require("./router/index")
const app = express();
const cors = require("cors")
const corsOptions = require("./middleware/cors.middleware")

app.use(cors(corsOptions))
app.use(express.json())
app.use("/",router)

module.exports = app