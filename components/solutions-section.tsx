"use client"

import { useState } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import type {
  FloatingCardWithLabelsProps,
  FloatingLabels,
  FloatingPosition,
  Solution,
} from "@/types"
import { SECTION_IDS, sectionHref } from "@/lib/constants/sections"

const DEFAULT_SOLUTION_ID = "cyber-security"

function FloatingCard({ type, position, labels }: FloatingCardWithLabelsProps) {
  const positionClasses: Record<FloatingPosition, string> = {
    "top-right": "top-2 right-0 sm:top-4 sm:-right-4",
    "middle-right": "top-1/3 right-0 sm:-right-8",
    "bottom-left": "bottom-16 left-0 sm:bottom-20 sm:-left-4",
  }

  const getContent = () => {
    switch (type) {
      case "security":
        return (
          <div className="bg-white rounded-xl shadow-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">{labels.safe}</span>
          </div>
        )
      case "notification":
        return (
          <div className="bg-white rounded-xl shadow-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">K</div>
              <span className="text-xs text-gray-500">{labels.now}</span>
            </div>
            <p className="text-sm text-gray-700">{labels.protected}</p>
          </div>
        )
      case "dashboard":
        return (
          <div className="bg-white rounded-xl shadow-xl p-3 sm:p-4 w-36 sm:w-48">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">A</div>
              <span className="text-xs font-medium text-gray-700">{labels.portal}</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={`absolute ${positionClasses[position]} animate-float z-10 scale-[0.85] sm:scale-100 origin-center`}>
      {getContent()}
    </div>
  )
}

export function SolutionsSection() {
  const t = useTranslations("solutions")
  const solutions = t.raw("items") as Solution[]
  const floatingLabels: FloatingLabels = {
    safe: t("floating.safe"),
    now: t("floating.now"),
    protected: t("floating.protected"),
    portal: t("floating.portal"),
  }

  const [activeTab, setActiveTab] = useState(DEFAULT_SOLUTION_ID)
  const activeSolution = solutions.find((s) => s.id === activeTab) ?? solutions[0]

  return (
    <section id={SECTION_IDS.solutions} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            <span className="relative inline-block">
              {t("title")}
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-pretty">
            {t("subtitle")}
          </p>
        </div>

        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col gap-2 sm:hidden bg-gray-100 rounded-2xl p-2">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                type="button"
                onClick={() => setActiveTab(solution.id)}
                aria-pressed={activeTab === solution.id}
                className={[
                  "w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-center",
                  activeTab === solution.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900 bg-white/60",
                ].join(" ")}
              >
                {solution.tabTitle}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex justify-center">
            <div className="inline-flex bg-gray-100 rounded-full p-1.5 gap-1 flex-wrap justify-center max-w-4xl">
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  type="button"
                  onClick={() => setActiveTab(solution.id)}
                  aria-pressed={activeTab === solution.id}
                  className={[
                    "relative px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                    activeTab === solution.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "text-gray-500 hover:text-gray-800",
                  ].join(" ")}
                >
                  {solution.tabTitle}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-balance">
              {activeSolution.headline}
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              {activeSolution.description}
            </p>
            {activeSolution.subDescription && (
              <p className="text-gray-500 leading-relaxed mb-8">
                {activeSolution.subDescription}
              </p>
            )}
            <Link
              href={sectionHref(SECTION_IDS.contact)}
              className="inline-flex bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              {activeSolution.buttonText}
            </Link>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end px-4 sm:px-12 lg:px-0">
            <div className="absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -z-0" />

            <div className="relative z-10">
              <div className="relative w-[220px] h-[290px] sm:w-[280px] sm:h-[360px] lg:w-[350px] lg:h-[450px]">
                <Image
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  fill
                  className="object-cover object-top rounded-2xl"
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 350px"
                />
              </div>
              <FloatingCard type="security" position="bottom-left" labels={floatingLabels} />
              <FloatingCard type="notification" position="top-right" labels={floatingLabels} />
              <FloatingCard type="dashboard" position="middle-right" labels={floatingLabels} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
