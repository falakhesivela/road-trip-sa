import { Icon, type IconName } from "@/components/icons";
import { Placeholder, SectionHead, AffNote } from "@/components/ui";
import { SearchWidget } from "@/components/search-widget";
import { Newsletter } from "@/components/newsletter";
import { DestinationCard, CarCard, GuideCard, type Destination, type Car, type Guide } from "@/components/cards";
import { ROUTES } from "@/lib/routes";

const DESTS: Destination[] = [
  { name: "Kruger National Park", region: "Mpumalanga & Limpopo", tag: "Safari", price: "R1,950", label: "hero · safari sunset", wide: true },
  { name: "Cape Town", region: "Western Cape", tag: "City + Coast", price: "R820", label: "table mountain" },
  { name: "Garden Route", region: "Western & Eastern Cape", tag: "Road trip", price: "R1,200", label: "coastal cliffs" },
  { name: "Victoria Falls", region: "Zimbabwe", tag: "Adventure", price: "R2,400", label: "the falls" },
  { name: "Durban & KZN", region: "KwaZulu-Natal", tag: "Beaches", price: "R690", label: "golden mile beach" },
  { name: "Mozambique", region: "Tofo & Bazaruto", tag: "Islands", price: "R3,100", label: "indian ocean dhow" },
];

const CARS: Car[] = [
  { cls: "Economy", model: "VW Polo Vivo", seats: 5, bags: 2, trans: "Manual", price: "R385", oldPrice: "R460", badge: "Best value", supplier: "FirstCar" },
  { cls: "SUV", model: "Toyota Fortuner", seats: 7, bags: 3, trans: "Auto", price: "R1,150", oldPrice: null, badge: "Safari-ready", supplier: "Avis" },
  { cls: "Compact", model: "Hyundai i20", seats: 5, bags: 2, trans: "Auto", price: "R520", oldPrice: "R590", badge: null, supplier: "Europcar" },
  { cls: "4x4", model: "Ford Ranger 4x4", seats: 5, bags: 3, trans: "Manual", price: "R1,680", oldPrice: null, badge: "Bush-ready", supplier: "Bidvest" },
];

const GUIDES: Guide[] = [
  { cat: "Safari", title: "The Complete Kruger Safari Guide 2026", read: "14 min read", label: "guide · safari jeep" },
  { cat: "Road Trips", title: "Garden Route 7-Day Road-Trip Itinerary", read: "11 min read", label: "guide · coastal road" },
  { cat: "Budget", title: "10 Best Budget Weekend Getaways from Joburg", read: "8 min read", label: "guide · weekend escape" },
];

const WHY: [IconName, string, string][] = [
  ["shield", "Honest, road-tested advice", "Every guide is written from real trips across Southern Africa — no copy-paste, no fluff, no fake reviews."],
  ["tag", "Genuinely the best price", "We surface the cheapest verified rate from trusted partners and never add booking fees on top."],
  ["bolt", "Plan in minutes", "Free tools — budget calculators, packing lists and itineraries — turn 'someday' into a booked trip."],
  ["globe", "Built for the region", "Load-shedding, e-tolls, border crossings, 4x4 tracks — local know-how baked into every page."],
];

function Stat({ big, label }: { big: string; label: string }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, letterSpacing: "-0.03em", color: "#fff" }}>
        {big}
      </div>
      <div style={{ fontSize: 13, color: "rgba(255,255,255,.6)", marginTop: 2 }}>{label}</div>
    </div>
  );
}

function Hero() {
  return (
    <section style={{ position: "relative", background: "var(--deep)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <Placeholder label="hero photo · safari / coast at golden hour" dark style={{ height: "100%", border: 0, borderRadius: 0 }} />
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
            <span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--gold)" }} /> Trusted by 40,000+
            Southern-Africa travellers
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
            Real, road-tested guides to Kruger, the Garden Route, Cape Town and beyond — plus the cheapest flights and
            car-hire deals, compared in one search.
          </p>
        </div>

        <div style={{ marginTop: 38, maxWidth: 1040 }}>
          <SearchWidget />
        </div>

        <div style={{ display: "flex", gap: 44, flexWrap: "wrap", padding: "34px 6px 40px" }}>
          <Stat big="120+" label="Destinations & guides" />
          <Stat big="20+" label="Car-hire brands compared" />
          <Stat big="R0" label="Booking fees, ever" />
          <Stat big="4.8★" label="Average reader rating" />
        </div>
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
      <section style={{ background: "var(--surface-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap-wide" style={{ padding: "var(--space-8) 24px" }}>
          <SectionHead
            eyebrow="Car rental deals"
            title="Drive away from R385/day"
            sub="We compare 20+ rental brands across South-African airports so you don't have to. Free cancellation on most rates."
            action="All car deals"
            href={ROUTES.cars}
          />
          <div className="car-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
            {CARS.map((c) => (
              <CarCard key={c.model} {...c} />
            ))}
          </div>
          <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
            <AffNote>Prices are illustrative. Final rates shown on our partner&apos;s secure checkout.</AffNote>
          </div>
        </div>
      </section>

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

      <Newsletter />
    </main>
  );
}
