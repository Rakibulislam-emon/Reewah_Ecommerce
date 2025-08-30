import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-stone-900 to-stone-800">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
          Ready to Discover Your Perfect Products?
        </h2>
        <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
          Browse our complete collection and find exactly what you re
          looking for across all categories
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
            <span>Shop All Categories</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 backdrop-blur-sm">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}