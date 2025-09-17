import Link from "next/link";
import OrderForm from "./OrderForm";

export default function OrderSummary({ getTotalItems }) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100 sticky top-8 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Order Summary
          </h2>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-center justify-between p-4 bg-white/70 rounded-xl border border-gray-100/50">
            <span className="text-gray-700 font-medium">Items in cart</span>
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {getTotalItems()}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-white/70 rounded-xl border border-gray-100/50">
            <span className="text-gray-700 font-medium">Shipping</span>
            <span className="text-green-600 font-semibold text-sm px-3 py-1 bg-green-50 rounded-full">
              FREE
            </span>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

          <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100/50">
            <p className="text-sm text-gray-600 mb-1">Ready for checkout</p>
            <p className="text-lg font-bold text-gray-900">
              All items verified ✓
            </p>
          </div>
        </div>

        <div className="space-y-4">
         <OrderForm/>

          <Link
            href={"/"}
            className="w-full border-2 border-gray-200 hover:border-gray-300 text-gray-700 hover:text-gray-900 py-4 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Secure checkout guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
