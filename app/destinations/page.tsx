import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { DestinationCard } from "@/components/cards";
import { destinationCards } from "@/lib/content";

export const metadata: Metadata = {
  title: "Destinations — Southern Africa Travel Guides | roadtripsa",
  description:
    "Big-Five safaris, coastal road trips, island escapes and weekend getaways across Southern Africa — all road-tested, all with honest costs.",
};

export default function DestinationsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Destinations"
        title="Where will Southern Africa take you?"
        sub="Big-Five safaris, coastal road trips, island escapes and weekend getaways — all road-tested, all with honest costs."
      />
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px var(--space-8)" }}>
        <div className="dest-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {destinationCards().map((d) => (
            <DestinationCard key={d.slug} {...d} />
          ))}
        </div>
      </section>
    </main>
  );
}
