import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui";
import { GuideCard } from "@/components/cards";
import { guideCards } from "@/lib/content";

export const metadata = pageMetadata({
  title: "Travel Guides — Southern Africa Itineraries & Tips",
  description: "Practical, road-tested travel guides for Southern Africa — safari planning, road-trip itineraries, budget getaways and on-the-ground tips.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Travel guides"
        title="Practical guides, written from the road"
        sub="No fluff and no fake reviews — just up-to-date itineraries, safari know-how and money-saving tips for getting the most out of every rand."
      />
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px var(--space-8)" }}>
        <div className="guides-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {guideCards().map((g) => (
            <GuideCard key={g.slug} {...g} big />
          ))}
        </div>
      </section>
    </main>
  );
}
