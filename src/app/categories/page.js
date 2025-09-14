"use client";

import Loader from "@/components/Loader";
import ProductCard from "@/components/ui/ProductCard";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const url = process.env.NEXT_PUBLIC_API_BASE_URL
export default function CategoriesPage() {
  const { data, error } = useSWR(`${url}/api/products`, fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div className="h-screen flex justify-center items-center">
    <Loader/>
    </div>;

  // Group products by category
  const productCollection = Object.values(
    data.reduce((acc, product) => {
      if (!acc[product.category])
        acc[product.category] = { name: product.category, products: [] };
      acc[product.category].products.push(product);
      return acc;
    }, {})
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Browse by Category
      </h1>

      <TabGroup>
        {/* Tabs */}
        <TabList className="flex flex-wrap gap-y-6 justify-center space-x-4 border-b border-gray-200 mb-8">
          {productCollection.map((collection) => (
            <Tab
              key={collection.name}
              className={({ selected }) =>
                `px-6 py-2 text-lg font-medium rounded-t-lg focus:outline-none transition-all cursor-pointer ${
                  selected
                    ? "border-b-2 border-amber-600 text-amber-600"
                    : "text-gray-600 hover:text-amber-600"
                }`
              }
            >
              {collection.name}
            </Tab>
          ))}
        </TabList>

        {/* Panels */}
        <TabPanels>
          {productCollection.map((collection, idx) => (
            <TabPanel key={idx}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {collection.products.map((item) => (
                  <ProductCard
                    key={item.id}
                    collection={item}
                    cat={collection.name}
                  />
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}



