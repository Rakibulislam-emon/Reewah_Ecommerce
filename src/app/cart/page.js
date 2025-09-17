"use client";

import { removeFromCart, updateCartQuantity } from "@/store/cartSlice";

import Backward from "@/components/Backward";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./components/CartItem";
import EmptyCart from "./components/EmptyCart";
import OrderSummary from "./components/OrderSummary";

export default function CartPage() {
  const dispatch = useDispatch();

  // Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items || []);
  const favItems = useSelector((state) => state.favorites.items);
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateCartQuantity({ id, quantity }));
    }
  };

  const getTotalItems = () =>
    cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Backward />
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-600 mt-2">
            You have {getTotalItems()} items in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <CartItem
                favItems={favItems}
                key={item.name}
                item={item}
                updateQuantity={updateQuantity}
                dispatch={dispatch}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          {/* Order Summary */}
          <OrderSummary getTotalItems={getTotalItems} />
        </div>
      </div>
    </div>
  );
}
