import Link from "next/link"
import type { Metadata } from "next"
import { getBlogListItems } from "@/lib/blog"
import { getToolsByType } from "@/data/tools"
import { getPillars } from "@/data/pillars"
import { BlogCard } from "@/components/blog/BlogCard"

export const metadata: Metadata = {
  title: "Proportional Relationship — Math Guides, Calculators & Resources",
  description:
    "Learn proportional relationships with step-by-step guides, interactive calculators, graph checkers, and free printable worksheets for students and teachers.",
  alternates: {
    canonical: "https://proportionalrelationship.com",
  },
  openGraph: {
    title: "Proportional Relationship — Math Guides, Calculators & Resources",
    description:
      "The web's most complete hub for proportional relationships, calculators, graph checkers, classroom resources, and step-by-step help.",
    url: "https://proportionalrelationship.com",
    images: [{ url: "/images/og-default.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proportional Relationship — Math Guides, Calculators & Resources",
    description: "Learn proportional relationships with guides, calculators, and resources.",
    images: ["/images/og-default.webp"],
  },
}

export default function Home() {
  const posts = getBlogListItems().slice(0, 4)
  const calculators = getToolsByType("calculator")
  const checkers = getToolsByType("checker")
  const pillarPages = getPillars()

  return (
    <div>
      {/* Hero */}
      <section className="bg-graph-paper py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
            ProportionalRelationship.com
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-ink dark:text-white mb-6 leading-tight">
            The Complete Hub for Proportional Relationships
          </h1>
          <p className="text-lg sm:text-xl text-ink/60 dark:text-ink/50 max-w-3xl mx-auto mb-8 leading-relaxed">
            Calculators, graph checkers, step-by-step guides, and free classroom
            resources — everything students, teachers, and parents need to
            understand proportional relationships, unit rates, and the constant
            of proportionality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/calculators"
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Browse Calculators
            </Link>
            <Link
              href="/checkers"
              className="inline-block border border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 font-medium py-3 px-6 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
            >
              Try Graph &amp; Table Checkers
            </Link>
          </div>
        </div>
      </section>

      {/* Audience cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="p-6 rounded-xl bg-white dark:bg-ink/80 border border-ink/10 dark:border-ink/20 shadow-sm">
            <h2 className="text-lg font-bold text-ink dark:text-white mb-3">For Students</h2>
            <p className="text-sm text-ink/60 dark:text-ink/50 leading-relaxed mb-4">
              Solve proportional relationship problems, check your work with interactive calculators, and see step-by-step explanations.
            </p>
            <Link href="/calculators" className="text-sm text-teal-600 dark:text-teal-400 font-medium hover:underline">
              Try the calculators &rarr;
            </Link>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-ink/80 border border-ink/10 dark:border-ink/20 shadow-sm">
            <h2 className="text-lg font-bold text-ink dark:text-white mb-3">For Teachers</h2>
            <p className="text-sm text-ink/60 dark:text-ink/50 leading-relaxed mb-4">
              Download printable worksheets, exit tickets, and unit packs aligned to 7.RP standards. Assign, print, and teach with confidence.
            </p>
            <Link href="/resources/teachers" className="text-sm text-teal-600 dark:text-teal-400 font-medium hover:underline">
              Classroom resources &rarr;
            </Link>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-ink/80 border border-ink/10 dark:border-ink/20 shadow-sm">
            <h2 className="text-lg font-bold text-ink dark:text-white mb-3">For Parents</h2>
            <p className="text-sm text-ink/60 dark:text-ink/50 leading-relaxed mb-4">
              Help your child with homework, find tutoring support, and get clear explanations you can use at the kitchen table.
            </p>
            <Link href="/resources/parents" className="text-sm text-teal-600 dark:text-teal-400 font-medium hover:underline">
              Parent guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Topic guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-ink dark:text-white">Topic Guides</h2>
          <Link href="/topics" className="text-sm text-teal-600 dark:text-teal-400 hover:underline">
            View all guides &rarr;
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillarPages.map((pillar) => (
            <Link
              key={pillar.slug}
              href={`/topics/${pillar.slug}`}
              className="group p-5 rounded-xl border border-ink/10 dark:border-ink/20 bg-white dark:bg-ink/80 hover:border-teal-500 dark:hover:border-teal-400 transition-all"
            >
              <h3 className="font-semibold text-ink dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {pillar.title.split(":")[0]}
              </h3>
              <p className="text-sm text-ink/60 dark:text-ink/50 mt-2 line-clamp-2">{pillar.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Calculators & Checkers */}
      <section className="bg-offwhite dark:bg-ink/60 border-y border-ink/10 dark:border-ink/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-ink dark:text-white mb-6">
                Calculators
                <span className="block text-sm font-normal text-ink/50 dark:text-ink/40 mt-1">Step-by-step solvers for every proportional relationship problem</span>
              </h2>
              <div className="space-y-3">
                {calculators.slice(0, 4).map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/calculators/${tool.slug}`}
                    className="block p-4 rounded-lg bg-white dark:bg-ink/80 border border-ink/10 dark:border-ink/20 hover:border-teal-500 dark:hover:border-teal-400 transition-all"
                  >
                    <span className="font-medium text-ink dark:text-white">{tool.title}</span>
                    <p className="text-sm text-ink/50 dark:text-ink/40 mt-1">{tool.description}</p>
                  </Link>
                ))}
              </div>
              <Link href="/calculators" className="inline-block mt-4 text-sm text-teal-600 dark:text-teal-400 font-medium hover:underline">
                All calculators &rarr;
              </Link>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ink dark:text-white mb-6">
                Checkers
                <span className="block text-sm font-normal text-ink/50 dark:text-ink/40 mt-1">Instant yes/no answers — is it proportional or not?</span>
              </h2>
              <div className="space-y-3">
                {checkers.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/checkers/${tool.slug}`}
                    className="block p-4 rounded-lg bg-white dark:bg-ink/80 border border-ink/10 dark:border-ink/20 hover:border-teal-500 dark:hover:border-teal-400 transition-all"
                  >
                    <span className="font-medium text-ink dark:text-white">{tool.title}</span>
                    <p className="text-sm text-ink/50 dark:text-ink/40 mt-1">{tool.description}</p>
                  </Link>
                ))}
              </div>
              <Link href="/checkers" className="inline-block mt-4 text-sm text-teal-600 dark:text-teal-400 font-medium hover:underline">
                All checkers &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-ink dark:text-white">Latest Articles</h2>
          <Link href="/blog" className="text-sm text-teal-600 dark:text-teal-400 hover:underline">
            View all &rarr;
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Worksheets CTA */}
      <section className="bg-teal-50 dark:bg-teal-900/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-ink dark:text-white mb-4">
            Free Worksheets &amp; Printable Practice
          </h2>
          <p className="text-ink/60 dark:text-ink/50 max-w-xl mx-auto mb-6 leading-relaxed">
            Download practice sets, exit tickets, and unit reviews aligned to
            7.RP standards. Delivered straight to your inbox.
          </p>
          <Link
            href="/worksheets"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Browse Worksheets
          </Link>
        </div>
      </section>

      {/* Need a tutor? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-ink dark:text-white mb-4">
          Still Stuck?
        </h2>
        <p className="text-ink/60 dark:text-ink/50 max-w-lg mx-auto mb-6 leading-relaxed">
          Get one-on-one help from a verified math tutor. Wyzant connects you
          with experienced teachers who can walk through proportional
          relationships step by step.
        </p>
        <a
          href="https://www.wyzant.com/tutors/math"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          Find a Tutor on Wyzant
        </a>
      </section>
    </div>
  )
}
