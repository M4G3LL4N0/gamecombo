import { Card } from "@/components/ui/Card";

const cards = [
  { name: "Neon Courier Panic", buildability: 86, virality: 89, safety: 94, prototype: "6 weeks" },
  { name: "Castle Drift Rush", buildability: 79, virality: 85, safety: 92, prototype: "7 weeks" },
  { name: "Haunted Harvest Arena", buildability: 82, virality: 81, safety: 96, prototype: "5 weeks" },
  { name: "Starport Brawler", buildability: 88, virality: 90, safety: 91, prototype: "8 weeks" },
];

export function DashboardPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="text-3xl font-semibold text-white">Dashboard preview</h2>
      <p className="mt-2 text-white/70">
        Track saved combos, compare scores, and decide what to prototype next.
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <Card key={card.name}>
            <h3 className="text-xl font-semibold text-white">{card.name}</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <p className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80">Buildability: {card.buildability}</p>
              <p className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80">Virality: {card.virality}</p>
              <p className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80">IP Safety: {card.safety}</p>
              <p className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80">Prototype Time: {card.prototype}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
