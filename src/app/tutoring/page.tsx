import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/blog/Breadcrumbs"

export const metadata: Metadata = {
  title: "Proportional Relationships Tutoring | Find a Math Tutor",
  description: "Get one-on-one math tutoring for proportional relationships, unit rates, and constant of proportionality. Find a qualified tutor today.",
  alternates: { canonical: "https://proportionalrelationship.com/tutoring" },
  openGraph: {
    title: "Proportional Relationships Tutoring",
    description: "Find a math tutor for proportional relationships help.",
    url: "https://proportionalrelationship.com/tutoring",
    siteName: "Proportional Relationship",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Math Tutoring", description: "Find a tutor for proportional relationships." },
}

export default function TutoringPage() {
  const breadcrumbItems = [{ label: "Tutoring" }]

  return (
    <div className="min-h-screen bg-offwhite dark:bg-ink transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white leading-tight mb-4">
              Get Math Tutoring Help
            </h1>
            <p className="text-lg text-ink/60 dark:text-ink/50">
              Whether you are a student stuck on proportional relationships or a parent looking for
              extra support, a qualified math tutor can make the difference.
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Why Get a Tutor?</h2>
            <ul className="space-y-3 text-ink/70 dark:text-ink/50">
              <li className="flex gap-3"><span className="text-teal-600 flex-shrink-0 font-bold">1.</span> <span>One-on-one attention that addresses your child's specific gaps in understanding</span></li>
              <li className="flex gap-3"><span className="text-teal-600 flex-shrink-0 font-bold">2.</span> <span>Step-by-step explanations for tables, graphs, equations, and word problems</span></li>
              <li className="flex gap-3"><span className="text-teal-600 flex-shrink-0 font-bold">3.</span> <span>Flexible scheduling including evenings and weekends</span></li>
              <li className="flex gap-3"><span className="text-teal-600 flex-shrink-0 font-bold">4.</span> <span>Online sessions from home — no driving required</span></li>
            </ul>
          </section>

          <section className="mb-8 p-6 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 text-center">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Find a Tutor on Wyzant</h2>
            <p className="text-ink/60 dark:text-ink/50 mb-4">
              Wyzant connects you with qualified math tutors who specialize in middle school math,
              including proportional relationships, unit rates, and pre-algebra.
            </p>
            <a
              href="https://www.wyzant.com/tutors/math"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Search for a Tutor
            </a>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-4">Self-Help Resources</h2>
            <p className="text-ink/70 dark:text-ink/50 mb-4">Before booking a tutor, explore our free resources:</p>
            <div className="space-y-3">
              <Link href="/blog" className="block text-teal-600 dark:text-teal-400 hover:underline">Browse all proportional relationship articles</Link>
              <Link href="/calculators/proportional-relationship-calculator" className="block text-teal-600 dark:text-teal-400 hover:underline">Try the proportional relationship calculator</Link>
              <Link href="/checkers/is-this-graph-proportional" className="block text-teal-600 dark:text-teal-400 hover:underline">Check if a graph is proportional</Link>
            </div>
          </section>
        </article>
      </div>
    </div>
  )
}
