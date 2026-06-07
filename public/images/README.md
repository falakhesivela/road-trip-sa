# Images

Images are served from a **Cloudflare R2** bucket and rendered through
`next/image` (resizing, WebP/AVIF, lazy loading). The `<Placeholder src=... />`
component shows a real photo when a source resolves, or the striped placeholder
when it doesn't.

## Setup (one-time)
1. Make the R2 bucket publicly readable (r2.dev URL) or attach a custom domain.
2. Set `NEXT_PUBLIC_IMAGE_BASE_URL` in `.env.local` to that base URL, e.g.
   `https://pub-xxxx.r2.dev` or `https://images.roadtripsa.co.za` (no trailing slash).
   `next.config.ts` reads this and whitelists the host for `next/image`.

## Adding a photo
1. Upload to R2 under a sensible key, e.g. `destinations/kruger-hero.jpg`.
2. Reference it as a **key** (not a full URL) in `lib/content.ts`:

```ts
{
  slug: "kruger",
  heroImage: "destinations/kruger-hero.jpg",   // big page hero
  cardImage: "destinations/kruger-card.jpg",   // grid thumbnail
}
```

`imageUrl()` (lib/images.ts) prepends the base URL, so you only store the key.
Guides use the same `heroImage` / `cardImage` fields.

Suggested keys:
```
destinations/<slug>-hero.jpg, destinations/<slug>-card.jpg
guides/<slug>-hero.jpg, guides/<slug>-card.jpg
home-hero.jpg
```

## One-off images (home hero, etc.)
Pass a key as `src` on the `<Placeholder>` in the page file, e.g.
`src="home-hero.jpg"`. Until you do, the striped placeholder shows.

## Notes
- Full URLs (`https://…`) and root-relative local paths (`/images/foo.jpg` in
  this folder) are passed through unchanged — handy for testing before R2 is set up.
- Use licensed images only (your own, or Unsplash/Pexels). Keep source files
  reasonably sized; next/image handles the rest.
