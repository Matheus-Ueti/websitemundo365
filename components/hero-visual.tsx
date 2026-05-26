"use client"

import dynamic from "next/dynamic"

const HeroLottie = dynamic(
  () => import("@/components/hero-lottie").then((mod) => mod.HeroLottie),
  {
    ssr: false,
    loading: () => (
      <div
        className="relative w-full min-h-[320px] sm:min-h-[400px] lg:min-h-[520px] aspect-square"
        aria-hidden
      />
    ),
  }
)

export function HeroVisual() {
  return <HeroLottie />
}
