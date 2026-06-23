import Link from "next/link"
import type { Metadata } from "next"
import { getPillars } from "@/data/pillars"

export const metadata: Metadata = {
  title: "Proportional Relationship Topics & Guides",
  description: "Complete guides covering proportional relationships, unit rates, constant of proportionality, graphs and tables, and more. Student-friendly explanations with examples.",
  alternates: {
    canonical: "https://proportionalrelationship.com/topics",
  },
  openGraph: {
    title: "Proportional Relationship Topics & Guides",
    description: "Complete guides covering proportional relationships, unit rates, constant of proportionality, and more.",
    url: "https://proportionalrelationship.com/topics",
    images: [{ url: "/images/og-default.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proportional Relationship Topics & Guides",
    description: "In-depth guides with examples and practice problems.",
    images: ["/images/og-default.webp"],
  },
}

export default function TopicsPage() {
  const topicPillars = getPillars()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <p className="text-sm text-ink/50 dark:text-ink/40 uppercase tracking-wider font-medium">Guides</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white mt-2">Topic Guides</h1>
        <p className="text-lg text-ink/60 dark:text-ink/50 mt-3">
          In-depth guides covering every proportional relationship topic. Each guide includes examples, practice problems, and links to related calculators and worksheets.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {topicPillars.map((pillar) => (
          <Link
            key={pillar.slug}
            href={`/topics/${pillar.slug}`}
            className="group block p-6 rounded-xl border border-ink/10 dark:border-ink/20 bg-white dark:bg-ink/80 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-sm transition-all"
          >
            <h2 className="text-lg font-bold text-ink dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              {pillar.title}
            </h2>
            <p className="text-sm text-ink/60 dark:text-ink/50 mt-3 leading-relaxed">
              {pillar.description}
            </p>
            <div className="mt-4 text-xs text-teal-600 dark:text-teal-400 font-medium">
              {pillar.sections.length} sections &rarr;
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
