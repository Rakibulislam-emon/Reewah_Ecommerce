"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Target, Clock } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const tabs = [
  { id: "story", label: "Our Story", icon: Quote },
  { id: "mission", label: "Mission", icon: Target },
  { id: "timeline", label: "Journey", icon: Clock },
];

const values = [
  {
    icon: "Award",
    title: "Premium Quality",
    description: "We carefully select every product to ensure it meets our high standards for quality and performance.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: "Heart",
    title: "Customer Love",
    description: "Your happiness is our success. We go above and beyond to ensure every customer feels valued.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: "Globe",
    title: "Global Reach",
    description: "Sourcing the finest products worldwide and delivering them straight to your doorstep.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: "Shield",
    title: "Trust & Security",
    description: "Safe shopping with secure payments, authentic products, and reliable customer protection.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

const milestones = [
  {
    year: "2020",
    title: "Founded",
    desc: "Started with a passion for quality products",
  },
  {
    year: "2021",
    title: "First 1K Customers",
    desc: "Reached our first major milestone",
  },
  {
    year: "2023",
    title: "Category Expansion",
    desc: "Added lamps and home décor",
  },
  {
    year: "2024",
    title: "10K+ Happy Customers",
    desc: "Serving customers worldwide",
  },
];

const icons = {
  Award: require("lucide-react").Award,
  Heart: require("lucide-react").Heart,
  Globe: require("lucide-react").Globe,
  Shield: require("lucide-react").Shield,
};

export default function StoryTabs() {
  const [activeTab, setActiveTab] = useState("story");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("story-tabs");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="story-tabs" className="py-16 px-4 max-w-6xl mx-auto">
      <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        {/* ট্যাব নেভিগেশন */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-lg"
                  : "bg-white text-stone-700 hover:bg-stone-50 shadow-md border border-stone-200"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        
        {/* ট্যাব কন্টেন্ট */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-stone-100">
          {activeTab === "story" && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                    Story
                  </span>
                </h2>
                <div className="space-y-4 text-lg text-stone-600 leading-relaxed">
                  <p>
                    What started as a small passion project in 2020 has grown
                    into a trusted destination for quality products across
                    multiple lifestyle categories.
                  </p>
                  <p>
                    We believe that beautiful products – whether its the
                    perfect pair of earrings, a statement lamp for your home,
                    or premium makeup that makes you feel confident – have the
                    power to enhance your daily life in meaningful ways.
                  </p>
                  <p>
                    Today, we re proud to serve over 10,000 customers
                    worldwide, offering carefully curated products that
                    combine style, quality, and affordability.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  width={500}
                  height={400}
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=400&fit=crop"
                  alt="Our journey"
                  className="rounded-2xl shadow-lg w-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white p-4 rounded-2xl shadow-lg">
                  <div className="text-2xl font-bold">2020</div>
                  <div className="text-sm">Founded</div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "mission" && (
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-8">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                  Mission
                </span>
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed mb-12">
                To curate and deliver exceptional products across beauty and
                lifestyle categories, making quality and style accessible to
                everyone while providing an outstanding shopping experience.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const IconComponent = icons[value.icon];
                  return (
                    <Card
                      key={index}
                      className="border-stone-200 hover:border-amber-300 transition-all duration-300 hover:shadow-lg"
                    >
                      <CardContent className="p-8 text-center">
                        <div
                          className={`w-16 h-16 ${value.bg} rounded-full flex items-center justify-center mx-auto mb-6`}
                        >
                          <IconComponent className={`w-8 h-8 ${value.color}`} />
                        </div>
                        <h3 className="text-xl font-serif mb-3 text-stone-800">
                          {value.title}
                        </h3>
                        <p className="text-stone-600 leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
          
          {activeTab === "timeline" && (
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-12 text-center">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                  Journey
                </span>
              </h2>
              <div className="relative">
                {/* টাইমলাইন লাইন */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-rose-400 to-purple-400 hidden md:block" />
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className="relative flex items-start space-x-8"
                    >
                      {/* টাইমলাইন ডট */}
                      <div className="hidden md:flex w-16 h-16 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full items-center justify-center shadow-lg flex-shrink-0 relative z-10">
                        <span className="text-white font-bold text-sm">
                          {milestone.year}
                        </span>
                      </div>
                      {/* কন্টেন্ট */}
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 flex-1 hover:shadow-xl transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-serif font-medium text-stone-800 mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-stone-600">{milestone.desc}</p>
                          </div>
                          <div className="md:hidden bg-gradient-to-r from-amber-500 to-rose-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            {milestone.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}