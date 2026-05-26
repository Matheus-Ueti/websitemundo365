import Image from "next/image"
import { partners } from "@/data/partners"

export function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-12">
          Parceiros e tecnologias que trabalhamos
        </p>

        <div className="flex flex-wrap justify-center items-center gap-5">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="w-[160px] h-[80px] bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              <div className="w-full h-full bg-white flex items-center justify-center rounded-xl">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="object-contain w-auto max-h-10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
