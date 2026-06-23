import Link from "next/link"
import type { BlogListItem } from "@/types/blog"

interface RelatedPostsProps {
  posts: BlogListItem[]
  title?: string
}

export function RelatedPosts({ posts, title = "Related articles" }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="mt-12 pt-8 border-t border-ink/10 dark:border-ink/20">
      <h2 className="text-xl font-semibold text-ink dark:text-white mb-6">
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group p-4 rounded-xl border border-ink/10 dark:border-ink/20 hover:border-teal-300 dark:hover:border-teal-700 transition-colors"
          >
            <div className="flex items-center gap-2 text-xs text-ink/50 dark:text-ink/40 mb-2">
              <span>{post.readingTime} min</span>
            </div>
            <h3 className="text-sm font-medium text-ink dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  )
}
