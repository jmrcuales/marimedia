import Image from "next/image";
import { compassPalette, derivedTokens, semanticRoles, contrastResults } from "./tokens";
import { formatRatio } from "@/lib/color-contrast";
import { cn } from "@/lib/utils";

function PaletteSwatch({ label, role, hex }: { label: string; role: string; hex: string }) {
  const isDark = hex === "#211F1D";
  return (
    <div className="overflow-hidden rounded-lg border border-[var(--lab-border-strong)]">
      <div className="flex h-20 items-end p-3" style={{ backgroundColor: hex }}>
        <span
          className={cn(
            "text-xs font-mono",
            isDark ? "text-[var(--lab-pure-white)]" : "text-[var(--lab-soft-black)]"
          )}
        >
          {hex}
        </span>
      </div>
      <div className="bg-[var(--lab-bg-surface)] p-3">
        <p className="text-sm font-semibold text-[var(--lab-text-primary)]">{label}</p>
        <p className="text-xs text-[var(--lab-text-subtle)]">{role}</p>
      </div>
    </div>
  );
}

function ContrastRow({ result }: { result: (typeof contrastResults)[number] }) {
  const useLabel =
    result.use === "normal-text"
      ? "Normal text (4.5:1)"
      : result.use === "large-text"
        ? "Large text (3:1)"
        : "UI component (3:1)";

  return (
    <tr className="border-t border-[var(--lab-divider)]">
      <td className="py-3 pr-4 align-top">
        <div className="flex items-center gap-2">
          <span
            className="h-6 w-6 shrink-0 rounded border border-[var(--lab-border-strong)]"
            style={{ backgroundColor: result.foregroundHex }}
            aria-hidden
          />
          <span
            className="h-6 w-6 shrink-0 rounded border border-[var(--lab-border-strong)]"
            style={{ backgroundColor: result.backgroundHex }}
            aria-hidden
          />
          <div>
            <p className="text-sm font-medium text-[var(--lab-text-primary)]">{result.label}</p>
            <p className="text-xs text-[var(--lab-text-subtle)]">
              {result.foregroundLabel} on {result.backgroundLabel}
            </p>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap py-3 pr-4 align-top text-sm text-[var(--lab-text-secondary)]">
        {useLabel}
      </td>
      <td className="whitespace-nowrap py-3 pr-4 align-top text-sm font-mono text-[var(--lab-text-primary)]">
        {formatRatio(result.ratio)}
      </td>
      <td className="py-3 align-top">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
            result.passes
              ? "bg-[var(--lab-soft-sage)] text-[var(--lab-success-text)]"
              : "bg-[var(--lab-warning-surface)] text-[var(--lab-error)]"
          )}
        >
          {result.passes ? "Passes" : "Fails — not used this way"}
        </span>
        {result.note && (
          <p className="mt-1 max-w-sm text-xs text-[var(--lab-text-subtle)]">{result.note}</p>
        )}
      </td>
    </tr>
  );
}

const logoBackgrounds = [
  { label: "Warm White", hex: "#FAF8F5" },
  { label: "Pure White", hex: "#FFFFFF" },
  { label: "Soft Blush", hex: "#F2DFDC" },
  { label: "Soft Sage", hex: "#E3E9E1" },
  { label: "Soft Black", hex: "#211F1D" },
] as const;

export function ColorLab() {
  const passingCount = contrastResults.filter((r) => r.passes).length;

  return (
    <div className="space-y-12">
      <div>
        <h3 className="mb-4 text-lg font-bold text-[var(--lab-text-primary)]">
          Section 19 palette (unchanged)
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {compassPalette.map((color) => (
            <PaletteSwatch key={color.id} label={color.label} role={color.role} hex={color.hex} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-bold text-[var(--lab-text-primary)]">
          Accessibility-driven derivatives
        </h3>
        <p className="mb-4 max-w-3xl text-sm text-[var(--lab-text-secondary)]">
          Seven values, all outside the 10-swatch palette above, exist only because a palette
          color failed its intended contrast use (see the table below). Each stays close in hue to
          its nearest brand color.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {derivedTokens.map((token) => (
            <div
              key={token.id}
              className="overflow-hidden rounded-lg border border-[var(--lab-border-strong)]"
            >
              <div className="flex h-14 items-end p-3" style={{ backgroundColor: token.hex }}>
                <span className="font-mono text-xs text-[var(--lab-pure-white)] mix-blend-difference">
                  {token.hex}
                </span>
              </div>
              <div className="bg-[var(--lab-bg-surface)] p-3">
                <p className="text-sm font-semibold text-[var(--lab-text-primary)]">
                  {token.label}
                </p>
                <p className="mt-1 text-xs text-[var(--lab-text-subtle)]">{token.rationale}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-bold text-[var(--lab-text-primary)]">
          Proposed semantic roles
        </h3>
        <p className="mb-4 max-w-3xl text-sm text-[var(--lab-text-secondary)]">
          Per Section 57, the palette hex values are approved but the semantic pairings are not
          final until Phase 1 review. This is the proposed mapping.
        </p>
        <div className="overflow-x-auto rounded-lg border border-[var(--lab-border-strong)]">
          <table className="w-full min-w-[640px] border-collapse bg-[var(--lab-bg-surface)] text-left">
            <thead>
              <tr className="border-b border-[var(--lab-divider)] text-xs uppercase tracking-wide text-[var(--lab-text-subtle)]">
                <th className="px-4 py-2 font-semibold">Role</th>
                <th className="px-4 py-2 font-semibold">Value</th>
                <th className="px-4 py-2 font-semibold">Source</th>
                <th className="px-4 py-2 font-semibold">Used for</th>
              </tr>
            </thead>
            <tbody>
              {semanticRoles.map((role) => (
                <tr key={role.id} className="border-b border-[var(--lab-divider)] last:border-b-0">
                  <td className="px-4 py-3 text-sm font-medium text-[var(--lab-text-primary)]">
                    {role.label}
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-2">
                      <span
                        className="h-4 w-4 rounded-full border border-[var(--lab-border-strong)]"
                        style={{ backgroundColor: role.hex }}
                        aria-hidden
                      />
                      <span className="font-mono text-xs text-[var(--lab-text-secondary)]">
                        {role.hex}
                      </span>
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-[var(--lab-text-secondary)]">
                    {role.source}
                  </td>
                  <td className="px-4 py-3 text-sm text-[var(--lab-text-secondary)]">
                    {role.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 max-w-2xl text-xs text-[var(--lab-text-subtle)]">
          Per Section 19&apos;s color boundaries, Muted Green and Soft Sage stay scoped to
          health-context surfaces (article callouts, health metadata) rather than becoming the
          site&apos;s general secondary color, so Mari Media does not read as a health-only brand.
        </p>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-bold text-[var(--lab-text-primary)]">
          Contrast results ({passingCount} of {contrastResults.length} pairings pass their
          intended use)
        </h3>
        <p className="mb-4 max-w-3xl text-sm text-[var(--lab-text-secondary)]">
          Every ratio below is calculated with the standard WCAG relative-luminance formula (see{" "}
          <code className="rounded bg-[var(--lab-bg-surface-alt)] px-1 py-0.5 font-mono text-xs">
            lib/color-contrast.ts
          </code>
          ), not estimated by eye. Rows marked &quot;fails&quot; document a pairing that was
          rejected and show the accessible alternative actually used.
        </p>
        <div className="overflow-x-auto rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] px-4">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="text-xs uppercase tracking-wide text-[var(--lab-text-subtle)]">
                <th className="py-3 pr-4 font-semibold">Pairing</th>
                <th className="py-3 pr-4 font-semibold">Intended use</th>
                <th className="py-3 pr-4 font-semibold">Ratio</th>
                <th className="py-3 font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              {contrastResults.map((result) => (
                <ContrastRow key={result.id} result={result} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-bold text-[var(--lab-text-primary)]">
          Logo against proposed backgrounds
        </h3>
        <p className="mb-4 max-w-3xl text-sm text-[var(--lab-text-secondary)]">
          The production logo file, unmodified, shown against each candidate background. No
          background recolors the logo; if a background made the logo illegible, that background
          would be dropped for logo-adjacent placements rather than editing the logo to fit it.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {logoBackgrounds.map((bg) => (
            <div
              key={bg.hex}
              className="flex flex-col items-center gap-3 rounded-lg border border-[var(--lab-border-strong)] p-4"
              style={{ backgroundColor: bg.hex }}
            >
              <Image
                src="/marimedia-logo.svg"
                alt="Mari Media logo, unmodified"
                width={100}
                height={50}
                className="h-auto w-full max-w-[100px] object-contain"
              />
              <span
                className={cn(
                  "text-xs font-medium",
                  bg.hex === "#211F1D" ? "text-[var(--lab-pure-white)]" : "text-[var(--lab-soft-black)]"
                )}
              >
                {bg.label}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-[var(--lab-text-subtle)]">
          Legibility on Soft Black depends on the logo&apos;s own colors and transparency, not on
          any modification made here. Review it directly on this page rather than trusting this
          description.
        </p>
      </div>
    </div>
  );
}
