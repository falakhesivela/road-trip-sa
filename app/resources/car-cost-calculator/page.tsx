import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui";
import { CarCostCalculator } from "@/components/tools/car-cost-calculator";

export const metadata = pageMetadata({
  title: "Car-Rental Cost Calculator",
  description: "Work out the true cost of hiring a car in South Africa — rental, fuel, insurance, one-way and cross-border fees — with this free calculator.",
  path: "/resources/car-cost-calculator",
});

export default function CarCostCalculatorPage() {
  return (
    <main>
      <PageHero
        eyebrow="Free tool"
        title="Car-Rental Cost Calculator"
        sub="The daily rate is only half the story. Add fuel, extras and fees to see what hiring a car will really cost."
      />
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px var(--space-8)" }}>
        <CarCostCalculator />
      </section>
    </main>
  );
}
