import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Icon } from "./icons";

/* ---------------------------------------------------------- */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 9 }}>
      <span
        style={{
          width: 30,
          height: 30,
          borderRadius: 9,
          background: "var(--accent)",
          color: "#fff",
          display: "grid",
          placeItems: "center",
          boxShadow: "var(--sh-cta)",
        }}
      >
        <Icon name="pin" size={18} stroke={2.4} />
      </span>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 20,
          letterSpacing: "-0.03em",
          color: dark ? "#fff" : "var(--ink)",
        }}
      >
        roadtripsa<span style={{ color: "var(--accent)" }}>.</span>
      </span>
    </Link>
  );
}

export function Placeholder({
  label,
  className = "",
  style = {},
  dark = false,
  radius,
}: {
  label: string;
  className?: string;
  style?: CSSProperties;
  dark?: boolean;
  radius?: number;
}) {
  return (
    <div
      className={`ph ${dark ? "on-dark" : ""} ${className}`}
      data-label={label}
      style={{ borderRadius: radius != null ? radius : undefined, ...style }}
    />
  );
}

export function Stars({ value = 5, size = 14 }: { value?: number; size?: number }) {
  return (
    <span style={{ display: "inline-flex", gap: 1, color: "var(--gold)" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon
          key={i}
          name="star"
          size={size}
          stroke={0}
          style={{ fill: i < Math.round(value) ? "var(--gold)" : "var(--line-strong)" }}
        />
      ))}
    </span>
  );
}

/* Affiliate disclosure inline */
export function AffNote({
  children = "Affiliate links — we may earn a commission at no cost to you.",
}: {
  children?: ReactNode;
}) {
  return (
    <span className="aff-note">
      <Icon name="tag" size={13} stroke={2} /> {children}
    </span>
  );
}

/* Dark page hero used by index / lighter pages */
export function PageHero({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <section style={{ background: "var(--deep)", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -60,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(242,183,5,.18), transparent 64%)",
        }}
      />
      <div className="wrap-wide" style={{ position: "relative", padding: "56px 24px 52px" }}>
        <Link
          href="/"
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
        <div className="eyebrow on-dark" style={{ marginBottom: 12 }}>
          {eyebrow}
        </div>
        <h1
          style={{
            color: "#fff",
            fontSize: "clamp(34px,4.6vw,58px)",
            letterSpacing: "-0.035em",
            lineHeight: 1,
            maxWidth: 760,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,.82)",
            fontSize: "clamp(16px,1.5vw,19px)",
            marginTop: 16,
            maxWidth: 580,
            lineHeight: 1.55,
          }}
        >
          {sub}
        </p>
      </div>
    </section>
  );
}

/* Section heading used across content sections */
export function SectionHead({
  eyebrow,
  title,
  sub,
  action,
  href,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  action?: string;
  href?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 20,
        flexWrap: "wrap",
        marginBottom: 28,
      }}
    >
      <div style={{ maxWidth: 620 }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          {eyebrow}
        </div>
        <h2 className="section-title">{title}</h2>
        {sub && (
          <p className="lead" style={{ marginTop: 12 }}>
            {sub}
          </p>
        )}
      </div>
      {action && href && (
        <Link className="btn btn-ghost" href={href}>
          {action} <Icon name="arrow" size={16} />
        </Link>
      )}
    </div>
  );
}
