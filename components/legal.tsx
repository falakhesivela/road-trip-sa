import { PageHero } from "./ui";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  eyebrow,
  title,
  sub,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <main>
      <PageHero eyebrow={eyebrow} title={title} sub={sub} />
      <section className="wrap" style={{ maxWidth: 800, padding: "var(--space-7) 24px var(--space-8)" }}>
        <p style={{ fontSize: 13.5, color: "var(--muted-2)", marginBottom: 32 }}>{updated}</p>
        {sections.map((s) => (
          <div key={s.heading} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 22, marginBottom: 12 }}>{s.heading}</h2>
            {s.body.map((para, i) => (
              <p key={i} style={{ fontSize: 16.5, lineHeight: 1.75, color: "var(--muted)", marginBottom: 14 }}>
                {para}
              </p>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
