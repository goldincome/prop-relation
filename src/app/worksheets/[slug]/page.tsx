import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getWorksheet, getWorksheetSlugs } from "@/data/worksheets"
import { breadcrumbSchema } from "@/lib/schema"
import { WorksheetPageLayout } from "@/components/tools/WorksheetPageLayout"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const worksheet = getWorksheet(slug)

  if (!worksheet) return {}

  return {
    title: worksheet.metaTitle,
    description: worksheet.metaDescription,
    alternates: {
      canonical: `https://proportionalrelationship.com/worksheets/${worksheet.slug}`,
    },
    openGraph: {
      title: worksheet.metaTitle,
      description: worksheet.metaDescription,
      url: `https://proportionalrelationship.com/worksheets/${worksheet.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: worksheet.metaTitle,
      description: worksheet.metaDescription,
    },
  }
}

export function generateStaticParams() {
  const slugs = getWorksheetSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function WorksheetPage({ params }: Props) {
  const { slug } = await params
  const worksheet = getWorksheet(slug)

  if (!worksheet) {
    notFound()
  }

  const breadcrumbLd = breadcrumbSchema([
    { name: "Home", url: "https://proportionalrelationship.com" },
    { name: "Worksheets", url: "https://proportionalrelationship.com/worksheets" },
    { name: worksheet.title, url: `https://proportionalrelationship.com/worksheets/${worksheet.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <WorksheetPageLayout worksheet={worksheet} />
    </>
  )
}
