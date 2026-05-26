import Image from "next/image";
import { ArrowRight, CheckCircle2, Filter, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/button";
import { Header } from "@/components/header";
import { LeadForm } from "@/components/lead-form";
import { PropertyCard } from "@/components/property-card";
import { PaymentCalculator } from "@/components/sections/payment-calculator";
import { Section } from "@/components/section";
import { automationItems, featuredProperties, leadSignals, properties, trustStats, valuePillars } from "@/lib/data";
import { formatCOP, getWhatsAppUrl } from "@/lib/format";

const mainProperty = properties[0];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="relative overflow-hidden bg-brand-ink text-white">
        <Image
          src={mainProperty.images[0].src}
          alt={mainProperty.images[0].alt}
          fill
          priority
          placeholder="blur"
          blurDataURL={mainProperty.images[0].blurDataURL}
          className="object-cover opacity-24"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-[#061a45]/92 to-brand-ink" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl">
            <Image src="/Logo_inmobiliaria.png" alt="Impulso Vivienda" width={210} height={72} priority className="mb-8 h-16 w-auto object-contain" />
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur">
              <ShieldCheck size={16} />
              Acompanamiento, aprobacion y cierre efectivo
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
              Tu hogar en Colombia, hecho realidad
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              Te ayudamos a comprar vivienda con informacion clara, asesoria real y tecnologia para avanzar desde el primer contacto hasta la firma.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/propiedades">
                <Button className="w-full sm:w-auto">
                  Ver propiedades disponibles
                  <ArrowRight size={18} />
                </Button>
              </a>
              <a href={getWhatsAppUrl(`Hola, me interesa ${mainProperty.title}. Quiero mas informacion.`)} target="_blank" rel="noreferrer">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Hablar con un asesor
                  <MessageCircle size={18} />
                </Button>
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {trustStats.map((stat) => (
                <div key={stat.label} className="rounded-[8px] border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-black text-brand-gold">{stat.value}</p>
                  <p className="mt-1 text-xs font-medium leading-5 text-white/62">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-[8px] p-4 shadow-premium">
            <PropertyCard property={mainProperty} priority />
          </div>
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

      <Section>
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
              <h2 className="mt-3 text-3xl font-black sm:text-4xl">Clasificacion automatica de clientes</h2>
              <p className="mt-5 leading-8 text-white/68">La IA evalua presupuesto, credito, subsidio, tiempo de compra y nivel de respuesta antes de escalar al asesor.</p>
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Conversion</p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-4xl">Convierte interes en una oportunidad medible</h2>
            <p className="mt-5 max-w-2xl leading-8 text-brand-ink/68">El formulario valida datos y esta listo para conectarse con API, WhatsApp, email y scoring de IA.</p>
          </div>
          <LeadForm />
        </div>
      </Section>
    </main>
  );
}
