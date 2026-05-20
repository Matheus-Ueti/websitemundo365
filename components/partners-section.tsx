const partners = [
  { name: "Microsoft", width: "w-28" },
  { name: "Kaspersky", width: "w-24" },
  { name: "Acronis", width: "w-24" },
  { name: "Adobe", width: "w-20" },
  { name: "Veeam", width: "w-20" },
  { name: "Fortinet", width: "w-24" },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-sm mb-8">
          Parceiros e tecnologias que trabalhamos
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`${partner.width} h-10 bg-foreground/10 rounded-lg flex items-center justify-center px-4`}
            >
              <span className="font-bold text-muted-foreground text-sm">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
