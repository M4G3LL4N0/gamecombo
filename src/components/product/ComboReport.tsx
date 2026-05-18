import type { ComboReportData } from "@/lib/combo-engine";
import { Card } from "@/components/ui/Card";

type ComboReportProps = {
  report: ComboReportData;
};

export function ComboReport({ report }: ComboReportProps) {
  return (
    <Card className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.16em] text-emerald-200/85">Original game title</p>
        <h3 className="mt-2 text-3xl font-semibold text-white">{report.title}</h3>
        <p className="mt-2 text-white/75">{report.pitch}</p>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {[
          ["Buildability", report.buildabilityScore],
          ["IP Safety", report.ipSafetyScore],
          ["Virality", report.viralityScore],
        ].map(([label, score]) => (
          <div key={label as string} className="rounded-xl border border-white/10 bg-white/5 p-3">
            <p className="text-xs uppercase tracking-[0.14em] text-white/55">{label as string}</p>
            <p className="mt-1 text-2xl font-semibold text-white">{score as number}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4 text-sm text-white/80">
        <p><strong>Core gameplay loop:</strong> {report.coreLoop}</p>
        <p><strong>Safe inspiration translation:</strong> {report.safeInspirationTranslation}</p>
        <p><strong>Main mechanics:</strong></p>
        <ul className="space-y-1 text-white/70">
          {report.mainMechanics.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
        <p><strong>World design:</strong> {report.worldDesign}</p>
        <p><strong>Player progression:</strong> {report.playerProgression}</p>
        <p><strong>Level ideas:</strong></p>
        <ul className="space-y-1 text-white/70">
          {report.levelIdeas.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
        <p><strong>Enemy and obstacle ideas:</strong></p>
        <ul className="space-y-1 text-white/70">
          {report.enemyIdeas.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
        <p><strong>Monetization fit:</strong> {report.monetizationFit}</p>
        <p><strong>Development difficulty score:</strong> {report.developmentDifficulty}/100</p>
        <p><strong>Prototype time:</strong> {report.prototypeTime}</p>
        <p><strong>IP safety guidance:</strong></p>
        <ul className="space-y-1 text-white/70">
          {report.ipSafetyGuidance.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
        <p><strong>Prototype roadmap:</strong></p>
        <ul className="space-y-1 text-white/70">
          {report.prototypeRoadmap.map((step) => (
            <li key={step}>- {step}</li>
          ))}
        </ul>
        <p><strong>Asset prompt pack:</strong></p>
        <ul className="space-y-1 text-white/70">
          {report.assetPromptPack.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
