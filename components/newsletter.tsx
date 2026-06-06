"use client";

import { useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "./icons";
import { Placeholder } from "./ui";

type Status = "idle" | "loading" | "done" | "error";

// Shared signup logic used by both the full home-page section and the footer form.
// `source` tags where the signup came from (stored as a Resend custom property).
function useNewsletterSubscribe(source: string) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return { email, setEmail, status, errorMsg, subscribe, done: status === "done" };
}

export function Newsletter() {
  const { email, setEmail, status, errorMsg, subscribe, done } = useNewsletterSubscribe("home-hero");

  return (
    <section className="wrap-wide" style={{ padding: "var(--space-8) 24px" }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "var(--r-xl)",
          background: "var(--deep)",
          padding: "clamp(36px, 5vw, 64px)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -60,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(226,98,47,.28), transparent 62%)",
          }}
        />
        <div
          className="news-grid"
          style={{ position: "relative", display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 40, alignItems: "center" }}
        >
          <div>
            <div className="eyebrow on-dark" style={{ marginBottom: 14 }}>
              Free trip-planning kit
            </div>
            <h2 style={{ color: "#fff", fontSize: "clamp(26px,3vw,40px)" }}>
              Get our Southern-Africa road-trip starter pack
            </h2>
            <p style={{ color: "rgba(255,255,255,.78)", fontSize: 16.5, marginTop: 14, maxWidth: 460, lineHeight: 1.6 }}>
              A printable Kruger checklist, a 7-day Garden Route itinerary and our monthly deal alerts — straight to your
              inbox.
            </p>
            {!done ? (
              <form onSubmit={subscribe} style={{ display: "flex", gap: 10, marginTop: 24, maxWidth: 460, flexWrap: "wrap" }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.co.za"
                  disabled={status === "loading"}
                  style={{
                    flex: 1,
                    minWidth: 200,
                    padding: "15px 18px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,.2)",
                    background: "rgba(255,255,255,.08)",
                    color: "#fff",
                    fontFamily: "var(--font-body)",
                    fontSize: 15.5,
                    outline: "none",
                  }}
                />
                <button className="btn btn-primary btn-lg" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Sending…" : "Send it to me"}
                </button>
                {status === "error" && (
                  <p style={{ flexBasis: "100%", color: "#ffd9c9", fontSize: 13.5, margin: "2px 0 0" }}>{errorMsg}</p>
                )}
              </form>
            ) : (
              <div
                style={{
                  marginTop: 24,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(255,255,255,.1)",
                  padding: "14px 20px",
                  borderRadius: 999,
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                <Icon name="check" size={20} style={{ color: "var(--gold)" }} /> You&apos;re in! Check your inbox to
                confirm.
              </div>
            )}
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 12.5, marginTop: 14 }}>
              No spam. Unsubscribe anytime. POPIA-compliant.
            </p>
          </div>
          <Placeholder label="kit mockup · checklist + map" dark style={{ height: 240, borderRadius: 16 }} />
        </div>
      </div>
    </section>
  );
}

/** Compact dark-background signup for the footer (appears on every page). */
export function FooterSubscribe() {
  const pathname = usePathname();
  const { email, setEmail, status, errorMsg, subscribe, done } = useNewsletterSubscribe(`footer:${pathname || "/"}`);

  return (
    <div>
      <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
        Newsletter
      </div>
      {done ? (
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontSize: 14, fontWeight: 600 }}>
          <Icon name="check" size={18} style={{ color: "var(--gold)" }} /> You&apos;re in — check your inbox.
        </div>
      ) : (
        <>
          <p style={{ color: "rgba(255,255,255,.6)", fontSize: 14, lineHeight: 1.55, marginBottom: 14, maxWidth: 260 }}>
            Honest Southern-Africa travel tips and the odd deal, straight to your inbox.
          </p>
          <form onSubmit={subscribe} style={{ display: "flex", gap: 8, flexWrap: "wrap", maxWidth: 320 }}>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.co.za"
              disabled={status === "loading"}
              style={{
                flex: 1,
                minWidth: 160,
                padding: "11px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,.2)",
                background: "rgba(255,255,255,.08)",
                color: "#fff",
                fontFamily: "var(--font-body)",
                fontSize: 14.5,
                outline: "none",
              }}
            />
            <button className="btn btn-primary btn-sm" type="submit" disabled={status === "loading"}>
              {status === "loading" ? "…" : "Subscribe"}
            </button>
            {status === "error" && (
              <p style={{ flexBasis: "100%", color: "#ffd9c9", fontSize: 12.5, margin: "2px 0 0" }}>{errorMsg}</p>
            )}
          </form>
          <p style={{ color: "rgba(255,255,255,.4)", fontSize: 11.5, marginTop: 10 }}>No spam. Unsubscribe anytime.</p>
        </>
      )}
    </div>
  );
}
