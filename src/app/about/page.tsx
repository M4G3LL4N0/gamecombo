import { Card } from "@/components/ui/Card";
import { SubpageVisual } from "@/components/SubpageVisual";

export default function AboutPage() {
  return (
    <>
    <SubpageVisual variant="about" />
      <section className="mx-auto max-w-5xl px-5 py-14">
      <h1 className="text-4xl font-semibold text-white">About GameCombo</h1>
      <p className="mt-3 max-w-3xl text-white/75">
        GameCombo is the AI-native remix layer for game creation. We help creators convert messy
        inspiration into original, prototype-ready game concepts without copying protected IP.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-xl font-semibold text-white">Our thesis</h2>
          <p className="mt-2 text-white/75">
            Great game innovation often starts as cross-genre thinking. We make that process faster,
            safer, and clearer for modern teams.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold text-white">How we think</h2>
          <p className="mt-2 text-white/75">
            Translate inspiration into mechanics, loops, and world rules. Never replicate trademarked
            names, logos, characters, or art.
          </p>
        </Card>
      </div>
    </section>
  </>
  )
}
