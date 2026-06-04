import { PageHero } from "@/components/ui";
import { DestinationCard, type Destination } from "@/components/cards";

const ALL_DESTS: Destination[] = [
  { name: "Kruger National Park", region: "Mpumalanga & Limpopo", tag: "Safari", price: "R1,950", label: "safari sunset" },
  { name: "Cape Town & Winelands", region: "Western Cape", tag: "City + Wine", price: "R820", label: "table mountain" },
  { name: "Garden Route", region: "Western & Eastern Cape", tag: "Road trip", price: "R1,200", label: "coastal cliffs" },
  { name: "Panorama Route", region: "Mpumalanga", tag: "Scenery", price: "R740", label: "blyde canyon" },
  { name: "Durban & KZN", region: "KwaZulu-Natal", tag: "Beaches", price: "R690", label: "golden mile" },
  { name: "Joburg Getaways", region: "Gauteng", tag: "Weekend", price: "R450", label: "magaliesberg" },
  { name: "Mozambique", region: "Tofo & Bazaruto", tag: "Islands", price: "R3,100", label: "indian ocean dhow" },
  { name: "Botswana", region: "Okavango & Chobe", tag: "Wilderness", price: "R4,200", label: "okavango delta" },
  { name: "Victoria Falls", region: "Zimbabwe", tag: "Adventure", price: "R2,400", label: "the falls" },
];

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
          {ALL_DESTS.map((d) => (
            <DestinationCard key={d.name} {...d} />
          ))}
        </div>
      </section>
    </main>
  );
}
