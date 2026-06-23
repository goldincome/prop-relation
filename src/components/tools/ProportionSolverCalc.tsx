"use client"

import { useState } from "react"

export function ProportionSolverCalc() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [c, setC] = useState("")
  const [d, setD] = useState("")
  const [unknown, setUnknown] = useState("c")
  const [result, setResult] = useState<{ value: number; steps: string[] } | null>(null)
  const [error, setError] = useState("")

  function calculate() {
    const nA = parseFloat(a)
    const nB = parseFloat(b)
    const nC = parseFloat(c)
    const nD = parseFloat(d)
    const vals = { a: nA, b: nB, c: nC, d: nD }

    const missing = unknown as keyof typeof vals
    if (isNaN(vals[missing])) {
      setError(`Enter the known values and leave "${unknown}" empty.`)
      setResult(null)
      return
    }
    const known = (Object.keys(vals) as (keyof typeof vals)[]).filter((k) => k !== missing && !isNaN(vals[k]))
    if (known.length < 3) {
      setError("Enter three known values.")
      setResult(null)
      return
    }

    let steps: string[] = []
    let value: number
    const stps: string[] = [`Set up: ${nA}:${nB} = ${nC}:${nD}`]

    if (unknown === "a") {
      value = (nB * nC) / nD
      stps.push(`a × ${nD} = ${nB} × ${nC}`)
      stps.push(`a = (${nB} × ${nC}) ÷ ${nD}`)
    } else if (unknown === "b") {
      value = (nA * nD) / nC
      stps.push(`${nA} × ${nD} = b × ${nC}`)
      stps.push(`b = (${nA} × ${nD}) ÷ ${nC}`)
    } else if (unknown === "c") {
      value = (nA * nD) / nB
      stps.push(`${nA} × ${nD} = ${nB} × c`)
      stps.push(`c = (${nA} × ${nD}) ÷ ${nB}`)
    } else {
      value = (nB * nC) / nA
      stps.push(`${nA} × d = ${nB} × ${nC}`)
      stps.push(`d = (${nB} × ${nC}) ÷ ${nA}`)
    }
    steps = stps
    steps.push(`${unknown} = ${value}`)
    setResult({ value, steps })
  }

  return (
    <div>
      <p className="text-sm text-ink/60 dark:text-ink/40 mb-4">Enter three known values in a proportion a:b = c:d. Select which value is unknown.</p>

      <div className="flex items-center gap-2 mb-4 flex-wrap justify-center">
        <div className="w-20">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">a</label>
          <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="3" className="w-full px-3 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <span className="text-lg text-ink/40 mt-6">:</span>
        <div className="w-20">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">b</label>
          <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="4" className="w-full px-3 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <span className="text-lg text-ink/40 mt-6">=</span>
        <div className="w-20">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">c</label>
          <input type="number" value={c} onChange={(e) => setC(e.target.value)} placeholder="6" className="w-full px-3 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
        <span className="text-lg text-ink/40 mt-6">:</span>
        <div className="w-20">
          <label className="block text-sm font-medium text-ink dark:text-white mb-1">d</label>
          <input type="number" value={d} onChange={(e) => setD(e.target.value)} placeholder="8" className="w-full px-3 py-3 rounded-lg border border-ink/20 dark:border-ink/30 bg-white dark:bg-ink/80 text-ink dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500" />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-ink dark:text-white mb-2">Solve for:</label>
        <div className="flex gap-2">
          {["a", "b", "c", "d"].map((v) => (
            <button key={v} type="button" onClick={() => setUnknown(v)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                unknown === v ? "bg-teal-600 text-white" : "bg-white dark:bg-ink/60 text-ink/60 dark:text-ink/40 border border-ink/20 dark:border-ink/30 hover:bg-teal-50 dark:hover:bg-teal-900/20"
              }`}
            >{v}</button>
          ))}
        </div>
      </div>

      <button type="button" onClick={calculate} className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mb-4">
        Solve
      </button>

      {error && <p className="text-sm text-red-500 mb-3">{error}</p>}

      {result && (
        <div className="space-y-2 text-sm">
          {result.steps.map((step, i) => (
            <div key={i} className="p-3 rounded-lg bg-offwhite dark:bg-ink/60 border border-ink/10 dark:border-ink/20">
              <span className="text-teal-600 dark:text-teal-400 font-medium">Step {i + 1}:</span> {step}
            </div>
          ))}
          <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800">
            <div className="text-xs text-ink/50 dark:text-ink/40 mb-1">Answer</div>
            <div className="text-2xl font-bold text-teal-700 dark:text-teal-300">{unknown} = {result.value}</div>
          </div>
        </div>
      )}
    </div>
  )
}
