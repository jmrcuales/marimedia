# Functional Medicine Article — Asset Manifest

Source reference page: https://mari-functional-medicine-ao6btud.gamma.site/

| Local file | Used for | Medium | Origin | Original source |
| --- | --- | --- | --- | --- |
| `functional-medicine-hero.jpg` | Article hero; homepage / blog featured lead | Cel-shaded illustration | Retrieved from the public Gamma page's CDN and re-optimized (resized, re-compressed, renamed) | `https://cdn.gamma.app/d5gmnenhpam4wwr/generated-images/jJvmrnvWsc0gjNJ-he009.jpg` |
| `functional-medicine-first-visit.jpg` | "Your First Visit" inline figure | Cel-shaded illustration | Retrieved from the public Gamma page's CDN and re-optimized (resized, re-compressed, renamed) | `https://cdn.gamma.app/d5gmnenhpam4wwr/generated-images/cIRUjmatwuWuonZ8ThGLf.jpg` |
| `interconnected-health-systems.jpg` | "The Body as an Interconnected System" inline figure | Editorial diagram / illustration | Replacement for a Gamma asset that contained garbled AI text; text-free diagram of six connected health factors | Generated for Mari Media (not hotlinked) |

## Photography-system notes (MARIWEB-010)

- These assets are **article-scoped**. They are not approved as parent-brand homepage photography.
- Path moved from `/images/blog/functional-medicine/` to `/images/articles/functional-medicine/` for folder taxonomy.
- Recommended focal points (authored in content):
  - Hero: `{ x: 50, y: 28 }` for wide/feature cover crops
  - First visit: `{ x: 58, y: 36 }`
  - Interconnected systems: `{ x: 50, y: 48 }`
- Prefer replacing the two illustrated-people assets with licensed photography when available. Keep diagram-style assets only when they explain better than a photo.

## Delivery notes

- All three files are optimized JPEGs served locally from `/public`; none are hotlinked from Gamma in production.
- Next.js's built-in image optimizer (`next/image`) serves right-sized, modern-format variants at request time.
