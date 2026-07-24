/**
 * Every demo here is a plain server-rendered element: no client-side
 * JavaScript is required for any of it to work, which guarantees nothing
 * is invisible in the server-rendered HTML while JS loads. The one
 * "reveal" interaction uses the native `<details>`/`<summary>` disclosure
 * element, which is keyboard-operable and animatable by default in every
 * modern browser without a framework.
 */
export function MotionLab() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-5">
          <h4 className="text-base font-bold text-[var(--lab-text-primary)]">Subtle reveal</h4>
          <p className="mt-1 mb-4 text-sm text-[var(--lab-text-secondary)]">
            Native disclosure control. Works without JavaScript, is keyboard-operable by default,
            and never hides content that matters from a reader who never interacts with it.
          </p>
          <details className="mm-motion-demo rounded-md border border-[var(--lab-divider)] p-4 open:bg-[var(--lab-bg-surface-alt)]">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--lab-text-primary)]">
              How do we evaluate a partnership?
            </summary>
            <p className="mt-3 text-sm text-[var(--lab-text-secondary)]">
              We look at audience fit, editorial relevance, and whether the relationship can be
              disclosed honestly. This detail is supplementary, not required to understand the
              page around it.
            </p>
          </details>
        </div>

        <div className="rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-5">
          <h4 className="text-base font-bold text-[var(--lab-text-primary)]">
            Underline / link movement
          </h4>
          <p className="mt-1 mb-4 text-sm text-[var(--lab-text-secondary)]">
            A short, one-off transition on hover and focus, not a looping animation.
          </p>
          <a
            href="#motion"
            className="mm-motion-demo text-base font-semibold text-[var(--lab-link)] underline decoration-transparent decoration-2 underline-offset-4 transition-[text-decoration-color] duration-200 hover:decoration-current focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--lab-focus-ring)] focus-visible:outline-offset-2"
          >
            Hover or tab to this link
          </a>
        </div>

        <div className="rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-5">
          <h4 className="text-base font-bold text-[var(--lab-text-primary)]">
            Button state transition
          </h4>
          <p className="mt-1 mb-4 text-sm text-[var(--lab-text-secondary)]">
            Same short color transition used throughout the{" "}
            <a href="#buttons" className="text-[var(--lab-link)] underline-offset-4 hover:underline">
              Button Lab
            </a>{" "}
            section above.
          </p>
          <button
            type="button"
            className="mm-motion-demo inline-flex h-11 items-center justify-center rounded-full bg-[var(--lab-action-primary)] px-6 text-sm font-semibold text-[var(--lab-action-primary-text)] transition-colors duration-200 hover:bg-[var(--lab-action-primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--lab-focus-ring)] focus-visible:outline-offset-2"
          >
            Partner With Us
          </button>
        </div>

        <div className="rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-5">
          <h4 className="text-base font-bold text-[var(--lab-text-primary)]">
            Optional ribbon movement
          </h4>
          <p className="mt-1 mb-4 text-sm text-[var(--lab-text-secondary)]">
            See direction B in the{" "}
            <a href="#ribbon" className="text-[var(--lab-link)] underline-offset-4 hover:underline">
              Ribbon
            </a>{" "}
            section. It only animates when the visitor has not requested reduced motion, and the
            &quot;Preview reduced motion&quot; toggle at the top of this page lets you confirm that
            without changing your OS setting.
          </p>
        </div>
      </div>

      <div className="rounded-lg bg-[var(--lab-bg-surface-alt)] p-5 text-sm text-[var(--lab-text-secondary)]">
        <p>
          None of the motion in this lab is required to understand any content: every demo above
          also makes sense with the animation or transition removed entirely, which is exactly
          what happens automatically under <code className="font-mono text-xs">prefers-reduced-motion: reduce</code>{" "}
          or the manual toggle.
        </p>
      </div>
    </div>
  );
}
