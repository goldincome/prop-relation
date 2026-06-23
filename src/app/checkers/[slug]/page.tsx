import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getTool, getToolSlugs } from "@/data/tools"
import { ToolPageLayout } from "@/components/tools/ToolPageLayout"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tool = getTool(slug)
  if (!tool || tool.type !== "checker") return {}

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    keywords: tool.keywords,
    alternates: {
      canonical: `https://proportionalrelationship.com/checkers/${tool.slug}`,
    },
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      url: `https://proportionalrelationship.com/checkers/${tool.slug}`,
      images: [{ url: "/images/og-default.webp", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: tool.metaTitle,
      description: tool.metaDescription,
      images: ["/images/og-default.webp"],
    },
  }
}

export function generateStaticParams() {
  return getToolSlugs()
    .filter((slug) => getTool(slug)?.type === "checker")
    .map((slug) => ({ slug }))
}

export default async function CheckerPage({ params }: Props) {
  const { slug } = await params
  const tool = getTool(slug)

  if (!tool || tool.type !== "checker") notFound()

  return <ToolPageLayout tool={tool} />
}
