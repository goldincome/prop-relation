"use client"

import { useState } from "react"

export function ConstantOfProportionalityCalc() {
  const [x, setX] = useState("")
  const [y, setY] = useState("")
  const [result, setResult] = useState<{ k: number } | null>(null)
  const [error, setError] = useState("")

  function calculate() {
    const nX = parseFloat(x)
    const nY = parseFloat(y)

    if (isNaN(nX) || isNaN(nY)) {
      setError("Enter both x and y.")
      setResult(null)
      return
    }
    if (nX === 0) {
      setError("x cannot be zero.")
      setResult(null)
      return
    }

    setError("")
    setResult({ k: nY / nX })
  }

  return (
    <div>
      <p className="text-sm text-ink/60 dark:text-ink/40 mb-4">Enter a point (x, y) from a table or graph to find the constant of proportionality k.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">x</label>
          <input type="number" value={x} onChange={(e) => setX(e.target.value)} placeholder="3" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">y</label>
          <input type="number" value={y} onChange={(e) => setY(e.target.value)} placeholder="15" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>

      <button type="button" onClick={calculate} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4">
        Calculate
      </button>

      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

      {result && (
        <div className="space-y-3 text-sm">
          <div className="p-3 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20">
            k = {parseFloat(y)} &divide; {parseFloat(x)} = <strong className="text-teal-700 dark:text-teal-300">{result.k}</strong>
          </div>
          <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
            <div className="text-xs text-ink/50 dark:text-ink/40 mb-1">Equation</div>
            <div className="text-2xl font-bold text-teal-700 dark:text-teal-300">y = {result.k}x</div>
          </div>
        </div>
      )}
    </div>
  )
}
