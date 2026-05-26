import type { Property } from "@impulso/types";
import { Bath, BedDouble, MapPin, Ruler, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatCOP } from "@/lib/format";
import { cn } from "@/lib/utils";

const statusLabel: Record<Property["status"], string> = {
  available: "Disponible",
  reserved: "Separado",
  negotiation: "En negociación",
  sold: "Vendido"
};

const statusClass: Record<Property["status"], string> = {
  available: "bg-emerald-50 text-brand-teal",
  reserved: "bg-amber-50 text-amber-700",
  negotiation: "bg-blue-50 text-brand-blue",
  sold: "bg-stone-100 text-stone-600"
};

export function PropertyCard({ property, priority = false }: { property: Property; priority?: boolean }) {
  const mainImage = property.images[0];

  return (
    <Link href={`/propiedades/${property.slug}`} className="group block">
      <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[4/3] bg-brand-mist">
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            priority={priority}
            placeholder="blur"
            blurDataURL={mainImage.blurDataURL}
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
            <span className={cn("rounded-full px-3 py-1 text-xs font-semibold shadow-sm", statusClass[property.status])}>
              {statusLabel[property.status]}
            </span>
            <span className="rounded-full bg-white/92 px-3 py-1 text-xs font-semibold text-brand-ink shadow-sm">
              {property.area} m²
            </span>
          </div>
        </div>
        <div className="space-y-4 p-5">
          <div>
            <h3 className="text-lg font-bold text-brand-ink">{property.title}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-brand-ink/62">
              <MapPin size={15} />
              {property.city}
              {property.neighborhood ? `, ${property.neighborhood}` : ""}
            </p>
          </div>
          <p className="text-xl font-black text-brand-blue">{formatCOP(property.price)}</p>
          <div className="grid grid-cols-3 gap-2 text-sm text-brand-ink/70">
            <span className="flex items-center gap-1.5">
              <BedDouble size={16} />
              {property.bedrooms}
            </span>
            <span className="flex items-center gap-1.5">
              <Bath size={16} />
              {property.bathrooms}
            </span>
            <span className="flex items-center gap-1.5">
              <Ruler size={16} />
              {property.area}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {property.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-ink/70">
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
