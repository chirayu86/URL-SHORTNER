const mongoose = require('mongoose');


const mongoURI = "mongodb://localhost:27017/URL-SHORTNER";


const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB Connection Failed:', err.message);
    process.exit(1); 
  }
};


mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected to MongoDB.');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected from MongoDB.');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Mongoose connection closed due to app termination.');
  process.exit(0);
});

module.exports = connectDB;