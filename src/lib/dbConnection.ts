import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    if (mongoose.connections[0].readyState) {
        console.log("MongoDB already connected.");
        return;
    }

    try {
        await mongoose.connect(process.env.DATABASE_URI!);
        console.log("MongoDB connected.");
    } catch (error: any) {
        console.error("Error connecting to MongoDB:", error?.message);
        process.exit(1);
    }
};

export default connectDB;
