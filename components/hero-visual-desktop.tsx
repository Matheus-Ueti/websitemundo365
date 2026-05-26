"use client"

import { useEffect, useState } from "react"
import { HeroVisual } from "@/components/hero-visual"

/** Mesmo breakpoint do Tailwind `lg` (1024px). */
const DESKTOP_MEDIA_QUERY = "(min-width: 1024px)"

/**
 * Só monta o Lottie em viewport desktop — evita WASM e layout pesado no mobile.
 */
export function HeroVisualDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_MEDIA_QUERY)
    const update = () => setIsDesktop(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  if (!isDesktop) return null

  return <HeroVisual />
}
