
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { useCartStore } from "@/lib/cart-store"

export default function ProductCard({collection}) {
  const {id,name,image} = collection

  return (
    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
     
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors">
            <Heart className="w-4 h-4 text-foreground" />
          </button>
          <button
            // onClick={handleAddToCart}
            className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors"
            title="Add to Cart"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <p className="text-muted-foreground text-sm uppercase tracking-wide">
          {/* {category} */}
        </p>
        <Link href={`/products/${id}`}>
          <h3 className="font-heading font-semibold text-card-foreground hover:text-primary transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
       
      </div>
    </div>
  );
}
