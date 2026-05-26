import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 disabled:pointer-events-none disabled:opacity-60",
        variant === "primary" && "bg-brand-blue text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#082761]",
        variant === "secondary" &&
          "bg-brand-gold text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#b8892a]",
        variant === "ghost" && "text-brand-ink hover:bg-brand-mist",
        className
      )}
      {...props}
    />
  );
}
