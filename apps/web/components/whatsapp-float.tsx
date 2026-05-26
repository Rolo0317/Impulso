import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/format";

export function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl("Hola, quiero informacion sobre las propiedades disponibles de Impulso Vivienda.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal text-white shadow-premium transition hover:-translate-y-1"
    >
      <MessageCircle size={25} />
    </a>
  );
}
