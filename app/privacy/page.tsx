import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/legal";

export const metadata = pageMetadata({
  title: "Privacy Policy (POPIA)",
  description: "How roadtripsa collects, uses and protects your personal information, in line with South Africa's Protection of Personal Information Act (POPIA).",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      sub="How we collect, use and protect your personal information — in line with South Africa's Protection of Personal Information Act (POPIA)."
      updated="Last updated: June 2026"
      sections={[
        {
          heading: "Who we are",
          body: [
            "roadtripsa (\"we\", \"us\") is a travel content website based in Johannesburg, South Africa. This policy explains how we handle personal information in accordance with the Protection of Personal Information Act, 2013 (POPIA).",
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "We collect the minimum information needed to run the site. This includes details you choose to give us — for example your email address when you subscribe to our newsletter, or your details when you email us.",
            "We also collect limited technical information automatically, such as your browser type, device, and anonymised usage statistics, to understand how the site is used and to improve it.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use your information to respond to your enquiries, to send you our newsletter if you've subscribed, and to maintain and improve the website. We do not sell your personal information to third parties.",
            "If a page includes an affiliate link and you click through to a third-party site, your interaction from that point on is governed by that site's own privacy policy.",
          ],
        },
        {
          heading: "Cookies & analytics",
          body: [
            "We use cookies and similar technologies to keep the site working, to remember your preferences, and to gather aggregate analytics. You can disable cookies in your browser settings, though some features may not work as well.",
          ],
        },
        {
          heading: "Embedded content & third-party services",
          body: [
            "Some destination pages embed interactive maps from Google Maps. When a page with a map loads, Google may set its own cookies and receive your IP address and browser information, in line with Google's privacy policy. We don't control these cookies.",
            "We also rely on a few trusted third parties to run the site — for example an email provider to deliver our newsletter if you subscribe, and our hosting and analytics providers. Each handles your information under its own privacy terms.",
          ],
        },
        {
          heading: "Your rights under POPIA",
          body: [
            "You have the right to ask what personal information we hold about you, to request that it be corrected or deleted, and to withdraw your consent to marketing communications at any time.",
            "To exercise any of these rights, contact us via the details on our contact page and we'll respond within a reasonable time.",
          ],
        },
        {
          heading: "Data security & retention",
          body: [
            "We take reasonable technical and organisational measures to protect your information and keep it only for as long as necessary for the purposes described above, or as required by law.",
          ],
        },
      ]}
    />
  );
}
