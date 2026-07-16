import { getTranslations } from 'next-intl/server'
import type { MicrosoftLogoProps, SolutionsPartnerBadgeProps } from '@/types'

function MicrosoftLogo({ className = 'w-5 h-5' }: MicrosoftLogoProps) {
  return (
    <svg
      viewBox="0 0 23 23"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} flex-shrink-0`}
      aria-hidden="true"
    >
      <path fill="#f35325" d="M1 1h10v10H1z" />
      <path fill="#81bc06" d="M12 1h10v10H12z" />
      <path fill="#05a6f0" d="M1 12h10v10H1z" />
      <path fill="#ffba08" d="M12 12h10v10H12z" />
    </svg>
  )
}

/**
 * Reproduz o lockup oficial do selo "Microsoft Solutions Partner":
 * logo + "Microsoft" / tier / especialização, na tipografia da marca (Selawik).
 */
function SolutionsPartnerBadge({ tier, designation }: SolutionsPartnerBadgeProps) {
  return (
    <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3.5 py-2.5 font-selawik">
      <MicrosoftLogo className="w-[26px] h-[26px]" />
      <div className="leading-tight">
        <p className="text-white font-semibold text-[13px] leading-[1.15] tracking-[-0.01em]">
          Microsoft
        </p>
        <p className="text-white/95 font-normal text-[13px] leading-[1.15] tracking-[-0.01em]">
          {tier}
        </p>
        {designation && (
          <p className="text-blue-200 font-normal text-[11px] leading-tight mt-0.5">
            {designation}
          </p>
        )}
      </div>
    </div>
  )
}

export async function PartnerBanner() {
  const t = await getTranslations('partnerBanner')

  return (
    <section className="py-10 relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          <div className="flex items-center gap-6 lg:flex-shrink-0 lg:max-w-xs">
            <div className="flex-shrink-0 drop-shadow-lg">
              <MicrosoftLogo className="w-12 h-12" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">
                {t('titleLine1')}
                <br />
                <span className="text-yellow-300">{t('titleLine2')}</span>
              </p>
              <p className="text-blue-100 text-xs mt-1 max-w-xs">{t('subtitle')}</p>
            </div>
          </div>

          <div className="hidden lg:block w-px h-20 bg-white/20 mx-8" />

          <div className="grid grid-cols-2 gap-3 lg:flex-1 place-items-stretch">
            <SolutionsPartnerBadge tier={t('solutionsPartner')} designation={t('modernWork')} />
            <SolutionsPartnerBadge tier={t('solutionsPartner')} designation={t('dataAi')} />
            <SolutionsPartnerBadge tier={t('solutionsPartner')} designation={t('infrastructure')} />
            <SolutionsPartnerBadge tier={t('partner')} />
          </div>

          <div className="hidden lg:block w-px h-20 bg-white/20 mx-8" />

          <div className="flex items-center gap-3 lg:flex-shrink-0">
            <div>
              <p className="text-blue-100 text-xs">{t('poweredBy')}</p>
              <p className="text-white font-bold text-sm leading-tight">{t('ai')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
