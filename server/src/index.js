import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { UserController } from "./controllers/imports.js";

dotenv.config();

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

app.post('/auth/register', UserController.register)

app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
