/**
 * Three simplified, 2D approximations of a ribbon direction for
 * approval-stage comparison. Compass Section 21 describes the eventual
 * ribbon as "dimensional" and a future logo direction; building final
 * dimensional artwork is Phase 2+ work once a direction is approved here.
 * None of these trace, extend, or reuse the logo mark itself.
 */

function RibbonPreview({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-5">
      <h4 className="text-base font-bold text-[var(--lab-text-primary)]">{title}</h4>
      <p className="mt-1 mb-4 text-sm text-[var(--lab-text-secondary)]">{description}</p>
      {children}
    </div>
  );
}

export function RibbonLab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <RibbonPreview
          title="A. Minimal line"
          description="A thin, restrained line. Mainly structural, very low visual weight."
        >
          <div className="space-y-4 rounded-md bg-[var(--lab-bg-page)] p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lab-editorial-label)]">
              Section transition
            </p>
            <div
              aria-hidden
              className="h-[2px] w-full rounded-full bg-gradient-to-r from-[var(--lab-deep-red)] via-[var(--lab-pastel-red)] to-transparent"
            />
            <p className="text-sm text-[var(--lab-text-secondary)]">
              Content continues below the line without further ornamentation.
            </p>
          </div>
        </RibbonPreview>

        <RibbonPreview
          title="B. Soft editorial ribbon"
          description="Broader but subtle. Uses Soft Blush, Warm Sand, and Soft Sage to support the transition between two sections."
        >
          <div className="space-y-0 overflow-hidden rounded-md">
            <div className="bg-[var(--lab-bg-page)] p-6">
              <p className="text-sm text-[var(--lab-text-secondary)]">Section content above.</p>
            </div>
            <div
              aria-hidden
              className="mm-ribbon-animated h-3 w-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--lab-soft-blush), var(--lab-warm-sand), var(--lab-soft-sage), var(--lab-soft-blush))",
              }}
            />
            <div className="bg-[var(--lab-bg-surface-alt)] p-6">
              <p className="text-sm text-[var(--lab-text-secondary)]">Section content below.</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-[var(--lab-text-subtle)]">
            The animated version drifts slowly and only runs when the visitor has not requested
            reduced motion. Try the &quot;Preview reduced motion&quot; toggle at the top of this
            page.
          </p>
        </RibbonPreview>

        <RibbonPreview
          title="C. No-ribbon control"
          description="The same transition using only spacing, a border, and typography. No gradient band."
        >
          <div className="space-y-6 rounded-md bg-[var(--lab-bg-page)] p-6">
            <p className="text-sm text-[var(--lab-text-secondary)]">Section content above.</p>
            <div className="border-t border-[var(--lab-divider)] pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lab-text-subtle)]">
                Next section
              </p>
              <p className="mt-2 text-sm text-[var(--lab-text-secondary)]">
                Section content below, separated by whitespace and a hairline border alone.
              </p>
            </div>
          </div>
        </RibbonPreview>
      </div>

      <div className="rounded-lg bg-[var(--lab-bg-surface-alt)] p-5 text-sm text-[var(--lab-text-secondary)]">
        <p>
          <strong className="text-[var(--lab-text-primary)]">Recommendation:</strong> Direction B
          (soft editorial ribbon) best matches Compass Section 21&apos;s description of a
          restrained brand signature that supports section transitions, as long as it stays this
          subtle and is used selectively rather than on every section. Direction A works well as a
          lower-commitment fallback if JM prefers something closer to invisible. Direction C
          proves the layout does not depend on a ribbon at all. Approval is JM&apos;s call, not
          decided here.
        </p>
      </div>
    </div>
  );
}
