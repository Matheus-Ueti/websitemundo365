"use client"

import { useState } from "react"
import { ArrowRight, Mail } from "lucide-react"
import { SECTION_IDS } from "@/lib/constants/sections"
import { siteConfig } from "@/lib/site"

type FormStatus = "idle" | "success"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<FormStatus>("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("success")
    setEmail("")
  }

  return (
    <section
      id={SECTION_IDS.news}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0d1f3c] to-slate-900"
      aria-labelledby="newsletter-heading"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="hidden md:flex w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl items-center justify-center shadow-lg shadow-blue-500/20 flex-shrink-0">
              <Mail className="w-7 h-7 text-white" aria-hidden />
            </div>
            <div>
              <h2 id="newsletter-heading" className="text-xl font-bold text-white mb-1">
                Receba dicas, insights e novidades
              </h2>
              <p className="text-slate-400 text-sm">
                Direto no seu e-mail, sem spam.
              </p>
            </div>
          </div>

          {status === "success" ? (
            <p
              role="status"
              className="text-cyan-300 text-sm md:text-base text-center md:text-right max-w-md"
            >
              Obrigado pelo interesse! Para falar com nossa equipe agora, escreva para{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="underline hover:text-white"
              >
                {siteConfig.contact.email}
              </a>
              .
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2 w-full md:w-auto"
              noValidate
            >
              <label htmlFor="newsletter-email" className="sr-only">
                E-mail
              </label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-600/50 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Inscrever
                <ArrowRight className="w-4 h-4" aria-hidden />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
