import { Icon, type IconName } from "@/components/icons";
import { Placeholder, SectionHead } from "@/components/ui";
import { SearchWidget } from "@/components/search-widget";
import { Newsletter } from "@/components/newsletter";
import { DestinationCard, CarCard, GuideCard, type Car } from "@/components/cards";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";
import { destinationCards, guideCards } from "@/lib/content";
import { AFFILIATE_LIVE, NEWSLETTER_LIVE, CAR_RENTALS_LIVE } from "@/lib/config";

// Featured home destinations — curated subset of the full list, Kruger as the wide hero card.
const HOME_DEST_SLUGS = ["kruger", "cape-town", "garden-route", "victoria-falls", "durban-kzn", "mozambique"];
const DESTS = HOME_DEST_SLUGS.map((slug, i) => {
  const card = destinationCards().find((d) => d.slug === slug)!;
  return { ...card, wide: i === 0 };
});

// Latest three guides for the home blog teaser.
const GUIDES = guideCards().slice(0, 3);

const CARS: Car[] = [
  { cls: "Economy", model: "VW Polo Vivo", seats: 5, bags: 2, trans: "Manual", price: "R385", oldPrice: null, badge: null, supplier: "FirstCar" },
  { cls: "SUV", model: "Toyota Fortuner", seats: 7, bags: 3, trans: "Auto", price: "R1,150", oldPrice: null, badge: "Safari-ready", supplier: "Avis" },
  { cls: "Compact", model: "Hyundai i20", seats: 5, bags: 2, trans: "Auto", price: "R520", oldPrice: "R590", badge: null, supplier: "Europcar" },
  { cls: "4x4", model: "Ford Ranger 4x4", seats: 5, bags: 3, trans: "Manual", price: "R1,680", oldPrice: null, badge: "Bush-ready", supplier: "Bidvest" },
];

const WHY: [IconName, string, string][] = [
  ["shield", "Honest, road-tested advice", "Every guide is written from real trips across Southern Africa — no copy-paste, no fluff, no fake reviews."],
  ["tag", "Genuinely the best price", "We surface the cheapest verified rate from trusted partners and never add booking fees on top."],
  ["bolt", "Plan in minutes", "Free tools — budget calculators, packing lists and itineraries — turn 'someday' into a booked trip."],
  ["globe", "Built for the region", "Load-shedding, e-tolls, border crossings, 4x4 tracks — local know-how baked into every page."],
];

function Hero() {
  return (
    <section style={{ position: "relative", background: "var(--deep)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Placeholder src="tobias-reich-1GgWbP74phY-unsplash.jpg" label="hero photo · safari / coast at golden hour" priority dark style={{ height: "100%", border: 0, borderRadius: 0 }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(15,36,34,.62) 0%, rgba(15,36,34,.78) 55%, var(--deep) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 460,
            height: 460,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(242,183,5,.22), transparent 65%)",
          }}
        />
      </div>

      <div className="wrap-wide" style={{ position: "relative", padding: "70px 24px 0" }}>
        <div style={{ maxWidth: 760 }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.16)",
              color: "#fff",
              padding: "7px 14px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--gold)" }} /> Honest, road-tested
            Southern-Africa travel guides
          </span>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(38px, 5.4vw, 70px)",
              lineHeight: 0.98,
              marginTop: 22,
              letterSpacing: "-0.035em",
            }}
          >
            Explore Southern Africa.
            <br />
            <span style={{ color: "var(--gold)" }}>Book smarter,</span> travel further.
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.82)",
              fontSize: "clamp(16px,1.6vw,20px)",
              marginTop: 20,
              maxWidth: 560,
              lineHeight: 1.55,
            }}
          >
            Real, road-tested guides to Kruger, the Garden Route, Cape Town and beyond — when to go, what to do, and
            how to plan the whole trip yourself.
          </p>
        </div>

        {AFFILIATE_LIVE ? (
          <div style={{ marginTop: 38, maxWidth: 1040 }}>
            <SearchWidget />
          </div>
        ) : (
          <div style={{ marginTop: 34, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link className="btn btn-primary btn-lg" href={ROUTES.destinations}>
              Explore destinations <Icon name="arrow" size={18} />
            </Link>
            <Link className="btn btn-light btn-lg" href={ROUTES.guides}>
              Read the travel guides
            </Link>
          </div>
        )}
        <div style={{ paddingBottom: 40 }} />
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Destinations */}
      <section className="wrap-wide" style={{ padding: "var(--space-8) 24px" }}>
        <SectionHead
          eyebrow="Where to go"
          title="Popular destinations"
          sub="Hand-picked highlights with honest tips on when to go, what it costs, and how to get there."
          action="All destinations"
          href={ROUTES.destinations}
        />
        <div className="dest-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {DESTS.map((d) => (
            <div key={d.name} style={{ gridColumn: d.wide ? "span 2" : "span 1" }}>
              <DestinationCard {...d} />
            </div>
          ))}
        </div>
      </section>

      {/* Car deals */}
      {CAR_RENTALS_LIVE && (
        <section style={{ background: "var(--surface-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="wrap-wide" style={{ padding: "var(--space-8) 24px" }}>
            <SectionHead
              eyebrow="Car rental"
              title="Cars for every kind of trip"
              sub="From a city runabout to a safari-ready 4x4 — the main vehicle classes and what to know before you book."
              action="Car hire guide"
              href={ROUTES.cars}
            />
            <div className="car-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
              {CARS.map((c) => (
                <CarCard key={c.model} {...c} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why */}
      <section className="wrap-wide" style={{ padding: "var(--space-8) 24px" }}>
        <SectionHead eyebrow="Why roadtripsa" title="Travel planning without the guesswork" />
        <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {WHY.map(([ic, t, d]) => (
            <div
              key={t}
              style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)", padding: 24, height: "100%" }}
            >
              <span
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 12,
                  background: "var(--accent-soft)",
                  color: "var(--accent-press)",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Icon name={ic} size={23} />
              </span>
              <h3 style={{ fontSize: 18, marginTop: 18 }}>{t}</h3>
              <p style={{ fontSize: 14.5, color: "var(--muted)", marginTop: 9, lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guides */}
      <section style={{ background: "var(--surface-2)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap-wide" style={{ padding: "var(--space-8) 24px" }}>
          <SectionHead
            eyebrow="From the blog"
            title="Latest travel guides"
            sub="Practical, up-to-date itineraries and tips for getting the most out of every rand."
            action="Read all guides"
            href={ROUTES.guides}
          />
          <div className="guides-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {GUIDES.map((g) => (
              <GuideCard key={g.title} {...g} big />
            ))}
          </div>
        </div>
      </section>

      {NEWSLETTER_LIVE && <Newsletter />}
    </main>
  );
}
