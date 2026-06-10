import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/guide-article";
import { GUIDES, getGuide, guideCards } from "@/lib/content";
import { AFFILIATE_LIVE } from "@/lib/config";
import { imageUrl } from "@/lib/images";
import { pageMetadata, articleLd, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/guides/${guide.slug}`,
    image: imageUrl(guide.heroImage ?? `guides/${guide.slug}-hero.jpg`),
    type: "article",
  });
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

  const related = guideCards()
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 3);

  const image = imageUrl(guide.heroImage ?? `guides/${guide.slug}-hero.jpg`);
  const ld = [
    articleLd({
      title: guide.title,
      description: guide.excerpt,
      path: `/guides/${guide.slug}`,
      image,
      author: guide.author.split(" · ")[0],
    }),
    breadcrumbLd([
      { name: "Home", path: "/" },
      { name: "Travel Guides", path: "/guides" },
      { name: guide.title, path: `/guides/${guide.slug}` },
    ]),
  ];

  return (
    <>
      <JsonLd data={ld} />
      <GuideArticle guide={guide} related={related} />
    </>
  );
}
