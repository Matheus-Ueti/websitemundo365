"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Cloud, Rocket, Handshake, TrendingUp, Sparkles } from "lucide-react"
import type { TimelineItem } from "@/types"

const timeline: TimelineItem[] = [
  {
    year: "2014",
    title: "Início da jornada",
    description: "A Mundo365 nasce com o propósito de transformar negócios com tecnologia.",
    icon: Rocket,
    accent: "from-orange-400 to-amber-400",
  },
  {
    year: "2016",
    title: "Parceria Microsoft",
    description: "Nos tornamos parceiros Microsoft e ampliamos nosso portfólio de soluções.",
    icon: Handshake,
    accent: "from-blue-500 to-sky-400",
  },
  {
    year: "2019",
    title: "Especialização em Cloud",
    description: "Aprofundamos nossa atuação em Azure e soluções de infraestrutura.",
    icon: Cloud,
    accent: "from-cyan-500 to-blue-400",
  },
  {
    year: "2022",
    title: "Expansão e inovação",
    description: "Crescemos, inovamos e expandimos nossa atuação em todo o Brasil.",
    icon: TrendingUp,
    accent: "from-violet-500 to-purple-400",
  },
  {
    year: "2024+",
    title: "O futuro nos move",
    description: "Seguimos evoluindo com IA, automação e soluções que geram impacto real.",
    icon: Sparkles,
    accent: "from-fuchsia-500 to-pink-400",
  },
]

function OrbVisual() {
  return (
    <div className="relative w-full h-[580px] sm:h-[700px] flex items-center justify-end pr-4 sm:pr-8 select-none overflow-visible">

      <div className="relative flex items-center justify-center">

        <div className="absolute w-[480px] h-[480px] rounded-full bg-gradient-to-br from-blue-400/25 to-violet-500/20 blur-3xl" />
        <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-500/15 blur-2xl translate-x-12 -translate-y-12" />

        <div className="absolute w-[460px] h-[460px] rounded-full border border-blue-300/25 border-dashed" />
        <div className="absolute w-[580px] h-[580px] rounded-full border border-violet-300/20 border-dashed" />
        <div className="absolute w-[680px] h-[680px] rounded-full border border-indigo-200/15 border-dashed" />

        <div className="absolute w-[460px] h-[460px] rounded-full animate-[spin_18s_linear_infinite]">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-blue-400/80 shadow shadow-blue-400" />
          <div className="absolute top-[25%] -right-1.5 w-3 h-3 rounded-full bg-cyan-400/70 shadow shadow-cyan-400" />
          <div className="absolute top-[25%] -left-1.5 w-2.5 h-2.5 rounded-full bg-indigo-400/60 shadow shadow-indigo-400" />
        </div>

        <div className="absolute w-[580px] h-[580px] rounded-full animate-[spin_28s_linear_infinite_reverse]">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-400/70 shadow shadow-violet-400" />
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purple-400/60 shadow shadow-purple-400" />
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-fuchsia-400/60 shadow shadow-fuchsia-300" />
          <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-indigo-300/60 shadow shadow-indigo-300" />
        </div>

        <div className="absolute w-[680px] h-[680px] rounded-full animate-[spin_38s_linear_infinite]">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-blue-300/50 shadow shadow-blue-300" />
          <div className="absolute top-[70%] -right-1 w-2 h-2 rounded-full bg-violet-300/50 shadow shadow-violet-300" />
          <div className="absolute top-[30%] -left-1 w-2.5 h-2.5 rounded-full bg-cyan-300/50 shadow shadow-cyan-300" />
        </div>

        <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-[0_12px_72px_rgba(99,102,241,0.45),0_0_0_8px_rgba(255,255,255,0.95),0_0_0_18px_rgba(99,102,241,0.14)] z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-cyan-500/10 z-10" />
          <Image
            src="/award-winner.png"
            alt="Equipe Mundo365"
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 320px, 384px"
          />
        </div>

      </div>
    </div>
  )
}

function TimelineItemCard({
  year,
  title,
  description,
  icon: Icon,
  accent,
  isLast,
}: TimelineItem & { isLast: boolean }) {
  return (
    <div className="relative flex flex-col items-center gap-3 flex-1 min-w-[140px]">
      {!isLast && (
        <div className="absolute top-6 left-[calc(50%+24px)] right-[-50%] h-px bg-gradient-to-r from-gray-200 to-gray-100 hidden sm:block" />
      )}

      <div className={`relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br ${accent} flex items-center justify-center shadow-lg`}>
        <Icon className="w-5 h-5 text-white" />
      </div>

      <div className="text-center px-1">
        <p className={`text-xs font-bold bg-gradient-to-r ${accent} bg-clip-text text-transparent tracking-wide`}>
          {year}
        </p>
        <p className="text-gray-900 text-sm font-semibold mt-0.5 leading-snug">{title}</p>
        <p className="text-gray-400 text-[11px] mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function PartnerBadge({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl px-3 py-2 shadow-sm">
      <svg viewBox="0 0 23 23" className="w-5 h-5 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1h10v10H1z" fill="#F25022" />
        <path d="M12 1h10v10H12z" fill="#7FBA00" />
        <path d="M1 12h10v10H1z" fill="#00A4EF" />
        <path d="M12 12h10v10H12z" fill="#FFB900" />
      </svg>
      <span className="text-gray-700 text-xs font-medium">{label}</span>
    </div>
  )
}

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-24 sm:py-32">

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-50/80 to-violet-50/60 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-blue-50/70 to-cyan-50/50 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex justify-center mb-4">
          <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-indigo-500">
            Sobre Nós
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div
            className={[
              "flex flex-col gap-6 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            ].join(" ")}
          >
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                Tecnologia que conecta{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  ideias, pessoas
                </span>
                <br />
                e possibilidades.
              </h2>
              <div className="mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
            </div>

            <p className="text-gray-500 text-base leading-relaxed max-w-md">
              Há mais de 11 anos, a Mundo365 transforma desafios em soluções com
              tecnologia Microsoft. Impulsionamos empresas a inovarem, crescerem
              e irem além com segurança, performance e inteligência.
            </p>

            <div className="flex flex-wrap gap-2">
              <PartnerBadge label="Solutions Partner · Modern Work" />
              <PartnerBadge label="Solutions Partner · Infrastructure & Azure" />
            </div>
          </div>

          <div
            className={[
              "transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
            ].join(" ")}
          >
            <OrbVisual />
          </div>
        </div>

        <div
          className={[
            "mt-24 transition-all duration-700 delay-300",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          ].join(" ")}
        >
          <div className="text-center mb-12">
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-indigo-500 mb-2">
              Nossa Trajetória
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Uma história construída com{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                propósito
              </span>
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-4 justify-between">
            {timeline.map((item, i) => (
              <TimelineItemCard key={item.year} {...item} isLast={i === timeline.length - 1} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
