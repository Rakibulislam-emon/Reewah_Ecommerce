"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname(); 
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="mb-6 text-sm text-gray-600">
      <Link href="/" className="hover:text-blue-600">Home</Link>
      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/");
        const isLast = index === segments.length - 1;

        return (
          <span key={index}>
            {" > "}
            {isLast ? (
              <span className="ml-1 capitalize">{segment}</span>
            ) : (
              <Link href={href} className="hover:text-blue-600 capitalize ml-1">
                {segment}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
