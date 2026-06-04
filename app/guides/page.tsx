"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { Icon, type IconName } from "@/components/icons";
import { Placeholder, AffNote } from "@/components/ui";
import { GuideCard, type Guide } from "@/components/cards";
import { ROUTES } from "@/lib/routes";

const TOC: [string, string][] = [
  ["intro", "Why the Garden Route"],
  ["plan", "Before you go"],
  ["day1", "Days 1–2 · Cape Town to Mossel Bay"],
  ["day3", "Days 3–4 · Knysna & the lagoon"],
  ["day5", "Days 5–6 · Plettenberg Bay"],
  ["day7", "Day 7 · Tsitsikamma & home"],
  ["budget", "What it costs"],
];

const RELATED: Guide[] = [
  { cat: "Safari", title: "The Complete Kruger Safari Guide 2026", read: "14 min read", label: "guide · safari jeep" },
  { cat: "Budget", title: "10 Best Budget Weekend Getaways from Joburg", read: "8 min read", label: "guide · weekend escape" },
  { cat: "Practical", title: "How to Travel South Africa During Load-Shedding", read: "6 min read", label: "guide · city at night" },
];

const BUDGET: [string, string][] = [
  ["Car hire (7 days, compact auto)", "R3,640"],
  ["Fuel (≈1,000 km return)", "R1,500"],
  ["Accommodation (6 nights)", "R7,200"],
  ["Food & activities", "R4,500"],
  ["Per person, all-in", "≈ R8,400"],
];

function InlineCTA({
  icon,
  kicker,
  title,
  cta,
  href,
}: {
  icon: IconName;
  kicker: string;
  title: string;
  cta: string;
  href: string;
}) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1.5px solid var(--accent)",
        borderRadius: 16,
        padding: 20,
        display: "flex",
        gap: 16,
        alignItems: "center",
        flexWrap: "wrap",
        margin: "28px 0",
      }}
    >
      <span
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: "var(--accent)",
          color: "#fff",
          display: "grid",
          placeItems: "center",
          flex: "none",
          boxShadow: "var(--sh-cta)",
        }}
      >
        <Icon name={icon} size={24} />
      </span>
      <div style={{ flex: 1, minWidth: 200 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)" }}>
          {kicker}
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--ink)", marginTop: 2 }}>{title}</div>
      </div>
      <Link className="btn btn-primary" href={href}>
        {cta} <Icon name="arrow" size={16} />
      </Link>
    </div>
  );
}

function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} style={{ fontSize: 30, margin: "40px 0 16px", scrollMarginTop: 92 }}>
      {children}
    </h2>
  );
}
function P({ children }: { children: ReactNode }) {
  return <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink)", marginBottom: 18 }}>{children}</p>;
}

export default function GuidePage() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const ids = TOC.map((t) => t[0]);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <main>
      {/* Article header */}
      <section className="wrap" style={{ maxWidth: 820, padding: "48px 24px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--muted)", fontSize: 13.5, fontWeight: 600, marginBottom: 22 }}>
          <Link href={ROUTES.home} style={{ background: "none", border: 0, color: "inherit" }}>
            Home
          </Link>
          <Icon name="chevron" size={14} style={{ transform: "rotate(-90deg)" }} />
          <Link href={ROUTES.guides} style={{ background: "none", border: 0, color: "inherit" }}>
            Travel Guides
          </Link>
          <Icon name="chevron" size={14} style={{ transform: "rotate(-90deg)" }} />
          <span style={{ color: "var(--ink)" }}>Road Trips</span>
        </div>
        <span className="chip solid">Road Trips</span>
        <h1 style={{ fontSize: "clamp(32px,4.4vw,52px)", letterSpacing: "-0.035em", lineHeight: 1.02, margin: "16px 0 18px" }}>
          The Garden Route 7-Day Road-Trip Itinerary (2026)
        </h1>
        <p className="lead" style={{ fontSize: 19 }}>
          Cape Town to Tsitsikamma in a week — the exact route, where to sleep, what to book, and what it really costs for
          two people.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 24, paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
          <Placeholder label="author" style={{ width: 46, height: 46, borderRadius: 999, flex: "none" }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14.5 }}>By Thabo M. · roadtripsa founder</div>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>Updated June 2026 · 11 min read</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ width: 38, height: 38, borderRadius: 10, border: "1px solid var(--line)", display: "grid", placeItems: "center", color: "var(--muted)" }}>
              <Icon name="heart" size={17} />
            </span>
            <span style={{ width: 38, height: 38, borderRadius: 10, border: "1px solid var(--line)", display: "grid", placeItems: "center", color: "var(--muted)" }}>
              <Icon name="arrowUpRight" size={17} />
            </span>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ maxWidth: 820, padding: "24px 24px 0" }}>
        <Placeholder label="featured · Garden Route coastline from above" style={{ height: 380, borderRadius: 18 }} />
        <div style={{ marginTop: 12 }}>
          <AffNote>This guide contains affiliate links. We may earn a commission at no extra cost to you.</AffNote>
        </div>
      </section>

      {/* Body + TOC */}
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px var(--space-8)" }}>
        <div
          className="guide-layout"
          style={{ display: "grid", gridTemplateColumns: "240px minmax(0,720px)", gap: 56, justifyContent: "center", alignItems: "start" }}
        >
          {/* TOC */}
          <aside className="toc-rail" style={{ position: "sticky", top: 92 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--muted-2)", marginBottom: 14 }}>
              On this page
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2, borderLeft: "2px solid var(--line)" }}>
              {TOC.map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => jump(id)}
                  style={{
                    background: "none",
                    border: 0,
                    textAlign: "left",
                    padding: "7px 14px",
                    marginLeft: -2,
                    borderLeft: `2px solid ${active === id ? "var(--accent)" : "transparent"}`,
                    color: active === id ? "var(--accent)" : "var(--muted)",
                    fontWeight: active === id ? 700 : 600,
                    fontSize: 13.5,
                    lineHeight: 1.4,
                    cursor: "pointer",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </aside>

          {/* Article body */}
          <article style={{ minWidth: 0 }}>
            <P>
              <span id="intro" />
              The Garden Route is South Africa&apos;s most beginner-friendly road trip: a 300 km ribbon of coast, forest and
              lagoon between Mossel Bay and Storms River, all on excellent tar roads. You don&apos;t need a 4x4 and you
              don&apos;t need to be brave — just a week, a rental car and this plan.
            </P>

            <H2 id="plan">Before you go</H2>
            <P>
              Fly into Cape Town, pick up your car at the airport, and drive the route west-to-east so the best stretches
              land on the back half of the trip. Book the car early — Garden Route stock gets thin over school holidays and
              the festive season.
            </P>
            <InlineCTA
              icon="car"
              kicker="Step 1 · transport"
              title="A compact auto is perfect for this route — from R520/day"
              cta="Compare cars"
              href={ROUTES.cars}
            />

            <H2 id="day1">Days 1–2 · Cape Town to Mossel Bay</H2>
            <P>
              Leave the city early and break the four-hour drive at the farm stalls along the N2. Mossel Bay is your gentle
              introduction to the coast — a working harbour town with a surprisingly good beach and the route&apos;s warmest
              swimming water.
            </P>
            <P>
              Spend the first night here, then use the morning for the St Blaize cliff-path walk before heading inland to
              Oudtshoorn if you want to add the Cango Caves and ostrich farms.
            </P>

            <H2 id="day3">Days 3–4 · Knysna & the lagoon</H2>
            <P>
              Knysna is the heart of the Garden Route and worth two nights. Eat oysters on the Thesen Islands waterfront,
              take the ferry across the lagoon to the Featherbed Nature Reserve, and watch the sunset from the Knysna Heads.
            </P>
            <InlineCTA
              icon="plane"
              kicker="Bargain alert"
              title="Flights into George (the Garden Route's airport) from R980"
              cta="Search flights"
              href={ROUTES.home}
            />

            <H2 id="day5">Days 5–6 · Plettenberg Bay</H2>
            <P>
              &apos;Plett&apos; is the route&apos;s glamorous beach town — long white sands, whale-watching from June to
              November, and the Robberg Nature Reserve, a three-hour peninsula hike that&apos;s the single best walk on the
              whole route.
            </P>
            <P>This is also the base for Tsitsikamma day trips, so you can stay two nights and explore without repacking.</P>

            <H2 id="day7">Day 7 · Tsitsikamma & home</H2>
            <P>
              End on a high in Tsitsikamma National Park: the suspension bridges over the Storms River mouth, ancient
              yellowwood forest, and — if you&apos;re brave — the world&apos;s highest bungee jump at Bloukrans. Drop the car
              at George or Port Elizabeth airport and fly home, or retrace the N2 back to Cape Town.
            </P>

            <H2 id="budget">What it costs</H2>
            <P>Here&apos;s a realistic per-person budget for two people sharing, over seven days, travelling mid-range in shoulder season:</P>
            <div style={{ border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden", margin: "8px 0 28px" }}>
              {BUDGET.map(([k, v], i, arr) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    background: i === arr.length - 1 ? "var(--accent-soft)" : "var(--surface)",
                    borderTop: i ? "1px solid var(--line)" : 0,
                    fontWeight: i === arr.length - 1 ? 800 : 600,
                    fontSize: i === arr.length - 1 ? 16 : 15,
                    color: i === arr.length - 1 ? "var(--accent-press)" : "var(--ink)",
                  }}
                >
                  <span>{k}</span>
                  <span style={{ fontFamily: "var(--font-display)" }}>{v}</span>
                </div>
              ))}
            </div>
            <P>Book the car and flights first — they&apos;re the prices that move most — then lock in accommodation once your dates are set.</P>

            {/* Author box */}
            <div style={{ display: "flex", gap: 16, alignItems: "center", background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 16, padding: 22, marginTop: 36 }}>
              <Placeholder label="author" style={{ width: 64, height: 64, borderRadius: 999, flex: "none" }} />
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17 }}>Thabo M.</div>
                <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 4, lineHeight: 1.6 }}>
                  Joburg-based software developer turned full-time traveller. I&apos;ve driven the Garden Route six times and
                  Kruger more than I can count — roadtripsa is where I share what actually worked.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related */}
      <section style={{ background: "var(--surface-2)", borderTop: "1px solid var(--line)" }}>
        <div className="wrap-wide" style={{ padding: "var(--space-8) 24px" }}>
          <h2 className="section-title" style={{ fontSize: "clamp(24px,3vw,36px)", marginBottom: 28 }}>
            Keep reading
          </h2>
          <div className="guides-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {RELATED.map((g) => (
              <GuideCard key={g.title} {...g} big />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
