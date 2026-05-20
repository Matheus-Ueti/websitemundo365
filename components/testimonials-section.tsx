"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Building2 } from "lucide-react"

const testimonials = [
  {
    id: 1,
    quote: "Após o atendimento da equipe 365 coisa, sempre muito atenciosos e rápido conforme a urgência de cada situação. Referente ao serviço, digas que precisamos assucesso, foi ponta de Ti verificação de banco implementação de de segurança, anticíveis o ransóvn em necessita de tudo. Para tal qual do de nossa vida o sucesso do meu projeto, pelo o direito dele passar segurança e logos do que o cliente esperar.",
    author: "Elson Soares",
    role: "Diretor | Gestor",
    company: "Cascavel",
  },
  {
    id: 2,
    quote: "A Mundo365 transformou completamente nossa infraestrutura de TI. A migração para o Azure foi suave e sem interrupções, e o suporte técnico é excepcional. Recomendo fortemente para qualquer empresa que busca modernizar seus sistemas.",
    author: "Maria Silva",
    role: "CTO",
    company: "TechCorp",
  },
  {
    id: 3,
    quote: "Excelente parceria! A equipe demonstrou profundo conhecimento técnico e comprometimento com nossos resultados. O backup gerenciado nos deu tranquilidade total quanto à segurança dos nossos dados.",
    author: "Carlos Santos",
    role: "Gerente de TI",
    company: "Indústria XYZ",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
            Há 11 anos a Mundo365 entrega resultados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            E constrói histórias de sucesso com nossos clientes.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm relative">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>

            {/* Navigation - Mobile top */}
            <div className="flex justify-end gap-2 mb-6 md:hidden">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>

            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
              {/* Content */}
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {current.quote}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{current.author}</p>
                    <p className="text-sm text-muted-foreground">{current.role} - {current.company}</p>
                  </div>
                </div>
              </div>

              {/* Navigation - Desktop right */}
              <div className="hidden md:flex flex-col gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  aria-label="Próximo"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
