import Link from "next/link"
import type { Metadata } from "next"
import { getBlogListItems } from "@/lib/blog"
import { getToolsByType } from "@/data/tools"
import { getPillars } from "@/data/pillars"
import { BlogCard } from "@/components/blog/BlogCard"
import { faqPageSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Proportional Relationships: Free Calculators & Guides",
  description:
    "The most complete free resource for proportional relationships — interactive calculators, graph checkers, CCSS-aligned worksheets, and step-by-step guides for students and teachers.",
  alternates: {
    canonical: "https://proportionalrelationship.com",
  },
  openGraph: {
    title: "Proportional Relationships: Free Calculators & Guides",
    description:
      "Interactive calculators, graph checkers, CCSS-aligned worksheets, and step-by-step guides for mastering proportional relationships.",
    url: "https://proportionalrelationship.com",
    images: [{ url: "/images/og-default.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proportional Relationships: Free Calculators & Guides",
    description: "Free proportional relationship calculators, checkers, worksheets, and step-by-step guides.",
    images: ["/images/og-default.webp"],
  },
}

const faqItems = [
  {
    question: "What is a proportional relationship?",
    answer: "A proportional relationship is one where two quantities change at the same constant rate. It can be written as y = kx, where k is the constant of proportionality. When graphed, a proportional relationship always forms a straight line through the origin (0,0).",
  },
  {
    question: "What grade level covers proportional relationships?",
    answer: "Proportional relationships are a major focus of 7th grade math under Common Core standard 7.RP.A.2. Students begin exploring ratios and unit rates in 6th grade and extend proportional reasoning into 8th grade with linear equations and slope.",
  },
  {
    question: "How do you identify a proportional relationship from a table?",
    answer: "Divide y by x for every row in the table. If all quotients equal the same number (the constant of proportionality k), the table represents a proportional relationship. If any ratio differs, it is not proportional. You can use our Proportional Table Checker to test any table instantly.",
  },
  {
    question: "What is the constant of proportionality k?",
    answer: "The constant of proportionality k is the fixed number that relates y to x in the equation y = kx. It tells you the unit rate — how much y changes for each increase of 1 in x. You can find k by dividing any y value by its corresponding x value (as long as x is not zero).",
  },
  {
    question: "Are these resources aligned to Common Core standards?",
    answer: "Yes. All calculators, checkers, worksheets, and guides are aligned to Common Core standards 7.RP.A.1, 7.RP.A.2 (a, b, c, d), and 7.RP.A.3. Teachers can use these materials with confidence in any classroom following CCSS or similar state standards for proportional reasoning.",
  },
]

export default function Home() {
  const posts = getBlogListItems().slice(0, 4)
  const calculators = getToolsByType("calculator")
  const checkers = getToolsByType("checker")
  const pillarPages = getPillars()

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ProportionalRelationship.com",
    url: "https://proportionalrelationship.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://proportionalrelationship.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  const homepageFaqSchema = faqPageSchema(faqItems)

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
      />

      {/* Hero */}
      <section className="bg-graph-paper py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-4">
            ProportionalRelationship.com
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-ink dark:text-white mb-6 leading-tight">
            Proportional Relationships — Free Tools, Guides & Worksheets
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

      {/* What are proportional relationships? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-ink dark:text-white mb-6 text-center">
            What Are Proportional Relationships?
          </h2>
          <div className="text-ink/70 dark:text-ink/50 leading-relaxed space-y-4">
            <p>
              A <strong>proportional relationship</strong> is a relationship between two quantities where they
              always change at the same rate. In math terms, this means the ratio between them stays constant.
              The standard form is <strong>y = kx</strong>, where k is the constant of proportionality —
              the number that tells you how much y increases for every increase of 1 in x.
            </p>
            <p>
              Proportional relationships show up everywhere in middle school math: finding the best price
              per ounce at the grocery store, calculating speed in miles per hour, scaling a recipe up or
              down, and determining the unit rate from a table or graph. They are also the foundation for
              understanding slope and linear equations in later grades.
            </p>
            <p>
              To identify a proportional relationship, you can test it three ways. From a <strong>table</strong>,
              divide each y by its x — if every quotient is the same, it is proportional. From a <strong>graph</strong>,
              check that the line is straight and passes through the origin (0,0). From an <strong>equation</strong>,
              make sure it can be written as y = kx with no extra constant term. This site has interactive
              checkers for all three methods, plus a cross-multiplication checker for verifying proportions
              in ratio form.
            </p>
            <p>
              Whether you are a <strong>student</strong> working through a homework assignment, a
              <strong>teacher</strong> preparing a lesson on 7.RP.A.2, or a <strong>parent</strong> helping
              your child study for a quiz, this site has everything you need. Explore the calculators,
              checkers, worksheets, and guides below to master proportional relationships step by step.
            </p>
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

      {/* FAQ */}
      <section className="bg-offwhite dark:bg-ink/60 border-y border-ink/10 dark:border-ink/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl bg-white dark:bg-ink/80 border border-ink/10 dark:border-ink/20 overflow-hidden"
              >
                <summary className="p-4 font-medium text-ink dark:text-white cursor-pointer hover:bg-ink/5 dark:hover:bg-ink/70 transition-colors list-none flex items-center justify-between">
                  <span>{item.question}</span>
                  <span className="text-ink/30 dark:text-ink/40 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-sm text-ink/60 dark:text-ink/50 leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
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
