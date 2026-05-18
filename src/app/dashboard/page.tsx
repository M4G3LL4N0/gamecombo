import { DashboardPreview } from "@/components/product/DashboardPreview";
import { SubpageVisual } from "@/components/SubpageVisual";
import { Card } from "@/components/ui/Card";

export default function DashboardPage() {
  return (
    <>
    <SubpageVisual variant="dashboard" />
      <section className="py-14">
      <div className="mx-auto max-w-6xl px-5">
        <h1 className="text-4xl font-semibold text-white">Dashboard</h1>
        <p className="mt-3 max-w-3xl text-white/75">
          Manage saved combo reports, compare key scores, and choose what to prototype next.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            ["Active projects", "4"],
            ["Average IP safety", "93"],
            ["Prototype candidates", "2"],
          ].map(([label, value]) => (
            <Card key={label}>
              <p className="text-sm text-white/65">{label}</p>
              <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
            </Card>
          ))}
        </div>
      </div>
      <DashboardPreview />
    </section>
  </>
  )
}
