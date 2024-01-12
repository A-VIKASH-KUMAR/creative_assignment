import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1", {
        dbName:process.env.MONGO_DB ?? "test"
    });

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", () => {
      console.log("Connected to MongoDB");
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("unable  to connect to mongodb", error);
  }
};

export { connectDb };
