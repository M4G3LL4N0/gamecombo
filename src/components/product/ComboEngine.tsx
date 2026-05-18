"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ComboReport } from "@/components/product/ComboReport";
import {
  inspirationCategories,
  targetPlayers,
  worldStyles,
  type InspirationCategory,
  type TargetPlayer,
  type WorldStyle,
} from "@/lib/combo-data";
import { generateComboReport } from "@/lib/combo-engine";

export function ComboEngine() {
  const [prompt, setPrompt] = useState("A high-stakes city game where speed and chaos collide.");
  const [inspirations, setInspirations] = useState<InspirationCategory[]>([
    "open-world chaos",
    "kart racing",
    "platformer movement",
  ]);
  const [style, setStyle] = useState<WorldStyle>("neon city");
  const [target, setTarget] = useState<TargetPlayer>("indie studio");
  const [version, setVersion] = useState(0);

  const report = useMemo(
    () =>
      generateComboReport({
        prompt: `${prompt} v${version}`,
        inspirations,
        style,
        target,
      }),
    [inspirations, prompt, style, target, version],
  );

  const toggleInspiration = (value: InspirationCategory) => {
    setInspirations((current) => {
      if (current.includes(value)) return current.filter((item) => item !== value);
      if (current.length >= 3) return [...current.slice(1), value];
      return [...current, value];
    });
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <Card className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Combo Engine</h2>
        <p className="text-sm text-white/70">
          Enter your game idea and blend 2-3 inspirations. GameCombo will generate an original,
          IP-safe concept brief directly in your browser.
        </p>

        <label className="block">
          <span className="mb-2 block text-sm text-white/80">Game idea prompt</span>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            className="w-full rounded-xl border border-white/15 bg-[#070d1f] px-3 py-2 text-sm text-white outline-none focus:border-blue-300/70"
          />
        </label>

        <div>
          <p className="mb-2 text-sm text-white/80">Inspiration categories (2-3)</p>
          <div className="flex flex-wrap gap-2">
            {inspirationCategories.map((item) => {
              const active = inspirations.includes(item);
              return (
                <button
                  key={item}
                  onClick={() => toggleInspiration(item)}
                  className={`rounded-full border px-3 py-1 text-xs uppercase tracking-[0.1em] transition ${
                    active
                      ? "border-emerald-300/50 bg-emerald-400/20 text-emerald-100"
                      : "border-white/20 bg-white/5 text-white/70"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-white/80">Art/world style</span>
            <select
              className="w-full rounded-xl border border-white/15 bg-[#070d1f] px-3 py-2 text-sm text-white"
              value={style}
              onChange={(e) => setStyle(e.target.value as WorldStyle)}
            >
              {worldStyles.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-white/80">Target player</span>
            <select
              className="w-full rounded-xl border border-white/15 bg-[#070d1f] px-3 py-2 text-sm text-white"
              value={target}
              onChange={(e) => setTarget(e.target.value as TargetPlayer)}
            >
              {targetPlayers.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="flex gap-3">
          <Button onClick={() => setVersion((v) => v + 1)}>Generate Combo</Button>
          <Button variant="ghost" onClick={() => setVersion((v) => v + 7)}>
            Remix again
          </Button>
        </div>
      </Card>

      <ComboReport report={report} />
    </div>
  );
}
