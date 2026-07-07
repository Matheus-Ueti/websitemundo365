'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import {
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Lightbulb,
  Rocket,
} from 'lucide-react'
import { SECTION_IDS } from '@/lib/constants/sections'
import type { ContactPillar, LucideIcon } from '@/types'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

interface FormState {
  nome: string
  telefone: string
  email: string
  mensagem: string
}

const EMPTY_FORM: FormState = { nome: '', telefone: '', email: '', mensagem: '' }

const inputClass =
  'w-full px-5 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/25 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all text-sm'

// Ícones pareados por índice com o array de pilares vindo das traduções.
const PILLAR_ICONS: LucideIcon[] = [ShieldCheck, Lightbulb, Rocket]

export function ContactSection() {
  const t = useTranslations('contactForm')
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const pillars = t.raw('pillars') as ContactPillar[]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/sendemail/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error ?? t('errorGeneric'))
        setStatus('error')
        return
      }

      setStatus('success')
      setForm(EMPTY_FORM)
    } catch {
      setErrorMsg(t('errorGeneric'))
      setStatus('error')
    }
  }

  return (
    <section
      id={SECTION_IDS.contact}
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#0d1f3c] to-slate-900"
      aria-label={t('eyebrow')}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,520px)] gap-10 lg:gap-16 items-center">
          {/* ─── Coluna esquerda: mensagem + pilares ─── */}
          <div className="text-center lg:text-left">
            <p className="text-cyan-400 font-semibold text-xs uppercase tracking-[0.25em] mb-4">
              {t('leftEyebrow')}
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight text-balance mb-6">
              {t('leftTitle')}
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
              {t('leftSubtitle')}
            </p>

            <span className="block w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-8 mx-auto lg:mx-0" />

            <ul className="flex items-start justify-center lg:justify-start gap-4 sm:gap-6">
              {pillars.map((pillar, i) => {
                const Icon = PILLAR_ICONS[i] ?? ShieldCheck
                return (
                  <li
                    key={pillar.title}
                    className="flex items-center gap-2.5 [&:not(:first-child)]:border-l [&:not(:first-child)]:border-white/15 [&:not(:first-child)]:pl-4 sm:[&:not(:first-child)]:pl-6"
                  >
                    <Icon className="w-7 h-7 text-cyan-400 flex-shrink-0" />
                    <span className="text-white/85 text-[11px] sm:text-xs font-medium leading-snug max-w-[6.5rem] text-left">
                      {pillar.title}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* ─── Coluna direita: formulário ─── */}
          <div className="rounded-3xl bg-gradient-to-br from-[#0d1f3c] via-[#0f2a4a] to-[#0a1628] border border-blue-900/40 p-6 sm:p-8 shadow-2xl shadow-blue-900/40">
            {status === 'success' ? (
              <div className="flex flex-col items-center gap-4 py-10 text-center">
                <CheckCircle className="w-12 h-12 text-white" />
                <h3 className="text-xl font-bold text-white">{t('successTitle')}</h3>
                <p className="text-white/70 text-sm max-w-xs">{t('successSubtitle')}</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 px-6 py-2.5 rounded-full bg-white text-violet-700 font-semibold text-sm hover:bg-white/90 transition-all"
                >
                  {t('sendAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  autoComplete="name"
                  required
                  value={form.nome}
                  onChange={handleChange}
                  placeholder={t('namePlaceholder')}
                  aria-label={t('nameLabel')}
                  className={inputClass}
                />

                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={form.telefone}
                  onChange={handleChange}
                  placeholder={t('phonePlaceholder')}
                  aria-label={t('phoneLabel')}
                  className={inputClass}
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t('emailPlaceholder')}
                  aria-label={t('emailLabel')}
                  className={inputClass}
                />

                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  required
                  value={form.mensagem}
                  onChange={handleChange}
                  placeholder={t('messagePlaceholder')}
                  aria-label={t('messageLabel')}
                  className="w-full px-5 py-3 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/25 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all text-sm resize-none"
                />

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-white/90 text-xs bg-red-500/30 border border-red-300/30 rounded-2xl px-4 py-2.5">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white text-violet-700 font-bold text-sm hover:bg-white/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-lg shadow-black/10 mt-1"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      {t('sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {t('submit')}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
