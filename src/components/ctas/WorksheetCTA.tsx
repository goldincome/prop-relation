"use client"

import { useState } from "react"

interface WorksheetCTAProps {
  worksheetTitle: string
}

export function WorksheetCTA({ worksheetTitle }: WorksheetCTAProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, worksheetTitle }),
      })

      if (!response.ok) throw new Error("Failed to subscribe")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="my-8 p-5 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
        <p className="text-green-800 dark:text-green-200 font-medium">
          Check your inbox for your free worksheet!
        </p>
      </div>
    )
  }

  return (
    <div className="my-8 p-5 rounded-xl bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
      <h3 className="text-lg font-semibold text-ink dark:text-white mb-2">
        Free practice worksheet
      </h3>
      <p className="text-sm text-ink/70 dark:text-ink/50 mb-4">
        Get a printable "{worksheetTitle}" worksheet delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 px-4 py-2.5 text-sm rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="text-sm bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-medium py-2.5 px-5 rounded-lg transition-colors"
        >
          {status === "loading" ? "Sending..." : "Download"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-xs text-red-600 mt-2">
          Something went wrong. Try again or email us directly.
        </p>
      )}
    </div>
  )
}
