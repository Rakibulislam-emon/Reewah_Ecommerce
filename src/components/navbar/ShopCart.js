import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function ShopCart() {
  const cartItems = useSelector((state) => state.cart.items);
  
  

  return (
    <Link href={'/cart'} className="text-foreground hover:text-primary transition-colors relative">
      <ShoppingBag className="w-5 h-5" />
      <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {cartItems?.length}
      </span>
    </Link>
  );
}
