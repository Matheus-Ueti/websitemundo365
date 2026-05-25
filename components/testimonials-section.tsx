"use client"

import { useState } from "react"
import type { Testimonial } from "@/types"

// ─── Data ────────────────────────────────────────────────────────────────────

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Acho o atendimento da Mundo 365 ótimo, sempre muito atenciosos e rápido conforme a urgência de cada situação. Referente ao cenário, depois que tivemos a assessoria na parte da TI melhoramos muita coisa internamente, inclusive plataformas de atendimento, processos aos nossos colaboradores para ser ágil no mercado, pois os clientes não querem esperar. Tivemos um impacto muito positivo dentro da nossa empresa. O diferencial eu digo que não é apenas apagar o fogo e sim fazer um gerenciamento no que pode ser feito como melhoria, isso que faz a Mundo 365 um diferencial.",
    author: "Felipe Torrano Trevisan",
    role: "Diretor",
    company: "Grupo Campseg",
    initials: "GC",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    quote: "Após o atendimento da equipe Mundo365, sempre muito atenciosos e rápidos conforme a urgência de cada situação. A implementação de segurança foi impecável e o suporte técnico superou todas as expectativas.",
    author: "Elson Soares",
    role: "Diretor | Gestor",
    company: "Hospital São Lucas",
    initials: "HS",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 3,
    quote: "Excelente parceria! A equipe demonstrou profundo conhecimento técnico e comprometimento com nossos resultados. O backup gerenciado nos deu tranquilidade total quanto à segurança dos nossos dados.",
    author: "João D. Batista",
    role: "Gestor de TI",
    company: "J.D.B Seguros",
    initials: "JD",
    color: "from-emerald-500 to-green-600",
  },
]

// ─── Component ───────────────────────────────────────────────────────────────

export function TestimonialsSection() {
  const [activeId, setActiveId] = useState(1)
  const current = testimonials.find((t) => t.id === activeId) ?? testimonials[0]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Depoimentos
          </h2>
          <p className="text-gray-500 text-base">
            Há 11 anos a Mundo 365 entrega resultados e constrói histórias de sucesso
          </p>
        </div>

        {/* Layout */}
        <div className="grid md:grid-cols-[220px_1fr] gap-6 items-stretch">

          {/* ── Sidebar — lista de empresas ── */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {testimonials.map((t) => {
              const isActive = t.id === activeId
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveId(t.id)}
                  className={[
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 whitespace-nowrap md:whitespace-normal w-full",
                    isActive
                      ? "bg-gray-900 shadow-md"
                      : "bg-gray-50 hover:bg-gray-100 border border-gray-100",
                  ].join(" ")}
                >
                  {/* Logo / initials */}
                  <div
                    className={[
                      "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold",
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-white border border-gray-200 text-gray-500",
                    ].join(" ")}
                  >
                    {t.initials}
                  </div>
                  <span
                    className={[
                      "text-sm font-semibold leading-tight",
                      isActive ? "text-white" : "text-gray-600",
                    ].join(" ")}
                  >
                    {t.company}
                  </span>
                </button>
              )
            })}
          </div>

          {/* ── Card do depoimento ── */}
          <div className="relative bg-white rounded-2xl border-2 border-cyan-400/60 shadow-sm shadow-cyan-100 p-8 md:p-10 flex flex-col justify-between min-h-[320px]">

            {/* Aspas abertura — topo esquerdo */}
            <span className="absolute top-6 left-8 text-6xl font-serif text-gray-900 leading-none select-none">&ldquo;</span>

            {/* Logo empresa — topo direito */}
            <div className="absolute top-6 right-8 flex flex-col items-center gap-1">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${current.color} flex items-center justify-center shadow-md`}>
                <span className="text-white font-bold text-sm">{current.initials}</span>
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                {current.company}
              </span>
            </div>

            {/* Texto do depoimento */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-10 mb-8 pr-16">
              {current.quote}
            </p>

            {/* Autor — rodapé esquerdo */}
            <div>
              <p className="text-xs font-bold text-gray-800 uppercase tracking-widest">
                {current.author} — {current.company.toUpperCase()}
              </p>
            </div>

            {/* Aspas fechamento — rodapé direito */}
            <span className="absolute bottom-6 right-8 text-6xl font-serif text-gray-900 leading-none select-none">&rdquo;</span>
          </div>
        </div>
      </div>
    </section>
  )
}
