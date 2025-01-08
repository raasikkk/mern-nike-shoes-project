import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import authRoutes from './routes/auth.js'
import uploadRoutes from './routes/uploadRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import itemRoutes from './routes/getItems.js'

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 3000;

// Connecting to MongoDB database
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

// Routes
app.use('/api', itemRoutes) // Get Items Routes
app.use('/api', authRoutes); // Auth Routes
app.use('/api', uploadRoutes) // Upload Routes
app.use('/api', cartRoutes) // Cart Routes
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Starting the server
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
