import Image from "next/image"

type Partner = {
  name: string
  src?: string
  inlineLogo?: React.ReactNode
}

const partners: Partner[] = [
  {
    name: "Microsoft",
    inlineLogo: (
      <div className="flex items-center gap-2">
        <Image src="/logo-microsoft.svg" alt="Microsoft" width={24} height={24} className="object-contain shrink-0" style={{ width: 24, height: 24 }} />
        <span className="text-[#737373] font-semibold text-sm leading-none" style={{ fontFamily: "Segoe UI, Arial" }}>
          Microsoft
        </span>
      </div>
    ),
  },
  {
    name: "Kaspersky",
    src: "/logo-kaspersky.png",
  },
  {
    name: "Acronis",
    src: "/logo-acronis.png",
  },
  {
    name: "Adobe",
    src: "/logo-adobe.png",
  },
  {
    name: "Veeam",
    src: "/logo-veeam.png",
  },
  {
    name: "Fortinet",
    src: "/logo-fortinet.png",
  },
]

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
              {partner.src ? (
                <div className="w-full h-full bg-white flex items-center justify-center rounded-xl">
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="object-contain w-auto max-h-10"
                  />
                </div>
              ) : (
                partner.inlineLogo
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
