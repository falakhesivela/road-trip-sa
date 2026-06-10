import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION } from "@/lib/seo";

// Default social-share card (used for pages without their own image, e.g. home,
// About, listings, legal). Destination/guide pages override this with their photo.
export const alt = "roadtripsa — Honest Southern Africa Travel Guides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#163230",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#e2622f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 22, height: 22, borderRadius: 999, background: "#ffffff" }} />
          </div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 800, letterSpacing: "-0.03em" }}>
            roadtripsa<span style={{ color: "#f2b705" }}>.</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginTop: 48, maxWidth: 900 }}>
          Honest Southern&#8209;Africa travel guides
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "rgba(255,255,255,0.7)", marginTop: 28, maxWidth: 820, lineHeight: 1.4 }}>
          {SITE_DESCRIPTION.split(" — ")[1] ?? SITE_DESCRIPTION}
        </div>
      </div>
    ),
    { ...size }
  );
}
