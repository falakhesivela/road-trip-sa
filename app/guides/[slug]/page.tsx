import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guide-article";
import { GUIDES, getGuide } from "@/lib/content";
import { AFFILIATE_LIVE } from "@/lib/config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | roadtripsa`,
    description: guide.excerpt,
    openGraph: { title: guide.title, description: guide.excerpt, type: "article" },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const found = getGuide(slug);
  if (!found) notFound();

  // Until affiliate booking is live, strip the inline booking CTAs so they
  // never reach the client (no dead buttons, nothing to discover in page source).
  const guide = AFFILIATE_LIVE
    ? found
    : { ...found, sections: found.sections.map((s) => ({ ...s, cta: undefined })) };

  const related = GUIDES.filter((g) => g.slug !== guide.slug)
    .slice(0, 3)
    .map((g) => ({ slug: g.slug, cat: g.cat, title: g.title, read: g.read, label: g.cardLabel }));

  return <GuideArticle guide={guide} related={related} />;
}
