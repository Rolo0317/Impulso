import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { navItems } from "@/lib/data";
import { Button } from "./button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/82 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Ir al inicio">
          <Image
            src="/Logo_inmobiliaria.png"
            alt="Impulso Vivienda"
            width={164}
            height={56}
            priority
            className="h-12 w-auto object-contain"
          />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-brand-ink/72 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-brand-blue">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#contacto">
            <Button>
              Hablar con asesor
              <ArrowRight size={17} />
            </Button>
          </a>
        </div>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-blue/10 bg-white text-brand-blue md:hidden"
          aria-label="Abrir navegacion"
        >
          <Menu size={21} />
        </button>
      </div>
    </header>
  );
}
