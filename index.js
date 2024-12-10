const app = require('./src/app')
const config = require('./src/config/index')
const connect = require('./src/database/mongo.client')

connect();
app.listen(config.port,()=>{
    console.log(`app is listening on port ${config.port}`)
})