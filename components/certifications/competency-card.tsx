import { ChevronRight } from "lucide-react"
import type { Competency } from "@/types"

export function CompetencyCard({ label, achieved, icon: Icon }: Competency) {
  return (
    <article
      className={[
        "group relative flex flex-col justify-between",
        "p-4 sm:p-5 h-[130px] sm:h-[150px] rounded-2xl",
        "cursor-default select-none overflow-hidden",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1.5 hover:scale-[1.02]",
        achieved
          ? "bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40"
          : "bg-white border border-gray-100 shadow-[0_2px_16px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:border-gray-200",
      ].join(" ")}
    >
      {achieved && (
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/8 to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />
      )}

      <div
        className={[
          "w-9 h-9 rounded-xl flex items-center justify-center",
          achieved ? "bg-white/20" : "bg-gray-50 border border-gray-100",
        ].join(" ")}
      >
        <Icon className={`w-4 h-4 ${achieved ? "text-white" : "text-gray-400"}`} />
      </div>

      <div className="flex items-end justify-between gap-1">
        <span className={`text-[11px] font-semibold leading-snug ${achieved ? "text-white/95" : "text-gray-500"}`}>
          {label}
        </span>
        <div
          className={[
            "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0",
            "transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            achieved ? "bg-white/25" : "bg-gray-100 group-hover:bg-gray-200",
          ].join(" ")}
        >
          <ChevronRight className={`w-3 h-3 ${achieved ? "text-white" : "text-gray-400"}`} />
        </div>
      </div>
    </article>
  )
}
