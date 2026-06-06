import type { Metadata } from "next";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact — roadtripsa",
  description: "Get in touch with roadtripsa — trip questions, tips, and partnership enquiries.",
};

const EMAIL = "hello@roadtripsa.co.za";

const CONTACTS: [IconName, string, string, string?][] = [
  ["globe", "Email", EMAIL, `mailto:${EMAIL}`],
  ["pin", "Based in", "Johannesburg, South Africa"],
  ["users", "Social", "@roadtripsa"],
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Say hello"
        sub="Trip question, partnership, or just a tip about a great spot? I read every message."
      />
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px var(--space-8)" }}>
        <div className="contact-layout" style={{ display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 48, alignItems: "start" }}>
          {/* Email CTA panel */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 18, padding: 32 }}>
            <span
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "var(--accent-soft)",
                color: "var(--accent-press)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Icon name="globe" size={28} />
            </span>
            <h2 style={{ fontSize: 26, marginTop: 18 }}>Drop me an email</h2>
            <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.7, marginTop: 10, maxWidth: 480 }}>
              The fastest way to reach me is by email — whether it&apos;s a question about planning a trip, feedback on a
              guide, or a partnership enquiry. I read every message and reply within a day or two.
            </p>
            <a className="btn btn-primary btn-lg" style={{ marginTop: 22 }} href={`mailto:${EMAIL}`}>
              <Icon name="globe" size={18} /> Email {EMAIL}
            </a>
          </div>

          {/* Contact details */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {CONTACTS.map(([ic, l, v, href]) => {
              const inner = (
                <>
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
                </>
              );
              const style = {
                display: "flex",
                gap: 14,
                alignItems: "center",
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: 14,
                padding: 18,
              } as const;
              return href ? (
                <a key={l} href={href} style={style}>
                  {inner}
                </a>
              ) : (
                <div key={l} style={style}>
                  {inner}
                </div>
              );
            })}
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
