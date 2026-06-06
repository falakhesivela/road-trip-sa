# Images

Drop real photos in here and they replace the striped placeholders automatically
(via the `<Placeholder src=... />` component, which uses `next/image` for
resizing, WebP/AVIF and lazy loading).

## Use properly-licensed photos only
- Your own photos (best — they match the "road-tested" brand).
- Free stock that allows commercial use with no attribution: **Unsplash**, **Pexels**.
- Do **not** use images grabbed from Google (usually copyrighted) or AI-generated
  shots of real places.

## Recommended sizes / format
- Hero images: ~1600×900, JPG or WebP, compressed (<300 KB ideally).
- Card / thumbnail images: ~800×600.
- next/image optimises and serves modern formats at request time, so don't
  over-optimise the source — just keep it reasonably sized.

## How to wire a photo to content

### Destinations & guides (data-driven)
Add the file here, then set the path in `lib/content.ts` on that entry:

```ts
{
  slug: "kruger",
  // ...
  heroImage: "/images/destinations/kruger-hero.jpg",   // big page hero
  cardImage: "/images/destinations/kruger-card.jpg",   // grid card thumbnail
}
```

Guides use the same `heroImage` / `cardImage` fields in their `GUIDES` entries.

Suggested layout:
```
public/images/
  destinations/<slug>-hero.jpg, <slug>-card.jpg
  guides/<slug>-hero.jpg, <slug>-card.jpg
  cars/<class>.jpg            (economy, compact, suv, 4x4)
  home-hero.jpg
  car-rentals-hero.jpg
  about-founder.jpg
```

### One-off images (home hero, car-rentals hero, about, etc.)
These render via `<Placeholder ... />` in their page files — add a `src`:

```tsx
// app/page.tsx — home hero
<Placeholder label="hero photo · ..." src="/images/home-hero.jpg" priority dark ... />
```

Until a `src` is set, the striped placeholder shows — so the site never breaks
while you're filling images in gradually.
