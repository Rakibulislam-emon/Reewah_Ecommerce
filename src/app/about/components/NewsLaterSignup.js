"use client";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
 
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // API কল বা ফর্ম সাবমিশন লজিক
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="bg-gradient-to-r from-amber-50 to-rose-50 rounded-3xl p-8 md:p-12 shadow-lg border border-amber-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new product launches, and beauty tips
          </p>
        </div>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="text-green-600 text-lg font-medium mb-2">
              Thank you for subscribing!
            </div>
            <p className="text-stone-600">
              Check your email for confirmation
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-full border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
            <p className="text-sm text-stone-500 text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}