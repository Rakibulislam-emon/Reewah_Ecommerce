import HeroLeftContent from "./hero/HeroLeftContent";
import HeroRightCarousel from "./hero/HeroRightCarousel";

export default function JewelryHeroServer() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-cream-50 to-stone-50 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-amber-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-cream-100/30 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 flex items-center min-h-[calc(100vh-120px)] px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          {/* Left content is mostly static */}
          <HeroLeftContent />

          {/* Right content is interactive, needs client */}
          <HeroRightCarousel />
        </div>
      </div>

      {/* Scroll Indicator can be server if just CSS */}
      <div className="absolute  bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center  -space-y-6 text-stone-500">
          <span className="text-sm font-medium tracking-wide">SCROLL TO EXPLORE</span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent" />
        </div>
      </div>
    </div>
  );
}
