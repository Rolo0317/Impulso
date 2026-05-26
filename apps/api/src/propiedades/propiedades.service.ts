import { Injectable } from "@nestjs/common";

const laMacarenaMaipore = {
  id: "la-macarena-maipore",
  slug: "la-macarena-maipore-soacha",
  titulo: "Conjunto La Macarena Maipore",
  descripcion:
    "Apartamento en primer piso ubicado en Maipore, Soacha. Disponible para venta directa o cesion de deuda con acompanamiento comercial.",
  tipo: "apartamento",
  estado: "disponible",
  precio: 140000000,
  precioDeuda: 90000000,
  cuotaMensual: 600000,
  plazoAnios: 20,
  entregaCon: 55000000,
  habitaciones: 2,
  banos: 1,
  area: 33,
  piso: 1,
  ciudad: "Soacha",
  barrio: "Maipore",
  imagenes: Array.from({ length: 19 }, (_, index) => `/propiedades/la-macarena-maipore/foto-${index + 1}.jpg`),
  amenidades: ["Zona de ropa", "Sala comedor", "Cocina", "Salon social", "Parqueadero comunal"],
  financiacion: true,
  subsidio: "COLSUBSIDIO"
};

@Injectable()
export class PropiedadesService {
  findAll() {
    return [laMacarenaMaipore];
  }

  findBySlug(slug: string) {
    return slug === laMacarenaMaipore.slug ? laMacarenaMaipore : null;
  }
}
