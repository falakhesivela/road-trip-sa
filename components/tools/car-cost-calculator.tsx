"use client";

import { useState } from "react";
import { AffNote } from "@/components/ui";
import { NumberField, ResultTable, ToolLayout, rand } from "./ui";

export function CarCostCalculator() {
  const [days, setDays] = useState(7);
  const [dailyRate, setDailyRate] = useState(520);
  const [km, setKm] = useState(1000);
  const [consumption, setConsumption] = useState(7); // L / 100km
  const [fuelPrice, setFuelPrice] = useState(23); // R / litre
  const [extrasPerDay, setExtrasPerDay] = useState(0); // insurance / extras
  const [oneWayFee, setOneWayFee] = useState(0);
  const [crossBorder, setCrossBorder] = useState(0);

  const rental = dailyRate * days;
  const litres = (km / 100) * consumption;
  const fuel = litres * fuelPrice;
  const extras = extrasPerDay * days;
  const total = rental + fuel + extras + oneWayFee + crossBorder;

  const rows: [string, string][] = [
    ["Rental", `${rand(rental)}`],
    ["Fuel", `${rand(fuel)}`],
    ...(extras > 0 ? ([["Insurance / extras", `${rand(extras)}`]] as [string, string][]) : []),
    ...(oneWayFee > 0 ? ([["One-way fee", `${rand(oneWayFee)}`]] as [string, string][]) : []),
    ...(crossBorder > 0 ? ([["Cross-border letter", `${rand(crossBorder)}`]] as [string, string][]) : []),
    ["Total drive-away cost", rand(total)],
  ];

  return (
    <ToolLayout
      inputs={
        <>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <NumberField label="Rental days" value={days} onChange={setDays} min={1} />
            <NumberField label="Daily rate" value={dailyRate} onChange={setDailyRate} prefix="R" step={50} />
          </div>
          <NumberField label="Distance you'll drive" value={km} onChange={setKm} suffix="km" step={50} hint="Round trip — a rough estimate is fine." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <NumberField label="Fuel use" value={consumption} onChange={setConsumption} suffix="L/100km" step={0.5} hint="≈7 small, ≈12 for a 4x4." />
            <NumberField label="Fuel price" value={fuelPrice} onChange={setFuelPrice} prefix="R" suffix="/L" step={0.5} />
          </div>
          <NumberField label="Insurance / extras per day" value={extrasPerDay} onChange={setExtrasPerDay} prefix="R" step={20} hint="Excess-waiver, extra driver, GPS, etc." />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <NumberField label="One-way fee" value={oneWayFee} onChange={setOneWayFee} prefix="R" step={50} hint="If dropping off elsewhere." />
            <NumberField label="Cross-border letter" value={crossBorder} onChange={setCrossBorder} prefix="R" step={50} hint="≈R750–1,500 if leaving SA." />
          </div>
        </>
      }
      results={
        <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 18, padding: 22, boxShadow: "var(--sh-md)" }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>
            Estimated total
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 36, letterSpacing: "-0.03em" }}>{rand(total)}</span>
          </div>
          <div style={{ color: "var(--muted)", fontSize: 14, marginBottom: 18 }}>
            ≈ {rand(total / Math.max(1, days))} per day · {Math.round(litres)} L of fuel
          </div>
          <ResultTable rows={rows} />
          <div style={{ marginTop: 12, textAlign: "center" }}>
            <AffNote>Estimates only. Fuel and fees vary — always confirm with the supplier.</AffNote>
          </div>
        </div>
      }
    />
  );
}
