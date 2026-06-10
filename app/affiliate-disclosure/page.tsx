import { redirect } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal";
import { AFFILIATE_LIVE } from "@/lib/config";
import { ROUTES } from "@/lib/routes";

export const metadata = pageMetadata({
  title: "Affiliate Disclosure",
  description: "How roadtripsa uses affiliate links, how we earn, and our commitment to honest, independent recommendations.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  // Hidden until there are real affiliate links to disclose — returns with AFFILIATE_LIVE.
  if (!AFFILIATE_LIVE) redirect(ROUTES.home);
  return (
    <LegalPage
      eyebrow="Affiliate disclosure"
      title="How we make money — openly"
      sub="roadtripsa is reader-supported. Here's exactly how affiliate links work and what they mean for you."
      updated="Last updated: June 2026"
      sections={[
        {
          heading: "What affiliate links are",
          body: [
            "Some of the links on roadtripsa are affiliate links. This means that if you click through to one of our travel, accommodation or car-rental partners and make a booking or purchase, we may earn a small commission.",
            "Crucially, this comes at no extra cost to you. The price you pay is exactly the same as it would be if you went to the partner directly — the commission is paid by the partner out of their own margin.",
          ],
        },
        {
          heading: "Our partners",
          body: [
            "We work with reputable travel and car-hire brands and booking platforms operating across South Africa and the wider Southern African region. Where a page contains affiliate links, you'll see a short disclosure note nearby.",
            "We only ever link to partners and products we would genuinely use or recommend ourselves. A commission never buys a better review, a higher ranking, or a recommendation we don't stand behind.",
          ],
        },
        {
          heading: "How it keeps us independent",
          body: [
            "Affiliate commissions are what allow roadtripsa to stay free to read, with no paywalls and no intrusive advertising. They fund the time it takes to research, road-test and keep our guides up to date.",
            "Our editorial recommendations are made independently of any commercial relationship. If we think the cheapest option is the best one, that's what we'll tell you — even when it earns us nothing.",
          ],
        },
        {
          heading: "Questions",
          body: [
            "If you'd like to know more about how a particular recommendation is made, or about our commercial relationships, we're happy to explain. Get in touch via our contact page any time.",
          ],
        },
      ]}
    />
  );
}
