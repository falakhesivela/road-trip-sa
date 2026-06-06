"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { AffNote, Placeholder } from "@/components/ui";
import { SearchWidget } from "@/components/search-widget";
import { CarCard, type Car } from "@/components/cards";
import { ROUTES } from "@/lib/routes";
import { AFFILIATE_LIVE } from "@/lib/config";

const ALL_CARS: Car[] = [
  { cls: "Economy", model: "VW Polo Vivo", seats: 5, bags: 2, trans: "Manual", price: "R385", oldPrice: null, badge: null, supplier: "FirstCar" },
  { cls: "Economy", model: "Kia Picanto", seats: 4, bags: 1, trans: "Manual", price: "R349", oldPrice: null, badge: null, supplier: "Europcar" },
  { cls: "Compact", model: "Hyundai i20", seats: 5, bags: 2, trans: "Auto", price: "R520", oldPrice: "R590", badge: null, supplier: "Europcar" },
  { cls: "Compact", model: "VW Polo", seats: 5, bags: 2, trans: "Auto", price: "R560", oldPrice: null, badge: null, supplier: "Avis" },
  { cls: "SUV", model: "Toyota Fortuner", seats: 7, bags: 3, trans: "Auto", price: "R1,150", oldPrice: null, badge: "Safari-ready", supplier: "Avis" },
  { cls: "SUV", model: "Hyundai Tucson", seats: 5, bags: 3, trans: "Auto", price: "R880", oldPrice: "R990", badge: null, supplier: "Bidvest" },
  { cls: "4x4", model: "Ford Ranger 4x4", seats: 5, bags: 3, trans: "Manual", price: "R1,680", oldPrice: null, badge: "Bush-ready", supplier: "Bidvest" },
  { cls: "4x4", model: "Toyota Hilux 4x4", seats: 5, bags: 3, trans: "Manual", price: "R1,750", oldPrice: "R1,890", badge: null, supplier: "FirstCar" },
];

const CLASSES = ["All", "Economy", "Compact", "SUV", "4x4"];

const LOCATIONS: [string, string, string][] = [
  ["OR Tambo Airport", "Johannesburg", "From R385/day"],
  ["Cape Town Airport", "Western Cape", "From R349/day"],
  ["King Shaka Airport", "Durban", "From R410/day"],
  ["Kruger / Nelspruit", "Mpumalanga", "From R520/day"],
  ["George Airport", "Garden Route", "From R460/day"],
  ["Lanseria Airport", "Johannesburg", "From R399/day"],
];

const FAQ: [string, string][] = [
  [
    "Do I need a credit card to rent a car in South Africa?",
    "Yes — almost every supplier requires a credit card in the main driver's name for the security deposit. A debit card is sometimes accepted on economy classes but rarely for SUVs or 4x4s. We flag the card policy on each deal before you book.",
  ],
  [
    "Can I take a rental car across the border to Mozambique or Botswana?",
    "Many suppliers allow cross-border travel into Botswana, Namibia, Mozambique, Zimbabwe and eSwatini, but you must request a cross-border letter in advance (usually R750–R1,500) and some vehicle classes are excluded. Always arrange this at booking, not at the counter.",
  ],
  [
    "Is one-way car rental available?",
    "Yes. One-way hire — for example pick up in Cape Town and drop on the Garden Route or in Joburg — is widely available. A one-way fee may apply depending on distance, so confirm it with the supplier when you book.",
  ],
  [
    "What about a 4x4 for a self-drive safari?",
    "For Kruger's tar roads any car is fine, but for unfenced reserves, sand tracks or Botswana you'll want a proper 4x4 — ideally with a rooftop tent and recovery kit. See our 4x4 & Safari rentals page for fully-kitted options.",
  ],
  [
    "Are there hidden fees?",
    "Reputable suppliers itemise local taxes, optional insurance and the refundable deposit clearly before you pay — and roadtripsa will never add a booking fee of its own on top.",
  ],
];

function FaqRow({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid var(--line)" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          textAlign: "left",
          background: "none",
          border: 0,
          padding: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17.5, color: "var(--ink)" }}>{q}</span>
        <span
          style={{
            flex: "none",
            width: 32,
            height: 32,
            borderRadius: 999,
            border: "1px solid var(--line)",
            display: "grid",
            placeItems: "center",
            color: "var(--accent)",
            transition: "transform .2s",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          <Icon name="x" size={16} style={{ transform: "rotate(45deg)" }} />
        </span>
      </button>
      <div style={{ maxHeight: open ? 240 : 0, overflow: "hidden", transition: "max-height .3s ease" }}>
        <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.65, paddingBottom: 22, maxWidth: 760 }}>{a}</p>
      </div>
    </div>
  );
}

export default function CarRentalsPage() {
  const [filter, setFilter] = useState("All");
  const [faqOpen, setFaqOpen] = useState(0);
  const cars = filter === "All" ? ALL_CARS : ALL_CARS.filter((c) => c.cls === filter);

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--deep)", position: "relative", overflow: "hidden" }}>
        <Placeholder
          label="hero · open road, escarpment"
          dark
          priority
          style={{ position: "absolute", inset: 0, height: "100%", border: 0, borderRadius: 0 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(15,36,34,.55), rgba(15,36,34,.82) 60%, var(--deep))",
          }}
        />
        <div className="wrap-wide" style={{ position: "relative", padding: "64px 24px 0" }}>
          <Link
            href={ROUTES.home}
            style={{
              background: "none",
              border: 0,
              color: "rgba(255,255,255,.7)",
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              fontSize: 14,
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            <Icon name="arrowLeft" size={16} /> Home
          </Link>
          <div style={{ maxWidth: 720 }}>
            <div className="eyebrow on-dark" style={{ marginBottom: 12 }}>
              Car rental · South Africa
            </div>
            <h1 style={{ color: "#fff", fontSize: "clamp(34px,4.6vw,58px)", letterSpacing: "-0.035em", lineHeight: 1 }}>
              {AFFILIATE_LIVE ? "Compare every car-hire brand in one search" : "Car hire in South Africa: the honest guide"}
            </h1>
            <p style={{ color: "rgba(255,255,255,.82)", fontSize: "clamp(16px,1.5vw,19px)", marginTop: 18, maxWidth: 560 }}>
              {AFFILIATE_LIVE
                ? "From a R349 city runabout to a fully-kitted safari 4x4 — transparent prices, free cancellation on most rates, zero booking fees."
                : "From a city runabout to a fully-kitted safari 4x4 — which class to choose, where to pick up, and how to avoid the common pitfalls."}
            </p>
          </div>
          {AFFILIATE_LIVE ? (
            <div style={{ marginTop: 34, maxWidth: 1040 }}>
              <SearchWidget defaultTab="cars" />
            </div>
          ) : null}
          <div style={{ height: 40 }} />
        </div>
      </section>

      {/* Locations */}
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              Pick-up points
            </div>
            <h2 className="section-title" style={{ fontSize: "clamp(24px,3vw,36px)" }}>
              Popular rental locations
            </h2>
          </div>
        </div>
        <div className="loc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {LOCATIONS.map(([name, region]) => (
            <div
              key={name}
              className="card"
              style={{ width: "100%", textAlign: "left", padding: 20, display: "flex", alignItems: "center", gap: 16 }}
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
                  flex: "none",
                }}
              >
                <Icon name="plane" size={22} />
              </span>
              <span style={{ flex: 1 }}>
                <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16.5 }}>{name}</span>
                <span style={{ display: "block", fontSize: 13, color: "var(--muted)" }}>{region}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Deals with filter */}
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 22, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              {AFFILIATE_LIVE ? "Live deals" : "By vehicle class"}
            </div>
            <h2 className="section-title" style={{ fontSize: "clamp(24px,3vw,36px)" }}>
              {AFFILIATE_LIVE ? "This week's best rates" : "Cars you can hire"}
            </h2>
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CLASSES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                style={{
                  padding: "9px 16px",
                  borderRadius: 999,
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: 13.5,
                  border: `1.5px solid ${filter === c ? "var(--accent)" : "var(--line-strong)"}`,
                  background: filter === c ? "var(--accent)" : "transparent",
                  color: filter === c ? "#fff" : "var(--ink)",
                  transition: "all .15s ease",
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <div className="car-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {cars.map((c) => (
            <CarCard key={c.model} {...c} />
          ))}
        </div>
        {AFFILIATE_LIVE && (
          <div style={{ marginTop: 20, textAlign: "center" }}>
            <AffNote>Prices illustrative. Final rate confirmed at our partner&apos;s secure checkout.</AffNote>
          </div>
        )}
      </section>

      {/* How it works — describes the live compare/book flow, shown only once affiliate booking is live */}
      {AFFILIATE_LIVE && (
      <section style={{ background: "var(--surface-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap-wide" style={{ padding: "var(--space-8) 24px" }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>
            How it works
          </div>
          <h2 className="section-title" style={{ marginBottom: 36 }}>
            Booked in three easy steps
          </h2>
          <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {(
              [
                ["Search & compare", "Enter your pick-up point and dates. We pull live rates from 20+ trusted suppliers side by side."],
                ["Pick your perfect car", "Filter by price, class or transmission. Every listing shows seats, bags and the supplier up front."],
                ["Book on a secure partner", "Confirm on the supplier's own secure checkout. Free cancellation on most rates, instant voucher."],
              ] as const
            ).map(([t, d], i) => (
              <div key={t}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 44, color: "var(--accent)", letterSpacing: "-0.04em", opacity: 0.9 }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: 20, marginTop: 8 }}>{t}</h3>
                <p style={{ fontSize: 15, color: "var(--muted)", marginTop: 8, lineHeight: 1.6, maxWidth: 340 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* FAQ */}
      <section className="wrap" style={{ padding: "var(--space-8) 24px", maxWidth: 860 }}>
        <div style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>
            Good to know
          </div>
          <h2 className="section-title" style={{ marginBottom: 8 }}>
            Car rental FAQ
          </h2>
          <p className="lead" style={{ marginBottom: 12 }}>
            The questions Southern-Africa road-trippers ask us most.
          </p>
        </div>
        <div style={{ marginTop: 20 }}>
          {FAQ.map(([q, a], i) => (
            <FaqRow key={i} q={q} a={a} open={faqOpen === i} onToggle={() => setFaqOpen(faqOpen === i ? -1 : i)} />
          ))}
        </div>
      </section>
    </main>
  );
}
