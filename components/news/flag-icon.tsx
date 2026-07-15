import Image from 'next/image'
import type { CountryCode, FlagIconProps } from '@/types'

const FLAG_SRC: Record<CountryCode, string> = {
  br: '/flags/br.svg',
  us: '/flags/us.svg',
  es: '/flags/es.svg',
  pe: '/flags/pe.svg',
  mx: '/flags/mx.svg',
}

export function FlagIcon({ code, alt, className }: FlagIconProps) {
  return (
    <span
      className={`relative block overflow-hidden rounded-full ring-1 ring-black/10 shadow-md ${className ?? 'h-16 w-16'}`}
    >
      <Image src={FLAG_SRC[code]} alt={alt} fill sizes="80px" className="object-cover" />
    </span>
  )
}
