import { Card } from "@/components/ui/Card";

const tiers = [
  {
    name: "Free",
    price: "$0",
    points: ["5 combos/month", "Basic reports", "Community remix feed"],
  },
  {
    name: "Creator Pro",
    price: "$19/month",
    points: [
      "Unlimited combo reports",
      "Exportable design docs",
      "Asset prompt packs",
      "Roadmap generator",
    ],
  },
  {
    name: "Studio",
    price: "$99/month",
    points: ["Team workspace", "IP-safety checks", "Advanced scoring", "Prototype planning"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    points: ["Licensed IP catalog", "Studio workflow tools", "Private model and brand-safety rules"],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-16">
      <h2 className="text-3xl font-semibold text-white">Pricing built for creators and studios</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <Card key={tier.name} className="h-full">
            <p className="text-sm uppercase tracking-[0.14em] text-blue-200">{tier.name}</p>
            <p className="mt-3 text-2xl font-semibold text-white">{tier.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {tier.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
