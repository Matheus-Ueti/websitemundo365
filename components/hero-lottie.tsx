"use client"

import { useEffect, useState } from "react"
import { DotLottieReact, setWasmUrl } from "@lottiefiles/dotlottie-react"
import {
  HERO_LOTTIE_SRC,
  HERO_LOTTIE_WASM_PATH,
  heroLottieLayout,
} from "@/lib/constants/hero-lottie"

export function HeroLottie() {
  const [isReady, setIsReady] = useState(false)
  const layoutClass = `${heroLottieLayout.container} ${heroLottieLayout.minHeights}`

  useEffect(() => {
    setWasmUrl(`${window.location.origin}${HERO_LOTTIE_WASM_PATH}`)
    setIsReady(true)
  }, [])

  if (!isReady) {
    return <div className={layoutClass} aria-hidden />
  }

  return (
    <div className={layoutClass}>
      <DotLottieReact
        src={HERO_LOTTIE_SRC}
        loop
        autoplay
        className="w-full h-full min-h-[inherit]"
      />
    </div>
  )
}
