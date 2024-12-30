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
    required: true,
  },
  sportsAndActivities: {
    type: String,
    required: true,
  },
  collections: {
      type: String,
      required: true,
  },
  shoesHeight: {
    type: String,
    required: true,
  },
  closureType: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Item", ItemSchema);
