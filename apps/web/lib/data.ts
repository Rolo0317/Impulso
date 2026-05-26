import type { LeadTemperature, Property, PropertyImage } from "@impulso/types";
import { Building2, CheckCircle2, Clock3, Handshake, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";

export const WHATSAPP_WILLIAM = "+573203914473";
export const WHATSAPP_ASESORA = "+573229624123";
export const NOMBRE_ASESORA = "Maria Carolina Solano";
export const WHATSAPP_PRINCIPAL = WHATSAPP_ASESORA;

export const msgPropiedad = (nombre: string, precio: string) =>
  `Hola Maria Carolina, me interesa la propiedad: ${nombre} (${precio}). ¿Pueden darme más información?`;

export const msgGeneral = "Hola Maria Carolina, quiero información sobre las propiedades disponibles de Impulso Vivienda.";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTInIHZpZXdCb3g9JzAgMCAxNiAxMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTYnIGhlaWdodD0nMTInIGZpbGw9JyNmNWY3ZmEnLz48Y2lyY2xlIGN4PScxMicgY3k9JzMnIHI9JzQnIGZpbGw9JyNkNGE0MzcnIG9wYWNpdHk9Jy40Jy8+PHBhdGggZD0nTTAgMTJoMTZWN0wxMSA0IDYgOSAzIDYnIGZpbGw9JyMwYTJlNzMnIG9wYWNpdHk9Jy42Jy8+PC9zdmc+";

const imageSizes = [
  [1600, 1200],
  [1195, 896],
  [896, 1195],
  [1200, 1600],
  [896, 1195],
  [1600, 1200],
  [896, 1195],
  [1600, 1200],
  [896, 1195],
  [896, 1195],
  [1195, 896],
  [1600, 1200],
  [896, 1195],
  [1448, 1086],
  [1600, 1200],
  [896, 1195],
  [1600, 1200],
  [896, 1195],
  [1195, 896]
] as const;

export const navItems = [
  { label: "Propiedades", href: "/propiedades" },
  { label: "CRM", href: "/#crm" },
  { label: "IA", href: "/#ia" },
  { label: "Contacto", href: "/#contacto" }
];

export const macarenaImages: PropertyImage[] = imageSizes.map(([width, height], index) => ({
  src: `/propiedades/la-macarena-maipore/foto-${index + 1}.jpg`,
  alt: `Conjunto La Macarena Maipore - foto ${index + 1}`,
  width,
  height,
  blurDataURL
}));

export const properties: Property[] = [
  {
    id: "la-macarena-maipore",
    slug: "la-macarena-maipore-soacha",
    title: "Conjunto La Macarena Maipore",
    description:
      "Apartamento en primer piso ubicado en Maipore, Soacha. Una opción clara para compra directa o cesión de deuda, con espacios funcionales, zona de ropa, cocina, sala comedor y acceso a zonas comunes.",
    type: "apartamento",
    city: "Soacha",
    neighborhood: "Maipore",
    floor: 1,
    price: 140000000,
    initialPayment: 55000000,
    debtPrice: 90000000,
    monthlyPayment: 600000,
    termYears: 20,
    bedrooms: 2,
    bathrooms: 1,
    area: 33,
    status: "available",
    operation: "Venta directa o cesión de deuda",
    agency: "INMORA Gestión Inmobiliaria S.A.S",
    subsidy: "COLSUBSIDIO",
    financing: true,
    amenities: ["Zona de ropa", "Sala comedor", "Cocina", "Salon social", "Parqueadero comunal"],
    images: macarenaImages,
    tags: ["Solo efectivo", "Cesión de deuda", "Piso 1"]
  }
];

export const featuredProperties = properties.slice(0, 6);

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export const trustStats = [
  { value: "33 m²", label: "apartamento real disponible" },
  { value: "$55M", label: "entrega inicial estimada" },
  { value: "$600K", label: "cuota mensual aproximada" }
];

export const valuePillars = [
  {
    icon: Handshake,
    title: "Acompañamiento real",
    description: "Te guiamos en deuda, documentos, condiciones y pasos para avanzar con tranquilidad."
  },
  {
    icon: ShieldCheck,
    title: "Información transparente",
    description: "Precio, entrega, cuota, plazo y estado comercial visibles desde el primer contacto."
  },
  {
    icon: Sparkles,
    title: "Tecnología para convertir",
    description: "CRM, IA y automatizaciones priorizan leads y aceleran el seguimiento comercial."
  }
];

export const crmStages = [
  { label: "Nuevo lead", amount: 28, tone: "bg-blue-50 text-brand-blue" },
  { label: "Precalificado", amount: 16, tone: "bg-emerald-50 text-brand-teal" },
  { label: "Visita", amount: 9, tone: "bg-amber-50 text-amber-700" },
  { label: "Cierre", amount: 5, tone: "bg-stone-100 text-brand-ink" }
];

export const leadSignals: Array<{ label: string; value: LeadTemperature; score: string }> = [
  { label: "Puede entregar la inicial y compra este trimestre", value: "hot", score: "94" },
  { label: "Tiene ingresos, está revisando crédito", value: "warm", score: "68" },
  { label: "Solo consulta valores sin fecha definida", value: "cold", score: "31" }
];

export const automationItems = [
  { icon: CheckCircle2, label: "WhatsApp conectado al pipeline" },
  { icon: Clock3, label: "Recordatorios por etapa comercial" },
  { icon: Building2, label: "Historial de inmuebles y precios" },
  { icon: TrendingUp, label: "Scoring automático por capacidad e intención" }
];
