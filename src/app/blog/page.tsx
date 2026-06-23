import type { Metadata } from "next"
import { getBlogListItems, getCategories, getAllTags } from "@/lib/blog"
import { blogListingSchema } from "@/lib/schema"
import { BlogCard } from "@/components/blog/BlogCard"
import { Sidebar } from "@/components/blog/Sidebar"
import { Breadcrumbs } from "@/components/blog/Breadcrumbs"

export const metadata: Metadata = {
  title: "Proportional Relationships Blog — Guides, Examples & Practice",
  description:
    "Learn proportional relationships with clear guides, step-by-step examples, common mistakes, and practice worksheets for 7th-grade math.",
  alternates: {
    canonical: "https://proportionalrelationship.com/blog",
  },
  openGraph: {
    title: "Proportional Relationships Blog — Guides, Examples & Practice",
    description:
      "Learn proportional relationships with clear guides, step-by-step examples, common mistakes, and practice worksheets for 7th-grade math.",
    url: "https://proportionalrelationship.com/blog",
    images: [{ url: "/images/og-default.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Proportional Relationships Blog — Guides, Examples & Practice",
    description: "Step-by-step guides and examples for proportional relationships.",
    images: ["/images/og-default.webp"],
  },
}

export default function BlogPage() {
  const posts = getBlogListItems()
  const categories = getCategories()
  const tags = getAllTags()

  const schema = blogListingSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: "Blog" }]} />

        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-ink dark:text-white mb-4">
            Proportional Relationships Blog
          </h1>
          <p className="text-lg text-ink/60 dark:text-ink/50 max-w-2xl">
            Step-by-step guides, worked examples, and teaching resources to help
            you master proportional relationships, unit rates, and the constant
            of proportionality.
          </p>
        </div>

        <div className="flex gap-10">
          <div className="flex-1 min-w-0">
            {posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-ink/40 dark:text-ink/30">
                  No articles yet. Check back soon!
                </p>
              </div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>

          <aside className="hidden lg:block w-64 flex-shrink-0">
            <Sidebar categories={categories} tags={tags} />
          </aside>
        </div>
      </div>
    </>
  )
}
