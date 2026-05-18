import Link from "next/link";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Badge>AI Game Remix Studio</Badge>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            Create games that should not exist yet.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/75">
            Describe the game in your head. GameCombo turns it into an original prototype brief
            with mechanics, levels, progression, safety checks, and a build plan.
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.14em] text-emerald-200/90">
            Reference the feeling, not the copyrighted asset.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/demo"
              className="rounded-xl bg-gradient-to-r from-blue-500 via-violet-500 to-emerald-400 px-5 py-3 text-sm font-semibold text-black"
            >
              Open Combo Engine
            </Link>
            <Link href="/pricing" className="rounded-xl border border-white/20 px-5 py-3 text-sm text-white/90">
              View pricing
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-white/15 bg-[#101936]/85 p-6 shadow-2xl">
          <p className="text-xs uppercase tracking-[0.18em] text-blue-100/80">Preview output</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">Neon Courier Panic</h3>
          <p className="mt-3 text-sm text-white/70">
            A high-speed action remix in a neon city where traversal, racing pressure, and tactical
            encounters merge into one loop.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {[
              ["Buildability", "86"],
              ["IP Safety", "94"],
              ["Virality", "89"],
              ["Prototype", "6 weeks"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-white/60">{k}</p>
                <p className="mt-1 font-semibold text-white">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
