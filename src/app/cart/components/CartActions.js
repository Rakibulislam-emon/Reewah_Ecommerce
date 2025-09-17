"use client";
import { toast } from "sonner";

import { addToCart } from "@/store/cartSlice";
import { toggleFavorite } from "@/store/favSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CartActions({ product }) {
  const dispatch = useDispatch();
  const favItems = useSelector((state) => state.favorites.items);
  const isFav = favItems.some((item) => item.id === product.id);
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("✅ Added to cart!");
  };

  return (
    <div>
      <div className="flex justify-between mt-2  gap-x-4">
        <button
          onClick={handleAddToCart}
          className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
        <button
          onClick={() => dispatch(toggleFavorite(product))}
          className={`flex items-center justify-center w-10 h-10 rounded-full text-xl transition-all duration-300 cursor-pointer
    ${
      isFav
        ? "text-red-500 bg-red-100 hover:bg-red-200"
        : "text-gray-400 bg-gray-100 hover:bg-gray-200"
    }`}
          title={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          {isFav ? (
            <span className="text-4xl">♥</span>
          ) : (
            <span className="text-4xl">♡</span>
          )}
        </button>
      </div>
    </div>
  );
}
