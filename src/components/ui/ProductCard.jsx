import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ collection, cat }) {
  const { id, name, image } = collection;

  return (
    <Link href={`/collections/${cat}/${id}`}>
      <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-all duration-300 ">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
             sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          <p className="text-muted-foreground text-sm uppercase tracking-wide">
            {cat}
          </p>
          <p className="text-muted-foreground text-sm uppercase tracking-wide">
            {name}
          </p>
        </div>
      </div>
    </Link>
  );
}
