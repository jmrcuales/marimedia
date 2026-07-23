"use client";

import { useState } from "react";
import {
  formatConfigForCopy,
  type LabConfig,
  typographyOptions,
  serifAccentOptions,
  asymmetryOptions,
  heroOptions,
  pathwaysOptions,
  ribbonOptions,
  radiusOptions,
  shadowOptions,
  surfaceOptions,
  buttonShapeOptions,
  colorEmphasisOptions,
  motionOptions,
  viewportOptions,
} from "./lab-config";

function findLabel<T extends string>(list: { id: T; label: string }[], id: T): string {
  return list.find((item) => item.id === id)?.label ?? id;
}

export function SelectionSummary({ config }: { config: LabConfig }) {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "error">("idle");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(formatConfigForCopy(config));
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    setTimeout(() => setCopyState("idle"), 2500);
  }

  const items: { label: string; value: string }[] = [
    { label: "Typography", value: findLabel(typographyOptions, config.typography) },
    { label: "Serif accent", value: findLabel(serifAccentOptions, config.serifAccent) },
    { label: "Layout", value: findLabel(asymmetryOptions, config.asymmetry) },
    { label: "Hero", value: findLabel(heroOptions, config.hero) },
    { label: "Pathways", value: findLabel(pathwaysOptions, config.pathways) },
    { label: "Ribbon", value: findLabel(ribbonOptions, config.ribbon) },
    { label: "Radius", value: findLabel(radiusOptions, config.radius) },
    { label: "Shadow", value: findLabel(shadowOptions, config.shadow) },
    { label: "Surface", value: findLabel(surfaceOptions, config.surface) },
    { label: "Button", value: findLabel(buttonShapeOptions, config.buttonShape) },
    { label: "Color emphasis", value: findLabel(colorEmphasisOptions, config.colorEmphasis) },
    { label: "Motion", value: findLabel(motionOptions, config.motion) },
    { label: "Viewport", value: findLabel(viewportOptions, config.viewport) },
  ];

  return (
    <div className="rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-[var(--lab-text-primary)]">Current selections</p>
        <button
          type="button"
          onClick={handleCopy}
          className="mm-motion-demo rounded-full border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--lab-text-primary)] transition-colors hover:bg-[var(--lab-bg-surface-alt)]"
        >
          {copyState === "copied" ? "Copied" : copyState === "error" ? "Copy failed" : "Copy current selections"}
        </button>
      </div>
      <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="text-[var(--lab-text-subtle)]">{item.label}</dt>
            <dd className="font-medium text-[var(--lab-text-primary)]">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
