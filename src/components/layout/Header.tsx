"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ThemeToggle } from "./ThemeToggle"

const navItems = [
  { href: "/blog", label: "Blog" },
  { href: "/calculators", label: "Calculators" },
  { href: "/checkers", label: "Checkers" },
  { href: "/topics", label: "Topics" },
  { href: "/worksheets", label: "Worksheets" },
  { href: "/resources", label: "Resources" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-ink/10 dark:border-ink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-teal-600 dark:text-teal-400 shrink-0"
        >
          Proportional Relationship
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  active
                    ? "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 font-medium"
                    : "text-ink/60 dark:text-ink/50 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50/50 dark:hover:bg-teal-900/10"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-ink/60 dark:text-ink/50 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 dark:border-ink/20">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 space-y-1">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    active
                      ? "bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 font-medium"
                      : "text-ink/60 dark:text-ink/50 hover:text-teal-600 dark:hover:text-teal-400"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
