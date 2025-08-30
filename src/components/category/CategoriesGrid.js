"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Heart, Home, Palette, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ICONS = { Sparkles, Heart, Home, Palette, Star };

export default function CategoriesGrid({ categories }) {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("categories-grid");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="categories-grid"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr"
    >
      {categories.map((category) => {
        const Icon = ICONS[category.icon] || Sparkles;
        const isFeatured = category.featured;

        return (
          <div
            key={category.id}
            className={`relative transform transition-all duration-700  ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            } ${isFeatured ? "lg:col-span-2 lg:row-span-2" : ""}`}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            {/* Background Accent Shape */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br opacity-20 from-amber-100 to-pink-100 scale-95 blur-3xl transition-transform duration-500 group-hover:scale-100" />

            <div
              className={`group relative h-80 ${isFeatured ? "lg:h-full" : ""} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${category.bgGradient} p-1`}
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/50 transition-all duration-500" />

                {/* Category Icon Badge */}
                <div className="absolute top-4 left-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                      hoveredCategory === category.id ? "scale-125 rotate-12" : "scale-100 rotate-0"
                    }`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Featured Badge */}
                {isFeatured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg animate-pulse">
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 ">
                  <h3 className="text-xl md:text-3xl font-serif font-medium text-white mb-2">{category.name}</h3>
                  <p className="text-white/90 text-sm md:text-lg mb-4 line-clamp-2">{category.description}</p>
                  <Link  href={`/collections${category.path}`}>
                    <button className="group/btn bg-white/20 backdrop-blur-md text-white border border-white/30 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white hover:text-stone-800 flex items-center space-x-2 cursor-pointer">
                      <span>{isFeatured ? "Shop Now" : "Explore"}</span>
                      <ArrowRight className="w-3 md:w-4 h-3 md:h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
