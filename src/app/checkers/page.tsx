import Link from "next/link"
import type { Metadata } from "next"
import { getToolsByType } from "@/data/tools"

export const metadata: Metadata = {
  title: "Proportional Relationship Checkers",
  description: "Check whether tables, graphs, equations, and cross multiplications represent proportional relationships. Free online math checkers.",
  alternates: {
    canonical: "https://proportionalrelationship.com/checkers",
  },
  openGraph: {
    title: "Proportional Relationship Checkers",
    description: "Instant yes/no answers — is a table, graph, or equation proportional? Free online checkers.",
    url: "https://proportionalrelationship.com/checkers",
    images: [{ url: "/images/og-default.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proportional Relationship Checkers",
    description: "Check if tables, graphs, and equations are proportional.",
    images: ["/images/og-default.webp"],
  },
}

export default function CheckersPage() {
  const checkers = getToolsByType("checker")

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <p className="text-sm text-ink/50 dark:text-ink/40 uppercase tracking-wider font-medium">Tools</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white mt-2">Checkers</h1>
        <p className="text-lg text-ink/60 dark:text-ink/50 mt-3">
          Quick-check tools that tell you whether a table, graph, equation, or cross multiplication shows a proportional relationship.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {checkers.map((tool) => (
          <Link
            key={tool.slug}
            href={`/checkers/${tool.slug}`}
            className="group block p-5 rounded-xl border border-ink/10 dark:border-ink/20 bg-white dark:bg-ink/80 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-sm transition-all"
          >
            <h3 className="font-semibold text-ink dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              {tool.title}
            </h3>
            <p className="text-sm text-ink/60 dark:text-ink/50 mt-2 leading-relaxed">
              {tool.description}
            </p>
            <div className="mt-3 text-xs text-teal-600 dark:text-teal-400 font-mono">
              {tool.formula}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
