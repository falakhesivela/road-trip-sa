import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";

export const metadata: Metadata = {
  title: "Terms of Use | roadtripsa",
  description: "The terms and conditions that govern your use of the roadtripsa website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Use"
      sub="The terms and conditions that govern your use of the roadtripsa website. By using the site, you agree to these terms."
      updated="Last updated: June 2026"
      sections={[
        {
          heading: "Acceptance of terms",
          body: [
            "By accessing and using roadtripsa, you agree to be bound by these Terms of Use. If you do not agree with any part of them, please do not use the site.",
          ],
        },
        {
          heading: "Use of content",
          body: [
            "All content on roadtripsa — text, guides, layout and graphics — is provided for your personal, non-commercial use. You may share links to our pages freely, but you may not republish or reproduce substantial portions of our content without permission.",
          ],
        },
        {
          heading: "Accuracy of information",
          body: [
            "We work hard to keep prices, opening times, routes and other travel details accurate and up to date, but the travel industry changes constantly. Information is provided \"as is\" and for general guidance only.",
            "Always confirm prices, availability, entry requirements and conditions directly with the relevant provider before you book or travel. We are not liable for any loss arising from reliance on information on this site.",
          ],
        },
        {
          heading: "Affiliate links & third parties",
          body: [
            "Some links on this site are affiliate links, as described in our Affiliate Disclosure. When you click through to a partner, you leave roadtripsa and become subject to that third party's terms and conditions. We are not responsible for the products, services or content of third-party websites.",
          ],
        },
        {
          heading: "Changes to these terms",
          body: [
            "We may update these Terms of Use from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.",
          ],
        },
        {
          heading: "Governing law",
          body: [
            "These terms are governed by the laws of the Republic of South Africa.",
          ],
        },
      ]}
    />
  );
}
