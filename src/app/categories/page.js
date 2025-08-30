"use client";

import { productCollection } from "@/data/productsData";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Browse by Category
      </h1>

      <TabGroup >
        {/* Tabs */}
        <TabList className=" flex flex-wrap gap-y-6 justify-center space-x-4 border-b border-gray-200 mb-8">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {collection.products.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="relative w-full h-56">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
