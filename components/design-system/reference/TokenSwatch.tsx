export interface TokenSwatchProps {
  label: string;
  cssVar: string;
  hex?: string;
  note?: string;
}

/** One color-token row: a swatch, its role name, the CSS variable, and an optional note. */
export function TokenSwatch({ label, cssVar, hex, note }: TokenSwatchProps) {
  return (
    <div className="flex items-start gap-3 rounded-[var(--ds-radius-md)] border border-[var(--ds-color-border-subtle)] bg-[var(--ds-color-surface)] p-3">
      <span
        aria-hidden="true"
        className="mt-0.5 h-10 w-10 shrink-0 rounded-[var(--ds-radius-sm)] border border-[var(--ds-color-border-subtle)]"
        style={{ background: `var(${cssVar})` }}
      />
      <div className="min-w-0">
        <p className="font-[var(--ds-font-body)] text-[length:var(--ds-text-body-sm)] font-semibold text-[var(--ds-color-text)]">
          {label}
        </p>
        <p className="font-[var(--ds-font-mono)] text-[length:var(--ds-text-caption)] text-[var(--ds-color-text-subtle)]">
          {cssVar}
          {hex ? ` · ${hex}` : ""}
        </p>
        {note && (
          <p className="mt-1 font-[var(--ds-font-body)] text-[length:var(--ds-text-caption)] text-[var(--ds-color-text-muted)]">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
