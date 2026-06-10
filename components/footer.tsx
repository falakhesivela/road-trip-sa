import Link from "next/link";
import { Icon, type IconName } from "./icons";
import { Logo } from "./ui";
import { ROUTES, destinationHref, guideHref } from "@/lib/routes";
import { TOOLS_LIVE, NEWSLETTER_LIVE, CAR_RENTALS_LIVE, AFFILIATE_LIVE } from "@/lib/config";
import { FooterSubscribe } from "./newsletter";

// While the free tools aren't built, the "Plan" column points at real content
// instead of dead calculator/checklist links.
const PLAN_LINKS: [string, string][] = TOOLS_LIVE
  ? [
      ["Travel Guides", ROUTES.guides],
      ["Free Tools", ROUTES.resources],
      ["Budget Calculator", ROUTES.budgetCalculator],
      ["Car Cost Calculator", ROUTES.carCostCalculator],
      ["Packing List", ROUTES.packingList],
    ]
  : [
      ["All Travel Guides", ROUTES.guides],
      ["Kruger Safari Guide", guideHref("kruger-safari-guide")],
      ["Garden Route Itinerary", guideHref("garden-route-7-day-itinerary")],
      ["Car Hire Guide", ROUTES.cars],
    ];

const COLS: [string, [string, string][]][] = [
  [
    "Explore",
    [
      ["Destinations", ROUTES.destinations],
      ["Kruger National Park", ROUTES.kruger],
      ["Garden Route", destinationHref("garden-route")],
      ["Cape Town", destinationHref("cape-town")],
      ["Mozambique", destinationHref("mozambique")],
    ],
  ],
  [
    "Car Rentals",
    [
      ["All car rentals", ROUTES.cars],
      ["OR Tambo Airport", ROUTES.cars],
      ["Cape Town Airport", ROUTES.cars],
      ["One-way rentals", ROUTES.cars],
      ["4x4 & Safari", ROUTES.cars],
    ],
  ],
  ["Plan", PLAN_LINKS],
  [
    "Company",
    [
      ["About", ROUTES.about],
      ["Contact", ROUTES.contact],
      ...(AFFILIATE_LIVE ? ([["Affiliate Disclosure", ROUTES.affiliate]] as [string, string][]) : []),
      ["Privacy (POPIA)", ROUTES.privacy],
      ["Terms of Use", ROUTES.terms],
    ],
  ],
];

export function Footer() {
  return (
    <footer style={{ background: "var(--deep)", color: "rgba(255,255,255,.86)", marginTop: 0 }}>
      <div className="wrap-wide" style={{ padding: "64px 24px 36px" }}>
        <div
          className="footer-grid"
          style={{ display: "grid", gridTemplateColumns: `1.4fr repeat(${CAR_RENTALS_LIVE ? 4 : 3}, 1fr)`, gap: 32, alignItems: "start" }}
        >
          <div>
            <Logo dark />
            <p style={{ color: "rgba(255,255,255,.6)", fontSize: 14.5, marginTop: 16, maxWidth: 260, lineHeight: 1.6 }}>
              Honest, road-tested Southern-Africa travel guides — built by a Joburg traveller, for travellers.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {(["globe", "users", "heart"] as IconName[]).map((ic) => (
                <span
                  key={ic}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 10,
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(255,255,255,.08)",
                    color: "#fff",
                  }}
                >
                  <Icon name={ic} size={18} />
                </span>
              ))}
            </div>
            {NEWSLETTER_LIVE && (
              <div style={{ marginTop: 28 }}>
                <FooterSubscribe />
              </div>
            )}
          </div>
          {COLS.filter(([title]) => CAR_RENTALS_LIVE || title !== "Car Rentals").map(([title, links]) => (
            <div key={title}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 13,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 16,
                }}
              >
                {title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {links.map(([l, p], i) => (
                  <Link
                    key={i}
                    href={p}
                    className="footer-link"
                    style={{ textAlign: "left", padding: 0, fontFamily: "var(--font-body)", fontSize: 14.5 }}
                  >
                    {l}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,.12)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>
            © 2026 roadtripsa. Made in Johannesburg, South Africa.
          </span>
          {AFFILIATE_LIVE && (
            <span
              style={{
                fontSize: 12.5,
                color: "rgba(255,255,255,.5)",
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                maxWidth: 520,
              }}
            >
              <Icon name="tag" size={13} /> Some links are affiliate links. We may earn a commission at no extra cost to
              you.
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}
