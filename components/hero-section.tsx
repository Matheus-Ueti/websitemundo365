import Image from "next/image"
import { HeroVisual } from "@/components/hero-visual"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#6b21a8] via-[#7c3aed] to-[#06b6d4] pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left — Lottie */}
          <div className="relative hidden lg:flex items-start justify-start min-h-[520px] overflow-visible w-full max-w-none -ml-8 xl:-ml-14 -mt-6">
            <div className="w-[115%] max-w-none">
              <HeroVisual />
            </div>
          </div>

          {/* Mobile — Lottie */}
          <div className="relative flex lg:hidden items-start justify-start min-h-[340px] -mb-4 overflow-visible -ml-6 w-full -mt-4">
            <HeroVisual />
          </div>

          {/* Right — Azure + texto */}
          <div className="text-center lg:text-right flex flex-col items-center lg:items-end">
            <div className="relative mb-8">
              <Image
                src="/azure-logo.svg"
                alt="Microsoft Azure"
                width={200}
                height={200}
                className="drop-shadow-2xl"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 text-balance">
              Venha para a{" "}
              <span className="font-extrabold">Mundo365</span>{" "}
              hospedar seus sistemas no Microsoft{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent font-extrabold">
                Azure
              </span>
            </h1>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
