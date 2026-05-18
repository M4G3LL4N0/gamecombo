import {
  loopTemplates,
  monetizationFits,
  nouns,
  prefixes,
  progressionTracks,
  suffixes,
  type InspirationCategory,
  type TargetPlayer,
  type WorldStyle,
} from "@/lib/combo-data";

export type ComboInput = {
  prompt: string;
  inspirations: InspirationCategory[];
  style: WorldStyle;
  target: TargetPlayer;
};

export type ComboReportData = {
  title: string;
  pitch: string;
  coreLoop: string;
  safeInspirationTranslation: string;
  mainMechanics: string[];
  worldDesign: string;
  playerProgression: string;
  levelIdeas: string[];
  enemyIdeas: string[];
  monetizationFit: string;
  developmentDifficulty: number;
  ipSafetyScore: number;
  viralityScore: number;
  buildabilityScore: number;
  prototypeTime: string;
  prototypeRoadmap: string[];
  assetPromptPack: string[];
  ipSafetyGuidance: string[];
};

const hashString = (value: string): number => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const pick = <T>(arr: T[], seed: number): T => arr[seed % arr.length];

const clamp = (n: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, n));

export const generateComboReport = (input: ComboInput): ComboReportData => {
  const source = `${input.prompt}|${input.inspirations.join(",")}|${input.style}|${input.target}`;
  const seed = hashString(source);

  const title = `${pick(prefixes, seed)} ${pick(nouns, seed >> 1)} ${pick(suffixes, seed >> 2)}`;
  const loop = pick(loopTemplates, seed >> 3);
  const progression = pick(progressionTracks, seed >> 4);
  const monetizationFit = pick(monetizationFits, seed >> 5);

  const inspirationDNA = input.inspirations.join(" + ");
  const sanitizedPrompt = input.prompt.trim() || "high-energy remix concept";

  const buildabilityScore = clamp(
    55 + (input.target === "indie studio" ? 12 : 0) + (seed % 23),
    55,
    97,
  );
  const ipSafetyScore = clamp(72 + ((seed >> 2) % 25), 70, 99);
  const viralityScore = clamp(
    60 +
      (input.target === "streamer" || input.target === "game jam team" ? 12 : 0) +
      ((seed >> 4) % 20),
    58,
    98,
  );
  const developmentDifficulty = clamp(35 + ((seed >> 3) % 65), 30, 95);

  const prototypeWeeks = clamp(Math.round(developmentDifficulty / 12), 3, 10);

  return {
    title,
    pitch: `${title} is a ${input.style} remix built for ${input.target} teams that transforms "${sanitizedPrompt}" into an original game concept.`,
    coreLoop: loop,
    safeInspirationTranslation: `Instead of copying specific franchises, GameCombo translates ${inspirationDNA} into original movement systems, mission cadence, world density, and encounter pacing.`,
    mainMechanics: [
      `Adaptive movement kit tuned to ${input.inspirations[0]} dynamics`,
      `Reactive mission generator shaped by ${input.style} atmosphere`,
      `Combo meter that rewards creative playstyle chaining`,
      `Remix modifiers that let ${input.target} teams test balance quickly`,
    ],
    worldDesign: `A ${input.style} world with layered zones, readable landmarks, and route variety designed to support short sessions and long-form progression.`,
    playerProgression: progression,
    levelIdeas: [
      "District 01: onboarding challenge that teaches movement and risk-reward timing.",
      "Mid-game remix gauntlet with branching routes and dynamic modifiers.",
      "Final convergence level that combines every unlocked mechanic into a single run.",
    ],
    enemyIdeas: [
      "Pattern-breaking rival squads that adapt to repeated tactics.",
      "Environmental hazards that force movement creativity over brute force.",
      "Elite objective guardians with telegraphed but punishing attack windows.",
    ],
    monetizationFit,
    developmentDifficulty,
    ipSafetyScore,
    viralityScore,
    buildabilityScore,
    prototypeTime: `${prototypeWeeks}-${prototypeWeeks + 2} weeks to first playable prototype`,
    prototypeRoadmap: [
      "Week 1-2: Lock design pillars, camera behavior, and movement prototype.",
      "Week 3-4: Build one full playable loop with enemy AI and scoring.",
      "Week 5-6: Add progression layer, onboarding, and retention hooks.",
      "Week 7+: Polish feel, test shareability moments, package pitch deck footage.",
    ],
    assetPromptPack: [
      `Concept art: "${input.style} skyline with kinetic action lanes and layered depth cues, original game universe, high readability UI anchors."`,
      `Character sheet: "Three original archetypes for a ${input.style} action title, silhouette-first design, no branded references."`,
      'Environment kit: "Modular props, signage, and terrain language that imply progression and faction control."',
      "UI style: \"Glass HUD with electric blue, violet, and neon green accents for score, objective, and combo state.\"",
    ],
    ipSafetyGuidance: [
      "Reference mechanics and mood, never trademarked names, logos, or character likenesses.",
      "Swap iconic set pieces for original world fiction and custom archetypes.",
      "Run final naming and art assets through trademark and copyright review before launch.",
    ],
  };
};
