import express from "express";
import { connectMongoDB } from "./connection.js";
import cors from "cors"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.js";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

// console.log("MONGODB_URI:", MONGODB_URI);
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:true,
    credentials:true
}))

connectMongoDB(MONGODB_URI)
.then(()=>console.log("MongoDB connected"));

app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/user",userRoute);

app.listen(PORT,()=>{
    console.log("Running on port 8000");
})
