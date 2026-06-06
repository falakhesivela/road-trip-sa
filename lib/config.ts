// ============================================================
// Site feature flags & launch configuration
// ============================================================
//
// AFFILIATE_LIVE gates every feature that depends on a real
// affiliate partnership (live flight/car search, "View deal" and
// other outbound booking buttons).
//
// While it is `false` the site presents as a finished, honest
// CONTENT site — ideal for affiliate-network review (e.g.
// Travelstart): no dead booking buttons, no claims of live search
// we can't yet deliver.
//
// 👉 AFTER you're approved and have your real affiliate links:
//    1. Set AFFILIATE_LIVE = true below.
//    2. Fill in the real partner URLs in PARTNER_LINKS.
//    3. Point the search widget / "View deal" CTAs at those URLs.
// ============================================================

export const AFFILIATE_LIVE = false;

// Free calculators / planners on the Resources page.
// The Budget Calculator, Car-Rental Cost Calculator and Packing List Generator
// are fully working client-side tools, so this is on.
export const TOOLS_LIVE = true;

// Email capture (newsletter signup). Wired to Resend via /api/subscribe.
// Keep false until you've set RESEND_API_KEY + RESEND_AUDIENCE_ID in .env.local
// (see .env.example), then flip to true to show the signup form.
export const NEWSLETTER_LIVE = true;

// Real affiliate deep-links / search URLs go here once approved.
// Leave as "#" until then — they are only used when AFFILIATE_LIVE is true.
export const PARTNER_LINKS = {
  flightSearch: "#",
  carSearch: "#",
  carDeal: "#",
  stayCheck: "#",
} as const;
