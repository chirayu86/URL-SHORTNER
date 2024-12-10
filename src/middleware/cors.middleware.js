
const corsOptions = {
    origin: 'localhost:8080', // Allow only requests from 'http://example.com'
    methods: ['GET','POST','PATCH','DELETE'],     // Allow only GET and POST methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow only these headers
    credentials: true,            // Allow cookies and credentials to be sent
  };

  module.exports = corsOptions