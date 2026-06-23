import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/blog/Breadcrumbs"

export const metadata: Metadata = {
  title: "About Proportional Relationship",
  description: "ProportionalRelationship.com helps students, teachers, and parents master proportional relationships with free calculators, checkers, worksheets, and step-by-step guides.",
  alternates: { canonical: "https://proportionalrelationship.com/about" },
  openGraph: {
    title: "About Proportional Relationship",
    description: "Learn about ProportionalRelationship.com and our mission.",
    url: "https://proportionalrelationship.com/about",
    siteName: "Proportional Relationship",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "About", description: "Learn about ProportionalRelationship.com." },
}

export default function AboutPage() {
  const breadcrumbItems = [{ label: "About" }]

  return (
    <div className="min-h-screen bg-offwhite dark:bg-ink transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white leading-tight mb-4">
              About ProportionalRelationship.com
            </h1>
            <p className="text-lg text-ink/60 dark:text-ink/50">
              The web's most complete hub for proportional relationships, calculators, graph checkers, classroom resources, and step-by-step help.
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Our Mission</h2>
            <p className="text-ink/70 dark:text-ink/50 leading-relaxed">
              Proportional relationships are a core topic in middle school math, but many resources are scattered, confusing, or behind paywalls. We built this site to put everything in one place: clear explanations, interactive tools, printable worksheets, and honest tutoring recommendations — all free or affordable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Who This Site Is For</h2>
            <div className="space-y-4 text-ink/70 dark:text-ink/50">
              <div>
                <h3 className="font-medium text-ink dark:text-white">Students</h3>
                <p>Step-by-step guides, interactive calculators, and practice problems to help you understand proportional relationships and ace your tests.</p>
              </div>
              <div>
                <h3 className="font-medium text-ink dark:text-white">Teachers</h3>
                <p>Ready-to-use worksheets, lesson ideas, and classroom resources aligned to Common Core standards 7.RP.A.1-3.</p>
              </div>
              <div>
                <h3 className="font-medium text-ink dark:text-white">Parents</h3>
                <p>Clear explanations of what your child is learning, plus practice materials and tutoring options.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">Contact Us</h2>
            <p className="text-ink/70 dark:text-ink/50">
              Have a question, suggestion, or found an error? Visit our <a href="/contact" className="text-teal-600 dark:text-teal-400 hover:underline">contact page</a> to get in touch.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
