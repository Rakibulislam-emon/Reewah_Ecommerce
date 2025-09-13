"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  ArrowRight,
  ChevronRight,
  Menu,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CollectionDropDown from "./CollectionDropDown";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                <Image
                  height={32}
                  width={32}
                  alt="logo"
                  src="https://image.reewah.com/product-entry/logo/reewah.png"
                />
              </span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              eewah
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <CollectionDropDown />
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <SignedOut>
              <SignInButton
                mode="modal"
                className="text-foreground hover:text-primary transition-colors"
              >
                <button>Sign In</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-5 h-5",
                    userButtonTrigger: "text-foreground hover:text-primary",
                  },
                }}
              />
            </SignedIn>
            <button className="text-foreground hover:text-primary transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu panel */}
            <div className="relative z-50 bg-background border-t border-border shadow-lg">
              <div className="px-4 py-6 max-h-[calc(100vh-80px)] overflow-y-auto">
                {/* Navigation Links */}
                <nav className="flex  flex-col space-y-1 mb-6">
                  <div className=" ml-2">
                    <CollectionDropDown />
                  </div>
                  <Link
                    href="/about"
                    className="group flex items-center px-3 py-3 text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 rounded-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>About</span>
                    <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group flex items-center px-3 py-3 text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 rounded-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Contact</span>
                    <ChevronRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </nav>

                {/* Divider */}
                <div className="border-t border-border mb-6" />

                {/* Action Buttons */}
                <div className="space-y-3">
                  {/* Search Button */}
                  <button
                    className="flex items-center w-full px-3 py-3 text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 rounded-lg group"
                    onClick={() => {
                      // Handle search action
                      setIsMenuOpen(false);
                    }}
                  >
                    <Search className="w-5 h-5 mr-3" />
                    <span className="font-medium">Search</span>
                  </button>

                  {/* Shopping Cart */}
                  <button
                    className="flex items-center w-full px-3 py-3 text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 rounded-lg group relative"
                    onClick={() => {
                      // Handle cart action
                      setIsMenuOpen(false);
                    }}
                  >
                    <div className="relative mr-3">
                      <ShoppingBag className="w-5 h-5" />
                      <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-md">
                        0
                      </span>
                    </div>
                    <span className="font-medium">Shopping Cart</span>
                  </button>

                  {/* Authentication Section */}
                  <div className="pt-3 border-t border-border">
                    <SignedOut>
                      <SignInButton mode="modal">
                        <button className="flex items-center w-full px-3 py-3 text-primary bg-primary/10 hover:bg-primary/20 transition-all duration-200 rounded-lg font-semibold group">
                          <User className="w-5 h-5 mr-3" />
                          <span>Sign In</span>
                          <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                      </SignInButton>
                    </SignedOut>

                    <SignedIn>
                      <div className="flex items-center px-3 py-3 text-foreground hover:bg-accent/50 transition-all duration-200 rounded-lg">
                        <UserButton
                          afterSignOutUrl="/"
                          appearance={{
                            elements: {
                              userButtonAvatarBox: "w-8 h-8 mr-3",
                              userButtonTrigger:
                                "hover:opacity-80 transition-opacity",
                              userButtonPopoverCard: "shadow-lg border",
                            },
                          }}
                        />
                        <span className="font-medium text-sm text-muted-foreground">
                          My Account
                        </span>
                      </div>
                    </SignedIn>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-center text-sm text-muted-foreground">
                    <p>
                      Need help?{" "}
                      <Link
                        href="/support"
                        className="text-primary hover:underline font-medium"
                      >
                        Contact Support
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
