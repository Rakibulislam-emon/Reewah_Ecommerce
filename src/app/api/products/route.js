import { getAllProductsData } from "@/lib/dbQueries";

export async function GET() {
  try {
    const allProducts = await getAllProductsData();
    return new Response(JSON.stringify(allProducts),{
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
