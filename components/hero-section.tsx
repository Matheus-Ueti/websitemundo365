import { getTranslations } from 'next-intl/server'
import { HeroBannerCarousel } from '@/components/hero-banner-carousel'
import { SECTION_IDS } from '@/lib/constants/sections'
import type { HeroBanner } from '@/types'

export async function HeroSection() {
  const t = await getTranslations('hero')
  const banners = t.raw('banners') as HeroBanner[]

  return (
    <section
      id={SECTION_IDS.home}
      className="relative overflow-hidden bg-gradient-to-br from-[#6b21a8] via-[#7c3aed] to-[#06b6d4] pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full">
        <HeroBannerCarousel
          banners={banners}
          carouselLabel={t('carouselLabel')}
          slideLabel={t('slideLabel')}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 leading-[0] pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          className="block w-full translate-y-px"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  )
}
