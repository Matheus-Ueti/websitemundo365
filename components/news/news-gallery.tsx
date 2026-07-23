'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

type NewsGalleryProps = {
  images: string[]
  title: string
  /** Rótulos i18n para acessibilidade. */
  labels: { close: string; prev: string; next: string }
}

/** Grade de fotos da notícia com lightbox próprio (sem dialogs nativos). */
export function NewsGallery({ images, title, labels }: NewsGalleryProps) {
  const [openAt, setOpenAt] = useState<number | null>(null)

  const close = useCallback(() => setOpenAt(null), [])
  const go = useCallback(
    (delta: number) =>
      setOpenAt((current) =>
        current === null ? null : (current + delta + images.length) % images.length
      ),
    [images.length]
  )

  useEffect(() => {
    if (openAt === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openAt, close, go])

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenAt(index)}
            className="group relative aspect-square overflow-hidden rounded-xl bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
          >
            <Image
              src={src}
              alt={`${title} — ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openAt !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label={labels.close}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" aria-hidden />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              go(-1)
            }}
            aria-label={labels.prev}
            className="absolute left-2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden />
          </button>

          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[openAt]}
              alt={`${title} — ${openAt + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              go(1)
            }}
            aria-label={labels.next}
            className="absolute right-2 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-7 w-7" aria-hidden />
          </button>

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm font-medium text-white">
            {openAt + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  )
}
