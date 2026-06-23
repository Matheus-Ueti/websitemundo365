'use client'

import { useTranslations } from 'next-intl'
import {
  ShieldCheck,
  Lock,
  ShieldAlert,
  MonitorCheck,
  FileText,
  Headphones,
  Clock,
  ArrowRight,
  Shield,
  Cloud,
  BadgeCheck,
  Users,
} from 'lucide-react'
import { SECTION_IDS } from '@/lib/constants/sections'
import type { MarketplaceFeature, MarketplaceTrustItem } from '@/types'

const WHATSAPP_URL =
  'https://wa.me/554530999700?text=Ol%C3%A1%21+Tenho+interesse+em+adquirir+o+Firewall+da+Mundo365.+Poderia+me+passar+mais+informa%C3%A7%C3%B5es%3F'

const CHIP_ICONS = [Clock, Lock, FileText]

const FEATURE_ICONS = [Lock, ShieldAlert, MonitorCheck, FileText, Headphones]

const TRUST_ICONS = [null, Shield, Cloud, Users, Clock]

function MicrosoftFlagIcon() {
  return (
    <svg viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0">
      <rect x="1" y="1" width="10" height="10" fill="#F25022" />
      <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
      <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
      <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
    </svg>
  )
}

function HolographicShield() {
  return (
    <div className="absolute right-0 bottom-0 w-56 h-56 pointer-events-none select-none overflow-hidden rounded-br-3xl">
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/20 via-blue-500/10 to-transparent" />
      <div className="absolute bottom-2 right-2 w-44 h-44 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-400/20 blur-2xl rounded-full" />
        <div className="absolute inset-4 bg-cyan-300/15 blur-xl rounded-full" />
        <ShieldCheck
          className="absolute inset-0 w-full h-full text-blue-200/25"
          strokeWidth={0.5}
        />
        <ShieldCheck
          className="absolute inset-6 w-[calc(100%-3rem)] h-[calc(100%-3rem)] text-cyan-100/40"
          strokeWidth={0.75}
        />
        <ShieldCheck
          className="absolute inset-10 w-[calc(100%-5rem)] h-[calc(100%-5rem)] text-white/60"
          strokeWidth={1}
        />
        <div className="absolute inset-0 rounded-full border border-cyan-300/20 blur-sm" />
      </div>
    </div>
  )
}

export function MarketplaceSection() {
  const t = useTranslations('marketplace')
  const features = t.raw('firewallFeatures') as MarketplaceFeature[]
  const chips = t.raw('chips') as string[]
  const trust = t.raw('trust') as MarketplaceTrustItem[]

  return (
    <section
      id={SECTION_IDS.marketplace}
      className="relative py-24 sm:py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
      aria-labelledby="marketplace-heading"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-cyan-600 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
            <span className="w-6 h-px bg-cyan-500 rounded-full" />
            {t('eyebrow')}
            <span className="w-6 h-px bg-cyan-500 rounded-full" />
          </span>
          <h2
            id="marketplace-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 tracking-tight text-balance leading-tight mb-4"
          >
            {t('title')}
          </h2>
          <p className="text-gray-500 text-base sm:text-lg">{t('subtitle')}</p>
        </header>

        {/* Product card */}
        <article className="max-w-5xl mx-auto rounded-3xl bg-white border border-gray-100 shadow-xl shadow-slate-200/60 overflow-hidden">
          <div className="grid md:grid-cols-[minmax(0,1fr)_1.35fr]">
            {/* Left: gradient panel */}
            <div className="relative bg-gradient-to-br from-[#6b21a8] via-[#7c3aed] to-[#06b6d4] p-8 sm:p-10 flex flex-col overflow-hidden">
              {/* Top row: shield icon */}
              <div className="flex items-start mb-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Category + name + description */}
              <div className="relative z-10">
                <p className="text-[11px] font-semibold text-white/70 uppercase tracking-widest mb-1.5">
                  {t('firewallCategory')}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  {t('firewallName')}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed mb-8">
                  {t('firewallDescription')}
                </p>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                {chips.map((chip, i) => {
                  const Icon = CHIP_ICONS[i]
                  return (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {Icon && <Icon className="w-3.5 h-3.5 text-white/80" />}
                      {chip}
                    </span>
                  )
                })}
              </div>

              {/* CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 mt-auto flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-white text-violet-700 font-bold text-sm transition-all hover:bg-white/90 shadow-lg shadow-black/10 hover:-translate-y-0.5"
              >
                {t('buyButton')}
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Footer note */}
              <p className="relative z-10 mt-4 flex items-center gap-1.5 text-white/50 text-[11px]">
                <Shield className="w-3 h-3 flex-shrink-0" />
                {t('footerNote')}
              </p>

              {/* Holographic shield decoration */}
              <HolographicShield />
            </div>

            {/* Right: features */}
            <div className="p-8 sm:p-10 flex flex-col">
              <h4 className="text-gray-900 font-bold text-lg mb-6">{t('includedTitle')}</h4>
              <ul className="flex flex-col gap-5">
                {features.map((item, i) => {
                  const Icon = FEATURE_ICONS[i] ?? ShieldCheck
                  return (
                    <li key={item.title} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4.5 h-4.5 text-cyan-600 w-[18px] h-[18px]" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold text-sm leading-snug">
                          {item.title}
                        </p>
                        <p className="text-gray-500 text-sm leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Trust bar */}
          <div className="border-t border-gray-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x divide-gray-100">
            {trust.map((item, i) => {
              const Icon = TRUST_ICONS[i]
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 px-5 py-4 first:col-span-2 sm:first:col-span-1"
                >
                  <div className="flex-shrink-0">
                    {i === 0 ? (
                      <MicrosoftFlagIcon />
                    ) : Icon ? (
                      <Icon className="w-5 h-5 text-cyan-600" />
                    ) : (
                      <BadgeCheck className="w-5 h-5 text-cyan-600" />
                    )}
                  </div>
                  <p className="text-gray-700 text-xs font-medium leading-tight">{item.label}</p>
                </div>
              )
            })}
          </div>
        </article>
      </div>
    </section>
  )
}
