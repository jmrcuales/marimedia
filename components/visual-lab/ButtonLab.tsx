function ButtonSample({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--lab-text-subtle)]">
        {title}
      </p>
      {children}
    </div>
  );
}

const buttonBase =
  "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors duration-200";

export function ButtonLab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ButtonSample title="Primary button (real hover + focus)">
          <button
            type="button"
            className={`${buttonBase} bg-[var(--lab-action-primary)] text-[var(--lab-action-primary-text)] hover:bg-[var(--lab-action-primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--lab-focus-ring)] focus-visible:outline-offset-2`}
          >
            Partner With Us
          </button>
          <p className="text-xs text-[var(--lab-text-subtle)]">
            Hover or tab to it to see the real state change.
          </p>
        </ButtonSample>

        <ButtonSample title="Primary button, hover state (static reference)">
          <span
            className={`${buttonBase} bg-[var(--lab-action-primary-hover)] text-[var(--lab-action-primary-text)]`}
          >
            Partner With Us
          </span>
          <p className="text-xs text-[var(--lab-text-subtle)]">
            Shown statically for screenshot review; contrast 8.76:1.
          </p>
        </ButtonSample>

        <ButtonSample title="Secondary button (outline)">
          <button
            type="button"
            className={`${buttonBase} border-2 border-[var(--lab-text-primary)] bg-transparent text-[var(--lab-text-primary)] hover:bg-[var(--lab-text-primary)] hover:text-[var(--lab-pure-white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--lab-focus-ring)] focus-visible:outline-offset-2`}
          >
            Explore Health Articles
          </button>
        </ButtonSample>

        <ButtonSample title="Text link">
          <a
            href="#buttons"
            className="text-sm font-semibold text-[var(--lab-link)] underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--lab-focus-ring)] focus-visible:outline-offset-2"
          >
            Read our approach
          </a>
        </ButtonSample>

        <ButtonSample title="Destructive / warning action (relevant sample)">
          <button
            type="button"
            className={`${buttonBase} border-2 border-[var(--lab-error)] bg-transparent text-[var(--lab-error)] hover:bg-[var(--lab-error)] hover:text-[var(--lab-pure-white)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--lab-focus-ring)] focus-visible:outline-offset-2`}
          >
            Remove submission
          </button>
        </ButtonSample>

        <ButtonSample title="Disabled state">
          <button type="button" disabled className={`${buttonBase} cursor-not-allowed opacity-50`} style={{ backgroundColor: "var(--lab-action-primary)", color: "var(--lab-action-primary-text)" }}>
            Partner With Us
          </button>
        </ButtonSample>

        <ButtonSample title="Keyboard focus state (tab to it)">
          <button
            type="button"
            className={`${buttonBase} bg-[var(--lab-action-primary)] text-[var(--lab-action-primary-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--lab-focus-ring)] focus-visible:outline-offset-2`}
          >
            Tab to me
          </button>
          <p className="text-xs text-[var(--lab-text-subtle)]">
            Uses the same focus-ring token as every other interactive element in the lab.
          </p>
        </ButtonSample>
      </div>

      <div className="rounded-lg bg-[var(--lab-bg-surface-alt)] p-5 text-sm text-[var(--lab-text-secondary)]">
        <p>
          Buttons stay confident and calm: solid fill only for the single primary action per view,
          an outline for secondary actions, and text links for tertiary/inline actions. Rounded
          (pill) shape is kept for buttons specifically, not extended to cards or form controls, so
          the pill shape stays meaningful rather than becoming the default for every surface.
        </p>
      </div>
    </div>
  );
}
