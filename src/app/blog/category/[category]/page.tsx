import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPostsByCategory, getCategories } from "@/lib/blog"
import { BlogCard } from "@/components/blog/BlogCard"
import { Breadcrumbs } from "@/components/blog/Breadcrumbs"

interface Props {
  params: Promise<{ category: string }>
}

export function generateStaticParams() {
  const categories = getCategories()
  return categories.map((cat) => ({ category: cat }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const label = category.replace(/-/g, " ")

  return {
    title: `${label} — Proportional Relationships Blog`,
    description: `Browse articles about ${label} in proportional relationships, including guides, examples, and practice problems.`,
    alternates: {
      canonical: `https://proportionalrelationship.com/blog/category/${category}`,
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const posts = getPostsByCategory(category)

  if (posts.length === 0) notFound()

  const label = category.replace(/-/g, " ")

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: label },
        ]}
      />

      <h1 className="text-3xl font-bold text-ink dark:text-white mb-2 capitalize">
        {label}
      </h1>
      <p className="text-ink/60 dark:text-ink/50 mb-8">
        {posts.length} article{posts.length !== 1 ? "s" : ""}
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
