import { dbConnect } from "@/lib/db";
import { ProductsModel } from "@/models/Products-Schema";
import { replaceMongoIdInArray } from "./utils";

export const getAllProductsData = async () => {
  await dbConnect();
  const data = await ProductsModel.find().lean();
  return replaceMongoIdInArray(data);
};

// get all category for navbar
export const getProductsCategories = async () => {
  await dbConnect();
  const categories = await ProductsModel.distinct("category");
  return categories;
};
