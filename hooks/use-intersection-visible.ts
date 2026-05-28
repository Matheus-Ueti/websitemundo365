"use client"

import { useEffect, useRef, useState } from "react"
import type { IntersectionVisibleOptions } from "@/types"

/**
 * Marca visibilidade quando o elemento entra no viewport (animações on-scroll).
 */
export function useIntersectionVisible<T extends HTMLElement>(
  options: IntersectionVisibleOptions = {}
) {
  const { threshold = 0.15, triggerOnce = true } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, triggerOnce])

  return { ref, isVisible }
}
