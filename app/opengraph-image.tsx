import { ImageResponse } from "next/og";

export const alt = "Mari Media | A Digital Media Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Homepage social preview image, updated for MARIWEB-009 to match the
 * corrected parent-company positioning (see `app/layout.tsx`) and the
 * approved Compass Section 19 palette instead of the old logo-derived
 * pink/magenta.
 *
 * `next/og`'s Satori renderer draws these as static images outside a real
 * browser stylesheet cascade, so it cannot read the `--ds-*` CSS custom
 * properties from `components/design-system/tokens.css`; the literal hex
 * values below are copied directly from that file's Compass Section 19
 * palette rather than re-guessed.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FAF8F5", // --ds-palette-warm-white
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 32,
            background: "#8F403B", // --ds-palette-deep-red
            marginBottom: 40,
          }}
        >
          <span style={{ fontSize: 64, fontWeight: 700, color: "#FFFFFF" }}>M</span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#211F1D", // --ds-palette-soft-black
            marginBottom: 16,
          }}
        >
          Mari Media
        </div>
        <div style={{ fontSize: 28, color: "#5E5955", fontWeight: 600 }}>
          A Digital Media Company
        </div>
      </div>
    ),
    { ...size }
  );
}
