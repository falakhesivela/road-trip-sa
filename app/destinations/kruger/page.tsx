import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { Placeholder, Stars, AffNote } from "@/components/ui";
import { ROUTES } from "@/lib/routes";

function FactPill({ icon, label, value }: { icon: IconName; label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        background: "var(--surface)",
        border: "1px solid var(--line)",
        borderRadius: 14,
        flex: 1,
        minWidth: 180,
      }}
    >
      <span
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "var(--accent-soft)",
          color: "var(--accent-press)",
          display: "grid",
          placeItems: "center",
          flex: "none",
        }}
      >
        <Icon name={icon} size={20} />
      </span>
      <span style={{ minWidth: 0 }}>
        <span
          style={{
            display: "block",
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: ".06em",
            textTransform: "uppercase",
            color: "var(--muted-2)",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
        <span style={{ display: "block", fontSize: 15, fontWeight: 700, color: "var(--ink)", whiteSpace: "nowrap" }}>{value}</span>
      </span>
    </div>
  );
}

const RAIL_ITEMS: [IconName, string, string, string, string][] = [
  ["plane", "Flights to Nelspruit (MQP)", "from R1,180 return", "Search flights", ROUTES.home],
  ["car", "4x4 or SUV hire", "from R880 / day", "Find a car", ROUTES.cars],
];

function BookingRail() {
  return (
    <aside style={{ position: "sticky", top: 92, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)", padding: 22, boxShadow: "var(--sh-md)" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, marginBottom: 4 }}>Plan your Kruger trip</div>
        <p style={{ fontSize: 13.5, color: "var(--muted)", marginBottom: 18 }}>
          Book the two things that matter most, at the best price.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {RAIL_ITEMS.map(([ic, t, p, cta, href]) => (
            <div key={t} style={{ border: "1px solid var(--line)", borderRadius: 14, padding: 14 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: "var(--surface-2)",
                    color: "var(--accent-press)",
                    display: "grid",
                    placeItems: "center",
                    flex: "none",
                  }}
                >
                  <Icon name={ic} size={20} />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{t}</div>
                  <div style={{ fontSize: 12.5, color: "var(--muted)" }}>{p}</div>
                </div>
              </div>
              <Link className="btn btn-primary btn-sm btn-block" style={{ marginTop: 12 }} href={href}>
                {cta} <Icon name="arrow" size={15} />
              </Link>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, textAlign: "center" }}>
          <AffNote>We may earn a commission — never at extra cost to you.</AffNote>
        </div>
      </div>

      <div style={{ background: "var(--deep)", color: "#fff", borderRadius: "var(--r-lg)", padding: 22 }}>
        <div className="eyebrow on-dark" style={{ marginBottom: 10 }}>
          Free download
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, lineHeight: 1.2 }}>
          The printable Kruger safari checklist
        </div>
        <Link className="btn btn-sm btn-block" style={{ background: "var(--gold)", color: "var(--ink)", marginTop: 16 }} href={ROUTES.resources}>
          Get the checklist
        </Link>
      </div>
    </aside>
  );
}

const STAY: [string, string, string, string][] = [
  ["Skukuza Rest Camp", "In-park · Self-catering", "R1,450/night", "lodge · rondavels"],
  ["Lower Sabie", "In-park · Riverfront", "R1,680/night", "lodge · river view"],
  ["Private Sabi Sand Lodge", "Luxury · All-inclusive", "R6,900/night", "lodge · luxury suite"],
];

const THINGS: [string, string][] = [
  ["Self-drive Big-Five game drives", "Sunrise and late-afternoon drives along the S28 and H4-1 give the best sightings."],
  ["Guided night drive", "Book a SANParks night drive to spot leopard, hyena and other nocturnal hunters."],
  ["Walking safari", "A guided morning bush walk gets you tracking on foot with an armed ranger."],
  ["Panorama Route add-on", "Pair Kruger with God's Window and the Blyde River Canyon, an hour from the gates."],
];

export default function KrugerPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--deep)", position: "relative", overflow: "hidden" }}>
        <Placeholder
          label="hero · elephant at waterhole, golden light"
          dark
          style={{ position: "absolute", inset: 0, height: "100%", border: 0, borderRadius: 0 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,36,34,.35), rgba(15,36,34,.85))" }} />
        <div className="wrap-wide" style={{ position: "relative", padding: "60px 24px 44px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.7)", fontSize: 13.5, fontWeight: 600, marginBottom: 22 }}>
            <Link href={ROUTES.home} style={{ background: "none", border: 0, color: "inherit" }}>
              Home
            </Link>
            <Icon name="chevron" size={14} style={{ transform: "rotate(-90deg)" }} />
            <Link href={ROUTES.destinations} style={{ background: "none", border: 0, color: "inherit" }}>
              Destinations
            </Link>
            <Icon name="chevron" size={14} style={{ transform: "rotate(-90deg)" }} />
            <span style={{ color: "#fff" }}>Kruger National Park</span>
          </div>
          <span className="chip" style={{ background: "rgba(255,255,255,.14)", color: "#fff", border: "1px solid rgba(255,255,255,.2)" }}>
            <Icon name="pin" size={14} /> Mpumalanga &amp; Limpopo
          </span>
          <h1 style={{ color: "#fff", fontSize: "clamp(36px,5.2vw,68px)", letterSpacing: "-0.035em", lineHeight: 0.98, marginTop: 16, maxWidth: 820 }}>
            Kruger National Park
          </h1>
          <p style={{ color: "rgba(255,255,255,.84)", fontSize: "clamp(16px,1.6vw,20px)", marginTop: 16, maxWidth: 600, lineHeight: 1.55 }}>
            Africa&apos;s most accessible Big-Five safari — and one of the best-value self-drive wildlife trips on the
            planet. Here&apos;s how to do it right.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 22 }}>
            <Stars value={5} size={16} />
            <span style={{ color: "rgba(255,255,255,.8)", fontSize: 14 }}>4.9 · 2,140 traveller reviews</span>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="wrap-wide" style={{ padding: "24px 24px 0" }}>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: -42, position: "relative" }}>
          <FactPill icon="cal" label="Best time" value="May – September" />
          <FactPill icon="tag" label="Budget / day" value="R1,950 pp" />
          <FactPill icon="car" label="Getting there" value="Self-drive 4–5 hrs" />
          <FactPill icon="clock" label="Ideal stay" value="4 – 7 nights" />
        </div>
      </section>

      {/* Body: content + rail */}
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px var(--space-8)" }}>
        <div className="dest-layout" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 48, alignItems: "start" }}>
          {/* Article */}
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--ink)", marginBottom: 20 }}>
              Stretching nearly two million hectares along South Africa&apos;s north-eastern border, Kruger is bigger than
              some countries — yet you can explore it from behind the wheel of an ordinary rental car. That combination of
              world-class wildlife and genuine affordability is why it tops almost every first-timer&apos;s Africa list.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--muted)", marginBottom: 28 }}>
              This guide covers when to go, how to get there, where to stay inside and outside the park, and exactly what
              to book first to keep costs down. Most travellers fly into Nelspruit or Joburg, pick up a car, and drive in
              through one of the southern gates.
            </p>

            <h2 style={{ fontSize: 28, marginBottom: 16 }}>Top things to do</h2>
            <div className="things-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 36 }}>
              {THINGS.map(([t, d]) => (
                <div key={t} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, padding: 18, height: "100%" }}>
                  <span
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 10,
                      background: "var(--accent-soft)",
                      color: "var(--accent-press)",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <Icon name="check" size={20} />
                  </span>
                  <h3 style={{ fontSize: 16.5, marginTop: 12 }}>{t}</h3>
                  <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 6, lineHeight: 1.55 }}>{d}</p>
                </div>
              ))}
            </div>

            {/* Inline affiliate CTA */}
            <div style={{ background: "var(--accent-soft)", borderRadius: 16, padding: 24, display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap", marginBottom: 36 }}>
              <span
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 13,
                  background: "var(--accent)",
                  color: "#fff",
                  display: "grid",
                  placeItems: "center",
                  flex: "none",
                  boxShadow: "var(--sh-cta)",
                }}
              >
                <Icon name="car" size={26} />
              </span>
              <div style={{ flex: 1, minWidth: 220 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--ink)" }}>
                  You&apos;ll need a car for Kruger
                </div>
                <div style={{ fontSize: 14, color: "var(--accent-press)" }}>SUVs from R880/day · free cancellation on most rates</div>
              </div>
              <Link className="btn btn-primary" href={ROUTES.cars}>
                Compare cars <Icon name="arrow" size={16} />
              </Link>
            </div>

            <h2 style={{ fontSize: 28, marginBottom: 8 }}>Where to stay</h2>
            <p className="lead" style={{ marginBottom: 20 }}>
              From self-catering SANParks rest camps to all-inclusive private lodges.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {STAY.map(([n, t, p, label]) => (
                <div key={n} className="card" style={{ display: "flex", overflow: "hidden", alignItems: "stretch" }}>
                  <Placeholder label={label} style={{ width: 150, flex: "none", border: 0, borderRadius: 0 }} />
                  <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17 }}>{n}</div>
                    <div style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 2 }}>{t}</div>
                  </div>
                  <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "center", gap: 8 }}>
                    <div style={{ fontWeight: 800, fontFamily: "var(--font-display)", fontSize: 17 }}>{p}</div>
                    <Link className="btn btn-ghost btn-sm" href={ROUTES.home}>
                      Check dates
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 28, marginBottom: 16 }}>Best time to visit</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--muted)", marginBottom: 12 }}>
              The dry winter months (May–September) are prime: sparse vegetation and animals gathering at waterholes make
              wildlife far easier to spot, and there are virtually no mosquitoes. Summer (November–March) is green, hot and
              dramatic with newborn animals and migratory birds, but afternoon thunderstorms and thick bush make sightings
              harder.
            </p>
            <Placeholder label="map · Kruger gates & rest camps" style={{ height: 280, borderRadius: 16, marginTop: 8 }} />
          </div>

          {/* Sticky rail */}
          <BookingRail />
        </div>
      </section>
    </main>
  );
}
