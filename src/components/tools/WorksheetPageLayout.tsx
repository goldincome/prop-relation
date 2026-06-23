import Link from "next/link"
import type { WorksheetDefinition } from "@/types/worksheets"
import { Breadcrumbs } from "@/components/blog/Breadcrumbs"
import { NewsletterSignup } from "@/components/ctas/NewsletterSignup"
import { TutoringCTA } from "@/components/ctas/TutoringCTA"
import { faqPageSchema } from "@/lib/schema"

interface WorksheetPageLayoutProps {
  worksheet: WorksheetDefinition
}

export function WorksheetPageLayout({ worksheet }: WorksheetPageLayoutProps) {
  const breadcrumbItems = [
    { label: "Worksheets", href: "/worksheets" },
    { label: worksheet.title },
  ]

  const faqLd = faqPageSchema(worksheet.faq)

  return (
    <div className="min-h-screen bg-offwhite dark:bg-ink transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <div className="text-xs font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
              {worksheet.gradeLevel}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white leading-tight mb-4">
              {worksheet.title}
            </h1>
            <p className="text-lg text-ink/60 dark:text-ink/50 mb-6">
              {worksheet.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="text-sm px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">
                {worksheet.pages} pages
              </span>
              <span className="text-sm px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">
                {worksheet.format}
              </span>
              {worksheet.includesAnswerKey && (
                <span className="text-sm px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                  Answer key included
                </span>
              )}
              {worksheet.includesDigitalVersion && (
                <span className="text-sm px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  Digital version
                </span>
              )}
            </div>

            <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-4">
              {worksheet.price}
            </div>
          </header>

          {worksheet.sections.map((section, i) => (
            <section key={i} className="mb-8">
              <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">{section.heading}</h2>
              <p className="text-ink/70 dark:text-ink/50 leading-relaxed">{section.content}</p>
            </section>
          ))}

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-6">Sample Problems</h2>
            {worksheet.sampleProblems.map((sample, i) => (
              <div key={i} className="mb-4 p-5 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
                <h3 className="font-medium text-ink dark:text-white mb-2">{sample.title}</h3>
                <p className="text-sm text-ink/60 dark:text-ink/50 mb-2">{sample.problem}</p>
                <div className="text-sm font-medium text-teal-700 dark:text-teal-300">
                  Answer: {sample.answer}
                </div>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-4">Standards</h2>
            <div className="flex flex-wrap gap-2">
              {worksheet.standards.map((s) => (
                <span key={s} className="text-sm px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-4">Frequently asked questions</h2>
            <div className="space-y-4">
              {worksheet.faq.map((item, i) => (
                <div key={i} className="p-4 rounded-lg border border-ink/10 dark:border-ink/20">
                  <h3 className="font-medium text-ink dark:text-white text-sm mb-2">{item.question}</h3>
                  <p className="text-sm text-ink/60 dark:text-ink/50">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-4">Related tools</h2>
            <div className="flex flex-wrap gap-3">
              {worksheet.relatedTools.map((slug) => (
                <Link
                  key={slug}
                  href={slug}
                  className="text-sm px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors"
                >
                  {slug.split("/").pop()?.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-4">Related lessons</h2>
            <div className="flex flex-wrap gap-3">
              {worksheet.relatedArticles.map((slug) => (
                <Link
                  key={slug}
                  href={slug}
                  className="text-sm px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors"
                >
                  {slug.split("/").pop()?.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </section>

          <NewsletterSignup />
          <TutoringCTA />
        </article>
      </div>
    </div>
  )
}
