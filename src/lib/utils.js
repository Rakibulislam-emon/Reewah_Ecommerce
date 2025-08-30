import { earrings, lamps, makeups, nails } from "@/data/productsData";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

//

export const getParamsForCollectionData = (params) => {
  if (params === "earrings") {
    return earrings;
  }
  if (params === "lamp") {
    return lamps
  }
  if (params === "makeup") {
    return makeups
  }
  if (params === "nails") {
    return nails
  }
};
