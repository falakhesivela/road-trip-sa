"use client";

import { useMemo, useState } from "react";
import { Icon } from "@/components/icons";
import { SelectField } from "./ui";

type Opts = { selfDrive: boolean; kids: boolean; camping: boolean };
type Section = { category: string; items: string[] };

const TRIP_TYPES = ["Safari", "Beach", "City break", "Road trip"];
const SEASONS = ["Summer (hot)", "Winter (cold mornings)"];

function buildList(trip: string, season: string, o: Opts): Section[] {
  const isSummer = season.startsWith("Summer");
  const docs = [
    "ID / passport",
    ...(o.selfDrive ? ["Driver's licence (+ international permit if needed)"] : []),
    "Bank cards + some cash",
    "Travel insurance details",
    "Printed / offline booking confirmations",
  ];

  const clothing = ["Underwear & socks", "Comfortable walking shoes", "Sleepwear"];
  if (isSummer) clothing.push("Light, breathable clothing", "Sun hat & sunglasses");
  else clothing.push("Warm jacket / fleece", "Beanie & layers for cold mornings", "Long pants");
  if (trip === "Safari") clothing.push("Neutral / earth-tone clothing", "Long-sleeve shirt (sun & mosquitoes)");
  if (trip === "Beach") clothing.push("Swimwear (x2)", "Flip-flops & a cover-up");
  if (trip === "City break") clothing.push("One smart-casual outfit");

  const health = [
    "Toothbrush & toothpaste",
    "Deodorant & basic toiletries",
    "Sunscreen SPF 30+ & lip balm",
    "Personal medication",
    "Hand sanitiser",
  ];
  if (isSummer || trip === "Safari") health.push("Insect repellent");
  if (trip === "Safari") health.push("Malaria precautions (check with your doctor)", "Antihistamine for bites");

  const tech = ["Phone & charger", "Power bank (for load-shedding)", "Camera", "SA travel adapter (Type M/N)"];
  if (o.selfDrive) tech.push("Phone car mount & 12V charger", "Offline maps downloaded");

  const sections: Section[] = [
    { category: "Documents & money", items: docs },
    { category: "Clothing", items: clothing },
    { category: "Health & toiletries", items: health },
    { category: "Tech & gadgets", items: tech },
  ];

  if (trip === "Safari")
    sections.push({ category: "Safari extras", items: ["Binoculars", "Wide-brim hat", "Dust-proof bag for camera", "Bird / mammal field guide"] });
  if (trip === "Beach")
    sections.push({ category: "Beach extras", items: ["Beach towel", "Snorkel & mask", "Dry bag", "Reef-safe sunscreen"] });
  if (o.camping)
    sections.push({ category: "Camping gear", items: ["Tent, pegs & mallet", "Sleeping bag & mat", "Head torch", "Gas stove & lighter", "Cooler box", "Refuse bags"] });
  if (o.kids)
    sections.push({ category: "With kids", items: ["Snacks & water", "Car entertainment", "Kids' meds & plasters", "Extra wet wipes", "Kids' sun hats"] });
  if (o.selfDrive)
    sections.push({ category: "Car & safety", items: ["Reflective triangle & vest", "Check the spare tyre & jack", "First-aid kit", "Tyre-pressure gauge"] });

  return sections;
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "9px 14px",
        borderRadius: 999,
        border: `1.5px solid ${checked ? "var(--accent)" : "var(--line-strong)"}`,
        background: checked ? "var(--accent-soft)" : "transparent",
        color: checked ? "var(--accent-press)" : "var(--ink)",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 13.5,
      }}
    >
      <Icon name="check" size={15} style={{ opacity: checked ? 1 : 0.35 }} /> {label}
    </button>
  );
}

export function PackingList() {
  const [trip, setTrip] = useState(TRIP_TYPES[0]);
  const [season, setSeason] = useState(SEASONS[0]);
  const [opts, setOpts] = useState<Opts>({ selfDrive: true, kids: false, camping: false });
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const sections = useMemo(() => buildList(trip, season, opts), [trip, season, opts]);
  const allItems = sections.flatMap((s) => s.items);
  const doneCount = allItems.filter((i) => checked.has(i)).length;

  const toggleItem = (item: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });

  return (
    <div>
      {/* Controls */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 16, padding: 22, marginBottom: 24 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <SelectField label="Trip type" value={trip} options={TRIP_TYPES} onChange={setTrip} />
          <SelectField label="Season" value={season} options={SEASONS} onChange={setSeason} />
        </div>
        <div style={{ marginTop: 16 }}>
          <span style={{ display: "block", fontSize: 13, fontWeight: 700, marginBottom: 8 }}>Add for...</span>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Toggle label="Self-drive" checked={opts.selfDrive} onChange={(v) => setOpts((o) => ({ ...o, selfDrive: v }))} />
            <Toggle label="Travelling with kids" checked={opts.kids} onChange={(v) => setOpts((o) => ({ ...o, kids: v }))} />
            <Toggle label="Camping" checked={opts.camping} onChange={(v) => setOpts((o) => ({ ...o, camping: v }))} />
          </div>
        </div>
      </div>

      {/* Progress + print */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 16, flexWrap: "wrap" }}>
        <span style={{ fontWeight: 700, color: "var(--muted)" }}>
          {doneCount} of {allItems.length} packed
        </span>
        <button type="button" className="btn btn-ghost btn-sm" onClick={() => window.print()}>
          <Icon name="check" size={15} /> Print list
        </button>
      </div>

      {/* The list */}
      <div className="tools-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 18 }}>
        {sections.map((s) => (
          <div key={s.category} style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 14, padding: 20, height: "100%" }}>
            <h3 style={{ fontSize: 16.5, marginBottom: 12 }}>{s.category}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {s.items.map((item) => {
                const on = checked.has(item);
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleItem(item)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 11,
                      background: "none",
                      border: 0,
                      textAlign: "left",
                      padding: "7px 4px",
                      color: on ? "var(--muted-2)" : "var(--ink)",
                    }}
                  >
                    <span
                      style={{
                        width: 22,
                        height: 22,
                        borderRadius: 7,
                        flex: "none",
                        border: `1.5px solid ${on ? "var(--accent)" : "var(--line-strong)"}`,
                        background: on ? "var(--accent)" : "transparent",
                        color: "#fff",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      {on && <Icon name="check" size={14} stroke={3} />}
                    </span>
                    <span style={{ fontSize: 14.5, fontWeight: 600, textDecoration: on ? "line-through" : "none" }}>{item}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
