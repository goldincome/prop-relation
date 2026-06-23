import Link from "next/link"
import type { Metadata } from "next"
import { getToolsByType } from "@/data/tools"

export const metadata: Metadata = {
  title: "Proportional Relationship Calculators",
  description: "Free online calculators for proportional relationships, unit rates, constant of proportionality, scale factor, and more. Step-by-step solutions included.",
  alternates: {
    canonical: "https://proportionalrelationship.com/calculators",
  },
  openGraph: {
    title: "Proportional Relationship Calculators",
    description: "Free online calculators for proportional relationships, unit rates, constant of proportionality, and more.",
    url: "https://proportionalrelationship.com/calculators",
    images: [{ url: "/images/og-default.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proportional Relationship Calculators",
    description: "Free online calculators with step-by-step solutions.",
    images: ["/images/og-default.webp"],
  },
}

export default function CalculatorsPage() {
  const calculators = getToolsByType("calculator")

  const categories = [
    {
      name: "Core Proportional Relationships",
      slug: "proportional-relationships",
      tools: calculators.filter((t) => t.category === "proportional-relationships"),
    },
    {
      name: "Unit Rate",
      slug: "unit-rate",
      tools: calculators.filter((t) => t.category === "unit-rate"),
    },
    {
      name: "Constant of Proportionality & Slope",
      slug: "constant-of-proportionality",
      tools: calculators.filter((t) => t.category === "constant-of-proportionality"),
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <p className="text-sm text-ink/50 dark:text-ink/40 uppercase tracking-wider font-medium">Tools</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white mt-2">Calculators</h1>
        <p className="text-lg text-ink/60 dark:text-ink/50 mt-3">
          Step-by-step calculators to help you solve proportional relationship problems, find unit rates, and more.
        </p>
      </div>

      {categories.map((cat) => (
        <section key={cat.slug} className="mb-12">
          <h2 className="text-xl font-bold text-ink dark:text-white mb-4">{cat.name}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {cat.tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/calculators/${tool.slug}`}
                className="group block p-5 rounded-xl border border-ink/10 dark:border-ink/20 bg-white dark:bg-ink/80 hover:border-teal-500 dark:hover:border-teal-400 hover:shadow-sm transition-all"
              >
                <h3 className="font-semibold text-ink dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-ink/60 dark:text-ink/50 mt-2 leading-relaxed">
                  {tool.description}
                </p>
                <div className="mt-3 text-xs text-teal-600 dark:text-teal-400 font-mono">
                  {tool.formula}
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
