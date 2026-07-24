import { ImageOff } from "lucide-react";

type PhotoDirection = {
  label: string;
  aspect: string;
  crop: string;
  placement: string;
};

const directions: PhotoDirection[] = [
  {
    label: "Editorial health image",
    aspect: "aspect-[16/9]",
    crop: "Wide crop, subject positioned off-center to leave room for a heading or eyebrow overlay in the same section, not on top of the image itself.",
    placement: "Article hero and health-article-hub feature slot.",
  },
  {
    label: "Human connection image",
    aspect: "aspect-[4/3]",
    crop: "Medium crop showing genuine interaction between two or more people, not a posed handshake or stock-office moment.",
    placement: "Homepage hero or 'For Our Readers' section.",
  },
  {
    label: "Founder image",
    aspect: "aspect-square",
    crop: "Square, waist-up, natural setting rather than a studio backdrop.",
    placement: "About page and the compact founder-context module.",
  },
  {
    label: "Partner / collaboration image",
    aspect: "aspect-[4/3]",
    crop: "Medium crop showing two people in a working conversation, not a staged contract-signing photo.",
    placement: "'For Our Partners' section and the Partner With Us page.",
  },
];

const directionNotes = [
  "Photorealistic and natural, not obviously AI-generated or stock-advertising-like.",
  "Human and culturally respectful, diverse without tokenism.",
  "Calm in mood, but not sterile or clinical.",
  "Editorial in composition rather than posed stock photography.",
  "Free from exaggerated or implied medical claims (no clinical settings implying diagnosis or treatment).",
  "Properly licensed and attributed where a license requires it, following the same documentation pattern already used in public/images/blog/functional-medicine/ASSET-MANIFEST.md.",
];

export function PhotographyLab() {
  return (
    <div className="space-y-10">
      <div className="rounded-lg border border-[var(--lab-warning-text)] bg-[var(--lab-warning-surface)] p-4 text-sm text-[var(--lab-warning-text)]">
        No photography is sourced or published in this phase. Every frame below is a labeled
        structural placeholder, not a real or stand-in photograph.
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {directions.map((direction) => (
          <div
            key={direction.label}
            className="rounded-lg border border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface)] p-5"
          >
            <div
              className={`flex ${direction.aspect} w-full items-center justify-center gap-2 rounded-md border border-dashed border-[var(--lab-border-strong)] bg-[var(--lab-bg-surface-alt)]`}
            >
              <ImageOff size={18} className="text-[var(--lab-text-subtle)]" aria-hidden />
              <span className="text-xs font-medium text-[var(--lab-text-subtle)]">
                {direction.label} placeholder
              </span>
            </div>
            <dl className="mt-3 space-y-2 text-sm">
              <div>
                <dt className="font-semibold text-[var(--lab-text-primary)]">Recommended crop</dt>
                <dd className="text-[var(--lab-text-secondary)]">{direction.crop}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--lab-text-primary)]">Placement</dt>
                <dd className="text-[var(--lab-text-secondary)]">{direction.placement}</dd>
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
