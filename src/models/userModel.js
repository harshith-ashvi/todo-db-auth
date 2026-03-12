const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Email is required"],
      unique: [true, "Email already present"],
    },
    username: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "Username is required"],
      unique: [true, "Username already present"],
    },
    name: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
