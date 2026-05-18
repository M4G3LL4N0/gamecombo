import { ComboEngine } from "@/components/product/ComboEngine";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function DemoPage() {
  return (
    <>
    <SubpageVisual variant="demo" />
      <section className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="text-4xl font-semibold text-white">Interactive Demo</h1>
      <p className="mt-3 max-w-3xl text-white/75">
        Build original, IP-safe game remixes by combining mechanics, world style, and target player.
        The full report below runs on local browser logic only.
      </p>
      <div className="mt-8">
        <ComboEngine />
      </div>
    </section>
  </>
  )
}
