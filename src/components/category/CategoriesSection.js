import CategoriesGrid from "./CategoriesGrid";

const categories = [
  {
    id: "earrings",
    path:"/earrings",
    name: "Earrings",
    description: "Elegant & stylish earrings for every occasion",
    image:
      "https://image.reewah.com/product-entry/uploads/Earrings_edit/RE009.jpg?v=1756467447",
    productCount: "150+ Products",
    icon: "Sparkles",
    gradient: "from-pink-400 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50",
    featured: true,
  },
  {
    id: "lamps",
     path:"/lamp",
    name: "Decorative Lamps",
    description: "Modern lighting solutions for your home",
    image:
      "https://image.reewah.com/product-entry/uploads/Lamp_edit/RL003.jpg?v=1756557300",
    productCount: "80+ Products",
    icon: "Home",
    gradient: "from-amber-400 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50",
    featured: false,
  },
  {
    id: "makeup1",
     path:"/makeup",
    name: "Premium Makeup",
    description: "High-quality cosmetics & beauty products",
    image:
      "https://image.reewah.com/product-entry/uploads/Makeup_store_1_edit/TD017.jpg?v=1756558701",
    productCount: "200+ Products",
    icon: "Palette",
    gradient: "from-purple-400 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    featured: true,
  },
  
 
  {
    id: "makeup2",
     path:"/makeup",
    name: "Beauty Essentials",
    description: "Everyday makeup & skincare basics",
    image:
      "https://image.reewah.com/product-entry/uploads/Makeup_store_1_edit/TD006.jpg?v=1756558701",
    productCount: "120+ Products",
    icon: "Heart",
    gradient: "from-rose-400 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    featured: false,
  },
   {
    id: "nails",
     path:"/nails",
    name: "Nail Art & Care",
    description: "Complete nail care & stunning designs",
    image:
      "https://image.reewah.com/product-entry/uploads/Nails_edit/NL002.jpg?v=1756559323",
    productCount: "90+ Products",
    icon: "Star",
    gradient: "from-indigo-400 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
    featured: false,
  },
];

export default function CategoriesSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-cream-50 via-white to-stone-50 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-amber-100/30 to-rose-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-stone-800 mb-4">
            Shop by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 font-medium">
              Category
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated collections, from stunning earrings to premium makeup and everything in between
          </p>
        </div>

        {/* Client Component */}
        <CategoriesGrid categories={categories} />
      </div>
    </section>
  );
}
