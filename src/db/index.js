const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`,
    );
    console.log(
      `MongoDB Connected! DB host: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log(`MongoDB connection error: ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
