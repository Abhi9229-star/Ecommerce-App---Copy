import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("db connected");
  });

  await mongoose.connect(`${process.env.MONGODB_URL}`, {
    useNewUrlParser: true, // Optional, no longer needed in Mongoose 6+
    useUnifiedTopology: true, // Optional, no longer needed in Mongoose 6+
  });
};

export default connectDb;
