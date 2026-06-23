"use client"

import { useState } from "react"

export function UnitRateCalc() {
  const [total, setTotal] = useState("")
  const [quantity, setQuantity] = useState("")
  const [result, setResult] = useState<{ rate: number } | null>(null)
  const [error, setError] = useState("")

  function calculate() {
    const nTotal = parseFloat(total)
    const nQty = parseFloat(quantity)

    if (isNaN(nTotal) || isNaN(nQty)) {
      setError("Enter both total and quantity.")
      setResult(null)
      return
    }
    if (nQty === 0) {
      setError("Quantity cannot be zero.")
      setResult(null)
      return
    }

    setError("")
    setResult({ rate: nTotal / nQty })
  }

  return (
    <div>
      <p className="text-sm text-ink/60 dark:text-ink/40 mb-4">Enter a total amount and the quantity to find the rate per one unit.</p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">Total</label>
          <input type="number" value={total} onChange={(e) => setTotal(e.target.value)} placeholder="4.80" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">Quantity</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="16" className="w-full px-4 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>

      <button type="button" onClick={calculate} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4">
        Calculate
      </button>

      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

      {result && (
        <div className="space-y-3 text-sm">
          <div className="p-3 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20">
            {parseFloat(total)} &divide; {parseFloat(quantity)} = <strong className="text-teal-700 dark:text-teal-300">{result.rate}</strong>
          </div>
          <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
            <div className="text-xs text-ink/50 dark:text-ink/40 mb-1">Unit Rate</div>
            <div className="text-2xl font-bold text-teal-700 dark:text-teal-300">{result.rate} per unit</div>
          </div>
        </div>
      )}
    </div>
  )
}
