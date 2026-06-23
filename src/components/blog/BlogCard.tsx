import Link from "next/link"
import type { BlogListItem } from "@/types/blog"

interface BlogCardProps {
  post: BlogListItem
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group border border-ink/10 rounded-xl overflow-hidden bg-white dark:bg-ink/80 transition-shadow hover:shadow-lg">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-[16/9] bg-teal-50 dark:bg-teal-900/20 relative overflow-hidden">
          {post.featuredImage ? (
            <img
              src={post.featuredImage}
              alt={post.featuredImageAlt}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center">
                <span className="text-teal-600 dark:text-teal-300 text-2xl font-bold">
                  {(post.title.match(/[A-Z]/) || ["P"])[0]}
                </span>
              </div>
            </div>
          )}
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-lg font-semibold text-ink dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2 leading-snug">
            {post.title}
          </h2>
        </Link>

        <p className="text-ink/70 dark:text-ink/60 text-sm leading-relaxed line-clamp-2">
          {post.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="text-xs px-2.5 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}
