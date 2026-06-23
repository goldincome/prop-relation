import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/blog/Breadcrumbs"
import { NewsletterSignup } from "@/components/ctas/NewsletterSignup"

export const metadata: Metadata = {
  title: "Math Teacher Resources for Proportional Relationships",
  description: "Free and premium classroom resources for teaching proportional relationships, unit rates, and constant of proportionality. Worksheets, exit tickets, lesson plans.",
  alternates: { canonical: "https://proportionalrelationship.com/resources/teachers" },
  openGraph: {
    title: "Math Teacher Resources for Proportional Relationships",
    description: "Free and premium classroom resources for teaching proportional relationships.",
    url: "https://proportionalrelationship.com/resources/teachers",
    siteName: "Proportional Relationship",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Math Teacher Resources", description: "Classroom resources for teaching proportional relationships." },
}

const resources = [
  { title: "Proportional Relationships Worksheet Pack", href: "/worksheets/proportional-relationships-pack", desc: "12 pages covering tables, graphs, equations, and word problems with answer key." },
  { title: "Unit Rate Mastery Pack", href: "/worksheets/unit-rate-mastery-pack", desc: "8 pages of unit rate practice including price comparisons and speed problems." },
  { title: "Ratios and Proportions Bundle", href: "/worksheets/ratios-and-proportions-bundle", desc: "35-page complete unit with task cards, assessments, and answer keys." },
  { title: "Constant of Proportionality Pack", href: "/worksheets/constant-of-proportionality-pack", desc: "8 pages finding k from tables, graphs, equations, and word problems." },
  { title: "Proportional Relationships Test Prep", href: "/worksheets/proportional-test-prep-pack", desc: "8 pages of mixed review mirroring standardized test formats." },
]

export default function TeachersPage() {
  const breadcrumbItems = [
    { label: "Resources", href: "/resources" },
    { label: "Teachers" },
  ]

  return (
    <div className="min-h-screen bg-offwhite dark:bg-ink transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <div className="text-xs font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">For Teachers</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white leading-tight mb-4">
              Proportional Relationships Resources for Teachers
            </h1>
            <p className="text-lg text-ink/60 dark:text-ink/50">
              Ready-to-use worksheets, lesson ideas, and classroom resources for teaching proportional relationships, unit rates, and the constant of proportionality. Everything aligns to Common Core standards 7.RP.A.1-3.
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-4">Teaching Guide</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-ink/70 dark:text-ink/50 leading-relaxed">
              <p className="mb-3">Teach proportional relationships in this order: start with real-world unit rates (shopping, speed), then introduce tables and the ratio test, move to graphs and the origin rule, then equations in y = kx form, and finally mixed practice.</p>
              <p className="mb-3">Our <Link href="/blog/teaching-proportional-relationships" className="text-teal-600 dark:text-teal-400 hover:underline">full teaching guide</Link> covers a 5-day lesson sequence with anchor charts, differentiation tips, and assessment ideas.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-6">Classroom Resources</h2>
            <div className="space-y-4">
              {resources.map((r) => (
                <Link key={r.href} href={r.href} className="block p-5 rounded-xl border border-ink/10 dark:border-ink/20 hover:border-teal-300 dark:hover:border-teal-700 transition-colors">
                  <h3 className="font-medium text-ink dark:text-white mb-1">{r.title}</h3>
                  <p className="text-sm text-ink/60 dark:text-ink/50">{r.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-4">Free Resources</h2>
            <p className="text-ink/70 dark:text-ink/50 mb-4">Sign up for our newsletter to get free exit tickets, warm-ups, and sample worksheets delivered to your inbox.</p>
            <NewsletterSignup />
          </section>
        </article>
      </div>
    </div>
  )
}
