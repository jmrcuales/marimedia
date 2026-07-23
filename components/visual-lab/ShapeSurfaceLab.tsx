function SwatchLabel({ title }: { title: string }) {
  return <p className="mt-2 text-center text-xs font-medium text-[var(--lab-text-secondary)]">{title}</p>;
}

const radiusScale = [
  { label: "Small (6px)", className: "rounded-md" },
  { label: "Medium (12px)", className: "rounded-xl" },
  { label: "Large (20px)", className: "rounded-[20px]" },
  { label: "Pill (restricted use)", className: "rounded-full" },
];

const shadowScale = [
  { label: "None", className: "shadow-none border border-[var(--lab-border-strong)]" },
  { label: "Subtle", className: "shadow-sm" },
  { label: "Medium (exceptional use only)", className: "shadow-lg" },
];

export function ShapeSurfaceLab() {
  return (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 text-lg font-bold text-[var(--lab-text-primary)]">Radius scale</h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {radiusScale.map((item) => (
            <div key={item.label}>
              <div
                className={`flex h-20 items-center justify-center bg-[var(--lab-soft-sage)] ${item.className}`}
              />
              <SwatchLabel title={item.label} />
            </div>
          ))}
        </div>
        <p className="mt-3 max-w-2xl text-xs text-[var(--lab-text-subtle)]">
          Pill radius stays reserved for tags and compact status labels, not every card and
          button, to avoid the &ldquo;excessive pill shapes&rdquo; pattern flagged in Phase 0.
        </p>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-bold text-[var(--lab-text-primary)]">Shadow scale</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {shadowScale.map((item) => (
            <div key={item.label}>
              <div className={`h-20 rounded-lg bg-[var(--lab-bg-surface)] ${item.className}`} />
              <SwatchLabel title={item.label} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-bold text-[var(--lab-text-primary)]">
          Editorial image frames
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <div className="flex aspect-[4/3] items-center justify-center border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface-alt)]">
              <span className="text-xs text-[var(--lab-text-subtle)]">Square frame</span>
            </div>
            <SwatchLabel title="Square, no radius" />
          </div>
          <div>
            <div className="flex aspect-[4/3] items-center justify-center rounded-md border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface-alt)]">
              <span className="text-xs text-[var(--lab-text-subtle)]">Softened frame</span>
            </div>
            <SwatchLabel title="Lightly softened (6px)" />
          </div>
          <div>
            <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface-alt)] shadow-sm">
              <span className="text-xs text-[var(--lab-text-subtle)]">Elevated frame</span>
            </div>
            <SwatchLabel title="Medium radius + subtle shadow" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-bold text-[var(--lab-text-primary)]">
          Flat editorial surface vs. elevated card
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="border-t-2 border-[var(--lab-action-primary)] bg-[var(--lab-bg-page)] p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lab-editorial-label)]">
              Flat editorial surface
            </p>
            <p className="mt-2 text-sm text-[var(--lab-text-secondary)]">
              No shadow, no card container, separation from a top border and spacing alone.
            </p>
          </div>
          <div className="rounded-xl bg-[var(--lab-bg-surface)] p-6 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lab-editorial-label)]">
              Elevated card
            </p>
            <p className="mt-2 text-sm text-[var(--lab-text-secondary)]">
              Used sparingly, for content that genuinely benefits from feeling like a discrete
              object (forms, the featured-article module), not as the default for every section.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-[var(--lab-bg-surface-alt)] p-5 text-sm text-[var(--lab-text-secondary)]">
        <p>
          <strong className="text-[var(--lab-text-primary)]">Recommendation:</strong> medium radius
          (12px) as the default for surfaces that need one at all, small radius (6px) for form
          controls, pill restricted to tags/status labels, and shadows reserved for the small
          number of elements that need to feel elevated rather than applied by default the way{" "}
          <code className="rounded bg-[var(--lab-bg-surface)] px-1 py-0.5 font-mono text-xs">
            components/ui/Card.tsx
          </code>{" "}
          currently does everywhere.
        </p>
      </div>
    </div>
  );
}
