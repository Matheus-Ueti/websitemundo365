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

export function PartnerBanner() {
  return (
    <section className="py-10 relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
      {/* Subtle background texture */}
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

          {/* Left - Microsoft branding */}
          <div className="flex items-center gap-6 lg:flex-1">
            {/* Microsoft logo */}
            <div className="flex-shrink-0 drop-shadow-lg">
              <MicrosoftLogo size={12} />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">
                Somos a maior Revendedora<br />
                <span className="text-yellow-300">Oficial Microsoft Brasil</span>
              </p>
              <p className="text-blue-100 text-xs mt-1 max-w-xs">
                Entre as maiores empresas de Revenda Microsoft do Brasil, oferecemos as melhores soluções com segurança.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-16 bg-white/20 mx-8" />

          {/* Center - Partner Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 lg:flex-1">
            {/* Solutions Partner - Modern Work */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
              <MicrosoftLogo />
              <div>
                <p className="text-white/70 text-[10px] leading-none">Microsoft</p>
                <p className="text-white font-semibold text-xs leading-tight">Solutions Partner</p>
                <p className="text-blue-200 text-[10px] leading-none">Modern Work</p>
              </div>
            </div>

            {/* Solutions Partner - Infrastructure */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
              <MicrosoftLogo />
              <div>
                <p className="text-white/70 text-[10px] leading-none">Microsoft</p>
                <p className="text-white font-semibold text-xs leading-tight">Solutions Partner</p>
                <p className="text-blue-200 text-[10px] leading-none">Infrastructure — Azure</p>
              </div>
            </div>

            {/* Gold Partner */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
              <MicrosoftLogo />
              <div>
                <p className="text-white/70 text-[10px] leading-none">Microsoft</p>
                <p className="text-yellow-300 font-bold text-xs leading-tight">Gold Partner</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-16 bg-white/20 mx-8" />

          {/* Right - AI badge */}
          <div className="flex items-center gap-3 lg:flex-shrink-0">
            <div>
              <p className="text-blue-100 text-xs">Powered by</p>
              <p className="text-white font-bold text-sm leading-tight">Inteligência Artificial</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
