import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Check if process.env.MONGODB_URI is defined
    if (!process.env.MONGODB_URI) {
      throw new Error("MongoDB URI is not defined in the environment variables.");
    }

    // Check if the connection is not already established
    if (mongoose.connection.readyState === 0) {
      // Connect to MongoDB using the provided URI
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected successfully.");
    }
  } catch (error:any) {
    console.error("MongoDB connection error:", error.message);
  }
};

export default connectDB;
