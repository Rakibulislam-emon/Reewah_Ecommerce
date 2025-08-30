"use client"
import { useState, useEffect } from 'react';
import { Mail, Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Get in touch via email',
    contact: 'hello@luminastore.com',
    action: 'Send Email',
    gradient: 'from-blue-500 to-cyan-500',
    delay: 0
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak with our team',
    contact: '+1 (555) 123-4567',
    action: 'Call Now',
    gradient: 'from-green-500 to-emerald-500',
    delay: 100
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with support',
    contact: 'Available 24/7',
    action: 'Start Chat',
    gradient: 'from-purple-500 to-pink-500',
    delay: 200
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our main office',
    contact: '123 Beauty Boulevard, Style City, SC 12345',
    action: 'Get Directions',
    gradient: 'from-orange-500 to-red-500',
    delay: 300
  }
];

export default function ContactMethods() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
     
          <section className="py-20">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
              <div className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
                  Multiple Ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">Connect</span>
                </h2>
                <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                  Choose your preferred method of communication
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-stone-100 hover:border-amber-200 hover:-translate-y-2 cursor-pointer transform transition-all duration-1000 delay-${method.delay + 400} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <method.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-serif font-medium text-stone-800 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-stone-600 mb-4 text-sm">
                      {method.description}
                    </p>
                    <p className="text-stone-800 font-medium mb-6 text-sm">
                      {method.contact}
                    </p>
                    
                    <button className={`w-full bg-gradient-to-r ${method.gradient} hover:opacity-90 text-white py-3 rounded-xl font-medium transition-all duration-300 transform group-hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center space-x-2`}>
                      <span>{method.action}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
  );
}