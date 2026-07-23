"use client";

import { useState } from "react";
import type { ArticleSummary } from "@/types/article";
import { cn } from "@/lib/utils";
import { namedPresets, namedPresetLabels, type LabConfig } from "./lab-config";
import { WebsitePreview } from "./WebsitePreview";

/**
 * Optional side-by-side comparison of two named presets. Independent of
 * the main configurator above it, so ordinary review never requires
 * turning this on. Covers, at minimum, System A vs B, System B vs C, and
 * Baseline vs the Compass recommendation, by letting either panel pick
 * any named preset.
 */
export function ComparisonMode({ featuredArticle }: { featuredArticle: ArticleSummary | null }) {
  const [enabled, setEnabled] = useState(false);
  const [leftPreset, setLeftPreset] = useState<keyof typeof namedPresets>("system-a");
  const [rightPreset, setRightPreset] = useState<keyof typeof namedPresets>("system-c");

  const panels: {
    key: "left" | "right";
    label: string;
    value: keyof typeof namedPresets;
    onChange: (value: keyof typeof namedPresets) => void;
  }[] = [
    { key: "left", label: "Panel A", value: leftPreset, onChange: setLeftPreset },
    { key: "right", label: "Panel B", value: rightPreset, onChange: setRightPreset },
  ];

  return (
    <div className="rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-[var(--lab-text-primary)]">Comparison mode</p>
          <p className="mt-0.5 text-xs text-[var(--lab-text-subtle)]">
            Optional. Compare two named configurations side by side, such as System A vs System C,
            or Baseline vs the Compass recommendation.
          </p>
        </div>
        <button
          type="button"
          aria-pressed={enabled}
          onClick={() => setEnabled((value) => !value)}
          className={cn(
            "shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors",
            enabled
              ? "border-[var(--lab-action-primary)] bg-[var(--lab-action-primary)] text-[var(--lab-action-primary-text)]"
              : "border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] text-[var(--lab-text-primary)]"
          )}
        >
          {enabled ? "Comparison mode on" : "Turn on comparison mode"}
        </button>
      </div>

      {enabled && (
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {panels.map((panel) => (
            <div key={panel.key}>
              <label className="mb-2 block text-xs font-semibold text-[var(--lab-text-primary)]">
                {panel.label}
                <select
                  value={panel.value}
                  onChange={(event) => panel.onChange(event.target.value as keyof typeof namedPresets)}
                  className="mt-1 block w-full rounded-md border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] px-2 py-1.5 text-sm font-normal text-[var(--lab-text-primary)]"
                >
                  {namedPresetLabels.map((preset) => (
                    <option key={preset.id} value={preset.id}>
                      {preset.label}
                    </option>
                  ))}
                </select>
              </label>
              <div className="overflow-hidden rounded-lg border border-[var(--lab-border-strong)]">
                <WebsitePreview config={namedPresets[panel.value] as LabConfig} featuredArticle={featuredArticle} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
