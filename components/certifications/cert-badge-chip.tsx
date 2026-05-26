import Image from "next/image"
import type { CertBadge } from "@/types"

export function CertBadgeChip({ title, image }: CertBadge) {
  return (
    <div className="flex items-center justify-center bg-white border border-gray-100 rounded-2xl p-3 shadow-[0_2px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.09)] hover:-translate-y-1 transition-all duration-200 cursor-default">
      <Image
        src={image}
        alt={title}
        width={72}
        height={72}
        className="object-contain w-16 h-16"
      />
    </div>
  )
}
