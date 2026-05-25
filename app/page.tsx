import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SolutionsSection } from "@/components/solutions-section"
import { StatsSection } from "@/components/stats-section"
import { PartnerBanner } from "@/components/partner-banner"
import { CertificationsSection } from "@/components/certifications-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PartnersSection } from "@/components/partners-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">

      <Header />
      <HeroSection />
      <SolutionsSection />
      <StatsSection />
      <PartnerBanner />

      <CertificationsSection />
      <TestimonialsSection />
      <PartnersSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
