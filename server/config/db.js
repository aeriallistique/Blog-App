const mongoose = require('mongoose');

const connectDB = async () => {
  try{
    mongoose.set('strictQuery', false);
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DATABASE CONNECTED: ${connection.connection.host}`)

  }catch(err){
    console.log(err);
  }
}

module.exports = connectDB;