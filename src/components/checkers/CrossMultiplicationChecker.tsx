"use client"

import { useState } from "react"

export function CrossMultiplicationChecker() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [c, setC] = useState("")
  const [d, setD] = useState("")
  const [result, setResult] = useState<{
    left: number
    right: number
    match: boolean
  } | null>(null)
  const [error, setError] = useState("")

  function check() {
    const nA = parseFloat(a)
    const nB = parseFloat(b)
    const nC = parseFloat(c)
    const nD = parseFloat(d)

    if (isNaN(nA) || isNaN(nB) || isNaN(nC) || isNaN(nD)) {
      setError("Fill in all four values.")
      setResult(null)
      return
    }

    setError("")
    const left = nA * nD
    const right = nB * nC
    setResult({ left, right, match: Math.abs(left - right) < 1e-10 })
  }

  return (
    <div>
      <div className="flex items-end gap-3 mb-4 flex-wrap justify-center">
        <div className="w-20">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">a</label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            className="w-full px-3 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white text-center text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <span className="text-xl text-ink/40 pb-3">:</span>
        <div className="w-20">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">b</label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            className="w-full px-3 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white text-center text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <span className="text-xl text-ink/40 pb-3">=</span>
        <div className="w-20">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">c</label>
          <input
            type="number"
            value={c}
            onChange={(e) => setC(e.target.value)}
            className="w-full px-3 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white text-center text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <span className="text-xl text-ink/40 pb-3">:</span>
        <div className="w-20">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">d</label>
          <input
            type="number"
            value={d}
            onChange={(e) => setD(e.target.value)}
            className="w-full px-3 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white text-center text-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={check}
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4 text-base"
      >
        Check Proportion
      </button>

      {error && <p className="text-sm text-red-500 mb-3 text-center">{error}</p>}

      {result && (
        <div className="space-y-3 text-sm">
          <div className="p-4 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20 text-center">
            {a} × {d} = <strong className="text-teal-700 dark:text-teal-300">{result.left}</strong>
          </div>
          <div className="p-4 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20 text-center">
            {b} × {c} = <strong className="text-teal-700 dark:text-teal-300">{result.right}</strong>
          </div>
          {result.match ? (
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center">
              <span className="text-lg font-semibold text-green-700 dark:text-green-300">
                ✅ {result.left} = {result.right} — These ratios ARE proportional
              </span>
            </div>
          ) : (
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-center">
              <span className="text-lg font-semibold text-red-700 dark:text-red-300">
                ❌ {result.left} ≠ {result.right} — These ratios are NOT proportional
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
