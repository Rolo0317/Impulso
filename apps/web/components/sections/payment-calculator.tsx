"use client";

import { Calculator } from "lucide-react";
import { useMemo, useState } from "react";
import { formatCOP } from "@/lib/format";

export function PaymentCalculator() {
  const [income, setIncome] = useState(2500000);
  const capacity = useMemo(() => Math.round(income * 0.3), [income]);
  const suggestedMax = useMemo(() => Math.round(capacity * 240), [capacity]);

  return (
    <div className="rounded-[8px] border border-brand-blue/10 bg-white p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue text-white">
          <Calculator size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold">Calculadora rápida</p>
          <h2 className="text-xl font-black text-brand-ink">Cuánto puedes pagar mensualmente</h2>
        </div>
      </div>
      <label className="mt-6 block text-sm font-semibold text-brand-ink" htmlFor="monthly-income">
        Ingresos mensuales
      </label>
      <input
        id="monthly-income"
        type="range"
        min={1000000}
        max={12000000}
        step={100000}
        value={income}
        onChange={(event) => setIncome(Number(event.target.value))}
        className="mt-4 w-full accent-brand-blue"
      />
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Metric label="Ingresos" value={formatCOP(income)} />
        <Metric label="Cuota sugerida" value={formatCOP(capacity)} />
        <Metric label="Rango estimado" value={formatCOP(suggestedMax)} />
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[8px] bg-brand-mist p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-ink/48">{label}</p>
      <p className="mt-1 text-lg font-black text-brand-blue">{value}</p>
    </div>
  );
}
