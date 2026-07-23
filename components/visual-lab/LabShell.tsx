"use client";

import { useState } from "react";
import "./visual-lab.css";
import { labFontVariables } from "./fonts";
import { cn } from "@/lib/utils";

/**
 * Outer wrapper for the visual-direction lab. This is the only client
 * component that owns state for the whole route; every section inside
 * `children` is still rendered on the server and passed down as regular
 * React children, so the bulk of the page has no client-side JS cost.
 *
 * Two responsibilities:
 * 1. Apply the `.mm-visual-lab` scoping class (see `visual-lab.css`) and
 *    the four lab-only font CSS variables, so none of this leaks outside
 *    the route.
 * 2. Provide a keyboard-operable "preview with reduced motion" toggle so
 *    reviewers can see the reduced-motion behavior without changing
 *    their OS setting.
 */
export function LabShell({ children }: { children: React.ReactNode }) {
  const [forceReducedMotion, setForceReducedMotion] = useState(false);

  return (
    <div
      className={cn(
        "mm-visual-lab min-h-screen",
        labFontVariables,
        forceReducedMotion && "mm-force-reduced-motion"
      )}
    >
      <div className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-[var(--lab-border-strong)] bg-[var(--lab-soft-black)] px-4 py-2 text-sm text-[var(--lab-pure-white)]">
        <p className="font-medium">
          Internal visual-direction lab — development only, not indexed, not linked from the
          production site.
        </p>
        <button
          type="button"
          onClick={() => setForceReducedMotion((current) => !current)}
          aria-pressed={forceReducedMotion}
          title="Affects the documentation sections below the Live Website Preview, which has its own Motion control."
          className="shrink-0 rounded-full border border-[var(--lab-pure-white)]/40 px-3 py-1 text-xs font-semibold transition-colors hover:bg-[var(--lab-pure-white)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--lab-pastel-red)] focus-visible:outline-offset-2"
        >
          {forceReducedMotion ? "Reduced motion: on" : "Preview reduced motion (docs below)"}
        </button>
      </div>
      {children}
    </div>
  );
}
