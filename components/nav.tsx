"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Icon, type IconName } from "./icons";
import { Logo } from "./ui";
import { ROUTES, destinationHref } from "@/lib/routes";
import { AFFILIATE_LIVE, TOOLS_LIVE } from "@/lib/config";

const DEST_LINKS: [string, string, string][] = [
  ["Kruger National Park", "Big Five safari country", destinationHref("kruger")],
  ["Garden Route", "Coastal road-trip classic", destinationHref("garden-route")],
  ["Cape Town & Winelands", "City, mountain & vineyards", destinationHref("cape-town")],
  ["Joburg Getaways", "Weekend escapes near GP", destinationHref("joburg-getaways")],
  ["Durban & KZN", "Warm-water beaches", destinationHref("durban-kzn")],
  ["Panorama Route", "Mpumalanga viewpoints", destinationHref("panorama-route")],
  ["Mozambique", "Indian-Ocean islands", destinationHref("mozambique")],
  ["Victoria Falls", "Zimbabwe & the Zambezi", destinationHref("victoria-falls")],
];

const CAR_LINKS: [string, string, string][] = [
  ["OR Tambo Airport", "Johannesburg pickups", ROUTES.cars],
  ["Cape Town Airport", "Mother City hire", ROUTES.cars],
  ["Kruger / Nelspruit", "Safari gateway", ROUTES.cars],
  ["Garden Route", "One-way friendly", ROUTES.cars],
  ["One-Way Rentals", "Drop where you like", ROUTES.cars],
  ["4x4 & Safari", "Bush-ready vehicles", ROUTES.cars],
];

function MegaItem({
  title,
  sub,
  href,
  icon,
  onNavigate,
}: {
  title: string;
  sub: string;
  href: string;
  icon: IconName;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--surface-2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
      style={{
        display: "flex",
        gap: 12,
        alignItems: "center",
        textAlign: "left",
        background: "transparent",
        border: 0,
        borderRadius: 12,
        padding: "10px 12px",
        width: "100%",
        transition: "background .15s ease",
      }}
    >
      <span
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          flex: "none",
          background: "var(--accent-soft)",
          color: "var(--accent-press)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Icon name={icon} size={19} />
      </span>
      <span style={{ minWidth: 0 }}>
        <span style={{ display: "block", fontWeight: 700, fontSize: 14.5, color: "var(--ink)" }}>{title}</span>
        <span style={{ display: "block", fontSize: 12.5, color: "var(--muted)" }}>{sub}</span>
      </span>
    </Link>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      style={{
        background: "none",
        border: 0,
        padding: "8px 2px",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 15,
        color: active ? "var(--accent)" : "var(--ink)",
        position: "relative",
      }}
    >
      {label}
    </Link>
  );
}

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState<"dest" | "cars" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const closeT = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenus = () => {
    setOpen(null);
    setMobile(false);
  };

  const hover = (key: "dest" | "cars") => {
    if (closeT.current) clearTimeout(closeT.current);
    setOpen(key);
  };
  const leave = () => {
    closeT.current = setTimeout(() => setOpen(null), 120);
  };

  const isActive = (route: string) => pathname === route;

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <div
        style={{
          background: scrolled ? "rgba(251,248,243,.86)" : "rgba(251,248,243,.6)",
          backdropFilter: "saturate(160%) blur(14px)",
          WebkitBackdropFilter: "saturate(160%) blur(14px)",
          borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
          transition: "background .25s ease, border-color .25s ease",
        }}
      >
        <div className="wrap-wide" style={{ display: "flex", alignItems: "center", gap: 18, height: 68 }}>
          <Logo />

          <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 22, marginLeft: 14 }}>
            <NavLink href={ROUTES.home} label="Home" active={isActive(ROUTES.home)} />

            <div onMouseEnter={() => hover("dest")} onMouseLeave={leave} style={{ position: "relative" }}>
              <Link
                href={ROUTES.destinations}
                style={{
                  background: "none",
                  border: 0,
                  padding: "8px 2px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 15,
                  color: pathname.startsWith("/destinations") ? "var(--accent)" : "var(--ink)",
                }}
              >
                Destinations{" "}
                <Icon
                  name="chevron"
                  size={15}
                  stroke={2.4}
                  style={{ transform: open === "dest" ? "rotate(180deg)" : "none", transition: "transform .2s" }}
                />
              </Link>
            </div>

            <div onMouseEnter={() => hover("cars")} onMouseLeave={leave} style={{ position: "relative" }}>
              <Link
                href={ROUTES.cars}
                style={{
                  background: "none",
                  border: 0,
                  padding: "8px 2px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 15,
                  color: isActive(ROUTES.cars) ? "var(--accent)" : "var(--ink)",
                }}
              >
                Car Rentals{" "}
                <Icon
                  name="chevron"
                  size={15}
                  stroke={2.4}
                  style={{ transform: open === "cars" ? "rotate(180deg)" : "none", transition: "transform .2s" }}
                />
              </Link>
            </div>

            <NavLink href={ROUTES.guides} label="Travel Guides" active={isActive(ROUTES.guides)} />
            {TOOLS_LIVE && <NavLink href={ROUTES.resources} label="Resources" active={isActive(ROUTES.resources)} />}
            <NavLink href={ROUTES.about} label="About" active={isActive(ROUTES.about)} />
          </nav>

          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12 }}>
            {AFFILIATE_LIVE && (
              <Link
                className="nav-desktop"
                href={ROUTES.home}
                aria-label="Search"
                style={{ background: "none", border: 0, color: "var(--ink)", display: "grid", placeItems: "center", padding: 6 }}
              >
                <Icon name="search" size={20} />
              </Link>
            )}
            <Link className="btn btn-primary btn-sm nav-desktop" href={ROUTES.cars}>
              Find a car
            </Link>
            <button
              className="nav-mobile-btn"
              onClick={() => setMobile((m) => !m)}
              aria-label="Menu"
              style={{ background: "none", border: 0, color: "var(--ink)", padding: 6 }}
            >
              <Icon name={mobile ? "x" : "menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mega dropdown */}
        {(open === "dest" || open === "cars") && (
          <div onMouseEnter={() => hover(open)} onMouseLeave={leave} style={{ position: "absolute", left: 0, right: 0, top: 68 }}>
            <div className="wrap-wide">
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--line)",
                  borderRadius: 18,
                  boxShadow: "var(--sh-lg)",
                  padding: 16,
                  marginTop: 8,
                  display: "grid",
                  gridTemplateColumns: open === "dest" ? "repeat(4, 1fr)" : "repeat(3, 1fr) 1.1fr",
                  gap: 4,
                  maxWidth: 980,
                }}
              >
                {(open === "dest" ? DEST_LINKS : CAR_LINKS).map(([t, sub, href]) => (
                  <MegaItem
                    key={t}
                    title={t}
                    sub={sub}
                    icon={open === "dest" ? "pin" : "car"}
                    href={href}
                    onNavigate={closeMenus}
                  />
                ))}
                {open === "cars" && (
                  <div
                    style={{
                      background: "var(--deep)",
                      borderRadius: 14,
                      padding: 16,
                      color: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gridColumn: "4",
                    }}
                  >
                    <div>
                      <div className="eyebrow on-dark" style={{ marginBottom: 6 }}>
                        Best value
                      </div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, lineHeight: 1.2 }}>
                        Compare 20+ rental brands in one search
                      </div>
                    </div>
                    <Link
                      className="btn btn-sm"
                      style={{ background: "var(--gold)", color: "var(--ink)", marginTop: 14 }}
                      href={ROUTES.cars}
                    >
                      Search cars <Icon name="arrow" size={15} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile sheet */}
      {mobile && (
        <div style={{ background: "var(--surface)", borderBottom: "1px solid var(--line)", boxShadow: "var(--sh-md)" }}>
          <div className="wrap" style={{ padding: "14px 24px 22px", display: "flex", flexDirection: "column", gap: 4 }}>
            {(
              [
                ["Home", ROUTES.home],
                ["Destinations", ROUTES.destinations],
                ["Car Rentals", ROUTES.cars],
                ["Travel Guides", ROUTES.guides],
                ...(TOOLS_LIVE ? [["Resources", ROUTES.resources]] : []),
                ["About", ROUTES.about],
                ["Contact", ROUTES.contact],
              ] as [string, string][]
            ).map(([l, p]) => (
              <Link
                key={p}
                href={p}
                onClick={() => setMobile(false)}
                style={{
                  background: "none",
                  border: 0,
                  textAlign: "left",
                  padding: "12px 4px",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: 17,
                  borderBottom: "1px solid var(--line)",
                  color: "var(--ink)",
                }}
              >
                {l}
              </Link>
            ))}
            <button
              className="btn btn-primary"
              style={{ marginTop: 14 }}
              onClick={() => {
                setMobile(false);
                router.push(ROUTES.cars);
              }}
            >
              Find a car
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
