"use client"

import { useState } from "react"

export function ScaleFactorCalc() {
  const [original, setOriginal] = useState("")
  const [newVal, setNewVal] = useState("")
  const [result, setResult] = useState<{ factor: number } | null>(null)
  const [error, setError] = useState("")

  function calculate() {
    const nOrig = parseFloat(original)
    const nNew = parseFloat(newVal)

    if (isNaN(nOrig) || isNaN(nNew)) {
      setError("Enter both original and new measurements.")
      setResult(null)
      return
    }
    if (nOrig === 0) {
      setError("Original measurement cannot be zero.")
      setResult(null)
      return
    }

    setError("")
    setResult({ factor: nNew / nOrig })
  }

  return (
    <div>
      <p className="text-sm text-ink/60 dark:text-ink/40 mb-4">Enter the original and new measurements to find the scale factor.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">Original</label>
          <input type="number" value={original} onChange={(e) => setOriginal(e.target.value)} placeholder="4" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">New</label>
          <input type="number" value={newVal} onChange={(e) => setNewVal(e.target.value)} placeholder="10" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>

      <button type="button" onClick={calculate} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4">
        Calculate
      </button>

      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

      {result && (
        <div className="space-y-3 text-sm">
          <div className="p-3 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20">
            {parseFloat(newVal)} &divide; {parseFloat(original)} = <strong className="text-teal-700 dark:text-teal-300">{result.factor}</strong>
          </div>
          <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
            <div className="text-xs text-ink/50 dark:text-ink/40 mb-1">Scale Factor</div>
            <div className="text-2xl font-bold text-teal-700 dark:text-teal-300">{result.factor}</div>
            <div className="text-sm text-teal-600 dark:text-teal-400 mt-1">
              {result.factor > 1 ? "Enlargement" : result.factor < 1 ? "Reduction" : "Same size"}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
