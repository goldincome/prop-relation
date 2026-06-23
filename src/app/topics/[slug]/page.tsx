import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getPillar, getPillarSlugs } from "@/data/pillars"
import { breadcrumbSchema } from "@/lib/schema"
import { PillarPageLayout } from "@/components/tools/PillarPageLayout"
import { Breadcrumbs } from "@/components/blog/Breadcrumbs"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const pillar = getPillar(slug)

  if (!pillar) return {}

  return {
    title: pillar.metaTitle,
    description: pillar.metaDescription,
    keywords: pillar.keywords,
    alternates: {
      canonical: `https://proportionalrelationship.com/topics/${pillar.slug}`,
    },
    openGraph: {
      title: pillar.metaTitle,
      description: pillar.metaDescription,
      url: `https://proportionalrelationship.com/topics/${pillar.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: pillar.metaTitle,
      description: pillar.metaDescription,
    },
  }
}

export function generateStaticParams() {
  const slugs = getPillarSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function PillarPage({ params }: Props) {
  const { slug } = await params
  const pillar = getPillar(slug)

  if (!pillar) {
    notFound()
  }

  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", url: "https://proportionalrelationship.com" },
    { name: "Topics", url: "https://proportionalrelationship.com/topics" },
    { name: pillar.title, url: `https://proportionalrelationship.com/topics/${pillar.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <PillarPageLayout pillar={pillar} />
    </>
  )
}
