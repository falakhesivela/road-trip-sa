"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { AffNote } from "@/components/ui";
import { ROUTES } from "@/lib/routes";
import { NumberField, ResultTable, ToolLayout, rand } from "./ui";

export function BudgetCalculator() {
  const [travellers, setTravellers] = useState(2);
  const [nights, setNights] = useState(7);
  const [stayPerNight, setStayPerNight] = useState(1200);
  const [carPerDay, setCarPerDay] = useState(520);
  const [foodPerDay, setFoodPerDay] = useState(350);
  const [flightsPP, setFlightsPP] = useState(0);

  const people = Math.max(1, travellers);
  const stay = stayPerNight * nights;
  const car = carPerDay * nights;
  const food = foodPerDay * people * nights;
  const flights = flightsPP * people;
  const total = stay + car + food + flights;
  const perPerson = total / people;

  const rows: [string, string][] = [
    ["Accommodation", `${rand(stay)}`],
    ["Car hire", `${rand(car)}`],
    ["Food & activities", `${rand(food)}`],
    ...(flights > 0 ? ([["Flights", `${rand(flights)}`]] as [string, string][]) : []),
    ["Total trip cost", rand(total)],
  ];

  return (
    <ToolLayout
      inputs={
        <>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <NumberField label="Travellers" value={travellers} onChange={setTravellers} min={1} />
            <NumberField label="Nights" value={nights} onChange={setNights} min={1} />
          </div>
          <NumberField label="Accommodation per night" value={stayPerNight} onChange={setStayPerNight} prefix="R" step={50} hint="Total for the room/place, not per person." />
          <NumberField label="Car hire per day" value={carPerDay} onChange={setCarPerDay} prefix="R" step={50} hint="Leave at 0 if you're not renting a car." />
          <NumberField label="Food & activities, per person per day" value={foodPerDay} onChange={setFoodPerDay} prefix="R" step={50} />
          <NumberField label="Flights per person" value={flightsPP} onChange={setFlightsPP} prefix="R" step={100} hint="One-off; leave at 0 for a road trip." />
        </>
      }
      results={
        <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 18, padding: 22, boxShadow: "var(--sh-md)" }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>
            Your estimate
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 36, letterSpacing: "-0.03em" }}>{rand(perPerson)}</span>
            <span style={{ color: "var(--muted)", fontWeight: 600 }}>per person</span>
          </div>
          <div style={{ color: "var(--muted)", fontSize: 14, marginBottom: 18 }}>
            {rand(total)} total · {people} {people === 1 ? "traveller" : "travellers"} · {nights} {nights === 1 ? "night" : "nights"}
          </div>
          <ResultTable rows={rows} />
          <Link className="btn btn-ghost btn-sm btn-block" style={{ marginTop: 16 }} href={ROUTES.carCostCalculator}>
            Fine-tune car costs <Icon name="arrow" size={15} />
          </Link>
          <div style={{ marginTop: 12, textAlign: "center" }}>
            <AffNote>Estimates only — a planning guide, not a quote.</AffNote>
          </div>
        </div>
      }
    />
  );
}
