"use client";
import {
  ArrowRight,
  Clock,
  CreditCard,
  Package,
  Star,
  Star as StarIcon,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
  { day: "Sunday", hours: "12:00 PM - 4:00 PM EST" },
];

const supportTopics = [
  {
    icon: Package,
    title: "Order Status",
    description: "Track your order or report issues",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: CreditCard,
    title: "Payment & Returns",
    description: "Billing questions and return policy",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: StarIcon,
    title: "Product Questions",
    description: "Get help with specific products",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Users,
    title: "Account Help",
    description: "Login issues and account management",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export default function BusinessInfo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`space-y-8 transform transition-all duration-1000 delay-1000 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
      }`}
    >
      {/* Business Hours */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-serif text-stone-800">Business Hours</h3>
        </div>

        <div className="space-y-3">
          {businessHours.map((schedule, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-stone-100 last:border-b-0"
            >
              <span className="text-stone-700 font-medium">{schedule.day}</span>
              <span className="text-stone-600">{schedule.hours}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100">
          <div className="flex items-center space-x-2 text-amber-700">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">
              Live chat available 24/7
            </span>
          </div>
        </div>
      </div>

      {/* Support Topics */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-stone-100">
        <h3 className="text-xl font-serif text-stone-800 mb-6">
          Common Topics
        </h3>

        <div className="space-y-4">
          {supportTopics.map((topic, index) => (
            <div
              key={index}
              className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-stone-50 transition-all duration-200 cursor-pointer"
            >
              <div
                className={`w-10 h-10 ${topic.bg} rounded-xl flex items-center justify-center flex-shrink-0`}
              >
                <topic.icon className={`w-5 h-5 ${topic.color}`} />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-stone-800 group-hover:text-stone-900 mb-1">
                  {topic.title}
                </h4>
                <p className="text-sm text-stone-600">{topic.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-stone-600 transition-colors duration-200" />
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-stone-800 to-stone-900 rounded-2xl shadow-lg p-8 text-white">
        <h3 className="text-xl font-serif mb-6">We re Here for You</h3>

        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">&lt; 2hrs</div>
            <div className="text-sm text-stone-300">Average Response</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">98%</div>
            <div className="text-sm text-stone-300">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">24/7</div>
            <div className="text-sm text-stone-300">Live Chat Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1">5+</div>
            <div className="text-sm text-stone-300">Contact Methods</div>
          </div>
        </div>
      </div>
    </div>
  );
}
