import type { Metadata } from "next";
import { Footer } from "@/components/ui/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://impulso-web-one.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Impulso Vivienda | Inmobiliaria inteligente",
    template: "%s | Impulso Vivienda"
  },
  description:
    "Plataforma inmobiliaria premium para comprar vivienda con acompañamiento, aprobación, CRM e IA de clasificación de leads.",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "Impulso Vivienda",
    description: "Compra vivienda con asesoría experta, tecnología y seguimiento inteligente.",
    images: ["/Logo_inmobiliaria.png"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Impulso Vivienda",
    description: "Compra vivienda con asesoría experta, tecnología y seguimiento inteligente.",
    images: ["/Logo_inmobiliaria.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
