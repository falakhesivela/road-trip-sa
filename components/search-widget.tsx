"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { Icon, type IconName } from "./icons";

function Field({
  icon,
  label,
  value,
  placeholder,
  onChange,
  type = "text",
  flex = 1,
}: {
  icon: IconName;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
  type?: string;
  flex?: number;
}) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 11, flex, padding: "11px 14px", minWidth: 0 }}>
      <span style={{ color: "var(--accent)", display: "grid", placeItems: "center" }}>
        <Icon name={icon} size={20} />
      </span>
      <span style={{ display: "flex", flexDirection: "column", minWidth: 0, flex: 1 }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: ".06em",
            textTransform: "uppercase",
            color: "var(--muted-2)",
          }}
        >
          {label}
        </span>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          style={{
            border: 0,
            outline: 0,
            background: "transparent",
            padding: 0,
            fontFamily: "var(--font-body)",
            fontSize: 15.5,
            fontWeight: 600,
            color: "var(--ink)",
            width: "100%",
            minWidth: 0,
          }}
        />
      </span>
    </label>
  );
}

function Divider() {
  return <span style={{ width: 1, alignSelf: "stretch", background: "var(--line)", margin: "8px 0" }} />;
}

export function SearchWidget({ defaultTab = "flights" }: { defaultTab?: "flights" | "cars" }) {
  const [tab, setTab] = useState<"flights" | "cars">(defaultTab);
  const [trip, setTrip] = useState("return");
  const [flights, setFlights] = useState({
    from: "Johannesburg (JNB)",
    to: "Cape Town (CPT)",
    depart: "2026-06-20",
    ret: "2026-06-27",
    pax: "1 adult",
  });
  const [cars, setCars] = useState({
    pickup: "OR Tambo Airport (JNB)",
    dropoff: "Same location",
    from: "2026-06-20",
    to: "2026-06-27",
    driver: "Age 25+",
  });
  const [pulse, setPulse] = useState(false);

  const upF = (k: keyof typeof flights) => (v: string) => setFlights((s) => ({ ...s, [k]: v }));
  const upC = (k: keyof typeof cars) => (v: string) => setCars((s) => ({ ...s, [k]: v }));

  const search = () => {
    setPulse(true);
    setTimeout(() => setPulse(false), 700);
  };

  const swap = () => setFlights((s) => ({ ...s, from: s.to, to: s.from }));

  const goStyle: CSSProperties = {
    background: pulse ? "var(--accent-press)" : "var(--accent)",
    color: "#fff",
    border: 0,
    padding: "0 26px",
    margin: 6,
    borderRadius: 12,
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    fontSize: 15.5,
    display: "inline-flex",
    alignItems: "center",
    gap: 9,
    boxShadow: "var(--sh-cta)",
    flex: "none",
    transform: pulse ? "scale(.97)" : "none",
    transition: "transform .15s ease, background .15s ease",
    whiteSpace: "nowrap",
  };

  return (
    <div
      style={{
        background: "var(--surface)",
        borderRadius: 22,
        boxShadow: "var(--sh-lg)",
        border: "1px solid var(--line)",
        padding: 10,
        width: "100%",
      }}
    >
      {/* Tabs */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "4px 6px 10px" }}>
        {(
          [
            ["flights", "plane", "Flights"],
            ["cars", "car", "Car Rental"],
          ] as const
        ).map(([id, ic, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 16px",
              borderRadius: 999,
              border: 0,
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: 14.5,
              background: tab === id ? "var(--ink)" : "transparent",
              color: tab === id ? "#fff" : "var(--muted)",
              transition: "all .18s ease",
            }}
          >
            <Icon name={ic} size={18} /> {label}
          </button>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", gap: 4, paddingRight: 4 }}>
          {tab === "flights" &&
            (
              [
                ["return", "Return"],
                ["oneway", "One-way"],
              ] as const
            ).map(([id, l]) => (
              <button
                key={id}
                onClick={() => setTrip(id)}
                style={{
                  padding: "6px 12px",
                  borderRadius: 999,
                  border: "1px solid var(--line)",
                  background: trip === id ? "var(--accent-soft)" : "transparent",
                  color: trip === id ? "var(--accent-press)" : "var(--muted)",
                  fontWeight: 700,
                  fontSize: 12.5,
                  fontFamily: "var(--font-body)",
                }}
              >
                {l}
              </button>
            ))}
        </div>
      </div>

      {/* Fields */}
      <div
        className="search-fields"
        style={{
          display: "flex",
          alignItems: "stretch",
          border: "1px solid var(--line)",
          borderRadius: 16,
          background: "var(--surface)",
          overflow: "hidden",
        }}
      >
        {tab === "flights" ? (
          <>
            <Field icon="plane" label="From" value={flights.from} onChange={upF("from")} placeholder="City or airport" flex={1.2} />
            <button
              onClick={swap}
              aria-label="Swap"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--line)",
                borderRadius: 999,
                width: 34,
                height: 34,
                alignSelf: "center",
                color: "var(--ink)",
                display: "grid",
                placeItems: "center",
                margin: "0 -17px",
                zIndex: 2,
                position: "relative",
                flex: "none",
              }}
            >
              <Icon name="swap" size={16} />
            </button>
            <Divider />
            <Field icon="pin" label="To" value={flights.to} onChange={upF("to")} placeholder="City or airport" flex={1.2} />
            <Divider />
            <Field icon="cal" label="Depart" value={flights.depart} onChange={upF("depart")} type="date" flex={0.9} />
            {trip === "return" && (
              <>
                <Divider />
                <Field icon="cal" label="Return" value={flights.ret} onChange={upF("ret")} type="date" flex={0.9} />
              </>
            )}
            <Divider />
            <Field icon="users" label="Travellers" value={flights.pax} onChange={upF("pax")} flex={0.8} />
          </>
        ) : (
          <>
            <Field icon="car" label="Pick-up" value={cars.pickup} onChange={upC("pickup")} placeholder="Airport or city" flex={1.3} />
            <Divider />
            <Field icon="pin" label="Drop-off" value={cars.dropoff} onChange={upC("dropoff")} flex={1.1} />
            <Divider />
            <Field icon="cal" label="From" value={cars.from} onChange={upC("from")} type="date" flex={0.9} />
            <Divider />
            <Field icon="cal" label="Until" value={cars.to} onChange={upC("to")} type="date" flex={0.9} />
            <Divider />
            <Field icon="users" label="Driver" value={cars.driver} onChange={upC("driver")} flex={0.7} />
          </>
        )}
        <button onClick={search} className="search-go" style={goStyle}>
          <Icon name="search" size={19} stroke={2.4} /> Search
        </button>
      </div>

      {/* Trust row under search */}
      <div style={{ display: "flex", alignItems: "center", gap: 18, padding: "12px 8px 4px", flexWrap: "wrap" }}>
        {(
          [
            ["shield", "Free cancellation on most rates"],
            ["bolt", "Instant confirmation"],
            ["tag", "No booking fees"],
          ] as const
        ).map(([ic, t]) => (
          <span
            key={t}
            style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, color: "var(--muted)", fontWeight: 600 }}
          >
            <Icon name={ic} size={15} style={{ color: "var(--accent)" }} /> {t}
          </span>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 12, color: "var(--muted-2)" }}>
          Powered by our travel &amp; car-hire partners
        </span>
      </div>
    </div>
  );
}
