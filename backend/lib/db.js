import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (e) {
        console.log("Error connecting to Mongo", e.message);
        process.exit(1);
    }
}