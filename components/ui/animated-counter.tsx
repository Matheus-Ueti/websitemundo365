'use client'

import { useEffect, useRef, useState } from 'react'
import type { AnimatedCounterProps } from '@/types'

export function AnimatedCounter({ value, prefix = '', suffix }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return

        hasAnimated.current = true
        let start = 0
        const duration = 2000
        const increment = value / (duration / 16)

        const timer = setInterval(() => {
          start += increment
          if (start >= value) {
            setCount(value)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return (
    <div
      ref={ref}
      className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent [font-family:var(--font-space-grotesk)]"
    >
      {prefix}
      {count.toLocaleString('pt-BR')}
      {suffix}
    </div>
  )
}
