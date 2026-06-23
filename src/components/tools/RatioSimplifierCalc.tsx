"use client"

import { useState } from "react"

function gcd(a: number, b: number): number {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b) {
    const t = b
    b = a % b
    a = t
  }
  return a
}

export function RatioSimplifierCalc() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [result, setResult] = useState<{ a: number; b: number; gcf: number } | null>(null)
  const [error, setError] = useState("")

  function calculate() {
    const nA = parseInt(a)
    const nB = parseInt(b)

    if (isNaN(nA) || isNaN(nB)) {
      setError("Enter both numbers.")
      setResult(null)
      return
    }
    if (nA === 0 || nB === 0) {
      setError("Neither term can be zero.")
      setResult(null)
      return
    }

    setError("")
    const g = gcd(nA, nB)
    setResult({ a: nA / g, b: nB / g, gcf: g })
  }

  return (
    <div>
      <p className="text-sm text-ink/60 dark:text-ink/40 mb-4">Enter a ratio to simplify it to its lowest terms.</p>
      <div className="flex items-center gap-3 mb-4 justify-center">
        <div className="w-24">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">a</label>
          <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="12" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <span className="text-lg text-ink/40 mt-6">:</span>
        <div className="w-24">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">b</label>
          <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="16" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>

      <button type="button" onClick={calculate} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4">
        Simplify
      </button>

      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

      {result && (
        <div className="space-y-3 text-sm">
          <div className="p-3 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20">
            GCF of {parseInt(a)} and {parseInt(b)} = <strong className="text-teal-700 dark:text-teal-300">{result.gcf}</strong>
          </div>
          <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
            <div className="text-xs text-ink/50 dark:text-ink/40 mb-1">Simplified Ratio</div>
            <div className="text-2xl font-bold text-teal-700 dark:text-teal-300">{result.a} : {result.b}</div>
            <div className="text-sm text-teal-600 dark:text-teal-400 mt-1">
              {parseInt(a)}:{parseInt(b)} = {result.a}:{result.b}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
