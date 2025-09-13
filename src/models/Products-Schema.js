import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

export const ProductsModel =
  mongoose?.models?.Product ?? mongoose.model("Product", productSchema);
