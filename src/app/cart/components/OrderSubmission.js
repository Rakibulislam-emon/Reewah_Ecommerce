"use client";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useState } from "react";
import OrderForm from "./OrderFom";

export default function OrderSubmission() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSignedIn } = useUser();

  const handleOpenSubmission = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isSignedIn ? (
        <>
          <button
            onClick={handleOpenSubmission}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
          >
            <span>Proceed to Checkout</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <OrderForm isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
      ) : (
        <SignInButton mode="modal">
          <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2">
            <span>Sign in to Checkout</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </SignInButton>
      )}
    </>
  );
}
