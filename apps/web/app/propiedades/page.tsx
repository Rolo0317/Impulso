import type { Metadata } from "next";
import { Filter, SlidersHorizontal } from "lucide-react";
import { Header } from "@/components/header";
import { PropertyCard } from "@/components/property-card";
import { Section } from "@/components/section";
import { properties } from "@/lib/data";

export const metadata: Metadata = {
  title: "Propiedades disponibles",
  description: "Listado de inmuebles disponibles de Impulso Vivienda con precios, estado y datos clave."
};

export default function PropertiesPage() {
  return (
    <main>
      <Header />
      <Section className="pt-12">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Inventario</p>
            <h1 className="mt-3 font-serif text-4xl font-black text-brand-ink sm:text-5xl">Propiedades disponibles</h1>
            <p className="mt-4 max-w-2xl leading-8 text-brand-ink/66">
              Inmuebles con información financiera clara para decidir con confianza antes de agendar una visita.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Soacha", "Apartamento", "Disponible"].map((filter) => (
              <span key={filter} className="inline-flex min-h-10 items-center gap-2 rounded-2xl border border-brand-blue/10 bg-white px-4 text-sm font-semibold text-brand-blue shadow-sm">
                <Filter size={15} />
                {filter}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6 flex items-center gap-2 rounded-[8px] bg-brand-mist p-4 text-sm font-semibold text-brand-ink/70">
          <SlidersHorizontal size={18} />
          Filtros avanzados preparados para conectar con la API de propiedades.
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} priority={index === 0} />
          ))}
        </div>
      </Section>
    </main>
  );
}
