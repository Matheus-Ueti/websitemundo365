import Image from "next/image"
import { certBadges, competencies } from "@/data/certifications"
import { CertBadgeChip } from "@/components/certifications/cert-badge-chip"
import { CertificationBackground } from "@/components/certifications/certification-background"
import { CompetencyCard } from "@/components/certifications/competency-card"

export function CertificationsSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <CertificationBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-xs uppercase tracking-[0.2em] mb-4">
            <span className="w-6 h-px bg-orange-400 rounded-full" />
            Certificações e Qualificações
            <span className="w-6 h-px bg-orange-400 rounded-full" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
            Reconhecimento que garante qualidade
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            Confiança nos serviços da Mundo365 através de certificações e premiações oficiais Microsoft.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">
          <div className="relative isolate">
            <div
              className="pointer-events-none absolute -left-10 top-4 w-[280px] h-[380px] bg-gradient-to-br from-violet-500 to-purple-600 opacity-80 z-0"
              style={{ borderRadius: "62% 38% 46% 54% / 44% 58% 42% 56%" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-4 bottom-8 w-[200px] h-[200px] bg-gradient-to-br from-violet-400 to-fuchsia-500 opacity-55 z-0"
              style={{ borderRadius: "38% 62% 54% 46% / 58% 36% 64% 42%" }}
              aria-hidden
            />
            <div className="pointer-events-none absolute bottom-0 left-0 w-[180px] h-[180px] rounded-full bg-orange-400/20 blur-3xl z-0" aria-hidden />

            <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-violet-300/20 z-10">
              <div className="absolute top-0 left-0 right-0 z-20 flex items-center gap-2.5 px-5 py-4 bg-gradient-to-b from-black/50 via-black/20 to-transparent">
                <span className="text-white/90 text-[10px] font-semibold tracking-wider">TD SYNNEX</span>
                <span className="w-px h-3 bg-white/30" />
                <svg viewBox="0 0 23 23" className="w-4 h-4 flex-shrink-0" aria-hidden>
                  <path fill="#f35325" d="M1 1h10v10H1z" />
                  <path fill="#81bc06" d="M12 1h10v10H12z" />
                  <path fill="#05a6f0" d="M1 12h10v10H1z" />
                  <path fill="#ffba08" d="M12 12h10v10H12z" />
                </svg>
                <span className="text-white/90 text-[10px] font-semibold tracking-wider">Microsoft</span>
                <span className="w-px h-3 bg-white/30" />
                <span className="text-white/90 text-[10px] font-semibold tracking-wider">MUNDO365</span>
              </div>

              <Image
                src="/award-winner.png"
                alt="Mundo365 — Ganhador Top Growth Awards 2026 TD SYNNEX e Microsoft"
                width={560}
                height={640}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />

              <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {competencies.map((item) => (
              <CompetencyCard key={item.label} {...item} />
            ))}
          </div>
        </div>

        <div className="relative mt-16 sm:mt-20 pt-12 sm:pt-14 pb-4 sm:pb-6">
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
