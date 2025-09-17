import { ArrowLeft, ShoppingBag } from 'lucide-react'
import React from 'react'

export default function EmptyCart() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-24 w-24 text-gray-300 mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Cart Is Empty
          </h2>
          <p className="text-gray-500 mb-8">
            Add Your Favariout Products To Cart
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2 mx-auto">
            <ArrowLeft className="h-5 w-5" />
            Shopping Cart
          </button>
        </div>
      </div>
  )
}
