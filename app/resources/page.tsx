import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { PageHero } from "@/components/ui";
import { ROUTES } from "@/lib/routes";

const TOOLS: [IconName, string, string][] = [
  ["car", "Car Rental Cost Calculator", "Estimate your total hire cost incl. fuel, tolls and one-way fees."],
  ["tag", "Travel Budget Calculator", "Build a full trip budget in rands — flights, stay, food and activities."],
  ["pin", "Road-Trip Planner", "Map a multi-stop route with driving times and suggested overnight stops."],
  ["check", "Packing List Generator", "Auto-build a packing list tuned to your destination and season."],
  ["shield", "Safari Packing List", "The complete bush checklist — from binoculars to a power bank for load-shedding."],
  ["globe", "Visa & Requirements Checker", "Entry, visa and vaccination requirements across Southern Africa."],
];

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Free tools"
        title="Plan the whole trip in one place"
        sub="Free calculators, planners and checklists to turn 'someday' into a booked, budgeted trip."
      />
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px var(--space-8)" }}>
        <div className="tools-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {TOOLS.map(([ic, t, d]) => (
            <Link
              key={t}
              href={ROUTES.resources}
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
