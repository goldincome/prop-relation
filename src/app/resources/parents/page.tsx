import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/blog/Breadcrumbs"
import { NewsletterSignup } from "@/components/ctas/NewsletterSignup"

export const metadata: Metadata = {
  title: "Help Your Child With Proportional Relationships | Parent Guide",
  description: "Resources for parents helping their child with proportional relationships, unit rates, and constant of proportionality. Homework help and practice materials.",
  alternates: { canonical: "https://proportionalrelationship.com/resources/parents" },
  openGraph: {
    title: "Help Your Child With Proportional Relationships",
    description: "Resources for parents helping their child with proportional relationships.",
    url: "https://proportionalrelationship.com/resources/parents",
    siteName: "Proportional Relationship",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Parent Resources", description: "Homework help for proportional relationships." },
}

export default function ParentsPage() {
  const breadcrumbItems = [
    { label: "Resources", href: "/resources" },
    { label: "Parents" },
  ]

  return (
    <div className="min-h-screen bg-offwhite dark:bg-ink transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <div className="text-xs font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">For Parents</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white leading-tight mb-4">
              Proportional Relationships: Help Your Child Succeed
            </h1>
            <p className="text-lg text-ink/60 dark:text-ink/50">
              If your child is studying proportional relationships in 7th-grade math, you might be hearing about tables, graphs, y = kx, and the constant of proportionality. This guide explains what your child needs to know and how you can help.
            </p>
          </header>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">What Your Child Is Learning</h2>
            <p className="text-ink/70 dark:text-ink/50 leading-relaxed mb-4">
              Proportional relationships are the main focus of 7th-grade ratios and proportions. Your child learns to:
            </p>
            <ul className="space-y-2 text-ink/70 dark:text-ink/50">
              <li className="flex gap-2"><span className="text-teal-600 flex-shrink-0">•</span> Determine if a table shows a proportional relationship by checking if y ÷ x is always the same</li>
              <li className="flex gap-2"><span className="text-teal-600 flex-shrink-0">•</span> Identify proportional graphs that are straight lines through (0,0)</li>
              <li className="flex gap-2"><span className="text-teal-600 flex-shrink-0">•</span> Write and use the equation y = kx where k is the constant of proportionality</li>
              <li className="flex gap-2"><span className="text-teal-600 flex-shrink-0">•</span> Solve real-world problems involving unit rates and proportions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-4">Helpful Resources</h2>
            <div className="space-y-4">
              <Link href="/blog/what-is-a-proportional-relationship" className="block p-5 rounded-xl border border-ink/10 dark:border-ink/20 hover:border-teal-300 dark:hover:border-teal-700 transition-colors">
                <h3 className="font-medium text-ink dark:text-white mb-1">What Is a Proportional Relationship?</h3>
                <p className="text-sm text-ink/60 dark:text-ink/50">A simple explanation with examples your child can follow.</p>
              </Link>
              <Link href="/blog/common-mistakes-in-proportional-relationships" className="block p-5 rounded-xl border border-ink/10 dark:border-ink/20 hover:border-teal-300 dark:hover:border-teal-700 transition-colors">
                <h3 className="font-medium text-ink dark:text-white mb-1">Common Mistakes to Avoid</h3>
                <p className="text-sm text-ink/60 dark:text-ink/50">The most frequent errors students make and how to fix them.</p>
              </Link>
              <Link href="/blog/proportional-relationships-test-prep" className="block p-5 rounded-xl border border-ink/10 dark:border-ink/20 hover:border-teal-300 dark:hover:border-teal-700 transition-colors">
                <h3 className="font-medium text-ink dark:text-white mb-1">Test Prep Guide</h3>
                <p className="text-sm text-ink/60 dark:text-ink/50">Review the most tested skills with practice ideas.</p>
              </Link>
              <Link href="/tutoring" className="block p-5 rounded-xl border border-ink/10 dark:border-ink/20 hover:border-teal-300 dark:hover:border-teal-700 transition-colors">
                <h3 className="font-medium text-ink dark:text-white mb-1">Find a Tutor</h3>
                <p className="text-sm text-ink/60 dark:text-ink/50">Get one-on-one help from a qualified math tutor.</p>
              </Link>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-4">Free Practice Worksheets</h2>
            <p className="text-ink/70 dark:text-ink/50 mb-4">Get printable practice worksheets delivered to your inbox. Perfect for extra homework help or test prep.</p>
            <NewsletterSignup />
          </section>
        </article>
      </div>
    </div>
  )
}
