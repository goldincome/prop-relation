import Link from "next/link"

interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: Crumb[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-ink/50 dark:text-ink/40">
        <li>
          <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span>/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-ink/70 dark:text-ink/60 font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
