interface AuthorCardProps {
  name: string
}

export function AuthorCard({ name }: AuthorCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-ink/5 dark:bg-white/5 mt-8">
      <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-800 flex items-center justify-center flex-shrink-0">
        <span className="text-teal-600 dark:text-teal-300 font-semibold">
          {initials}
        </span>
      </div>
      <div>
        <p className="text-sm font-medium text-ink dark:text-white">{name}</p>
        <p className="text-xs text-ink/50 dark:text-ink/40">
          Math educator and content creator at Proportional Relationship.
        </p>
      </div>
    </div>
  )
}
