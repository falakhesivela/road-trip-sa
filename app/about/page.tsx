import { Icon } from "@/components/icons";
import { PageHero, Placeholder } from "@/components/ui";

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About roadtripsa"
        title="A Joburg developer who'd rather be on the road"
        sub="roadtripsa started as a spreadsheet of my own trips. Now it's the honest travel resource I wish I'd had."
      />
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px var(--space-8)" }}>
        <div className="about-layout" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <Placeholder label="founder · on the road in the Karoo" style={{ height: 420, borderRadius: 18 }} />
          <div>
            <h2 style={{ fontSize: 30, marginBottom: 16 }}>The story</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--muted)", marginBottom: 16 }}>
              I&apos;m a software developer in Johannesburg who spends every long weekend escaping the city — Kruger, the
              Drakensberg, the coast, and as far as a tank of petrol and a rental car will take me.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--muted)", marginBottom: 16 }}>
              Friends kept asking the same questions: where to go, what it costs, which car to hire, when to book. So I
              started writing it all down. roadtripsa is that knowledge, organised and kept up to date — no fluff, no fake
              reviews, no AI-spun filler.
            </p>
            <div style={{ background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 14, padding: 20, marginTop: 8 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                <Icon name="tag" size={18} style={{ color: "var(--accent)" }} />
                <span style={{ fontWeight: 700, fontSize: 15 }}>Affiliate disclosure</span>
              </div>
              <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
                Some links on roadtripsa are affiliate links — if you book through them I may earn a small commission, at
                no extra cost to you. It keeps the guides free and independent. I only ever recommend partners I&apos;d use
                myself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
