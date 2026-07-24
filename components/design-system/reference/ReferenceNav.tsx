export const referenceSections = [
  { id: "tokens", label: "Tokens" },
  { id: "typography", label: "Typography" },
  { id: "colors", label: "Colors" },
  { id: "spacing", label: "Spacing" },
  { id: "containers", label: "Containers" },
  { id: "elevation-surface", label: "Elevation & surface" },
  { id: "buttons", label: "Buttons" },
  { id: "forms", label: "Forms" },
  { id: "cards", label: "Cards" },
  { id: "article-cards", label: "Article cards" },
  { id: "callouts-quotes", label: "Callouts & quotes" },
  { id: "tags-badges", label: "Tags, badges & avatars" },
  { id: "ribbon", label: "Ribbon" },
  { id: "motion", label: "Motion" },
  { id: "responsive", label: "Responsive behavior" },
] as const;

/** Plain server-rendered anchor nav; works without JavaScript. */
export function ReferenceNav() {
  return (
    <nav
      aria-label="Design system sections"
      className="border-b border-[var(--ds-color-border-subtle)] bg-[var(--ds-color-surface)] px-[var(--ds-container-gutter)] py-3"
    >
      <ul className="mx-auto flex max-w-[var(--ds-container-wide)] flex-wrap gap-x-5 gap-y-2 font-[var(--ds-font-body)] text-[length:var(--ds-text-body-sm)] font-medium">
        {referenceSections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-[var(--ds-color-text-muted)] underline-offset-4 hover:text-[var(--ds-color-link)] hover:underline"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
