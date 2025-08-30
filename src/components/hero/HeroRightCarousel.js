"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function HeroRightCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=800&fit=crop",
      alt: "Elegant Diamond Ring Collection",
    },
    {
      src: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&h=800&fit=crop",
      alt: "Luxury Gold Necklaces",
    },
    {
      src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&h=800&fit=crop",
      alt: "Premium Earring Collection",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="relative group">
      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
        {heroImages.map((image, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}>
            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Floating cards */}
      <div className="absolute -left-8 top-1/4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 transform rotate-3 hover:rotate-0 transition-all duration-500">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <p className="font-medium text-stone-800">Premium Quality</p>
            <p className="text-sm text-stone-600">18K Gold Certified</p>
          </div>
        </div>
      </div>
    </div>
  );
}
