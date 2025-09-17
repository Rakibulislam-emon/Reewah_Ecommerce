import Link from "next/link";

export default function Breadcrumb({product}) {
  return (
    <nav className="mb-6 text-sm text-gray-600">
      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>{" "}
      &gt;
      <Link
        href={`/collections/${product.category}`}
        className="hover:text-blue-600 capitalize ml-1"
      >
        {product.category}
      </Link>{" "}
      &gt;
      <span className="ml-1">{product.name}</span>
    </nav>
  );
}
