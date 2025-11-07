import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import mongoose from "mongoose";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary();

const user = "Shopping_now";
const pass = encodeURIComponent("abhiwani9268"); // encode if special chars present
const hostAndOptions =
  "cluster0.mbu5m83.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0";
const url = `mongodb+srv://${user}:${pass}@${hostAndOptions}`;

console.log("Using Mongo URL:", url.slice(0, 40) + "...");
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connect error:", err.message));

// middlewares

app.use(express.json());

app.use(cors());

// Api endpoints
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("API WORKING");
});
app.use("/api/product", productRouter);

app.use("/api/cart", cartRouter);

app.use("/api/order", orderRouter);
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
