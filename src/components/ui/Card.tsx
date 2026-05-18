import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/15 bg-white/[0.04] p-6 backdrop-blur-xl",
        "shadow-[0_20px_80px_rgba(2,6,23,0.5)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
