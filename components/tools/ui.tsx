"use client";

import type { ReactNode } from "react";

/** Format a number as South-African rand, e.g. 1234 -> "R1,234". */
export function rand(n: number) {
  const v = Math.max(0, Math.round(isFinite(n) ? n : 0));
  return "R" + v.toLocaleString("en-ZA");
}

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 700,
  color: "var(--ink)",
  marginBottom: 6,
} as const;

const fieldStyle = {
  width: "100%",
  padding: "12px 14px",
  border: "1px solid var(--line)",
  borderRadius: 10,
  fontFamily: "var(--font-body)",
  fontSize: 15,
  fontWeight: 600,
  outline: "none",
  background: "var(--bg)",
  color: "var(--ink)",
} as const;

/** Labelled numeric input with an optional unit prefix/suffix and hint. */
export function NumberField({
  label,
  value,
  onChange,
  min = 0,
  step = 1,
  prefix,
  suffix,
  hint,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  hint?: string;
}) {
  return (
    <label style={{ display: "block" }}>
      <span style={labelStyle}>{label}</span>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid var(--line)",
          borderRadius: 10,
          background: "var(--bg)",
          overflow: "hidden",
        }}
      >
        {prefix && <span style={{ padding: "0 0 0 14px", color: "var(--muted-2)", fontWeight: 700, fontSize: 15 }}>{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          value={Number.isFinite(value) ? value : 0}
          min={min}
          step={step}
          onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
          style={{ ...fieldStyle, border: 0, borderRadius: 0, background: "transparent" }}
        />
        {suffix && <span style={{ padding: "0 14px 0 0", color: "var(--muted-2)", fontWeight: 700, fontSize: 14, whiteSpace: "nowrap" }}>{suffix}</span>}
      </span>
      {hint && <span style={{ display: "block", fontSize: 12, color: "var(--muted-2)", marginTop: 5 }}>{hint}</span>}
    </label>
  );
}

/** Labelled <select> for option-style inputs. */
export function SelectField({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <label style={{ display: "block" }}>
      <span style={labelStyle}>{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} style={fieldStyle}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

/** Result breakdown table — pass rows; the last row is styled as the total. */
export function ResultTable({ rows }: { rows: [string, string][] }) {
  return (
    <div style={{ border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden" }}>
      {rows.map(([k, v], i, arr) => {
        const total = i === arr.length - 1;
        return (
          <div
            key={k}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              padding: "14px 18px",
              background: total ? "var(--accent-soft)" : "var(--surface)",
              borderTop: i ? "1px solid var(--line)" : 0,
              fontWeight: total ? 800 : 600,
              fontSize: total ? 17 : 15,
              color: total ? "var(--accent-press)" : "var(--ink)",
            }}
          >
            <span>{k}</span>
            <span style={{ fontFamily: "var(--font-display)", whiteSpace: "nowrap" }}>{v}</span>
          </div>
        );
      })}
    </div>
  );
}

/** Two-column tool layout: inputs on the left, sticky results on the right. */
export function ToolLayout({ inputs, results }: { inputs: ReactNode; results: ReactNode }) {
  return (
    <div className="tool-layout" style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 40, alignItems: "start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>{inputs}</div>
      <div style={{ position: "sticky", top: 92 }}>{results}</div>
    </div>
  );
}
