import { getProductsCategories } from "@/lib/dbQueries";

export async function GET(request) {
  try {
    const categories = await getProductsCategories();
    return new Response(JSON.stringify(categories),{
       headers: { "Content-Type": "application/json" }
    })
  } catch (error) {
    console.error("Error fetching categories:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch categories" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
