import { getTranslations } from "next-intl/server"
import type { MicrosoftLogoProps } from "@/types"

function MicrosoftLogo({ size = 5 }: MicrosoftLogoProps) {
  return (
    <svg viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg" className={`w-${size} h-${size} flex-shrink-0`}>
      <path fill="#f35325" d="M1 1h10v10H1z"/>
      <path fill="#81bc06" d="M12 1h10v10H12z"/>
      <path fill="#05a6f0" d="M1 12h10v10H1z"/>
      <path fill="#ffba08" d="M12 12h10v10H12z"/>
    </svg>
  )
}

export async function PartnerBanner() {
  const t = await getTranslations("partnerBanner")

  return (
    <section className="py-10 relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
          <div className="flex items-center gap-6 lg:flex-1">
            <div className="flex-shrink-0 drop-shadow-lg">
              <MicrosoftLogo size={12} />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">
                {t("titleLine1")}
                <br />
                <span className="text-yellow-300">{t("titleLine2")}</span>
              </p>
              <p className="text-blue-100 text-xs mt-1 max-w-xs">{t("subtitle")}</p>
            </div>
          </div>

          <div className="hidden lg:block w-px h-16 bg-white/20 mx-8" />

          <div className="flex flex-wrap justify-center items-center gap-4 lg:flex-1">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
              <MicrosoftLogo />
              <div>
                <p className="text-white/70 text-[10px] leading-none">{t("microsoft")}</p>
                <p className="text-white font-semibold text-xs leading-tight">{t("solutionsPartner")}</p>
                <p className="text-blue-200 text-[10px] leading-none">{t("modernWork")}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
              <MicrosoftLogo />
              <div>
                <p className="text-white/70 text-[10px] leading-none">{t("microsoft")}</p>
                <p className="text-white font-semibold text-xs leading-tight">{t("solutionsPartner")}</p>
                <p className="text-blue-200 text-[10px] leading-none">{t("infrastructure")}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
              <MicrosoftLogo />
              <div>
                <p className="text-white/70 text-[10px] leading-none">{t("microsoft")}</p>
                <p className="text-yellow-300 font-bold text-xs leading-tight">{t("goldPartner")}</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block w-px h-16 bg-white/20 mx-8" />

          <div className="flex items-center gap-3 lg:flex-shrink-0">
            <div>
              <p className="text-blue-100 text-xs">{t("poweredBy")}</p>
              <p className="text-white font-bold text-sm leading-tight">{t("ai")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
