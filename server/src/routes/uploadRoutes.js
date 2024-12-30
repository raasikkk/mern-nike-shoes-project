// This route made me hate myself
import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Get the current module's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

import Item from "../models/Item.js";
import {
  authenticateToken,
  authorizeRole,
} from "../middleware/authmiddleware.js";

// Set up Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../../uploads");

    // Check if the uploads directory exists, create it if not
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/admin/upload",
  authenticateToken,
  authorizeRole(["admin"]),
  upload.single("imageUrl"),
  async (req, res) => {
    console.log("Received request body:", req.body);
    console.log("Uploaded file:", req.file);

    try {
      const { name, price, gender, brand, sportsAndActivities, collections, shoesHeight, closureType, width } = req.body;
      const imageUrl = req.file.path;

      const newItem = new Item({ name, price, gender, brand, sportsAndActivities, collections, shoesHeight, closureType, width, imageUrl });
      await newItem.save();

      res.status(201).json({ message: "Item uploaded successfully!" });
    } catch (error) {
      res.status(500).json({ message: "Error uploading item", error });
    }
  }
);

export default router;
