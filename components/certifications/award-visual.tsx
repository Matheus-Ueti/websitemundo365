import Image from "next/image"

export function AwardVisual() {
  return (
    <div className="relative min-w-0 w-full">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-[36%] h-[52%] w-[68%] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-200/30 via-indigo-100/20 to-cyan-100/15 blur-3xl" />
      </div>

      <Image
        src="/certifications-portrait.jpg"
        alt="Representante Mundo365 com prêmios Microsoft Top Growth Awards"
        width={1024}
        height={971}
        unoptimized
        className="relative z-[1] mx-auto lg:mx-0 w-full h-auto object-contain object-bottom"
        sizes="(max-width: 1024px) 90vw, 520px"
        priority
      />
    </div>
  )
}
