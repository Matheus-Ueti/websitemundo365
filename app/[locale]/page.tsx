import { setRequestLocale } from 'next-intl/server'
import { SECTION_IDS } from '@/lib/constants/sections'
import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SolutionsSection } from '@/components/solutions-section'
import { MarketplaceSection } from '@/components/marketplace-section'
import { StatsSection } from '@/components/stats-section'
import { PartnerBanner } from '@/components/partner-banner'
import { CertificationsSection } from '@/components/certifications-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { PartnersSection } from '@/components/partners-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import type { LocalePageProps } from '@/types'

export default async function Home({ params }: LocalePageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main id={SECTION_IDS.main} className="relative min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <MarketplaceSection />
      <StatsSection />
      <PartnerBanner />
      <CertificationsSection />
      <TestimonialsSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
