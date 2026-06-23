import type { MetadataRoute } from "next"
import { getAllSlugs, getCategories, getAllTags } from "@/lib/blog"
import { getToolSlugs, getTool } from "@/data/tools"
import { getPillarSlugs } from "@/data/pillars"
import { getWorksheetSlugs } from "@/data/worksheets"

const BASE = "https://proportionalrelationship.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/calculators`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/checkers`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/topics`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/worksheets`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/resources`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/teachers`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources/parents`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/tutoring`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.4 },
  ]

  const calculatorPages: MetadataRoute.Sitemap = getToolSlugs()
    .filter((slug) => getTool(slug)?.type === "calculator")
    .map((slug) => ({
      url: `${BASE}/calculators/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))

  const checkerPages: MetadataRoute.Sitemap = getToolSlugs()
    .filter((slug) => getTool(slug)?.type === "checker")
    .map((slug) => ({
      url: `${BASE}/checkers/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))

  const pillarPages: MetadataRoute.Sitemap = getPillarSlugs().map((slug) => ({
    url: `${BASE}/topics/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const blogSlugs = getAllSlugs()
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const categoryPages: MetadataRoute.Sitemap = getCategories().map((cat) => ({
    url: `${BASE}/blog/category/${cat}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  const tagPages: MetadataRoute.Sitemap = getAllTags().map((tag) => ({
    url: `${BASE}/blog/tag/${encodeURIComponent(tag)}`,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }))

  const worksheetPages: MetadataRoute.Sitemap = getWorksheetSlugs().map((slug) => ({
    url: `${BASE}/worksheets/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...calculatorPages,
    ...checkerPages,
    ...pillarPages,
    ...blogPages,
    ...categoryPages,
    ...tagPages,
    ...worksheetPages,
  ]
}
