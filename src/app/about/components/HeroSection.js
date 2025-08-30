import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* ব্যাকগ্রাউন্ড এলিমেন্ট */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-amber-50/50 to-rose-50/30" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-amber-200/20 to-rose-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/15 to-pink-200/15 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* কন্টেন্ট */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
                <Sparkles className="w-6 h-6 text-amber-500" />
                <span className="text-sm font-medium text-stone-600 tracking-wide uppercase">
                  About Us
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-light text-stone-800 leading-tight">
                Curating
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 font-medium">
                  Beautiful Lives
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 leading-relaxed">
                From elegant earrings to modern home lighting, premium makeup
                to nail care essentials – we bring together the finest
                products to enhance every aspect of your lifestyle.
              </p>
            </div>
            
            {/* স্ট্যাটিস্টিক্স */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50">
                <div className="text-3xl font-bold text-stone-800 mb-1">10K+</div>
                <div className="text-sm text-stone-600">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/50">
                <div className="text-3xl font-bold text-stone-800 mb-1">4.9★</div>
                <div className="text-sm text-stone-600">Average Rating</div>
              </div>
            </div>
          </div>
          
          {/* ইমেজ গ্রিড */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
              <div className="grid grid-cols-2 gap-2 h-full">
                <div className="space-y-2">
                  <div className="h-1/2 rounded-xl overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src="https://image.reewah.com/product-entry/uploads/Earrings_edit/RE008.jpg?v=1756489032"
                      alt="Earrings"
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                  </div>
                  <div className="h-1/2 rounded-xl overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src="https://image.reewah.com/product-entry/uploads/Lamp_edit/RL012.jpg?v=1756557300" 
                      alt="Lamps"
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-1/3 rounded-xl overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src="https://image.reewah.com/product-entry/uploads/Makeup_store_1_edit/TD015.jpg?v=1756558701"
                      alt="Makeup"
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="h-1/3 rounded-xl overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src="https://image.reewah.com/product-entry/uploads/Nails_edit/NL008.jpg?v=1756559323"
                      alt="Nail Care"
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="h-1/3 rounded-xl overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src="https://image.reewah.com/product-entry/uploads/Nails_edit/NL010.jpg?v=1756559323"
                      alt="Nail Art"
                      className="w-full h-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}