import ProductCard from "@/components/ui/ProductCard";
import { getParamsForCollectionData } from "@/lib/utils";

export default function Page({ params }) {
 
  const collection = getParamsForCollectionData(params?.collection);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <p className="mb-4 text-lg font-semibold">
        Total items: {collection.length}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collection.map((item) => (
          <ProductCard key={item.id} collection={item} />
        ))}
      </div>
    </div>
  );
}
