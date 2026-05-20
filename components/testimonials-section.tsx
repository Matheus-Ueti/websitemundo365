"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Testimonial } from "@/types"

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Após o atendimento da equipe Mundo365, sempre muito atenciosos e rápidos conforme a urgência de cada situação. A implementação de segurança foi impecável e o suporte técnico superou todas as expectativas.",
    author: "Elson Soares",
    role: "Diretor | Gestor",
    company: "Cascavel - PR",
    initials: "ES",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    quote: "A Mundo365 transformou completamente nossa infraestrutura de TI. A migração para o Azure foi suave e sem interrupções, e o suporte técnico é excepcional. Recomendo fortemente para qualquer empresa que busca modernizar seus sistemas.",
    author: "Maria Silva",
    role: "CTO",
    company: "TechCorp",
    initials: "MS",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 3,
    quote: "Excelente parceria! A equipe demonstrou profundo conhecimento técnico e comprometimento com nossos resultados. O backup gerenciado nos deu tranquilidade total quanto à segurança dos nossos dados.",
    author: "Carlos Santos",
    role: "Gerente de TI",
    company: "Indústria XYZ",
    initials: "CS",
    color: "from-emerald-500 to-green-600",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const current = testimonials[currentIndex]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium text-sm uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4 mb-4 text-balance">
            Há 11 anos a Mundo365 entrega resultados
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            E constrói histórias de sucesso com nossos clientes.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
            {/* Gradient top border */}
            <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />

            {/* Large quote mark */}
            <div className="absolute top-6 right-8 text-8xl font-serif text-gray-200 leading-none select-none">"</div>

            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              {/* Content */}
              <div>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 relative z-10">
                  "{current.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${current.color} rounded-full flex items-center justify-center shadow-md`}>
                    <span className="text-white font-bold text-sm">{current.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{current.author}</p>
                    <p className="text-sm text-gray-500">{current.role} — {current.company}</p>
                  </div>
                </div>
              </div>

              {/* Navigation - Desktop */}
              <div className="hidden md:flex flex-col gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-all"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 text-gray-400 hover:text-blue-600 transition-all"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-cyan-500 to-blue-600"
                      : "w-4 bg-gray-200 hover:bg-gray-300"
                  }`}
                  aria-label={`Depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
