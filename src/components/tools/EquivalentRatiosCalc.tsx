"use client"

import { useState } from "react"

export function EquivalentRatiosCalc() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [count, setCount] = useState("5")
  const [result, setResult] = useState<{ pairs: { a: number; b: number }[] } | null>(null)
  const [error, setError] = useState("")

  function calculate() {
    const nA = parseFloat(a)
    const nB = parseFloat(b)
    const n = parseInt(count) || 5

    if (isNaN(nA) || isNaN(nB)) {
      setError("Enter both ratio values.")
      setResult(null)
      return
    }
    if (nB === 0) {
      setError("The second term cannot be zero.")
      setResult(null)
      return
    }

    setError("")
    const pairs = []
    for (let i = 1; i <= n; i++) {
      pairs.push({ a: nA * i, b: nB * i })
    }
    setResult({ pairs })
  }

  return (
    <div>
      <p className="text-sm text-ink/60 dark:text-ink/40 mb-4">Enter a ratio to generate equivalent ratios.</p>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">a</label>
          <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="2" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">b</label>
          <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="3" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">Count</label>
          <input type="number" value={count} onChange={(e) => setCount(e.target.value)} placeholder="5" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>

      <button type="button" onClick={calculate} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4">
        Generate
      </button>

      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

      {result && (
        <div className="text-sm">
          <div className="p-3 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20 mb-3">
            Simplified ratio: <strong className="text-teal-700 dark:text-teal-300">{parseFloat(a)}:{parseFloat(b)}</strong>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {result.pairs.map((p, i) => (
              <div key={i} className="p-2 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 text-center">
                <span className="font-medium text-teal-700 dark:text-teal-300">{p.a}:{p.b}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
