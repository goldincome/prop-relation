import Link from "next/link"
import type { PillarDefinition } from "@/types/tools"
import { Breadcrumbs } from "@/components/blog/Breadcrumbs"
import { NewsletterSignup } from "@/components/ctas/NewsletterSignup"
import { TutoringCTA } from "@/components/ctas/TutoringCTA"
import { faqPageSchema } from "@/lib/schema"

interface PillarPageLayoutProps {
  pillar: PillarDefinition
}

export function PillarPageLayout({ pillar }: PillarPageLayoutProps) {
  const breadcrumbItems = [
    { label: "Topics", href: "/topics" },
    { label: pillar.title },
  ]

  const faqLd = faqPageSchema(pillar.faq)

  return (
    <div className="min-h-screen bg-offwhite dark:bg-ink transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        <article>
          <div className="text-xs font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
            Topic Guide
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white leading-tight mb-4">
            {pillar.title}
          </h1>
          <p className="text-lg text-ink/60 dark:text-ink/50 mb-8">
            {pillar.description}
          </p>

          {pillar.sections.map((section, i) => (
            <section key={i} className="mb-10">
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">
                {section.heading}
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none text-ink/70 dark:text-ink/50 leading-relaxed">
                {section.content.split("\n").map((p, j) => (
                  <p key={j} className="mb-4">{p}</p>
                ))}
              </div>
              {section.subsections?.map((sub, k) => (
                <div key={k} className="mt-6">
                  <h3 className="text-xl font-medium text-ink dark:text-white mb-3">
                    {sub.heading}
                  </h3>
                  <div className="prose prose-lg dark:prose-invert max-w-none text-ink/70 dark:text-ink/50 leading-relaxed">
                    {sub.content.split("\n").map((p, l) => (
                      <p key={l} className="mb-3">{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))}

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">Frequently asked questions</h2>
            <div className="space-y-4">
              {pillar.faq.map((item, i) => (
                <div key={i} className="p-4 rounded-lg border border-ink/10 dark:border-ink/20">
                  <h3 className="font-medium text-ink dark:text-white text-sm mb-2">{item.question}</h3>
                  <p className="text-sm text-ink/60 dark:text-ink/50">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">Related tools</h2>
            <div className="flex flex-wrap gap-3">
              {pillar.relatedTools.map((slug) => (
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

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">Related lessons</h2>
            <div className="flex flex-wrap gap-3">
              {pillar.relatedArticles.map((slug) => (
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
