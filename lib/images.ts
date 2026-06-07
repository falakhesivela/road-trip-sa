// Resolve an image reference to a full URL.
//
// Images live in a Cloudflare R2 bucket. Content stores a short key
// (e.g. "destinations/kruger-hero.jpg") and we prepend the bucket's public
// base URL from NEXT_PUBLIC_IMAGE_BASE_URL.
//
// Pass-throughs (returned unchanged): empty values, full URLs (http/https),
// and root-relative local paths (starting with "/") so anything in /public
// still works during development.

const BASE = process.env.NEXT_PUBLIC_IMAGE_BASE_URL?.replace(/\/$/, "");

export function imageUrl(ref?: string): string | undefined {
  if (!ref) return undefined;
  if (/^https?:\/\//.test(ref) || ref.startsWith("/")) return ref;
  if (!BASE) return undefined; // R2 base not configured yet → show placeholder
  return `${BASE}/${ref.replace(/^\//, "")}`;
}
