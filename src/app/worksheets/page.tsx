import Link from "next/link"
import type { Metadata } from "next"
import { worksheets } from "@/data/worksheets"

export const metadata: Metadata = {
  title: "Proportional Relationships Worksheets",
  description: "Download printable proportional relationships worksheets with answer keys. Practice tables, graphs, equations, and word problems.",
  alternates: {
    canonical: "https://proportionalrelationship.com/worksheets",
  },
  openGraph: {
    title: "Proportional Relationships Worksheets",
    description: "Download printable proportional relationships worksheets with answer keys for 7th grade math.",
    url: "https://proportionalrelationship.com/worksheets",
    images: [{ url: "/images/og-default.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proportional Relationships Worksheets",
    description: "Printable worksheets with answer keys for proportional relationships.",
    images: ["/images/og-default.webp"],
  },
}

export default function WorksheetsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <p className="text-sm text-ink/50 dark:text-ink/40 uppercase tracking-wider font-medium">Resources</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white mt-2">Worksheets</h1>
        <p className="text-lg text-ink/60 dark:text-ink/50 mt-3">
          Download printable practice sets with answer keys for proportional relationships, unit rates, graphs, equations, and more.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {worksheets.map((ws) => (
          <Link
            key={ws.slug}
            href={`/worksheets/${ws.slug}`}
            className="group block p-5 rounded-xl border border-ink/10 dark:border-ink/20 bg-white dark:bg-ink/80 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold text-ink dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {ws.title}
              </h3>
              <span className="shrink-0 text-xs font-medium px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300">
                {ws.price}
              </span>
            </div>
            <p className="text-sm text-ink/60 dark:text-ink/50 mt-2 leading-relaxed">
              {ws.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-xs px-2 py-0.5 rounded bg-offwhite dark:bg-ink/60 text-ink/50 dark:text-ink/40 border border-ink/10 dark:border-ink/20">
                {ws.pages} pages
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-offwhite dark:bg-ink/60 text-ink/50 dark:text-ink/40 border border-ink/10 dark:border-ink/20">
                {ws.format}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-offwhite dark:bg-ink/60 text-ink/50 dark:text-ink/40 border border-ink/10 dark:border-ink/20">
                {ws.gradeLevel}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
