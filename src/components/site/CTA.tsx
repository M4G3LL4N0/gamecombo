import Link from "next/link";

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="rounded-2xl border border-blue-300/30 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-emerald-400/20 p-8 text-center">
        <h2 className="text-3xl font-semibold text-white">Build your first remix concept today</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/75">
          Built for game jams, indie creators, streamers, and studios exploring new mechanics fast.
        </p>
        <Link
          href="/demo"
          className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0a1022]"
        >
          Generate Combo
        </Link>
      </div>
    </section>
  );
}
