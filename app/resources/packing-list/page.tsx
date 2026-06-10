import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui";
import { PackingList } from "@/components/tools/packing-list";

export const metadata = pageMetadata({
  title: "Packing List Generator",
  description: "Generate a tailored Southern-Africa packing checklist by trip type and season — safari, beach, city or road trip. Tick off and print as you pack.",
  path: "/resources/packing-list",
});

export default function PackingListPage() {
  return (
    <main>
      <PageHero
        eyebrow="Free tool"
        title="Packing List Generator"
        sub="Tell us the trip and season and we'll build a tailored checklist — tick items off as you pack, or print it out."
      />
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px var(--space-8)" }}>
        <PackingList />
      </section>
    </main>
  );
}
