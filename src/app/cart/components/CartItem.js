import { toggleFavorite } from "@/store/favSlice";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

export default function CartItem({
  item,
  updateQuantity,
  dispatch,
  removeFromCart,
  favItems,
}) {
  console.log(favItems);
  const isFav = favItems.some((f) => f.id === item.id);
  return (
    <div
      key={item.id}
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex gap-4">
        <Image
          src={item?.image}
          alt={item.name}
          className="w-24 h-24 rounded-lg object-cover border border-gray-200"
          width={96}
          height={96}
        />
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>

            <div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:text-red-700 p-1"
              >
                <Trash2 className="h-5 w-5" />
              </button>
              <button
                onClick={() => dispatch(toggleFavorite(item))}
                className={`ml-2 transition-transform duration-200 hover:scale-110 ${
                  isFav ? "text-red-500" : "text-gray-400"
                }`}
              >
                <FaHeart size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-medium">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
