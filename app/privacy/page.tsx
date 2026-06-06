import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";

export const metadata: Metadata = {
  title: "Privacy Policy (POPIA) | roadtripsa",
  description:
    "How roadtripsa collects, uses and protects your personal information, in line with South Africa's Protection of Personal Information Act (POPIA).",
};

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
            "We collect the minimum information needed to run the site. This includes details you choose to give us — for example your name and email address when you subscribe to our newsletter or send us a message via the contact form.",
            "We also collect limited technical information automatically, such as your browser type, device, and anonymised usage statistics, to understand how the site is used and to improve it.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use your information to respond to your enquiries, to send you our newsletter if you've subscribed, and to maintain and improve the website. We do not sell your personal information to third parties.",
            "When you follow an affiliate link to one of our partners, your interaction from that point on is governed by that partner's own privacy policy.",
          ],
        },
        {
          heading: "Cookies & analytics",
          body: [
            "We use cookies and similar technologies to keep the site working, to remember your preferences, and to gather aggregate analytics. You can disable cookies in your browser settings, though some features may not work as well.",
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
