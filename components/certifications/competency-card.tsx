import { Award, Medal, Trophy } from "lucide-react"
import type { Competency, LucideIcon } from "@/types"

type CompetencyCardProps = Competency & {
  className?: string
  medalIndex?: number
}

const MEDAL_ICONS: LucideIcon[] = [Medal, Award, Trophy]

export function CompetencyCard({
  label,
  achieved,
  className,
  medalIndex = 0,
}: CompetencyCardProps) {
  const MedalIcon = MEDAL_ICONS[medalIndex % MEDAL_ICONS.length]

  return (
    <article
      className={[
        "group flex items-center gap-3 sm:gap-4 rounded-2xl bg-white p-3.5 sm:p-4",
        className,
        "border border-gray-100 shadow-[0_2px_16px_rgba(15,23,42,0.06)]",
        "transition-all duration-200 hover:shadow-[0_8px_28px_rgba(15,23,42,0.08)] hover:border-gray-200",
      ].join(" ")}
    >
      <div
        className={[
          "flex h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl",
          achieved ? "bg-orange-50 text-orange-500" : "bg-gray-50 text-gray-300",
        ].join(" ")}
      >
        <MedalIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[13px] sm:text-sm font-semibold text-gray-900 leading-snug">{label}</p>
        <p
          className={[
            "text-[11px] sm:text-xs font-medium mt-0.5",
            achieved ? "text-orange-500" : "text-gray-400",
          ].join(" ")}
        >
          Solutions Partner
        </p>
      </div>
    </article>
  )
}
