"use client"

import { useState } from "react"
import { DEFAULT_TESTIMONIAL_ID, testimonials } from "@/data/testimonials"

export function TestimonialsSection() {
  const [activeId, setActiveId] = useState(DEFAULT_TESTIMONIAL_ID)
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
          <div className="relative bg-white rounded-2xl border-2 border-cyan-400/60 shadow-sm shadow-cyan-100 p-6 sm:p-8 md:p-10 flex flex-col min-h-[280px] sm:min-h-[320px]">

            <span
              className="absolute top-4 left-4 sm:top-6 sm:left-8 text-5xl sm:text-6xl font-serif text-gray-900 leading-none select-none pointer-events-none"
              aria-hidden
            >
              &ldquo;
            </span>

            {/* Logo + empresa no fluxo normal (evita sobrepor o texto no mobile) */}
            <div className="flex items-center justify-end gap-2 mb-4 pt-2">
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${current.color} flex items-center justify-center shadow-md flex-shrink-0`}
              >
                <span className="text-white font-bold text-sm">{current.initials}</span>
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider text-right max-w-[140px] leading-tight">
                {current.company}
              </span>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 pl-6 sm:pl-8 pr-2 sm:pr-12">
              {current.quote}
            </p>

            <p className="text-xs font-bold text-gray-800 uppercase tracking-widest mt-auto">
              {current.author} — {current.company.toUpperCase()}
            </p>

            <span
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 text-5xl sm:text-6xl font-serif text-gray-900 leading-none select-none pointer-events-none"
              aria-hidden
            >
              &rdquo;
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
