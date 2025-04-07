import mongoose from "mongoose";
import { MONGO_URI } from "./constants.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1); // process code 1 means exit with failure, 0 means exit with success
  }
}
