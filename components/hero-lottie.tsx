"use client"

import { useEffect, useState } from "react"
import { DotLottieReact, setWasmUrl } from "@lottiefiles/dotlottie-react"

const HERO_LOTTIE_SRC =
  "https://lottie.host/8c15d878-eef7-4119-b54e-b11d5ed2bafe/hkvUWhAvYo.lottie"

const WASM_PATH = "/dotlottie-player.wasm"

export function HeroLottie() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setWasmUrl(`${window.location.origin}${WASM_PATH}`)
    setIsReady(true)
  }, [])

  const containerClass =
    "relative w-full min-w-0 aspect-square flex items-center justify-start origin-left scale-[1.15] sm:scale-[1.25] lg:scale-[1.35] -translate-x-10 sm:-translate-x-14 lg:-translate-x-20 -translate-y-6 sm:-translate-y-8 lg:-translate-y-10"

  if (!isReady) {
    return (
      <div
        className={`${containerClass} min-h-[320px] sm:min-h-[400px] lg:min-h-[520px]`}
        aria-hidden
      />
    )
  }

  return (
    <div
      className={`${containerClass} min-h-[320px] sm:min-h-[400px] lg:min-h-[520px]`}
    >
      <DotLottieReact
        src={HERO_LOTTIE_SRC}
        loop
        autoplay
        className="w-full h-full min-h-[inherit]"
      />
    </div>
  )
}
