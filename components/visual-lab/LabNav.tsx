export const labSections = [
  { id: "live-preview", label: "Live preview" },
  { id: "typography", label: "Typography" },
  { id: "color", label: "Color" },
  { id: "composition", label: "Layout & composition" },
  { id: "ribbon", label: "Ribbon" },
  { id: "shape-surface", label: "Shape & surface" },
  { id: "buttons", label: "Buttons" },
  { id: "photography", label: "Photography direction" },
  { id: "motion", label: "Motion" },
] as const;

/**
 * Plain anchor-link jump nav. Deliberately not a client component: every
 * link is a real `<a href="#...">`, so it works without JavaScript, is
 * keyboard-operable by default, and cannot itself desync from the
 * server-rendered sections below it.
 */
export function LabNav() {
  return (
    <nav
      aria-label="Visual lab sections"
      className="border-b border-[var(--lab-divider)] bg-[var(--lab-bg-surface)] px-4 py-3 sm:px-6 lg:px-8"
    >
      <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
        {labSections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-[var(--lab-text-secondary)] underline-offset-4 hover:text-[var(--lab-link)] hover:underline"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
