"use client"

import { useEffect, useState } from "react"

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  contentSelector?: string
}

export function TableOfContents({ contentSelector = ".blog-content" }: TableOfContentsProps) {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const article = document.querySelector(contentSelector)
    if (!article) return

    const headings = article.querySelectorAll("h2, h3")
    const tocItems: TocItem[] = []

    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") ?? ""
      }

      tocItems.push({
        id: heading.id,
        text: heading.textContent ?? "",
        level: heading.tagName === "H2" ? 2 : 3,
      })
    })

    setItems(tocItems)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: "-80px 0px -80% 0px" }
    )

    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [contentSelector])

  if (items.length === 0) return null

  return (
    <nav className="sticky top-24" aria-label="Table of contents">
      <h2 className="text-sm font-semibold text-ink dark:text-white mb-3 uppercase tracking-wider">
        On this page
      </h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm transition-colors py-0.5 ${
                item.level === 3 ? "pl-4" : ""
              } ${
                activeId === item.id
                  ? "text-teal-600 dark:text-teal-400 font-medium"
                  : "text-ink/50 dark:text-ink/40 hover:text-ink/70 dark:hover:text-ink/60"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
