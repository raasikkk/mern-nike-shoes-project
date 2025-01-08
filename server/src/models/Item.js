import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    enum: [
      "Nike Sportswear",
      "Jordan",
      "Nike By You",
      "Converse",
      "NikeLab",
      "ACG",
    ],
    required: true,
  },
  sportsAndActivities: {
    type: String,
    enum: [
      "Lifestyle",
      "Training & Gym",
      "Basketball",
      "Track & Field",
      "Running",
    ],
    required: true,
  },
  collections: {
      type: String,
      enum: [
        "Air Force",
        "Nike Dunk",
        "Air Max",
        "Jordan Editions",
        "Blazer",
        "Cortez",
        "Nike Pegasus",
      ],
      required: true,
  },
  shoesHeight: {
    type: String,
    enum: ["Low Top", "Mid Top", "High Top"],
    required: true,
  },
  closureType: {
    type: String,
    enum: [
      "Slip On",
      "Strap",
      "Zipper",
      "Toggle",
      "Pullover",
      "Laces",
    ],
    required: true,
  },
  width: {
    type: String,
    enum: ["Regular", "Wide", "Extra Wide"],
    required: true,
  },
});

export default mongoose.model("Item", ItemSchema);
