"use client";

import { insertProducts } from "@/lib/insertData";

export default function Btn() {
  return (
    <div className="border">
      <form action={insertProducts}>
        <button type="submit" className=" px-4 py-2 rounded">
          insertData
        </button>
      </form>
    </div>
  );
}
