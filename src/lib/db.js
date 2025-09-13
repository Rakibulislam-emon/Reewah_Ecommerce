import mongoose from "mongoose";

export async function dbConnect() {
  if (mongoose.connection?.readyState >= 1) return; // already connected
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    
  } catch (error) {
    console.error("DB connect error:", error);
  }
}
