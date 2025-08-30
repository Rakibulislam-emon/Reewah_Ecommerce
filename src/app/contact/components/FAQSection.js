"use client"
import { useState, useEffect } from 'react';
import { HelpCircle, Package, Globe, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
     <section className="py-20">
            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
              <div className={`transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-3xl font-serif text-stone-800 mb-8">
                  Need Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">Answers?</span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-amber-200 cursor-pointer group">
                    <HelpCircle className="w-12 h-12 text-amber-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-medium text-stone-800 mb-2">FAQ</h3>
                    <p className="text-sm text-stone-600">Common questions answered</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-amber-200 cursor-pointer group">
                    <Package className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-medium text-stone-800 mb-2">Shipping Info</h3>
                    <p className="text-sm text-stone-600">Delivery & tracking details</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-amber-200 cursor-pointer group">
                    <Globe className="w-12 h-12 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-medium text-stone-800 mb-2">Return Policy</h3>
                    <p className="text-sm text-stone-600">Easy returns & exchanges</p>
                  </div>
                </div>
                
                <p className="text-stone-600 mb-8">
                  Still have questions? We re always happy to help!
                </p>
                
                <button className="group bg-gradient-to-r from-stone-700 to-stone-800 hover:from-stone-800 hover:to-stone-900 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
                  <MessageCircle className="w-5 h-5" />
                  <span>Start Live Chat</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </section>
  );
}