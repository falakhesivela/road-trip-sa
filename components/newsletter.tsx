"use client";

import { useState } from "react";
import { Icon } from "./icons";
import { Placeholder } from "./ui";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="wrap-wide" style={{ padding: "var(--space-8) 24px" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "var(--r-xl)",
          background: "var(--deep)",
          padding: "clamp(36px, 5vw, 64px)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -60,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(226,98,47,.28), transparent 62%)",
          }}
        />
        <div
          className="news-grid"
          style={{ position: "relative", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 40, alignItems: "center" }}
        >
          <div>
            <div className="eyebrow on-dark" style={{ marginBottom: 14 }}>
              Free trip-planning kit
            </div>
            <h2 style={{ color: "#fff", fontSize: "clamp(26px,3vw,40px)" }}>
              Get our Southern-Africa road-trip starter pack
            </h2>
            <p style={{ color: "rgba(255,255,255,.78)", fontSize: 16.5, marginTop: 14, maxWidth: 460, lineHeight: 1.6 }}>
              A printable Kruger checklist, a 7-day Garden Route itinerary and our monthly deal alerts — straight to your
              inbox.
            </p>
            {!done ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.includes("@")) setDone(true);
                }}
                style={{ display: "flex", gap: 10, marginTop: 24, maxWidth: 460, flexWrap: "wrap" }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.co.za"
                  style={{
                    flex: 1,
                    minWidth: 200,
                    padding: "15px 18px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,.2)",
                    background: "rgba(255,255,255,.08)",
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                    fontSize: 15.5,
                    outline: "none",
                  }}
                />
                <button className="btn btn-primary btn-lg" type="submit">
                  Send it to me
                </button>
              </form>
            ) : (
              <div
                style={{
                  marginTop: 24,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(255,255,255,.1)",
                  padding: "14px 20px",
                  borderRadius: 999,
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                <Icon name="check" size={20} style={{ color: "var(--gold)" }} /> You&apos;re in! Check your inbox to
                confirm.
              </div>
            )}
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 12.5, marginTop: 14 }}>
              No spam. Unsubscribe anytime. POPIA-compliant.
            </p>
          </div>
          <Placeholder label="kit mockup · checklist + map" dark style={{ height: 240, borderRadius: 16 }} />
        </div>
      </div>
    </section>
  );
}
