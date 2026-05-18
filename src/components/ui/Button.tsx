"use client";

import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost";
  }
>;

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition",
        variant === "primary" &&
          "bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 text-black shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:brightness-110",
        variant === "ghost" &&
          "border border-white/20 bg-white/5 text-white hover:border-blue-300/50 hover:bg-white/10",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
