import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui";
import { BudgetCalculator } from "@/components/tools/budget-calculator";

export const metadata = pageMetadata({
  title: "Travel Budget Calculator",
  description: "Estimate the full cost of a Southern-Africa trip in rands — accommodation, car hire, food, activities and flights — with this free budget calculator.",
  path: "/resources/budget-calculator",
});

export default function BudgetCalculatorPage() {
  return (
    <main>
      <PageHero
        eyebrow="Free tool"
        title="Travel Budget Calculator"
        sub="Build a realistic trip budget in rands in under a minute. Adjust the numbers to match your plans."
      />
      <section className="wrap-wide" style={{ padding: "var(--space-7) 24px var(--space-8)" }}>
        <BudgetCalculator />
      </section>
    </main>
  );
}
