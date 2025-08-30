"use client"
import { useState, useEffect } from 'react';
import { Headphones, MessageCircle, Mail } from 'lucide-react';
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900" />
      
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Headphones className="w-8 h-8 text-amber-400" />
            <div className="h-px w-12 bg-gradient-to-r from-amber-400 to-rose-400" />
            <MessageCircle className="w-6 h-6 text-rose-400" />
            <div className="h-px w-12 bg-gradient-to-r from-rose-400 to-purple-400" />
            <Mail className="w-6 h-6 text-purple-400" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-light text-white mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400 font-medium">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about our products? Need help with your order? We re here to help you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}