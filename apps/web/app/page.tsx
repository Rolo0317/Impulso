import { ArrowDown, CheckCircle2, Filter, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { LeadForm } from "@/components/lead-form";
import { PropertyCard } from "@/components/property-card";
import { PaymentCalculator } from "@/components/sections/payment-calculator";
import { Section } from "@/components/section";
import { automationItems, featuredProperties, leadSignals, msgGeneral, properties, trustStats, valuePillars } from "@/lib/data";
import { formatCOP, getWhatsAppUrl } from "@/lib/format";

const mainProperty = properties[0];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="/propiedades/la-macarena-maipore/foto-1.jpg"
          alt="Conjunto La Macarena Maipore"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-brand-blue/60 to-[#061a45]/90" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white/90 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-gold" />
            Acompañamiento real · Tecnología · Resultados
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white drop-shadow-lg md:text-6xl">
            Tu hogar en Colombia,
            <span className="block text-brand-gold">hecho realidad</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Te ayudamos a comprar vivienda con información clara, asesoría real y tecnología que convierte tu intención en una firma.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/propiedades"
              className="min-w-[200px] rounded-2xl bg-brand-gold px-8 py-4 text-center text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b8892a] hover:shadow-lg"
            >
              Ver propiedades disponibles
            </Link>
            <a
              href={getWhatsAppUrl(msgGeneral)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[200px] items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-center text-base font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20"
            >
              <MessageCircle size={20} />
              Hablar con asesora
            </a>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-3 gap-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur-md">
                <div className="text-xl font-bold text-brand-gold">{stat.value}</div>
                <div className="mt-1 text-xs text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-1 text-white/50">
          <span className="text-xs">Descubre más</span>
          <ArrowDown size={16} />
        </div>
      </section>

      <Section id="propiedades">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Propiedades destacadas</p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-4xl">Primer inmueble real cargado</h2>
          </div>
          <div className="flex min-h-12 items-center gap-2 rounded-2xl border border-brand-blue/10 bg-white px-4 text-sm font-semibold text-brand-blue shadow-sm">
            <Filter size={17} />
            Soacha · Apartamento · {formatCOP(mainProperty.price)}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {valuePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-[8px] border border-brand-blue/10 bg-white p-6 shadow-soft">
              <pillar.icon className="text-brand-gold" size={28} />
              <h2 className="mt-5 text-xl font-black text-brand-ink">{pillar.title}</h2>
              <p className="mt-3 leading-7 text-brand-ink/66">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="calculadora">
        <PaymentCalculator />
      </Section>

      <Section id="crm">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">CRM inmobiliario</p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-4xl">Seguimiento desde el primer clic hasta la firma</h2>
            <p className="mt-5 leading-8 text-brand-ink/68">Leads, tareas, visitas, estados e historial comercial preparados para asesores, administradores y automatizaciones.</p>
          </div>
          <div className="rounded-[8px] border border-brand-blue/10 bg-white p-5 shadow-premium">
            {automationItems.map((item) => (
              <div key={item.label} className="flex items-center gap-4 border-b border-brand-blue/8 py-4 last:border-0">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-mist text-brand-blue">
                  <item.icon size={20} />
                </span>
                <p className="font-semibold text-brand-ink">{item.label}</p>
                <CheckCircle2 className="ml-auto text-brand-teal" size={19} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="ia">
        <div className="rounded-[8px] bg-brand-ink px-5 py-10 text-white shadow-premium sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">IA asistente</p>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Clasificación automática de clientes</h2>
              <p className="mt-5 leading-8 text-white/68">La IA evalúa presupuesto, crédito, subsidio, tiempo de compra y nivel de respuesta antes de escalar al asesor.</p>
            </div>
            <div className="grid gap-3">
              {leadSignals.map((signal) => (
                <div key={signal.label} className="rounded-[8px] bg-white/10 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-semibold">{signal.label}</p>
                    <span className="rounded-full bg-brand-gold px-3 py-1 text-sm font-black text-brand-ink">{signal.score}</span>
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/52">{signal.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="contacto" className="pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Conversión</p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-4xl">Convierte interés en una oportunidad medible</h2>
            <p className="mt-5 max-w-2xl leading-8 text-brand-ink/68">El formulario valida datos y está listo para conectarse con API, WhatsApp, email y scoring de IA.</p>
          </div>
          <LeadForm />
        </div>
      </Section>
    </main>
  );
}
