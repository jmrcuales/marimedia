"use client";

import { useCallback, useEffect, useState } from "react";
import type { ArticleSummary } from "@/types/article";
import {
  type LabConfig,
  baselineConfig,
  compassRecommendedConfig,
  configFromSearchParams,
  configToSearchParams,
} from "./lab-config";
import { ControlPanel } from "./ControlPanel";
import { WebsitePreview } from "./WebsitePreview";
import { ViewportFrame } from "./ViewportFrame";
import { SelectionSummary } from "./SelectionSummary";
import { ComparisonMode } from "./ComparisonMode";

/**
 * Owns all interactive state for the Live Website Preview: the current
 * configuration, optional URL query-parameter sync, and the preset
 * buttons. Plain `useState` plus the browser History API is enough here,
 * so no state-management dependency was added.
 */
export function LiveConfigurator({ featuredArticle }: { featuredArticle: ArticleSummary | null }) {
  const [config, setConfig] = useState<LabConfig>(baselineConfig);
  const [ready, setReady] = useState(false);

  // Hydrate from the URL once, after mount, so the server-rendered
  // baseline markup never mismatches what the client renders on hydration.
  // The URL query string is only readable on the client, so this genuinely
  // one-time external-system read cannot be expressed as a render-time
  // derivation or a lazy `useState` initializer without causing a
  // server/client hydration mismatch instead.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = configFromSearchParams(params);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time hydration-safe restore from the URL, not a derived-state loop.
    if (fromUrl) setConfig(fromUrl);
    setReady(true);
  }, []);

  // Reflect the configuration in the URL (no new history entry per
  // change) once hydration has settled, so a reviewer can copy the
  // address bar URL to reopen or share the same configuration.
  useEffect(() => {
    if (!ready) return;
    const params = configToSearchParams(config);
    window.history.replaceState(null, "", `${window.location.pathname}?${params.toString()}`);
  }, [config, ready]);

  const updateConfig = useCallback(<K extends keyof LabConfig>(key: K, value: LabConfig[K]) => {
    setConfig((current) => ({ ...current, [key]: value }));
  }, []);

  function handleOpenNewTab() {
    const params = configToSearchParams(config);
    window.open(`${window.location.pathname}?${params.toString()}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setConfig(compassRecommendedConfig)}
          className="mm-motion-demo rounded-full bg-[var(--lab-action-primary)] px-4 py-2 text-sm font-semibold text-[var(--lab-action-primary-text)] transition-colors hover:bg-[var(--lab-action-primary-hover)]"
        >
          Apply Compass recommendation
        </button>
        <button
          type="button"
          onClick={() => setConfig(baselineConfig)}
          className="mm-motion-demo rounded-full border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] px-4 py-2 text-sm font-semibold text-[var(--lab-text-primary)] transition-colors hover:bg-[var(--lab-bg-surface-alt)]"
        >
          Reset to baseline
        </button>
        <p className="text-xs text-[var(--lab-text-subtle)]">
          The Compass recommendation is a starting suggestion for review, not a final decision.
        </p>
      </div>

      <SelectionSummary config={config} />

      <ControlPanel config={config} onChange={updateConfig} />

      <ViewportFrame viewport={config.viewport} onOpenNewTab={handleOpenNewTab}>
        <WebsitePreview config={config} featuredArticle={featuredArticle} />
      </ViewportFrame>

      <ComparisonMode featuredArticle={featuredArticle} />
    </div>
  );
}
