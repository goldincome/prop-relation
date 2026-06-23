import Link from "next/link"
import type { ToolDefinition } from "@/types/tools"
import { Breadcrumbs } from "@/components/blog/Breadcrumbs"
import { NewsletterSignup } from "@/components/ctas/NewsletterSignup"
import { TutoringCTA } from "@/components/ctas/TutoringCTA"
import { webApplicationSchema, faqPageSchema } from "@/lib/schema"

interface ToolPageLayoutProps {
  tool: ToolDefinition
  children?: React.ReactNode
}

export function ToolPageLayout({ tool, children }: ToolPageLayoutProps) {
  const baseUrl = `https://proportionalrelationship.com/${tool.type === "calculator" ? "calculators" : "checkers"}`

  const breadcrumbItems = [
    {
      label: tool.type === "calculator" ? "Calculators" : "Checkers",
      href: `/${tool.type === "calculator" ? "calculators" : "checkers"}`,
    },
    { label: tool.title },
  ]

  const webAppLd = webApplicationSchema({
    name: tool.title,
    description: tool.description,
    url: `${baseUrl}/${tool.slug}`,
  })

  const faqLd = faqPageSchema(tool.faq)

  return (
    <div className="min-h-screen bg-offwhite dark:bg-ink transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <article>
          <header className="mb-8">
            <div className="text-xs font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
              {tool.type === "calculator" ? "Calculator" : "Checker"}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white leading-tight mb-4">
              {tool.title}
            </h1>
            <p className="text-lg text-ink/60 dark:text-ink/50">
              {tool.description}
            </p>
          </header>

          <div className="rounded-xl bg-white dark:bg-ink/80 border border-ink/10 dark:border-ink/20 p-6 sm:p-8 mb-8">
            {children ? (
              <div className="bg-offwhite dark:bg-ink/60 rounded-lg p-5">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1">
                    {tool.formula}
                  </div>
                  <p className="text-sm text-ink/50 dark:text-ink/40">
                    {tool.formulaExplanation}
                  </p>
                </div>
                {children}
              </div>
            ) : (
              <>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                    {tool.formula}
                  </div>
                  <p className="text-sm text-ink/50 dark:text-ink/40">
                    {tool.formulaExplanation}
                  </p>
                </div>
                <div className="bg-offwhite dark:bg-ink/60 rounded-lg p-5 mb-6">
                  <label className="block text-sm font-medium text-ink dark:text-white mb-2">
                    {tool.inputLabel}
                  </label>
                  <input
                    type="text"
                    placeholder={tool.inputPlaceholder}
                    className="w-full px-4 py-3 text-sm rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <p className="text-xs text-ink/40 dark:text-ink/30 mt-2">
                    {tool.resultLabel}
                  </p>
                </div>
              </>
            )}
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">How to use this {tool.type}</h2>
            <p className="text-ink/70 dark:text-ink/50 leading-relaxed">{tool.howToUse}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-3">What this means in math class</h2>
            <p className="text-ink/70 dark:text-ink/50 leading-relaxed">{tool.mathClassContext}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-6">Worked examples</h2>
            {tool.examples.map((example, i) => (
              <div key={i} className="mb-6 p-5 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
                <h3 className="font-medium text-ink dark:text-white mb-2">Example {i + 1}: {example.title}</h3>
                <p className="text-sm text-ink/60 dark:text-ink/50 mb-3">{example.input}</p>
                <ol className="space-y-2 mb-3">
                  {example.steps.map((step, j) => (
                    <li key={j} className="text-sm text-ink/70 dark:text-ink/50 flex gap-2">
                      <span className="text-teal-600 dark:text-teal-400 font-medium flex-shrink-0">Step {j + 1}:</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="text-sm font-medium text-teal-700 dark:text-teal-300">
                  Answer: {example.answer}
                </div>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink dark:text-white mb-4">Frequently asked questions</h2>
            <div className="space-y-4">
              {tool.faq.map((item, i) => (
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
              {tool.relatedTools.map((slug) => (
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
              {tool.relatedArticles.map((slug) => (
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
