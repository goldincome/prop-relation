"use client"

export function ThemeToggle() {
  function toggle() {
    const html = document.documentElement
    const isDark = html.classList.toggle("dark")
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light")
    } catch {
      /* noop */
    }
  }

  return (
    <button
      onClick={toggle}
      className="text-ink/60 dark:text-ink/50 hover:text-teal-600 dark:hover:text-teal-400 transition-colors text-lg leading-none"
      aria-label="Toggle dark mode"
    >
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
    </button>
  )
}
