"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/demo", label: "Demo" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/dashboard", label: "Dashboard" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#070b17]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white" onClick={() => setOpen(false)}>
          GameCombo
        </Link>
        <nav className="hidden items-center gap-4 md:flex" aria-label="Primary">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/75 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className="rounded-lg border border-emerald-300/40 bg-emerald-400/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-100"
            onClick={() => setOpen(false)}
          >
            Generate
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="gamecombo-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="gamecombo-mobile-nav"
          className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-white/10 px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-sm text-white/85 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
