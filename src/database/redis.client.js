const redis = require("redis");
const config = require("../config/redis.config");


let redisClient = null;


const getRedisClient = async () => {
  
  if (redisClient == null) {
    await createRedisClient();
  }

  return redisClient;
};


const createRedisClient = async () => {
  redisClient = await redis
    .createClient({
      url: "redis://localhost:6379"
    })
    .on("error", (err) => {
      console.error("redis connection failed: ", err);
      throw err;
    })
    .connect();
};


module.exports = {
    getRedisClient
}