"use client"

import { useState } from "react"
import Image from "next/image"
import type { FloatingCardType, FloatingPosition, Solution } from "@/types"

const solutions: Solution[] = [
  {
    id: "modern-workplace",
    tabTitle: "Modern Workplace",
    title: "Modern Workplace",
    description: "Transforme a maneira como sua equipe colabora com soluções inovadoras de Modern Workplace.",
    subDescription: "Aumente a produtividade e a eficiência, proporcionando uma experiência de trabalho mais conectada.",
    buttonText: "Conheça nossos licenciamentos",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&crop=face",
  },
  {
    id: "cyber-security",
    tabTitle: "Cyber Security",
    title: "Cyber Security",
    description: "Criamos uma jornada que irá te auxiliar no planejamento e implementação de ferramentas que em conjunto tornam a segurança de dados da sua empresa robusta e eficiente.",
    subDescription: "",
    buttonText: "Conheça os níveis de proteção da jornada",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&crop=face",
  },
  {
    id: "cloud-solutions",
    tabTitle: "Cloud Solutions",
    title: "Cloud Solutions",
    description: "Migre sua infraestrutura para a nuvem Microsoft Azure com segurança, escalabilidade e economia.",
    subDescription: "Reduza custos operacionais e aumente a disponibilidade dos seus sistemas com nossa expertise em cloud.",
    buttonText: "Conheça nossas soluções em nuvem",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face",
  },
  {
    id: "power-platform",
    tabTitle: "Power Platform",
    title: "Power Platform",
    description: "Automatize processos, crie aplicativos personalizados e analise dados com a Power Platform da Microsoft.",
    subDescription: "Power BI, Power Apps, Power Automate e Power Virtual Agents para transformar sua empresa.",
    buttonText: "Descubra o poder da automação",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=700&fit=crop&crop=face",
  },
  {
    id: "servicos",
    tabTitle: "Serviços",
    title: "Serviços Especializados",
    description: "Consultoria, treinamento e suporte técnico especializado em todo ecossistema Microsoft.",
    subDescription: "Nossa equipe certificada está pronta para ajudar sua empresa a alcançar o máximo potencial tecnológico.",
    buttonText: "Fale com um especialista",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=700&fit=crop&crop=face",
  },
]

function FloatingCard({ type, position }: { type: FloatingCardType; position: FloatingPosition }) {
  const positionClasses: Record<string, string> = {
    "top-right": "top-4 -right-2 sm:-right-4",
    "middle-right": "top-1/3 -right-4 sm:-right-8",
    "bottom-left": "bottom-20 -left-2 sm:-left-4",
  }

  const getContent = () => {
    switch (type) {
      case "security":
        return (
          <div className="bg-white rounded-xl shadow-xl p-3 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">You are safe</span>
          </div>
        )
      case "notification":
        return (
          <div className="bg-white rounded-xl shadow-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">K</div>
              <span className="text-xs text-gray-500">Agora</span>
            </div>
            <p className="text-sm text-gray-700">Sistema protegido</p>
          </div>
        )
      case "dashboard":
        return (
          <div className="bg-white rounded-xl shadow-xl p-4 w-48">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">A</div>
              <span className="text-xs font-medium text-gray-700">Azure Portal</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={`absolute ${positionClasses[position]} animate-float z-10`}>
      {getContent()}
    </div>
  )
}

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("modern-workplace")
  const activeSolution = solutions.find(s => s.id === activeTab) || solutions[0]

  return (
    <section id="solucoes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
            <span className="relative inline-block">
              Nossas soluções
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-pretty">
            Conheça nossos produtos, serviços, jornadas de desenvolvimento tecnológico e nossa equipe de especialistas!
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-16">
          {/* Mobile: grid 2 colunas */}
          <div className="grid grid-cols-2 gap-2 sm:hidden bg-gray-100 rounded-2xl p-1.5">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={[
                  "px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 text-center",
                  activeTab === solution.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md"
                    : "text-gray-500 hover:text-gray-800",
                ].join(" ")}
              >
                {solution.tabTitle}
              </button>
            ))}
          </div>

          {/* Desktop: row centralizado */}
          <div className="hidden sm:flex justify-center">
            <div className="inline-flex bg-gray-100 rounded-full p-1.5 gap-1">
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  onClick={() => setActiveTab(solution.id)}
                  className={[
                    "relative px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                    activeTab === solution.id
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "text-gray-500 hover:text-gray-800",
                  ].join(" ")}
                >
                  {solution.tabTitle}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text (ordem 2 no mobile, 1 no desktop) */}
          <div className="order-2 lg:order-1 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              {activeSolution.description}
            </p>
            {activeSolution.subDescription && (
              <p className="text-gray-500 leading-relaxed mb-8">
                {activeSolution.subDescription}
              </p>
            )}
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5">
              {activeSolution.buttonText}
            </button>
          </div>

          {/* Right side - Image (ordem 1 no mobile, 2 no desktop) */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end px-10 sm:px-12 lg:px-0">
            {/* Blob decorativo */}
            <div className="absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -z-0" />

            <div className="relative z-10">
              <div className="relative w-[220px] h-[290px] sm:w-[280px] sm:h-[360px] lg:w-[350px] lg:h-[450px]">
                <Image
                  src={activeSolution.image}
                  alt={activeSolution.title}
                  fill
                  className="object-cover object-top rounded-2xl"
                  sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 350px"
                />
              </div>
              <FloatingCard type="security" position="bottom-left" />
              <FloatingCard type="notification" position="top-right" />
              <FloatingCard type="dashboard" position="middle-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
