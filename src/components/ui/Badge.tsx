import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = PropsWithChildren<{
  className?: string;
}>;

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-blue-300/35 bg-blue-400/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-blue-100",
        className,
      )}
    >
      {children}
    </span>
  );
}
