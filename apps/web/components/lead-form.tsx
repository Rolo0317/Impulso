"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { z } from "zod";
import { Button } from "./button";

const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  budget: z.string().min(1),
  intent: z.string().min(1)
});

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const parsed = leadSchema.safeParse(payload);

    if (parsed.success) {
      setSubmitted(true);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-[8px] p-5 shadow-premium sm:p-6">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Precalificacion</p>
        <h2 className="mt-2 text-2xl font-black text-brand-ink">Recibe una ruta de compra clara</h2>
      </div>
      <div className="grid gap-3">
        <input name="name" required placeholder="Nombre completo" className="min-h-12 rounded-2xl border border-brand-blue/10 bg-white px-4 text-sm outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15" />
        <input name="phone" required placeholder="WhatsApp" className="min-h-12 rounded-2xl border border-brand-blue/10 bg-white px-4 text-sm outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15" />
        <select name="budget" required className="min-h-12 rounded-2xl border border-brand-blue/10 bg-white px-4 text-sm text-brand-ink/75 outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15">
          <option value="">Presupuesto estimado</option>
          <option value="200-350">COP 200M - 350M</option>
          <option value="350-550">COP 350M - 550M</option>
          <option value="550+">Mas de COP 550M</option>
        </select>
        <select name="intent" required className="min-h-12 rounded-2xl border border-brand-blue/10 bg-white px-4 text-sm text-brand-ink/75 outline-none transition focus:border-brand-gold focus:ring-4 focus:ring-brand-gold/15">
          <option value="">Tiempo de compra</option>
          <option value="now">Este mes</option>
          <option value="quarter">1 a 3 meses</option>
          <option value="exploring">Estoy explorando</option>
        </select>
      </div>
      <Button className="mt-4 w-full" type="submit">
        Analizar mi perfil
        <ArrowRight size={17} />
      </Button>
      {submitted ? (
        <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-teal">
          <CheckCircle2 size={17} />
          Perfil recibido. Un asesor puede priorizar este lead desde el CRM.
        </p>
      ) : null}
    </form>
  );
}
