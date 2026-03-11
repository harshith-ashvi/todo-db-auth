const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

const app = express();

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
