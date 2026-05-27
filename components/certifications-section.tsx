import { certBadges, competencies } from "@/data/certifications"
import { AwardVisual } from "@/components/certifications/award-visual"
import { CertBadgeChip } from "@/components/certifications/cert-badge-chip"
import { CompetencyCard } from "@/components/certifications/competency-card"

export function CertificationsSection() {
  return (
    <section className="relative py-24 sm:py-28 bg-white overflow-x-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14 sm:mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
            <span className="w-6 h-px bg-orange-400 rounded-full" />
            Certificações e Qualificações
            <span className="w-6 h-px bg-orange-400 rounded-full" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mt-2 mb-4 tracking-tight text-balance leading-tight">
            Reconhecimento que garante{" "}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              qualidade
            </span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Confiança nos serviços da Mundo365 através de certificações e premiações oficiais Microsoft.
          </p>
        </header>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 xl:gap-20 items-end mb-14 sm:mb-16">
          <div className="min-w-0 lg:-ml-4 xl:-ml-6">
            <AwardVisual />
          </div>

          <div className="min-w-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {competencies.map((item, index) => (
              <CompetencyCard
                key={item.label}
                {...item}
                medalIndex={index}
                className={
                  index === competencies.length - 1 && competencies.length % 3 === 1
                    ? "lg:col-start-2"
                    : undefined
                }
              />
            ))}
          </div>
        </div>

        <div className="mt-14 sm:mt-16 pt-12 border-t border-gray-100">
          <p className="text-center text-xs sm:text-sm text-gray-500 uppercase tracking-[0.2em] font-medium mb-8 sm:mb-10">
            Certificações da equipe
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-12">
            {certBadges.map((badge) => (
              <CertBadgeChip key={badge.acronym} {...badge} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
