import Link from "next/link";
import { Icon } from "./icons";
import { Placeholder, Stars } from "./ui";
import { ROUTES } from "@/lib/routes";

export type Destination = {
  name: string;
  region: string;
  tag?: string;
  price: string;
  label: string;
  wide?: boolean;
};

export function DestinationCard({ name, region, tag, price, label, wide = false }: Destination) {
  return (
    <Link
      href={ROUTES.kruger}
      className="card dest-card"
      style={{
        padding: 0,
        textAlign: "left",
        cursor: "pointer",
        position: "relative",
        width: "100%",
        height: "100%",
        background: "var(--surface)",
        display: "flex",
        flexDirection: "column",
        border: "1px solid var(--line)",
      }}
    >
      <div style={{ position: "relative" }}>
        <Placeholder label={label} style={{ height: wide ? 300 : 220, borderRadius: 0, border: 0 }} />
        {tag && (
          <span
            style={{
              position: "absolute",
              top: 14,
              left: 14,
              background: "rgba(255,255,255,.92)",
              color: "var(--ink)",
              fontSize: 12,
              fontWeight: 700,
              padding: "6px 11px",
              borderRadius: 999,
              backdropFilter: "blur(6px)",
              boxShadow: "var(--sh-sm)",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Icon name="pin" size={13} style={{ color: "var(--accent)" }} /> {tag}
          </span>
        )}
        <span
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 34,
            height: 34,
            borderRadius: 999,
            background: "rgba(255,255,255,.92)",
            display: "grid",
            placeItems: "center",
            color: "var(--ink)",
            backdropFilter: "blur(6px)",
            boxShadow: "var(--sh-sm)",
          }}
        >
          <Icon name="heart" size={17} />
        </span>
      </div>
      <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: wide ? 22 : 18.5,
              letterSpacing: "-0.02em",
            }}
          >
            {name}
          </span>
          <Stars value={5} size={13} />
        </div>
        <span style={{ fontSize: 13.5, color: "var(--muted)" }}>{region}</span>
        <div
          style={{
            marginTop: "auto",
            paddingTop: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 13, color: "var(--muted-2)" }}>
            From <strong style={{ color: "var(--ink)", fontSize: 16 }}>{price}</strong>
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              color: "var(--accent-press)",
              fontWeight: 700,
              fontSize: 13.5,
            }}
          >
            Explore <Icon name="arrow" size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export type Car = {
  cls: string;
  model: string;
  seats: number;
  bags: number;
  trans: string;
  price: string;
  oldPrice?: string | null;
  badge?: string | null;
  supplier: string;
};

export function CarCard({ cls, model, seats, bags, trans, price, oldPrice, badge, supplier }: Car) {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", border: "1px solid var(--line)" }}>
      <div
        style={{
          position: "relative",
          padding: "14px 16px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="chip" style={{ background: "var(--surface-2)" }}>
          {cls}
        </span>
        {badge && <span className="chip solid">{badge}</span>}
      </div>
      <Placeholder label={`car · ${cls.toLowerCase()}`} style={{ height: 132, margin: "8px 16px 0", borderRadius: 12 }} />
      <div style={{ padding: "14px 18px 18px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>{model}</div>
          <div style={{ fontSize: 12.5, color: "var(--muted-2)" }}>or similar · {supplier}</div>
        </div>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {(
            [
              ["seat", `${seats} seats`],
              ["car", `${bags} bags`],
              ["gauge", trans],
            ] as const
          ).map(([ic, t]) => (
            <span
              key={t}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 13,
                color: "var(--muted)",
                fontWeight: 600,
              }}
            >
              <Icon name={ic} size={15} style={{ color: "var(--accent)" }} /> {t}
            </span>
          ))}
        </div>
        <div
          style={{
            marginTop: "auto",
            paddingTop: 12,
            borderTop: "1px solid var(--line)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div>
            {oldPrice && (
              <div style={{ fontSize: 13, color: "var(--muted-2)", textDecoration: "line-through" }}>{oldPrice}</div>
            )}
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em" }}>
              {price}
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--muted)" }}> /day</span>
            </div>
          </div>
          <Link className="btn btn-primary btn-sm" href={ROUTES.cars}>
            View deal
          </Link>
        </div>
      </div>
    </div>
  );
}

export type Guide = {
  cat: string;
  title: string;
  read: string;
  label: string;
  big?: boolean;
};

export function GuideCard({ cat, title, read, label, big = false }: Guide) {
  return (
    <Link
      href={ROUTES.guides}
      className="card"
      style={{
        padding: 0,
        textAlign: "left",
        cursor: "pointer",
        display: "flex",
        flexDirection: big ? "column" : "row",
        border: "1px solid var(--line)",
        alignItems: "stretch",
      }}
    >
      <Placeholder
        label={label}
        style={{
          height: big ? 200 : "auto",
          width: big ? "auto" : 150,
          flex: "none",
          borderRadius: 0,
          border: 0,
        }}
      />
      <div
        style={{
          padding: big ? "18px 20px 20px" : "16px 18px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          flex: 1,
        }}
      >
        <span className="chip solid" style={{ alignSelf: "flex-start", fontSize: 11.5 }}>
          {cat}
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: big ? 20 : 16.5,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </span>
        <span
          style={{
            marginTop: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            fontSize: 12.5,
            color: "var(--muted-2)",
          }}
        >
          <Icon name="clock" size={14} /> {read}
        </span>
      </div>
    </Link>
  );
}
