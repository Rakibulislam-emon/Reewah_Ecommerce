import AddToCart from "@/app/cart/components/CartActions";
import { getAllProductsData } from "@/lib/dbQueries";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "./components/Breadcrumb";

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const data = await getAllProductsData();
  const product = data.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Product Not Found</h2>
          <p className="mt-2 text-gray-600">Sorry, we couldn&apos;t find the product you&apos;re looking for.</p>
          <Link href="/products" className="mt-4 inline-block text-blue-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
      <Breadcrumb product={product}/>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-[500px] object-contain rounded-lg shadow-lg bg-white p-4"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-lg text-gray-500 capitalize mb-4">{product.category}</p>
            <p className="text-2xl font-semibold text-gray-900 mb-4">$XX.XX</p> {/* Placeholder for price */}
            <p className="text-gray-600 mb-6">
              Elevate your style with this exquisite {product.category} piece. Crafted with precision, it’s perfect for any occasion. 
              {/* Placeholder description */}
            </p>

            {/* Call to Action */}
            <div className="flex gap-4 mb-6">
              
            <AddToCart product={product}/>
              
            </div>

            {/* Additional Info */}
            <div className="text-sm text-gray-600">
              <p><span className="font-semibold">SKU:</span> {product.id}</p>
              <p><span className="font-semibold">Category:</span> <span className="capitalize">{product.category}</span></p>
              <p><span className="font-semibold">Availability:</span> In Stock</p> {/* Placeholder */}
            </div>
          </div>
        </div>

        {/* Product Description / Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button className="border-b-2 border-blue-600 pb-2 text-blue-600 font-medium">
                Description
              </button>
              <button className="border-b-2 border-transparent pb-2 text-gray-600 hover:text-gray-800 hover:border-gray-300">
                Reviews
              </button>
            </nav>
          </div>
          <div className="mt-6 text-gray-600">
            <p>
              This {product.name} is a stunning addition to your collection. Designed with elegance and crafted for durability, it complements both casual and formal looks. 
              Perfect for gifting or treating yourself. 
              {/* Placeholder description */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}