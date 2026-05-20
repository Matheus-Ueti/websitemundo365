const partners = [
  {
    name: "Microsoft",
    logo: (
      <svg viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <path fill="#f35325" d="M1 1h10v10H1z"/>
        <path fill="#81bc06" d="M12 1h10v10H12z"/>
        <path fill="#05a6f0" d="M1 12h10v10H1z"/>
        <path fill="#ffba08" d="M12 12h10v10H12z"/>
      </svg>
    ),
  },
  {
    name: "Kaspersky",
    logo: (
      <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <rect width="100" height="40" rx="4" fill="#006D5C"/>
        <text x="50" y="27" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial">Kaspersky</text>
      </svg>
    ),
  },
  {
    name: "Acronis",
    logo: (
      <svg viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <circle cx="20" cy="20" r="16" fill="#EF4423"/>
        <text x="19" y="26" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial">A</text>
        <text x="52" y="26" textAnchor="middle" fill="#EF4423" fontSize="13" fontWeight="bold" fontFamily="Arial">ACRONIS</text>
      </svg>
    ),
  },
  {
    name: "Adobe",
    logo: (
      <svg viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M0 0h22L50 40H28L0 0z" fill="#FF0000"/>
        <path d="M28 0h22v40L28 0z" fill="#FF0000"/>
        <path d="M0 40h22L11 20 0 40z" fill="#FF0000"/>
      </svg>
    ),
  },
  {
    name: "Veeam",
    logo: (
      <svg viewBox="0 0 90 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M8 8 L20 32 L32 8" stroke="#00B336" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="42" y="27" fill="#00B336" fontSize="16" fontWeight="bold" fontFamily="Arial">VEEAM</text>
      </svg>
    ),
  },
  {
    name: "Fortinet",
    logo: (
      <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <rect x="2" y="4" width="22" height="32" rx="2" fill="#EE3124"/>
        <path d="M8 12h10M8 20h10M8 28h10" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <text x="34" y="27" fill="#EE3124" fontSize="13" fontWeight="bold" fontFamily="Arial">FORTINET</text>
      </svg>
    ),
  },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-10">
          Parceiros e tecnologias que trabalhamos
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl px-8 py-5 flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 min-w-[130px]"
            >
              {partner.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
