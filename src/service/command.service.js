const  response = require("../utils/response.util");
const  { getRedisClient }  = require("../database/redis.client")
const { v4: uuidv4 } = require('uuid');
const { isValidUrl } = require("../validators")



const encodeUrl = async (req)=>{

 const { url } = req.body;
 const client =  await getRedisClient()

  if (!isValidUrl(url)) {
    return response.getResponse(400,"Invalid URL");
  }

  try {
    const shortId = uuidv4().slice(0,8); 
    const shortUrl = `${req.protocol}s://${req.get('host')}/${shortId}`;
    await client.set(shortUrl,url)
    return response.getResponse(200,"ok",{shortUrl})
  } catch (err) {
    return response.getResponse(500,"Internal server error")
  }

}

const decodeUrl = async (req)=> {

    const {url} = req.body
    const client = await getRedisClient()
   

    if(!isValidUrl(url)) {
    return response.getResponse(400,"Invalid URL");
    }
    
    try {
      const result = await client.get(url)
      if(result===null) {
       return response.getResponse(404,"resource not found")
      }
      return response.getResponse(200,"ok",{result})
    } catch (err) {
      return response.getResponse(500,"Internal server error")
    }
  
}




module.exports = {
    encodeUrl,
    decodeUrl
}