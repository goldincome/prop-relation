export function TutoringCTA() {
  return (
    <div className="my-8 p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10 border border-amber-200 dark:border-amber-800">
      <h3 className="text-lg font-semibold text-ink dark:text-white mb-2">
        Still stuck?
      </h3>
      <p className="text-sm text-ink/70 dark:text-ink/50 mb-4">
        Get one-on-one help from a verified math tutor. Wyzant connects you with
        expert tutors who can walk you through proportional relationships step
        by step.
      </p>
      <a
        href="https://www.wyzant.com/tutors/math?utm_source=proportionalrelationship&utm_medium=referral&utm_campaign=math-help"
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-block text-sm bg-amber-600 hover:bg-amber-700 text-white font-medium py-2.5 px-5 rounded-lg transition-colors"
      >
        Find a math tutor
      </a>
    </div>
  )
}
