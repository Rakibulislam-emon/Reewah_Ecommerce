import ProductCard from "@/components/ui/ProductCard";
import { getAllProductsData } from "@/lib/dbQueries";

export default async function Page({ params }) {
  const { collection } = await params;
  const allData = await getAllProductsData();
  const products = allData.filter((item) => item.category === collection);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <p className="mb-4 text-lg font-semibold">
        Total items: {products?.length}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} collection={item} cat={collection} />
        ))}
      </div>
    </div>
  );
}
