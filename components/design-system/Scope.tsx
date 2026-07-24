"use client";

import { useState } from "react";
import "./tokens.css";
import { designSystemFontVariables } from "./fonts";
import { cn } from "@/lib/utils";

export interface ScopeProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Renders a small, keyboard-operable "preview reduced motion" toggle
   * so reviewers can see the reduced-motion behavior without changing
   * their OS setting. Off by default so `Scope` can also wrap a real
   * production composition later without adding UI.
   */
  showMotionPreviewToggle?: boolean;
}

/**
 * Applies the `.mm-ds` token scope (see `tokens.css`) and the production
 * typeface CSS variables (see `fonts.ts`) to everything rendered inside
 * it. Every design-system component in this directory assumes it is
 * rendered inside a `Scope`.
 *
 * This mirrors the isolation pattern the Phase 1 lab used
 * (`components/visual-lab/LabShell.tsx`): nothing here is global, so
 * wrapping a new route in `Scope` cannot change how any existing
 * production route renders.
 */
export function Scope({ children, className, showMotionPreviewToggle = false }: ScopeProps) {
  const [forceReducedMotion, setForceReducedMotion] = useState(false);

  return (
    <div
      className={cn(
        "mm-ds",
        designSystemFontVariables,
        forceReducedMotion && "mm-ds-force-reduced-motion",
        className
      )}
      style={{ fontFamily: "var(--ds-font-body)" }}
    >
      {showMotionPreviewToggle && (
        <div className="sticky top-0 z-[var(--ds-z-sticky)] flex items-center justify-end gap-3 border-b border-[var(--ds-color-border-subtle)] bg-[var(--ds-color-text)] px-4 py-2 text-[var(--ds-text-caption)] text-[var(--ds-color-surface)]">
          <button
            type="button"
            onClick={() => setForceReducedMotion((current) => !current)}
            aria-pressed={forceReducedMotion}
            className="shrink-0 rounded-[var(--ds-radius-full)] border border-[var(--ds-color-surface)]/40 px-3 py-1 font-semibold transition-[background-color] duration-[var(--ds-duration-fast)] hover:bg-[var(--ds-color-surface)]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ds-palette-pastel-red)]"
          >
            {forceReducedMotion ? "Reduced motion: on" : "Preview reduced motion"}
          </button>
        </div>
      )}
      {children}
    </div>
  );
}
