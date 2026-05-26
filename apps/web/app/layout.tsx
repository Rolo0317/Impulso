import type { Metadata } from "next";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Impulso Vivienda | Inmobiliaria inteligente",
    template: "%s | Impulso Vivienda"
  },
  description:
    "Plataforma inmobiliaria premium para comprar vivienda con acompanamiento, aprobacion, CRM e IA de clasificacion de leads.",
  metadataBase: new URL("https://impulsovivienda.com"),
  openGraph: {
    title: "Impulso Vivienda",
    description: "Compra vivienda con asesoria experta, tecnologia y seguimiento inteligente.",
    images: ["/Logo_inmobiliaria.png"],
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
