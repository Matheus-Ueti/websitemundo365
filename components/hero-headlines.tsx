'use client'

import { useEffect, useState } from 'react'
import type { HeroSlide } from '@/types'

const ROTATE_MS = 6000

type HeroHeadlinesProps = {
  slides: HeroSlide[]
}

export function HeroHeadlines({ slides }: HeroHeadlinesProps) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (slides.length <= 1) return

    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((current) => (current + 1) % slides.length)
        setVisible(true)
      }, 400)
    }, ROTATE_MS)

    return () => clearInterval(interval)
  }, [slides.length])

  const slide = slides[index] ?? slides[0]

  if (!slide) return null

  return (
    <div className="min-h-[7.5rem] sm:min-h-[9rem] lg:min-h-[10rem] flex flex-col justify-center">
      <h1
        className={[
          'text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance transition-opacity duration-300',
          visible ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      >
        {slide.headline}
      </h1>
      {slide.subline ? (
        <p
          className={[
            'mt-4 text-base sm:text-lg text-white/85 max-w-xl text-balance transition-opacity duration-300',
            visible ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        >
          {slide.subline}
        </p>
      ) : null}
      {slides.length > 1 ? (
        <div
          className="flex justify-center lg:justify-end gap-2 mt-8"
          role="tablist"
          aria-label="Destaques"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Destaque ${i + 1}`}
              onClick={() => {
                setVisible(false)
                setTimeout(() => {
                  setIndex(i)
                  setVisible(true)
                }, 200)
              }}
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
