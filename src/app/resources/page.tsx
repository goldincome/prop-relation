import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Proportional Relationships Resources | Teachers & Parents",
  description: "Free and premium resources for teaching and learning proportional relationships. Worksheets, lesson guides, practice packs, and homework help for teachers and parents.",
  alternates: { canonical: "https://proportionalrelationship.com/resources" },
  openGraph: {
    title: "Proportional Relationships Resources",
    description: "Resources for teaching and learning proportional relationships.",
    url: "https://proportionalrelationship.com/resources",
    siteName: "Proportional Relationship",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Resources", description: "Teaching and learning resources for proportional relationships." },
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-ink transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article>
          <header className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white leading-tight mb-4">
              Proportional Relationships Resources
            </h1>
            <p className="text-lg text-ink/60 dark:text-ink/50 max-w-2xl mx-auto">
              Everything you need to teach, learn, and practice proportional relationships —
              worksheets, lesson guides, practice packs, and step-by-step help.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 mb-12">
            <Link
              href="/resources/teachers"
              className="group block p-8 rounded-xl bg-white dark:bg-ink/80 border border-ink/10 dark:border-ink/20 hover:border-teal-300 dark:hover:border-teal-700 transition-all hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center mb-4 text-teal-600 dark:text-teal-400 text-2xl font-bold">
                T
              </div>
              <h2 className="text-xl font-semibold text-ink dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                For Teachers
              </h2>
              <p className="text-ink/60 dark:text-ink/50 text-sm leading-relaxed">
                Classroom-ready worksheets, lesson plans, exit tickets, and assessments
                aligned to Common Core 7.RP.A.1-3. Printable and digital formats with
                answer keys.
              </p>
              <div className="mt-4 text-sm font-medium text-teal-600 dark:text-teal-400">
                Browse teacher resources →
              </div>
            </Link>

            <Link
              href="/resources/parents"
              className="group block p-8 rounded-xl bg-white dark:bg-ink/80 border border-ink/10 dark:border-ink/20 hover:border-amber-300 dark:hover:border-amber-700 transition-all hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400 text-2xl font-bold">
                P
              </div>
              <h2 className="text-xl font-semibold text-ink dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                For Parents
              </h2>
              <p className="text-ink/60 dark:text-ink/50 text-sm leading-relaxed">
                Clear explanations, homework help guides, practice worksheets, and
                tutoring options to support your child through proportional relationships.
              </p>
              <div className="mt-4 text-sm font-medium text-amber-600 dark:text-amber-400">
                Browse parent resources →
              </div>
            </Link>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-6 text-center">Popular Worksheets</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Link href="/worksheets/proportional-relationships-pack" className="block p-5 rounded-xl border border-ink/10 dark:border-ink/20 hover:border-teal-300 dark:hover:border-teal-700 transition-colors text-center">
                <div className="text-lg font-medium text-ink dark:text-white mb-1">Worksheet Pack</div>
                <div className="text-sm text-ink/60 dark:text-ink/50">12 pages · $4.99</div>
              </Link>
              <Link href="/worksheets/unit-rate-mastery-pack" className="block p-5 rounded-xl border border-ink/10 dark:border-ink/20 hover:border-teal-300 dark:hover:border-teal-700 transition-colors text-center">
                <div className="text-lg font-medium text-ink dark:text-white mb-1">Unit Rate Pack</div>
                <div className="text-sm text-ink/60 dark:text-ink/50">8 pages · $3.99</div>
              </Link>
              <Link href="/worksheets/ratios-and-proportions-bundle" className="block p-5 rounded-xl border border-ink/10 dark:border-ink/20 hover:border-teal-300 dark:hover:border-teal-700 transition-colors text-center">
                <div className="text-lg font-medium text-ink dark:text-white mb-1">Full Bundle</div>
                <div className="text-sm text-ink/60 dark:text-ink/50">35 pages · $12.99</div>
              </Link>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Free Worksheets</h2>
            <p className="text-ink/60 dark:text-ink/50 mb-4 max-w-lg mx-auto">
              Sign up for our newsletter and get free exit tickets, warm-ups, and sample
              worksheets delivered to your inbox.
            </p>
            <Link
              href="/blog"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-5 rounded-lg transition-colors text-sm"
            >
              Browse Free Articles
            </Link>
          </section>
        </article>
      </div>
    </div>
  )
}
