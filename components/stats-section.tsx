"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import type { AnimatedCounterProps, Stat } from "@/types"

const stats: Stat[] = [
  { value: 5000, label: "Clientes beneficiados", suffix: "+" },
  { value: 150, label: "Projetos concluídos", suffix: "+" },
  { value: 100, label: "Prêmios ganhos", suffix: "" },
  { value: 999, label: "Serviços realizados", suffix: "+" },
  { value: 850, label: "Horas mensais em TI", suffix: "+" },
  { value: 99, label: "Clientes ativos", suffix: "" },
]

function AnimatedCounter({ value, suffix }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
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
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent [font-family:var(--font-space-grotesk)]">
      {count.toLocaleString("pt-BR")}{suffix}
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nossa História
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 text-balance">
            Por que a Mundo365 é a melhor
          </h2>
        </div>

        {/* Stats Grid with Trophy */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left Stats */}
          <div className="space-y-8">
            {stats.slice(0, 3).map((stat, index) => (
              <div key={index} className="text-center lg:text-right">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-slate-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex justify-center order-first lg:order-none">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="w-36 h-36 sm:w-48 sm:h-48 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl p-5">
                    <Image
                      src="/mundo365-logo.png"
                      alt="Mundo365"
                      width={120}
                      height={40}
                      className="w-auto h-auto brightness-0 invert max-w-full"
                    />
                  </div>
                </div>
              </div>
              {/* Floating ring */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full" />
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="space-y-8">
            {stats.slice(3, 6).map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-slate-400 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
