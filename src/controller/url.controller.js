const commandService = require("../service/command.service")
const queryService = require("../service/query.service")



const encodeUrl = async (req,res) => {


  const result =  await commandService.encodeUrl(req)
    res.status(result.code).json({
       payload: result.payload,
       message: result.message
    })


}


const decodeUrl = async (req,res) => {

   const result = await commandService.decodeUrl(req)
   console.log(result)
    res.status(result.code).json({
        payload: result.payload,
        message: result.message
    })

}


const getHealth = (_,res) => {
   const result = queryService.getHealth()
   res.status(result.code).json({
   message: result.message
   })
}


module.exports = {
    encodeUrl,
    decodeUrl,
    getHealth
}