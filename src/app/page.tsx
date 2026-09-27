import Link from "next/link";
import { Hero } from "@/components/site/Hero";
import { PricingSection } from "@/components/site/Pricing";
import { CTA } from "@/components/site/CTA";
import { Card } from "@/components/ui/Card";

const faqItems = [
  {
    q: "Does GameCombo copy existing game IP?",
    a: "No. It translates mechanics, mood, and genre DNA into original concept outputs with IP-safety guidance.",
  },
  {
    q: "Do I need an API key to test this MVP?",
    a: "No. The Combo Engine runs in the browser using deterministic local logic.",
  },
  {
    q: "Who is this for?",
    a: "Game jams, indie creators, streamers, modders, classrooms, and studios testing new ideas fast.",
  },
];

export default function HomePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-6" data-reveal>
        <h2 className="mb-4 text-3xl font-semibold text-white">Problem, solution, and how it works</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Problem", "Great game ideas die in notes apps because scoping, safety, and design coherence are hard."],
            ["Solution", "GameCombo creates original prototype briefs from remix prompts, with mechanics and a roadmap included."],
            ["How it works", "Pick genres, world style, and target player. Generate a complete concept report in one click."],
          ].map(([title, body]) => (
            <Card key={title}>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/75">{body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10" data-reveal>
        <h2 className="text-3xl font-semibold text-white">Try the Combo Engine</h2>
        <p className="mt-3 max-w-3xl text-white/75">
          The demo runs locally in your browser. Enter a prompt, blend inspiration categories, and
          generate a prototype brief with mechanics, safety notes, and a build plan.
        </p>
        <Link href="/demo" className="mt-5 inline-flex rounded-xl border border-white/20 px-4 py-2 text-sm text-white">
          Open live demo
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10" data-reveal>
        <Card>
          <h2 className="text-3xl font-semibold text-white">Why IP-safe remixing matters</h2>
          <p className="mt-3 text-white/75">
            Teams can explore bold inspirations without cloning protected franchises. GameCombo
            extracts the playable feeling and converts it into original mechanics, worlds, and
            progression.
          </p>
          <p className="mt-2 text-white/75">
            That lets creators move faster while reducing legal and platform risk from day one.
          </p>
        </Card>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-6" data-reveal>
        <h2 className="text-3xl font-semibold text-white">Creator use cases</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            "Game jam teams validating ideas in under 10 minutes.",
            "Indie studios pitching new mechanics to investors and collaborators.",
            "Streamers building audience-driven challenge concepts.",
            "Classrooms teaching systems design with concrete, replayable outputs.",
          ].map((item) => (
            <Card key={item}>
              <p className="text-white/80">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12" data-reveal>
        <h2 className="text-3xl font-semibold text-white">What a combo report includes</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Original title and one-line pitch",
            "Core gameplay loop and mechanic stack",
            "IP safety score and translation guidance",
            "Prototype roadmap and asset prompt pack",
          ].map((feature) => (
            <Card key={feature}>
              <p className="text-white/80">{feature}</p>
            </Card>
          ))}
        </div>
      </section>

      <PricingSection />

      <section className="mx-auto max-w-6xl px-5 py-10" data-reveal>
        <h2 className="text-3xl font-semibold text-white">Roadmap</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            ["Now", "Single-player combo generation, dashboard tracking, and export-ready concept structure."],
            ["Next", "Team remix sessions, comparative scoreboards, and balance simulation tools."],
            ["Later", "Studio integrations, private safety rules, and licensed catalog workflows."],
          ].map(([stage, desc]) => (
            <Card key={stage}>
              <p className="text-sm uppercase tracking-[0.14em] text-blue-200">{stage}</p>
              <p className="mt-2 text-white/80">{desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10" data-reveal>
        <h2 className="text-3xl font-semibold text-white">FAQ</h2>
        <div className="mt-4 space-y-4">
          {faqItems.map((item) => (
            <Card key={item.q}>
              <h3 className="text-lg font-semibold text-white">{item.q}</h3>
              <p className="mt-2 text-white/75">{item.a}</p>
            </Card>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
