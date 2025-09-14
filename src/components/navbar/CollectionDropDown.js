"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import useSWR from "swr";

const url = process.env.NEXT_PUBLIC_API_BASE_URL
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function CollectionDropDown() {
   const { data, error } = useSWR(`${url}/api/categories`, fetcher);

if (error) {
  return <h1 className="items-center">something wrong try again....</h1>
}
  return (
    <div className="inline-block rounded-md">
      <DropdownMenu>
        <DropdownMenuTrigger className="md:px-4 py-2 cursor-pointer">
          <h1>All Collections</h1>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {data?.map((item) => (
            <DropdownMenuItem key={item} asChild>
              <Link className="cursor-pointer" href={`/collections/${item}`}>
                {item}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
