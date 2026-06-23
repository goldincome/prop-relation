import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPostsByTag, getAllTags } from "@/lib/blog"
import { BlogCard } from "@/components/blog/BlogCard"
import { Breadcrumbs } from "@/components/blog/Breadcrumbs"

interface Props {
  params: Promise<{ tag: string }>
}

export function generateStaticParams() {
  const tags = getAllTags()
  return tags.map((tag) => ({ tag }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params

  return {
    title: `#${tag} — Proportional Relationships Blog`,
    description: `Browse articles tagged with "${tag}" about proportional relationships, unit rates, and more.`,
    alternates: {
      canonical: `https://proportionalrelationship.com/blog/tag/${tag}`,
    },
  }
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params
  const posts = getPostsByTag(tag)

  if (posts.length === 0) notFound()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: `#${tag}` },
        ]}
      />

      <h1 className="text-3xl font-bold text-ink dark:text-white mb-2">
        #{tag}
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
