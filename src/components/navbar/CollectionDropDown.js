"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function CollectionDropDown() {
  const itemsCollections = [
    { id: 1, name: "Earrings", path: "/earrings" },
    { id: 2, name: "Lamps", path: "/lamp" },
    { id: 3, name: "Makeups", path: "/makeup" },
    { id: 5, name: "Nails", path: "/nails" },
  ];

  return (
    <div className="inline-block rounded-md">
      <DropdownMenu>
        <DropdownMenuTrigger className="md:px-4 py-2 cursor-pointer">
          All Collections
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {itemsCollections.map((item) => (
            <DropdownMenuItem key={item.id} asChild>
              <Link
                className="cursor-pointer"
                href={`/collections${item.path}`}
              >
                {item.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
