"use client"

import { useState } from "react"

interface Point { x: number; y: number }

export function GraphProportionalChecker() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState<{
    points: Point[]
    throughOrigin: boolean
    k: number | null
    ratiosMatch: boolean
  } | null>(null)
  const [error, setError] = useState("")

  function check() {
    const trimmed = input.trim()
    if (!trimmed) {
      setError("Enter at least one point like 0,0 2,6")
      setResult(null)
      return
    }

    const parts = trimmed.split(/\s+/)
    const points: Point[] = []

    for (const part of parts) {
      const coords = part.split(",")
      if (coords.length !== 2) {
        setError("Use format: x,y for each point (e.g., 0,0 2,6)")
        setResult(null)
        return
      }
      const x = parseFloat(coords[0])
      const y = parseFloat(coords[1])
      if (isNaN(x) || isNaN(y)) {
        setError(`Invalid number in "${part}"`)
        setResult(null)
        return
      }
      points.push({ x, y })
    }

    setError("")

    const throughOrigin = points[0].x === 0 && points[0].y === 0
    const validPoints = points.filter((p) => p.x !== 0)
    let ratiosMatch = validPoints.length >= 2
    let k: number | null = null

    if (validPoints.length >= 2) {
      k = validPoints[0].y / validPoints[0].x
      ratiosMatch = validPoints.every((p) => {
        const ratio = p.y / p.x
        return Math.abs(ratio - k!) < 1e-10
      })
    } else if (validPoints.length === 1) {
      k = validPoints[0].y / validPoints[0].x
      ratiosMatch = true
    }

    setResult({ points, throughOrigin, k, ratiosMatch })
  }

  const isProportional = result && result.throughOrigin && result.ratiosMatch && result.points.length >= 2

  return (
    <div>
      <p className="text-sm text-ink/60 dark:text-ink/40 mb-4">
        Enter points as x,y separated by spaces
      </p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="0,0 2,6 4,12"
        className="w-full px-4 py-3 text-base rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white placeholder:text-ink/30 focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4"
      />

      <button
        type="button"
        onClick={check}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4 text-base"
      >
        Check Graph
      </button>

      {error && <p className="text-sm text-red-500 mb-3 text-center">{error}</p>}

      {result && (
        <div className="space-y-3 text-sm">
          {result.points.map((p, i) => (
            <div key={i} className="p-3 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20 text-center">
              Point {i + 1}: ({p.x}, {p.y})
              {p.x !== 0 && <span className="text-teal-600 dark:text-teal-400 ml-2">y/x = {(p.y / p.x).toFixed(4)}</span>}
            </div>
          ))}

          <div className={`p-3 rounded-lg border text-center ${result.throughOrigin ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"}`}>
            {result.throughOrigin
              ? "✅ First point is (0,0) — passes through the origin"
              : "❌ First point is not (0,0) — does not pass through the origin"}
          </div>

          {result.k !== null && result.points.filter(p => p.x !== 0).length >= 1 && (
            <div className={`p-3 rounded-lg border text-center ${result.ratiosMatch ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800" : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"}`}>
              {result.ratiosMatch
                ? `✅ All ratios equal ${result.k} — constant k`
                : "❌ Ratios are not all equal — not a constant k"}
            </div>
          )}

          {isProportional ? (
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center">
              <span className="text-lg font-semibold text-green-700 dark:text-green-300">
                ✅ This graph IS proportional (k = {result.k})
              </span>
            </div>
          ) : result.points.length >= 2 ? (
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-center">
              <span className="text-lg font-semibold text-red-700 dark:text-red-300">
                ❌ This graph is NOT proportional
              </span>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
