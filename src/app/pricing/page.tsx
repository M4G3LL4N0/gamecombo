import { PricingSection } from "@/components/site/Pricing";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function PricingPage() {
  return (
    <>
    <SubpageVisual variant="pricing" />
      <section className="py-10">
      <div className="mx-auto max-w-6xl px-5">
        <h1 className="text-4xl font-semibold text-white">Pricing</h1>
        <p className="mt-3 text-white/75">
          Start free, upgrade when you need unlimited reports, export tools, and studio workflows.
        </p>
      </div>
      <PricingSection />
    </section>
  </>
  )
}
