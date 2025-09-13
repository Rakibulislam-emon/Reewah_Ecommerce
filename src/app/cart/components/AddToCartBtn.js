"use client";
import { toast } from "sonner";

import { addToCart } from "@/store/cartSlice";
import { useDispatch } from "react-redux";

export default function AddToCart({ product }) {
  const dispatch = useDispatch();
  //   const favItems = useSelector(state => state.favorites.items);
  //   const isFav = favItems.some(item => item.id === product.id);
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("✅ Added to cart!");
  };

  return (
    <div>
      <div className="flex justify-between mt-2">
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
        {/* <button onClick={() => dispatch(toggleFavorite(product))} className={`px-4 py-1 rounded ${isFav ? 'text-red-500' : 'text-gray-400'}`}>
          {isFav ? '♥' : '♡'}
        </button> */}
      </div>
    </div>
  );
}
