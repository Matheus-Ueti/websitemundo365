import type { Testimonial } from "@/types"

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Acho o atendimento da Mundo 365 ótimo, sempre muito atenciosos e rápido conforme a urgência de cada situação. Referente ao cenário, depois que tivemos a assessoria na parte da TI melhoramos muita coisa internamente, inclusive plataformas de atendimento, processos aos nossos colaboradores para ser ágil no mercado, pois os clientes não querem esperar. Tivemos um impacto muito positivo dentro da nossa empresa. O diferencial eu digo que não é apenas apagar o fogo e sim fazer um gerenciamento no que pode ser feito como melhoria, isso que faz a Mundo 365 um diferencial.",
    author: "Felipe Torrano Trevisan",
    role: "Diretor",
    company: "Grupo Campseg",
    initials: "GC",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    quote:
      "Após o atendimento da equipe Mundo365, sempre muito atenciosos e rápidos conforme a urgência de cada situação. A implementação de segurança foi impecável e o suporte técnico superou todas as expectativas.",
    author: "Elson Soares",
    role: "Diretor | Gestor",
    company: "Hospital São Lucas",
    initials: "HS",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 3,
    quote:
      "Excelente parceria! A equipe demonstrou profundo conhecimento técnico e comprometimento com nossos resultados. O backup gerenciado nos deu tranquilidade total quanto à segurança dos nossos dados.",
    author: "João D. Batista",
    role: "Gestor de TI",
    company: "J.D.B Seguros",
    initials: "JD",
    color: "from-emerald-500 to-green-600",
  },
]

export const DEFAULT_TESTIMONIAL_ID = testimonials[0].id
