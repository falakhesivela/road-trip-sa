"use client";

import { useState } from "react";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/ui";

const CONTACTS: [IconName, string, string][] = [
  ["globe", "Email", "hello@roadtripsa.co.za"],
  ["pin", "Based in", "Johannesburg, South Africa"],
  ["users", "Social", "@roadtripsa"],
];

const inputStyle = {
  width: "100%",
  marginTop: 6,
  padding: "12px 14px",
  border: "1px solid var(--line)",
  borderRadius: 10,
  fontFamily: "var(--font-body)",
  fontSize: 15,
  outline: "none",
  background: "var(--bg)",
} as const;

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Say hello"
        sub="Trip question, partnership, or just a tip about a great spot? I read every message."
      />
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px var(--space-8)" }}>
        <div className="contact-layout" style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 48, alignItems: "start" }}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 18, padding: 28 }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <span
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 999,
                    background: "var(--accent-soft)",
                    color: "var(--accent-press)",
                    display: "grid",
                    placeItems: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <Icon name="check" size={28} />
                </span>
                <h3 style={{ fontSize: 22 }}>Message sent!</h3>
                <p style={{ color: "var(--muted)", marginTop: 8 }}>
                  Thanks for reaching out — I&apos;ll reply within a day or two.
                </p>
              </div>
            ) : (
              <>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {["First name", "Last name"].map((l) => (
                    <label key={l} style={{ display: "block" }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>{l}</span>
                      <input required style={inputStyle} />
                    </label>
                  ))}
                </div>
                <label style={{ display: "block", marginTop: 16 }}>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>Email</span>
                  <input type="email" required style={inputStyle} />
                </label>
                <label style={{ display: "block", marginTop: 16 }}>
                  <span style={{ fontSize: 13, fontWeight: 700 }}>Message</span>
                  <textarea required rows={5} style={{ ...inputStyle, resize: "vertical" }} />
                </label>
                <button className="btn btn-primary btn-lg btn-block" style={{ marginTop: 20 }} type="submit">
                  Send message
                </button>
              </>
            )}
          </form>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {CONTACTS.map(([ic, l, v]) => (
              <div
                key={l}
                style={{
                  display: "flex",
                  gap: 14,
                  alignItems: "center",
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: 14,
                  padding: 18,
                }}
              >
                <span
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 11,
                    background: "var(--accent-soft)",
                    color: "var(--accent-press)",
                    display: "grid",
                    placeItems: "center",
                    flex: "none",
                  }}
                >
                  <Icon name={ic} size={21} />
                </span>
                <div>
                  <div
                    style={{
                      fontSize: 12.5,
                      fontWeight: 700,
                      letterSpacing: ".05em",
                      textTransform: "uppercase",
                      color: "var(--muted-2)",
                    }}
                  >
                    {l}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15.5 }}>{v}</div>
                </div>
              </div>
            ))}
            <div style={{ background: "var(--deep)", color: "#fff", borderRadius: 14, padding: 22, marginTop: 4 }}>
              <div className="eyebrow on-dark" style={{ marginBottom: 8 }}>
                Work with us
              </div>
              <p style={{ fontSize: 14.5, color: "rgba(255,255,255,.8)", lineHeight: 1.6 }}>
                Tourism boards, lodges and car-hire brands — for partnerships and sponsored guides, get in touch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
