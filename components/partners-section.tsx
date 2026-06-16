import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { partners } from '@/data/partners'

export async function PartnersSection() {
  const t = await getTranslations('partners')

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm sm:text-base uppercase tracking-[0.2em] font-medium mb-14 sm:mb-16">
          {t('title')}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="w-[200px] h-[110px] sm:w-[220px] sm:h-[120px] lg:w-[240px] lg:h-[132px] bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-8 sm:p-10 flex items-center justify-center shadow-sm hover:shadow-lg hover:scale-[1.03] transition-all duration-200"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={180}
                height={64}
                className="object-contain w-full h-auto max-h-12 sm:max-h-14 lg:max-h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
