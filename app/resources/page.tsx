import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/ui";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Free Travel Tools — Budget & Packing Calculators | roadtripsa",
  description:
    "Free, no-login travel-planning tools for Southern Africa: a trip budget calculator, a car-rental cost calculator and a tailored packing list generator.",
};

const TOOLS: [IconName, string, string, string][] = [
  ["tag", "Travel Budget Calculator", "Build a full trip budget in rands — accommodation, car hire, food and flights.", ROUTES.budgetCalculator],
  ["car", "Car-Rental Cost Calculator", "See the true cost of car hire incl. fuel, insurance, one-way and cross-border fees.", ROUTES.carCostCalculator],
  ["check", "Packing List Generator", "A tailored checklist by trip type and season — tick off and print as you pack.", ROUTES.packingList],
];

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Free tools"
        title="Plan smarter, for free"
        sub="No login, no catch — just quick, useful calculators and checklists to help you plan and budget your Southern-Africa trip."
      />
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px var(--space-8)" }}>
        <div className="tools-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {TOOLS.map(([ic, t, d, href]) => (
            <Link
              key={t}
              href={href}
              className="card"
              style={{ textAlign: "left", padding: 24, cursor: "pointer", height: "100%", display: "flex", flexDirection: "column" }}
            >
              <span
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "var(--accent-soft)",
                  color: "var(--accent-press)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Icon name={ic} size={23} />
              </span>
              <h3 style={{ fontSize: 18, marginTop: 16 }}>{t}</h3>
              <p style={{ fontSize: 14.5, color: "var(--muted)", marginTop: 8, lineHeight: 1.6, flex: 1 }}>{d}</p>
              <span
                style={{
                  marginTop: 14,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  color: "var(--accent-press)",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                Open tool <Icon name="arrow" size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
