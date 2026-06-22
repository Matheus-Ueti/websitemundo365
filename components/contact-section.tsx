'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { SECTION_IDS } from '@/lib/constants/sections'

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

export function ContactSection() {
  const t = useTranslations('contactForm')
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
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
      className="py-16 sm:py-20 bg-gray-50"
      aria-label={t('eyebrow')}
    >
      <div className="max-w-md mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-[#6b21a8] via-[#7c3aed] to-[#06b6d4] p-8 shadow-2xl shadow-violet-500/25">

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
            <>
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
                  rows={3}
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
            </>
          )}
        </div>
      </div>
    </section>
  )
}
