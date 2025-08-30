// app/components/HeroLeftContent.jsx
import { Star, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HeroLeftContent() {
  return (
    <div className="space-y-8">
      {/* Trust badges */}
      <div className="flex items-center space-x-6 text-sm text-stone-600">
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 text-amber-500 fill-current" />
          <span>Top Quality Products</span>
        </div>
        <div className="h-4 w-px bg-stone-300" />
        <span>Free Shipping</span>
        <div className="h-4 w-px bg-stone-300" />
        <span>Wide Variety</span>
      </div>

      {/* Main heading */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-serif font-light text-stone-800 leading-tight">
          Discover
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 font-medium">
            Your Favorites
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-lg">
          Explore our curated selection of products: Earrings, Lamps, Makeup, Nails, and more – everything you need to shine.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-6 py-6">
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-stone-800">Variety</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            From beauty to home essentials, we have it all.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-stone-800">Fast Delivery</h3>
          <p className="text-stone-600 text-sm leading-relaxed">
            Receive your orders quickly and hassle-free.
          </p>
        </div>
      </div>

      {/* Call-to-action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link
          href="/shop"
          className="group bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
        >
          <span>Shop All Products</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
        <Link
          href="/categories"
          className="border-2 border-stone-300 hover:border-amber-500 text-stone-700 hover:text-amber-700 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:bg-white/50 backdrop-blur-sm text-center"
        >
          Browse Categories
        </Link>
      </div>
    </div>
  );
}
