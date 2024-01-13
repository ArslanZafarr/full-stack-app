import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongoose.connect(
  "mongodb+srv://arslanzafarr71:7WaqCH5oFP1iFIH6@receipes.wrxdgen.mongodb.net/receipes?retryWrites=true&w=majority"
);

app.listen(4000, () => console.log("Server Started!"));
