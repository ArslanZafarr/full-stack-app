import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://arslanzafarr71:7WaqCH5oFP1iFIH6@receipes.wrxdgen.mongodb.net/receipes?retryWrites=true&w=majority")

app.listen(4000, () => console.log("Server Started!"));
