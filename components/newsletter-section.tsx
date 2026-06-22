'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ArrowRight, Mail, Loader2 } from 'lucide-react'
import { SECTION_IDS } from '@/lib/constants/sections'
import { siteConfig } from '@/lib/site'
import type { NewsletterFormStatus } from '@/types'

export function NewsletterSection() {
  const t = useTranslations('newsletter')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<NewsletterFormStatus>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        setStatus('error')
        return
      }

      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
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
                {t('title')}
              </h2>
              <p className="text-slate-400 text-sm">{t('subtitle')}</p>
            </div>
          </div>

          {status === 'success' ? (
            <p role="status" className="text-cyan-300 text-sm md:text-base text-center md:text-right max-w-md">
              {t('successBefore')}{' '}
              <a href={`mailto:${siteConfig.contact.email}`} className="underline hover:text-white">
                {siteConfig.contact.email}
              </a>
              {t('successAfter')}
            </p>
          ) : (
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2"
                noValidate
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  {t('emailLabel')}
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('emailPlaceholder')}
                  disabled={status === 'loading'}
                  className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-600/50 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all disabled:opacity-60"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 whitespace-nowrap"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-4 h-4 animate-spin" aria-hidden />
                  ) : (
                    <>
                      {t('submit')}
                      <ArrowRight className="w-4 h-4" aria-hidden />
                    </>
                  )}
                </button>
              </form>
              {status === 'error' && (
                <p role="alert" className="text-red-400 text-xs text-center sm:text-right">
                  Erro ao inscrever. Tente novamente.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
