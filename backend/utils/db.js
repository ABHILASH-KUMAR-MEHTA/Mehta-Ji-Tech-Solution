const mongoose = require("mongoose")

// const URI = "mongodb://localhost:27017/app"
const URI = process.env.MONGODB_URI


const connectDb = async () =>{
  try {
    await mongoose.connect(URI);
    console.log('connect successfully')
  } catch (error) {
    console.error("database not connected");
    process.exit(0)
  }
}

module.exports = connectDb;