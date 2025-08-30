import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Home, Palette, Heart, Star } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    icon: Sparkles,
    name: "Earrings",
    description: "Elegant jewelry pieces for every style",
    image: "https://image.reewah.com/product-entry/uploads/Earrings_edit/RE009.jpg?v=1756467447",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Home,
    name: "Lamps",
    description: "Modern lighting for beautiful spaces",
    image: "https://image.reewah.com/product-entry/uploads/Lamp_edit/RL003.jpg?v=1756557300",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Palette,
    name: "Premium Makeup",
    description: "High-quality cosmetics collection",
    image: "https://image.reewah.com/product-entry/uploads/Makeup_store_1_edit/TD017.jpg?v=1756558701",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    name: "Beauty Essentials",
    description: "Daily skincare and beauty basics",
    image: "https://image.reewah.com/product-entry/uploads/Makeup_store_1_edit/TD006.jpg?v=1756558701",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: Star,
    name: "Nail Care",
    description: "Complete nail art and care solutions",
    image: "https://image.reewah.com/product-entry/uploads/Nails_edit/NL002.jpg?v=1756559323",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-gradient-to-r from-stone-50 to-cream-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
            What We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
              Offer
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Five distinctive categories, each carefully curated to bring
            beauty and functionality to your life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className={`group border-stone-200 hover:border-amber-300 transition-all duration-500 hover:shadow-xl overflow-hidden ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div
                    className={`w-10 h-10 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-serif font-medium text-stone-800 mb-2 group-hover:text-stone-900">
                  {category.name}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}