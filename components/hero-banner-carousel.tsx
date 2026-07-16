'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { HeroBannerCarouselProps, HeroBannerId } from '@/types'

const ROTATE_MS = 6000

const BANNER_SRC: Record<HeroBannerId, string> = {
  awards: '/hero/banner-awards.png',
  copilot: '/hero/banner-copilot-v2.png',
  trophy: '/hero/trophy-base.png',
}

/**
 * Versões verticais (1080×1920) feitas sob medida pelo designer para telas
 * estreitas — o texto já vem reorganizado, então aqui é só trocar a fonte da
 * imagem abaixo do breakpoint `sm`, sem nenhum crop/zoom via CSS.
 */
const BANNER_SRC_MOBILE: Record<HeroBannerId, string> = {
  awards: '/hero/banner-awards-mobile.png',
  copilot: '/hero/banner-copilot-mobile.png',
  trophy: '/hero/trophy-mobile.png',
}

const TROPHY_BADGES_SRC = '/hero/trophy-badges.png'

export function HeroBannerCarousel({ banners, carouselLabel, slideLabel }: HeroBannerCarouselProps) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // `index` nas deps reinicia o timer a cada troca — inclusive quando o usuário
  // clica em um indicador, garantindo os 6s cheios no slide escolhido.
  useEffect(() => {
    if (banners.length <= 1 || isPaused) return

    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % banners.length)
    }, ROTATE_MS)

    return () => clearInterval(interval)
  }, [banners.length, isPaused, index])

  if (banners.length === 0) return null

  return (
    <div className="relative">
      <div
        className="relative w-full aspect-[9/16] sm:aspect-[1920/872] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {banners.map((banner, i) => {
          const isActive = i === index

          return (
            <div
              key={banner.id}
              className={[
                'absolute inset-0 transition-opacity duration-700',
                isActive ? 'opacity-100' : 'opacity-0 pointer-events-none',
              ].join(' ')}
              aria-hidden={!isActive}
            >
              {banner.id === 'trophy' ? (
                <TrophySlide alt={banner.alt} isActive={isActive} />
              ) : (
                <>
                  <Image
                    src={BANNER_SRC_MOBILE[banner.id]}
                    alt={banner.alt}
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    className="object-cover block sm:hidden"
                  />
                  <Image
                    src={BANNER_SRC[banner.id]}
                    alt={banner.alt}
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    className="object-cover hidden sm:block"
                  />
                </>
              )}
            </div>
          )
        })}
      </div>

      {banners.length > 1 ? (
        // Fica sobre a imagem, acima da onda branca (que ocupa ~4.2vw da base)
        <div
          className="absolute inset-x-0 bottom-[calc(4.2vw+1rem)] z-20 flex justify-center gap-2 rounded-full w-fit mx-auto bg-black/15 backdrop-blur-sm px-3 py-2"
          role="tablist"
          aria-label={carouselLabel}
        >
          {banners.map((banner, i) => (
            <button
              key={banner.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${slideLabel} ${i + 1}`}
              onClick={() => setIndex(i)}
              className={[
                'h-2 rounded-full transition-all duration-300',
                i === index ? 'w-8 bg-cyan-400' : 'w-2 bg-white/40 hover:bg-white/60',
              ].join(' ')}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

/**
 * Slide do troféu montado em camadas (fundo + selos), o que permite animar:
 * selos entram em fade, flutuam em loop e reagem ao mouse com um leve parallax;
 * um reflexo varre o troféu periodicamente.
 */
function TrophySlide({ alt, isActive }: { alt: string; isActive: boolean }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 14
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10
    setOffset({ x, y })
  }

  return (
    <div className="absolute inset-0">
      {/* Mobile: arte única já composta pelo designer para tela vertical */}
      <div className="absolute inset-0 overflow-hidden sm:hidden">
        <Image src={BANNER_SRC_MOBILE.trophy} alt={alt} fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-y-0 left-0 w-2/3 overflow-hidden" aria-hidden>
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent motion-safe:animate-shine" />
        </div>
      </div>

      {/* Desktop/tablet: camadas separadas do fundo e dos selos, com parallax e flutuação */}
      <div
        className="absolute inset-0 hidden sm:block"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      >
        <Image
          src={BANNER_SRC.trophy}
          alt={alt}
          fill
          sizes="(max-width: 1280px) 100vw, 1232px"
          className="object-cover"
        />

        {/* Brilho pulsante atrás do troféu (fica no terço esquerdo da arte) */}
        <div
          className="absolute left-[8%] top-[12%] h-[76%] w-[32%] rounded-full bg-cyan-400/15 blur-3xl motion-safe:animate-pulse"
          aria-hidden
        />

        {/* Reflexo que varre o troféu */}
        <div className="absolute inset-y-0 left-0 w-[45%] overflow-hidden" aria-hidden>
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent motion-safe:animate-shine" />
        </div>

        {/* Selos e certificações: entrada + flutuação + parallax */}
        <div
          className={[
            'absolute inset-0 transition-all duration-700 ease-out',
            isActive ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-3',
          ].join(' ')}
        >
          <div
            className="absolute inset-0 transition-transform duration-300 ease-out"
            style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
          >
            <div className="absolute inset-0 motion-safe:animate-float">
              <Image
                src={TROPHY_BADGES_SRC}
                alt=""
                fill
                sizes="(max-width: 1280px) 100vw, 1232px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
