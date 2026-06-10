import type { Metadata } from "next";

// Production origin. Override per-environment with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://roadtripsa.co.za").replace(/\/$/, "");
export const SITE_NAME = "roadtripsa";
export const SITE_DESCRIPTION =
  "Honest, road-tested Southern-Africa travel guides — Kruger, the Garden Route, Cape Town and beyond. When to go, what to do, what it costs, and how to plan it yourself.";

/** Absolute URL for a path (for canonicals, OG, sitemap, JSON-LD). */
export const absoluteUrl = (path = "/") => `${SITE_URL}${path === "/" ? "" : path.startsWith("/") ? path : `/${path}`}`;

type PageMetaArgs = {
  title: string;
  description: string;
  /** site-relative path, e.g. "/guides/kruger-safari-guide" */
  path: string;
  /** absolute image URL (e.g. resolved R2 url); falls back to the default OG image */
  image?: string;
  type?: "website" | "article";
};

/** Build SEO-complete Metadata for a page: canonical + OpenGraph + Twitter. */
export function pageMetadata({ title, description, path, image, type = "website" }: PageMetaArgs): Metadata {
  const url = absoluteUrl(path);
  const images = image ? [{ url: image }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE_NAME, locale: "en_ZA", type, images },
    twitter: { card: "summary_large_image", title, description, images: image ? [image] : undefined },
  };
}

/* ---------- JSON-LD builders (plain objects; render with <JsonLd />) ---------- */

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/icon.svg"),
    description: SITE_DESCRIPTION,
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function articleLd({
  title,
  description,
  path,
  image,
  author,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: image ? [image] : undefined,
    author: { "@type": "Person", name: author },
    publisher: { "@type": "Organization", name: SITE_NAME, logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") } },
    mainEntityOfPage: absoluteUrl(path),
  };
}
