const response = require("../utils/response.util")


const getHealth = ()=>{
   return response.getResponse(200,"server running")
}

module.exports = {
    getHealth
}