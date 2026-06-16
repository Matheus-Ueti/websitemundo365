import Image from 'next/image'
import type { CertBadge } from '@/types'

function usesWhiteKnockout(acronym: string) {
  return acronym !== 'MVP'
}

export function CertBadgeChip({ acronym, title, image }: CertBadge) {
  const knockout = usesWhiteKnockout(acronym)

  return (
    <div className="flex items-center justify-center p-2 sm:p-3">
      <Image
        src={image}
        alt={title}
        width={112}
        height={112}
        className={[
          'object-contain w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32',
          knockout ? 'mix-blend-multiply' : '',
        ].join(' ')}
      />
    </div>
  )
}
