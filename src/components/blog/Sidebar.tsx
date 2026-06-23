import Link from "next/link"

interface SidebarProps {
  categories: string[]
  tags: string[]
}

export function Sidebar({ categories, tags }: SidebarProps) {
  return (
    <aside className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold text-ink dark:text-white uppercase tracking-wider mb-4">
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <Link
                href={`/blog/category/${cat}`}
                className="text-sm text-ink/60 dark:text-ink/50 hover:text-teal-600 dark:hover:text-teal-400 transition-colors capitalize"
              >
                {cat.replace(/-/g, " ")}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-ink dark:text-white uppercase tracking-wider mb-4">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
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

      <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-900/20 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-ink dark:text-white mb-2">
          Free worksheet pack
        </h3>
        <p className="text-xs text-ink/60 dark:text-ink/50 mb-4">
          Get 10 free proportional relationship exit tickets delivered to your inbox.
        </p>
        <Link
          href="/newsletter"
          className="inline-block w-full text-center text-sm bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Download free
        </Link>
      </div>
    </aside>
  )
}
