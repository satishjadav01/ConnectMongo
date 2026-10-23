const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected succsessfully");
  } catch (error) {
    console.log('mongodb connection faild',error.message);
    process.exit(1) 
  }
};
module.exports = connectDB;

