"use client";

/**
 * 6. Inquiry form sample: labels above fields, visible focus state, no
 * submission behavior. Only a client component because `preventDefault`
 * on submit requires an event handler; the form never sends data
 * anywhere.
 */
export function InquiryFormSample() {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="max-w-md rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-6"
      aria-label="Sample inquiry form (preview only)"
    >
      <div className="space-y-4">
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-[var(--lab-text-primary)]">Name</span>
          <input
            type="text"
            name="lab-name"
            className="w-full rounded-md border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] px-3 py-2 text-[var(--lab-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--lab-focus-ring)] focus-visible:outline-offset-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-[var(--lab-text-primary)]">
            Work email
          </span>
          <input
            type="email"
            name="lab-email"
            className="w-full rounded-md border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] px-3 py-2 text-[var(--lab-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--lab-focus-ring)] focus-visible:outline-offset-2"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-[var(--lab-text-primary)]">Message</span>
          <textarea
            name="lab-message"
            rows={3}
            className="w-full rounded-md border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] px-3 py-2 text-[var(--lab-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--lab-focus-ring)] focus-visible:outline-offset-2"
          />
        </label>
        <p className="text-xs text-[var(--lab-text-subtle)]">
          We only use this to respond to your inquiry. Please do not include passwords or
          sensitive personal or financial information.
        </p>
        <button
          type="submit"
          className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--lab-action-primary)] px-6 text-sm font-semibold text-[var(--lab-action-primary-text)] hover:bg-[var(--lab-action-primary-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--lab-focus-ring)] focus-visible:outline-offset-2"
        >
          Send message
        </button>
        <p className="text-xs text-[var(--lab-text-subtle)]">
          Preview only. This form does not submit or store data.
        </p>
      </div>
    </form>
  );
}
