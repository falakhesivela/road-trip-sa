import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon, type IconName } from "@/components/icons";
import { Placeholder, AffNote } from "@/components/ui";
import { ROUTES } from "@/lib/routes";
import { DESTINATIONS, getDestination, type RailItem } from "@/lib/content";
import { AFFILIATE_LIVE, TOOLS_LIVE, CAR_RENTALS_LIVE } from "@/lib/config";
import { imageUrl } from "@/lib/images";
import { pageMetadata, absoluteUrl, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) return {};
  return pageMetadata({
    title: `${dest.name} Travel Guide`,
    description: dest.blurb,
    path: `/destinations/${dest.slug}`,
    image: imageUrl(dest.heroImage ?? `destinations/${dest.slug}-hero.jpg`),
    type: "article",
  });
}

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

function BookingRail({ name, rail }: { name: string; rail: RailItem[] }) {
  return (
    <aside style={{ position: "sticky", top: 92, display: "flex", flexDirection: "column", gap: 16 }}>
      {AFFILIATE_LIVE && (
        <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)", padding: 22, boxShadow: "var(--sh-md)" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, marginBottom: 4 }}>Plan your {name} trip</div>
          <p style={{ fontSize: 13.5, color: "var(--muted)", marginBottom: 18 }}>Book the two things that matter most, at the best price.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {rail.map((r) => (
              <div key={r.title} style={{ border: "1px solid var(--line)", borderRadius: 14, padding: 14 }}>
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
                    <Icon name={r.icon} size={20} />
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{r.title}</div>
                    <div style={{ fontSize: 12.5, color: "var(--muted)" }}>{r.price}</div>
                  </div>
                </div>
                <Link className="btn btn-primary btn-sm btn-block" style={{ marginTop: 12 }} href={r.href}>
                  {r.cta} <Icon name="arrow" size={15} />
                </Link>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, textAlign: "center" }}>
            <AffNote>We may earn a commission — never at extra cost to you.</AffNote>
          </div>
        </div>
      )}

      {/* Pre-launch: working internal navigation instead of the booking card */}
      {!AFFILIATE_LIVE && (
        <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: "var(--r-lg)", padding: 22, boxShadow: "var(--sh-md)" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, marginBottom: 4 }}>Planning a {name} trip?</div>
          <p style={{ fontSize: 13.5, color: "var(--muted)", marginBottom: 16 }}>Start with our road-tested guides.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {(
              [
                ["pin", "Browse all destinations", ROUTES.destinations],
                ...(CAR_RENTALS_LIVE ? [["car", "Read the car-hire guide", ROUTES.cars]] : []),
                ["clock", "All travel guides", ROUTES.guides],
              ] as [IconName, string, string][]
            ).map(([ic, label, href]) => (
              <Link
                key={label}
                href={href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  border: "1px solid var(--line)",
                  borderRadius: 14,
                  padding: "12px 14px",
                  fontWeight: 700,
                  fontSize: 14,
                  color: "var(--ink)",
                }}
              >
                <span style={{ width: 36, height: 36, borderRadius: 10, background: "var(--accent-soft)", color: "var(--accent-press)", display: "grid", placeItems: "center", flex: "none" }}>
                  <Icon name={ic} size={18} />
                </span>
                <span style={{ flex: 1 }}>{label}</span>
                <Icon name="arrow" size={16} style={{ color: "var(--accent)" }} />
              </Link>
            ))}
          </div>
        </div>
      )}

      {TOOLS_LIVE && (
        <div style={{ background: "var(--deep)", color: "#fff", borderRadius: "var(--r-lg)", padding: 22 }}>
          <div className="eyebrow on-dark" style={{ marginBottom: 10 }}>
            Free tool
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, lineHeight: 1.2 }}>
            Not sure what to pack for {name}?
          </div>
          <Link className="btn btn-sm btn-block" style={{ background: "var(--gold)", color: "var(--ink)", marginTop: 16 }} href={ROUTES.packingList}>
            Build your packing list
          </Link>
        </div>
      )}
    </aside>
  );
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const dest = getDestination(slug);
  if (!dest) notFound();

  const url = absoluteUrl(`/destinations/${dest.slug}`);
  const placeLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: dest.name,
    description: dest.blurb,
    url,
    image: imageUrl(dest.heroImage ?? `destinations/${dest.slug}-hero.jpg`),
    address: { "@type": "PostalAddress", addressRegion: dest.region },
  };
  const crumbsLd = breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: dest.name, path: `/destinations/${dest.slug}` },
  ]);

  return (
    <main>
      <JsonLd data={[placeLd, crumbsLd]} />
      {/* Hero */}
      <section style={{ background: "var(--deep)", position: "relative", overflow: "hidden" }}>
        <Placeholder label={dest.heroLabel} src={dest.heroImage ?? `destinations/${dest.slug}-hero.jpg`} priority dark style={{ position: "absolute", inset: 0, height: "100%", border: 0, borderRadius: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,36,34,.35), rgba(15,36,34,.85))" }} />
        <div className="wrap-wide" style={{ position: "relative", padding: "60px 24px 44px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.7)", fontSize: 13.5, fontWeight: 600, marginBottom: 22, flexWrap: "wrap" }}>
            <Link href={ROUTES.home} style={{ color: "inherit" }}>
              Home
            </Link>
            <Icon name="chevron" size={14} style={{ transform: "rotate(-90deg)" }} />
            <Link href={ROUTES.destinations} style={{ color: "inherit" }}>
              Destinations
            </Link>
            <Icon name="chevron" size={14} style={{ transform: "rotate(-90deg)" }} />
            <span style={{ color: "#fff" }}>{dest.name}</span>
          </div>
          <span className="chip" style={{ background: "rgba(255,255,255,.14)", color: "#fff", border: "1px solid rgba(255,255,255,.2)" }}>
            <Icon name="pin" size={14} /> {dest.region}
          </span>
          <h1 style={{ color: "#fff", fontSize: "clamp(36px,5.2vw,68px)", letterSpacing: "-0.035em", lineHeight: 0.98, marginTop: 16, maxWidth: 820 }}>
            {dest.name}
          </h1>
          <p style={{ color: "rgba(255,255,255,.84)", fontSize: "clamp(16px,1.6vw,20px)", marginTop: 16, maxWidth: 600, lineHeight: 1.55 }}>
            {dest.blurb}
          </p>
        </div>
      </section>

      {/* Facts strip */}
      <section className="wrap-wide" style={{ padding: "24px 24px 0" }}>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: -42, position: "relative" }}>
          {dest.facts
            .filter((f) => f.label !== "Budget / day")
            .map((f) => (
              <FactPill key={f.label} icon={f.icon} label={f.label} value={f.value} />
            ))}
        </div>
      </section>

      {/* Body: content + rail */}
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px var(--space-8)" }}>
        <div className="dest-layout" style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 48, alignItems: "start" }}>
          {/* Article */}
          <div style={{ minWidth: 0 }}>
            {dest.intro.map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: i === 0 ? 19 : 16.5,
                  lineHeight: 1.7,
                  color: i === 0 ? "var(--ink)" : "var(--muted)",
                  marginBottom: i === dest.intro.length - 1 ? 28 : 20,
                }}
              >
                {para}
              </p>
            ))}

            <h2 style={{ fontSize: 28, marginBottom: 16 }}>Top things to do</h2>
            <div className="things-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 36 }}>
              {dest.things.map(([t, d]) => (
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
            {AFFILIATE_LIVE && (
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
                    You&apos;ll want your own wheels for {dest.name}
                  </div>
                  <div style={{ fontSize: 14, color: "var(--accent-press)" }}>Compare 20+ brands · free cancellation on most rates</div>
                </div>
                <Link className="btn btn-primary" href={ROUTES.cars}>
                  Compare cars <Icon name="arrow" size={16} />
                </Link>
              </div>
            )}

            <h2 style={{ fontSize: 28, marginBottom: 8 }}>Where to stay</h2>
            <p className="lead" style={{ marginBottom: 20 }}>
              From self-catering and guesthouses to all-inclusive lodges.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
              {dest.stays.map((s, i) => (
                <div key={s.name} className="card" style={{ display: "flex", overflow: "hidden", alignItems: "stretch" }}>
                  <Placeholder label={s.label} src={s.image ?? `destinations/${dest.slug}-stay-${i + 1}.jpg`} style={{ width: 150, flex: "none", border: 0, borderRadius: 0 }} />
                  <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17 }}>{s.name}</div>
                    <div style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 2 }}>{s.tagline}</div>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={{ fontSize: 28, marginBottom: 16 }}>Best time to visit</h2>
            {dest.bestTime.map((para, i) => (
              <p key={i} style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--muted)", marginBottom: 12 }}>
                {para}
              </p>
            ))}
            {dest.mapEmbed ? (
              <iframe
                src={dest.mapEmbed}
                title={`Map of ${dest.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                style={{ width: "100%", height: 280, border: 0, borderRadius: 16, marginTop: 8 }}
              />
            ) : (
              <Placeholder label={`map · ${dest.name} & highlights`} src={dest.mapImage} style={{ height: 280, borderRadius: 16, marginTop: 8 }} />
            )}
          </div>

          {/* Sticky rail */}
          <BookingRail name={dest.name} rail={dest.rail} />
        </div>
      </section>
    </main>
  );
}
