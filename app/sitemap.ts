import type { MetadataRoute } from "next";
import { DESTINATIONS, GUIDES } from "@/lib/content";
import { ROUTES } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";
import { CAR_RENTALS_LIVE, TOOLS_LIVE, AFFILIATE_LIVE } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly"
  ): MetadataRoute.Sitemap[number] => ({ url: absoluteUrl(path), lastModified: now, changeFrequency, priority });

  const urls: MetadataRoute.Sitemap = [
    entry("/", 1, "weekly"),
    entry(ROUTES.destinations, 0.9, "weekly"),
    ...DESTINATIONS.map((d) => entry(`/destinations/${d.slug}`, 0.8)),
    entry(ROUTES.guides, 0.9, "weekly"),
    ...GUIDES.map((g) => entry(`/guides/${g.slug}`, 0.7)),
    entry(ROUTES.about, 0.4),
    entry(ROUTES.contact, 0.4),
    entry(ROUTES.privacy, 0.3, "yearly"),
    entry(ROUTES.terms, 0.3, "yearly"),
  ];

  if (AFFILIATE_LIVE) urls.push(entry(ROUTES.affiliate, 0.3, "yearly"));

  if (TOOLS_LIVE) {
    urls.push(
      entry(ROUTES.resources, 0.5),
      entry(ROUTES.budgetCalculator, 0.5),
      entry(ROUTES.carCostCalculator, 0.5),
      entry(ROUTES.packingList, 0.5)
    );
  }
  if (CAR_RENTALS_LIVE) {
    urls.push(entry(ROUTES.cars, 0.7, "weekly"));
  }

  return urls;
}
