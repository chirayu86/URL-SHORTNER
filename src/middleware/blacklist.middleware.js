const Url = require("../schema/blacklisted.url.schema")
const inaptArr = require("../constants/index")


const blackListUrl = async (req,res,next)=>{

    const hostName = req.body.url.toLowerCase();

    const isblackListedURL =  await Url.findOne({url: hostName})
 
    if(isblackListedURL) {
     return res.status(400).json({
         message: "You Are Blacklisted"
     })
    } 
 
   const isInappropriate = inaptArr.some(word => hostName.includes(word));
   
   if(isInappropriate) {
 
     const blackUrl = new Url({
         url: hostName,
         isblackListed: true
     })
 
 
     await blackUrl.save();
 
     return  res.status(400).json({
         payload: null,
         message: "Cannot provide service to your domain please contact admin"
     })
 
   } 


   next();


}


module.exports =  blackListUrl 