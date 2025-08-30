import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Verified Customer",
    comment: "Amazing earrings collection! The quality exceeded my expectations and shipping was super fast.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    category: "Earrings",
  },
  {
    name: "Michael Chen",
    role: "Interior Designer",
    comment: "Perfect lamps for my projects. Great variety and excellent customer service throughout.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    category: "Lamps",
  },
  {
    name: "Emily Rodriguez",
    role: "Beauty Blogger",
    comment: "Their makeup selection is incredible. Found exactly what I needed for my content creation.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    category: "Makeup",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-cream-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
            Customer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
              Love
            </span>
          </h2>
          <p className="text-xl text-stone-600">
            Real feedback from our valued customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-stone-200 hover:border-amber-200 transition-all duration-500 hover:shadow-xl h-full flex flex-col"
            >
              <CardContent className="p-8 flex-grow flex flex-col">
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= testimonial.rating
                          ? "text-amber-400 fill-current"
                          : "text-stone-300"
                      }`}
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-amber-400 mb-4" />
                <p className="text-stone-600 leading-relaxed mb-6 italic flex-grow">
                  {testimonial.comment}
                </p>
                <div className="flex items-center space-x-4 mt-auto">
                  <Image
                    width={64}
                    height={64}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-amber-100"
                    sizes="64px"
                  />
                  <div>
                    <div className="font-medium text-stone-800">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-stone-500">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-amber-600 font-medium">
                      {testimonial.category} Customer
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}