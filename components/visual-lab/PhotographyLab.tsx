import { ImageOff } from "lucide-react";
import { imageRoleList } from "@/lib/photography";

const directionNotes = [
  "Photorealistic and natural, not obviously AI-generated or stock-advertising-like.",
  "Human and culturally respectful, diverse without tokenism.",
  "Calm in mood, but not sterile or clinical.",
  "Editorial in composition rather than posed stock photography.",
  "Free from exaggerated or implied medical claims (no clinical settings implying diagnosis or treatment).",
  "Properly licensed and attributed where a license requires it, following the ASSET-MANIFEST pattern in public/images/articles/.",
  "Authored focal points when cover crops differ from the source aspect ratio.",
];

/**
 * Phase 1 visual-lab photography panel. Placeholders only; real assets
 * ship through the MARIWEB-010 photography system (`lib/photography` and
 * `docs/photography-system.md`).
 */
export function PhotographyLab() {
  return (
    <div className="space-y-10">
      <div className="rounded-lg border border-[var(--lab-warning-text)] bg-[var(--lab-warning-surface)] p-4 text-sm text-[var(--lab-warning-text)]">
        No photography is sourced or published in this lab. Every frame below is a labeled
        structural placeholder drawn from the typed image-role system, not a real or stand-in
        photograph.
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {imageRoleList.map((role) => (
          <div
            key={role.id}
            className="rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-5"
          >
            <div
              className={`flex ${aspectClass(role.preferredRatio)} w-full items-center justify-center gap-2 rounded-md border border-dashed border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface-alt)]`}
            >
              <ImageOff size={18} className="text-[var(--lab-text-subtle)]" aria-hidden />
              <span className="text-xs font-medium text-[var(--lab-text-subtle)]">
                {role.label} placeholder
              </span>
            </div>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="font-semibold text-[var(--lab-text-primary)]">Purpose</dt>
                <dd className="text-[var(--lab-text-secondary)]">{role.purpose}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--lab-text-primary)]">Recommended crop</dt>
                <dd className="text-[var(--lab-text-secondary)]">{role.defaultFocalGuidance}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--lab-text-primary)]">sizes</dt>
                <dd className="font-mono text-xs text-[var(--lab-text-secondary)]">{role.sizes}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>

      <div>
        <h3 className="mb-3 text-lg font-bold text-[var(--lab-text-primary)]">
          Art-direction requirements for future photography
        </h3>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-[var(--lab-text-secondary)]">
          {directionNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function aspectClass(ratio: "square" | "portrait" | "landscape" | "wide"): string {
  switch (ratio) {
    case "square":
      return "aspect-square";
    case "portrait":
      return "aspect-[4/5]";
    case "wide":
      return "aspect-[16/9]";
    case "landscape":
    default:
      return "aspect-[4/3]";
  }
}
