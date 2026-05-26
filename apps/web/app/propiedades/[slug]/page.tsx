import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bath, BedDouble, Building2, CalendarClock, CheckCircle2, MapPin, MessageCircle, Ruler } from "lucide-react";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { PropertyCard } from "@/components/property-card";
import { PropertyGallery } from "@/components/property/property-gallery";
import { Section } from "@/components/section";
import { getPropertyBySlug, properties } from "@/lib/data";
import { formatCOP, getWhatsAppUrl } from "@/lib/format";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) return {};

  return {
    title: property.title,
    description: property.description,
    openGraph: {
      title: property.title,
      description: property.description,
      images: [property.images[0].src]
    }
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) notFound();

  const whatsappMessage = `Hola, me interesa la propiedad: ${property.title} (${formatCOP(property.price)}). Pueden darme mas informacion?`;

  return (
    <main>
      <Header />
      <Section className="pt-8">
        <PropertyGallery images={property.images} title={property.title} />
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-bold text-brand-teal">Disponible</span>
            <h1 className="mt-4 font-serif text-4xl font-black text-brand-ink sm:text-5xl">{property.title}</h1>
            <p className="mt-3 flex items-center gap-2 text-brand-ink/62">
              <MapPin size={18} />
              {property.city}, {property.neighborhood} · Piso {property.floor}
            </p>
            <p className="mt-5 text-3xl font-black text-brand-blue">{formatCOP(property.price)}</p>
            <KeyFacts property={property} />
            <section className="mt-8">
              <h2 className="text-2xl font-black text-brand-ink">Descripcion</h2>
              <p className="mt-4 max-w-3xl leading-8 text-brand-ink/68">{property.description}</p>
            </section>
            <section className="mt-8">
              <h2 className="text-2xl font-black text-brand-ink">Amenidades</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {property.amenities?.map((amenity) => (
                  <p key={amenity} className="flex items-center gap-2 rounded-[8px] bg-brand-mist p-3 font-semibold text-brand-ink/72">
                    <CheckCircle2 size={18} className="text-brand-teal" />
                    {amenity}
                  </p>
                ))}
              </div>
            </section>
          </div>
          <aside className="h-fit rounded-[8px] border border-brand-blue/10 bg-white p-5 shadow-premium lg:sticky lg:top-24">
            <h2 className="text-xl font-black text-brand-ink">Informacion financiera</h2>
            <FinanceTable property={property} />
            <a href={getWhatsAppUrl(whatsappMessage)} target="_blank" rel="noreferrer">
              <Button className="mt-5 w-full">
                Me interesa
                <MessageCircle size={18} />
              </Button>
            </a>
          </aside>
        </div>
      </Section>
      <Section className="pt-0">
        <h2 className="mb-5 text-2xl font-black text-brand-ink">Propiedades similares</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {properties.map((similar) => (
            <PropertyCard key={similar.id} property={similar} />
          ))}
        </div>
      </Section>
    </main>
  );
}

function KeyFacts({ property }: { property: NonNullable<ReturnType<typeof getPropertyBySlug>> }) {
  const facts = [
    { icon: BedDouble, label: `${property.bedrooms} habitaciones` },
    { icon: Bath, label: `${property.bathrooms} bano` },
    { icon: Ruler, label: `${property.area} m2` },
    { icon: Building2, label: property.type ?? "apartamento" }
  ];

  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-4">
      {facts.map((fact) => (
        <div key={fact.label} className="rounded-[8px] border border-brand-blue/10 bg-white p-4 shadow-sm">
          <fact.icon className="text-brand-gold" size={22} />
          <p className="mt-2 text-sm font-bold text-brand-ink">{fact.label}</p>
        </div>
      ))}
    </div>
  );
}

function FinanceTable({ property }: { property: NonNullable<ReturnType<typeof getPropertyBySlug>> }) {
  const rows = [
    ["Operacion", property.operation ?? "Venta"],
    ["Precio contado", formatCOP(property.price)],
    ["Entrega con", property.initialPayment ? formatCOP(property.initialPayment) : "Por confirmar"],
    ["Deuda restante", property.debtPrice ? formatCOP(property.debtPrice) : "No aplica"],
    ["Cuota mensual", property.monthlyPayment ? `${formatCOP(property.monthlyPayment)} / mes` : "Por confirmar"],
    ["Plazo", property.termYears ? `${property.termYears} anos UVR` : "Por confirmar"],
    ["Subsidio", property.subsidy ?? "Por confirmar"]
  ];

  return (
    <div className="mt-4 divide-y divide-brand-blue/8">
      {rows.map(([label, value]) => (
        <div key={label} className="flex items-start justify-between gap-4 py-3 text-sm">
          <span className="font-semibold text-brand-ink/56">{label}</span>
          <span className="text-right font-black text-brand-ink">{value}</span>
        </div>
      ))}
      <p className="flex items-center gap-2 pt-4 text-sm font-semibold text-brand-teal">
        <CalendarClock size={17} />
        Agenda visita y validacion documental.
      </p>
    </div>
  );
}
