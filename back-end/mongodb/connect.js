import mongoose from "mongoose";

const connectDB = async (url) => {
  if (!url) {
    throw new Error("MongoDB connection URL is required");
  }

  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(url);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    throw err;
  }
};

export default connectDB;
