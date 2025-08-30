import { Truck, Shield, Headphones, Award } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
  { icon: Shield, title: "30-Day Returns", desc: "Hassle-free policy" },
  { icon: Headphones, title: "24/7 Support", desc: "Always here to help" },
  { icon: Award, title: "Quality Guarantee", desc: "Authentic products only" },
];

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
              Us
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-100 hover:border-amber-200 group-hover:-translate-y-2 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-rose-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-serif font-medium text-stone-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-600 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}