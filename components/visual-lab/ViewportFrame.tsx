"use client";

import { viewportOptions, type ViewportOption } from "./lab-config";

/**
 * Wraps the Live Website Preview in a fixed-width canvas matching the
 * selected device width, inside a horizontally scrollable area so a
 * 1440px desktop preview never breaks the page layout on a smaller
 * reviewer screen.
 */
export function ViewportFrame({
  viewport,
  onOpenNewTab,
  children,
}: {
  viewport: ViewportOption;
  onOpenNewTab?: () => void;
  children: React.ReactNode;
}) {
  const option = viewportOptions.find((item) => item.id === viewport);
  const width = option?.px ?? null;

  return (
    <div>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-medium text-[var(--lab-text-subtle)]" aria-live="polite">
          Active width: <span className="font-semibold text-[var(--lab-text-primary)]">{option?.label ?? "Fit available space"}</span>
        </p>
        {onOpenNewTab && (
          <button
            type="button"
            onClick={onOpenNewTab}
            className="text-xs font-semibold text-[var(--lab-link)] underline underline-offset-2"
          >
            Open preview in a new tab
          </button>
        )}
      </div>
      <div className="overflow-x-auto rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface-alt)] p-4">
        <div
          className="mx-auto overflow-hidden rounded-md border border-[var(--lab-border-strong)] bg-[var(--lab-bg-page)] shadow-sm"
          style={{
            width: width ? `${width}px` : "100%",
            minWidth: width ? `${width}px` : undefined,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
