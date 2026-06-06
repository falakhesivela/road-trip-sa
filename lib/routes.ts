// Central route map — keeps navigation links consistent and easy to maintain.
export const ROUTES = {
  home: "/",
  destinations: "/destinations",
  kruger: "/destinations/kruger",
  cars: "/car-rentals",
  guides: "/guides",
  resources: "/resources",
  budgetCalculator: "/resources/budget-calculator",
  carCostCalculator: "/resources/car-cost-calculator",
  packingList: "/resources/packing-list",
  about: "/about",
  contact: "/contact",
  // Legal / compliance
  affiliate: "/affiliate-disclosure",
  privacy: "/privacy",
  terms: "/terms",
} as const;

// Slug-based helpers for dynamic content routes.
export const destinationHref = (slug: string) => `/destinations/${slug}`;
export const guideHref = (slug: string) => `/guides/${slug}`;
