import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        console.log("Using Mongo URI:", process.env.MANGODB_URI);  // debug log
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`\nMongoDB connected! Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection FAILED", error);
        process.exit(1);
    }
};

export default connectDB;
