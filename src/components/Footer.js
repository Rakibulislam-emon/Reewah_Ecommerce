import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">L</span>
              </div>
              <span className="font-heading font-bold text-xl text-card-foreground">Luxe</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Crafting exceptional jewelry pieces that celebrate life s most precious moments.
            </p>
            <div className="flex space-x-4">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-card-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Shop All
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Rings
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Necklaces
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Earrings
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Bracelets
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-card-foreground">Customer Care</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Size Guide
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Care Instructions
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Returns & Exchanges
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Shipping Info
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Warranty
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-card-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">hello@luxejewelry.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-muted-foreground">
                  123 Luxury Lane
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 Luxe Jewelry. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
