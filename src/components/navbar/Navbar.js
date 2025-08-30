"use client";

import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
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
                  height={500}
                  width={500}
                  alt="logo"
                  src={"https://image.reewah.com/product-entry/logo/reewah.png"}
                />
              </span>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              eewah
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <Link
              href="/shop"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Shop
            </Link> */}
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
            <button className="text-foreground hover:text-primary transition-colors">
              <User className="w-5 h-5" />
            </button>
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
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                href="/shop"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Shop
              </Link>
              <div className="">
                {" "}
                <CollectionDropDown />
              </div>
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
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <button className="text-foreground hover:text-primary transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="text-foreground hover:text-primary transition-colors">
                  <User className="w-5 h-5" />
                </button>
                <button className="text-foreground hover:text-primary transition-colors relative">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
