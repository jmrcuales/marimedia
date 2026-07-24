# Public imagery

Mari Media website images are organized by use (MARIWEB-010).

| Folder | Purpose |
| --- | --- |
| `homepage/` | Approved homepage-only photography (hero, partners, readers, pause) |
| `articles/` | Article heroes and inline figures, grouped by article slug or topic |
| `editorial/` | Shared editorial still life / atmospheric assets reused across pages |
| `founders/` | Approved founder or company portraits |

## Rules

- Descriptive filenames only (no `image1.jpg`, `hero-final-final.jpg`, `stock-photo-2.jpg`).
- Every shipped folder of assets needs an `ASSET-MANIFEST.md` with provenance, license, and intended role.
- Do not publish undocumented stock or generated imagery.
- Prefer WebP/AVIF-friendly masters; Next.js optimizes delivery from local sources.
- Author a `focalPoint` in content whenever a cover crop differs from the source aspect ratio.

See `docs/photography-system.md` and `lib/photography/`.
