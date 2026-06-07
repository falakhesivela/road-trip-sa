"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Placeholder, AffNote } from "@/components/ui";
import { GuideCard } from "@/components/cards";
import { ROUTES } from "@/lib/routes";
import { AFFILIATE_LIVE } from "@/lib/config";
import type { GuideDoc, GuideSection } from "@/lib/content";

function InlineCTA({ cta }: { cta: NonNullable<GuideSection["cta"]> }) {
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
        <Icon name={cta.icon} size={24} />
      </span>
      <div style={{ flex: 1, minWidth: 200 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--accent)" }}>
          {cta.kicker}
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--ink)", marginTop: 2 }}>{cta.title}</div>
      </div>
      <Link className="btn btn-primary" href={cta.href}>
        {cta.cta} <Icon name="arrow" size={16} />
      </Link>
    </div>
  );
}

function BudgetTable({ rows }: { rows: [string, string][] }) {
  return (
    <div style={{ border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden", margin: "8px 0 28px" }}>
      {rows.map(([k, v], i, arr) => {
        const total = i === arr.length - 1;
        return (
          <div
            key={k}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "14px 18px",
              background: total ? "var(--accent-soft)" : "var(--surface)",
              borderTop: i ? "1px solid var(--line)" : 0,
              fontWeight: total ? 800 : 600,
              fontSize: total ? 16 : 15,
              color: total ? "var(--accent-press)" : "var(--ink)",
            }}
          >
            <span>{k}</span>
            <span style={{ fontFamily: "var(--font-display)" }}>{v}</span>
          </div>
        );
      })}
    </div>
  );
}

export function GuideArticle({ guide, related }: { guide: GuideDoc; related: React.ComponentProps<typeof GuideCard>[] }) {
  const [active, setActive] = useState(guide.sections[0]?.id ?? "");

  useEffect(() => {
    const ids = guide.sections.map((s) => s.id);
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
  }, [guide.sections]);

  const jump = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <main>
      {/* Article header */}
      <section className="wrap" style={{ maxWidth: 820, padding: "48px 24px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--muted)", fontSize: 13.5, fontWeight: 600, marginBottom: 22, flexWrap: "wrap" }}>
          <Link href={ROUTES.home} style={{ color: "inherit" }}>
            Home
          </Link>
          <Icon name="chevron" size={14} style={{ transform: "rotate(-90deg)" }} />
          <Link href={ROUTES.guides} style={{ color: "inherit" }}>
            Travel Guides
          </Link>
          <Icon name="chevron" size={14} style={{ transform: "rotate(-90deg)" }} />
          <span style={{ color: "var(--ink)" }}>{guide.cat}</span>
        </div>
        <span className="chip solid">{guide.cat}</span>
        <h1 style={{ fontSize: "clamp(32px,4.4vw,52px)", letterSpacing: "-0.035em", lineHeight: 1.02, margin: "16px 0 18px" }}>
          {guide.title}
        </h1>
        <p className="lead" style={{ fontSize: 19 }}>
          {guide.excerpt}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 24, paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 14.5 }}>By {guide.author}</div>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>
              {guide.updated} · {guide.read}
            </div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ maxWidth: 820, padding: "24px 24px 0" }}>
        <Placeholder label={guide.heroLabel} src={guide.heroImage ?? `guides/${guide.slug}-hero.jpg`} priority style={{ height: 380, borderRadius: 18 }} />
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
              {guide.sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => jump(s.id)}
                  style={{
                    background: "none",
                    border: 0,
                    textAlign: "left",
                    padding: "7px 14px",
                    marginLeft: -2,
                    borderLeft: `2px solid ${active === s.id ? "var(--accent)" : "transparent"}`,
                    color: active === s.id ? "var(--accent)" : "var(--muted)",
                    fontWeight: active === s.id ? 700 : 600,
                    fontSize: 13.5,
                    lineHeight: 1.4,
                    cursor: "pointer",
                  }}
                >
                  {s.heading}
                </button>
              ))}
            </div>
          </aside>

          {/* Article body */}
          <article style={{ minWidth: 0 }}>
            <p style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink)", marginBottom: 18 }}>{guide.intro}</p>

            {guide.sections.map((s) => (
              <div key={s.id}>
                <h2 id={s.id} style={{ fontSize: 30, margin: "40px 0 16px", scrollMarginTop: 92 }}>
                  {s.heading}
                </h2>
                {s.body.map((para, i) => (
                  <p key={i} style={{ fontSize: 17.5, lineHeight: 1.75, color: "var(--ink)", marginBottom: 18 }}>
                    {para}
                  </p>
                ))}
                {s.table && <BudgetTable rows={s.table} />}
                {s.cta && AFFILIATE_LIVE && <InlineCTA cta={s.cta} />}
              </div>
            ))}

            {/* Author box */}
            <div style={{ display: "flex", gap: 16, alignItems: "center", background: "var(--surface-2)", border: "1px solid var(--line)", borderRadius: 16, padding: 22, marginTop: 36 }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17 }}>{guide.author.split(" · ")[0]}</div>
                <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 4, lineHeight: 1.6 }}>{guide.authorBio}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section style={{ background: "var(--surface-2)", borderTop: "1px solid var(--line)" }}>
          <div className="wrap-wide" style={{ padding: "var(--space-8) 24px" }}>
            <h2 className="section-title" style={{ fontSize: "clamp(24px,3vw,36px)", marginBottom: 28 }}>
              Keep reading
            </h2>
            <div className="guides-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {related.map((g) => (
                <GuideCard key={g.slug} {...g} big />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
