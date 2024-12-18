import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connect() {
  console.log("Database connected");

  if (mongoose.connection.readyState >= 1) {
    console.log("Database already connected");
    return mongoose.connection;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {});
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to the database");
    console.log(error);
    process.exit(1);
  }
}
