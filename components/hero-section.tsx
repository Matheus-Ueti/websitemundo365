"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#6b21a8] via-[#7c3aed] to-[#06b6d4] pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Isometric Illustration */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Cloud element */}
              <div className="absolute top-0 left-8 animate-float">
                <svg width="160" height="110" viewBox="0 0 120 80" fill="none">
                  <ellipse cx="60" cy="50" rx="50" ry="25" fill="rgba(255,255,255,0.1)" stroke="rgba(0,255,255,0.5)" strokeWidth="2"/>
                  <ellipse cx="40" cy="40" rx="30" ry="15" fill="rgba(255,255,255,0.1)" stroke="rgba(0,255,255,0.5)" strokeWidth="2"/>
                  <ellipse cx="80" cy="35" rx="25" ry="12" fill="rgba(255,255,255,0.1)" stroke="rgba(0,255,255,0.5)" strokeWidth="2"/>
                  {/* Upload arrow */}
                  <path d="M60 60 L60 20 M45 35 L60 20 L75 35" stroke="rgba(0,255,255,0.8)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {/* Circular pattern behind cloud */}
                <div className="absolute -top-4 -right-4 w-16 h-16">
                  <svg viewBox="0 0 50 50" className="w-full h-full animate-spin-slow">
                    <circle cx="25" cy="25" r="20" fill="none" stroke="rgba(0,255,255,0.3)" strokeWidth="1" strokeDasharray="3 3"/>
                    <circle cx="25" cy="25" r="15" fill="none" stroke="rgba(0,255,255,0.2)" strokeWidth="1"/>
                  </svg>
                </div>
              </div>

              {/* Laptop */}
              <div className="relative z-10 mx-auto mt-16">
                <svg width="380" height="240" viewBox="0 0 280 180" fill="none" className="drop-shadow-2xl">
                  {/* Screen */}
                  <rect x="40" y="10" width="200" height="120" rx="8" fill="#1e1b4b" stroke="rgba(139,92,246,0.5)" strokeWidth="2"/>
                  <rect x="50" y="20" width="180" height="100" rx="4" fill="#0f0a1e"/>
                  {/* Screen content - chart */}
                  <rect x="60" y="90" width="20" height="20" fill="rgba(139,92,246,0.6)"/>
                  <rect x="90" y="70" width="20" height="40" fill="rgba(139,92,246,0.8)"/>
                  <rect x="120" y="50" width="20" height="60" fill="rgba(236,72,153,0.6)"/>
                  <rect x="150" y="60" width="20" height="50" fill="rgba(139,92,246,0.7)"/>
                  <rect x="180" y="40" width="20" height="70" fill="rgba(6,182,212,0.6)"/>
                  {/* Chart labels */}
                  <text x="65" y="85" fill="rgba(255,255,255,0.5)" fontSize="8">643</text>
                  <text x="95" y="65" fill="rgba(255,255,255,0.5)" fontSize="8">374</text>
                  {/* Base */}
                  <path d="M20 130 L40 130 L40 140 L240 140 L240 130 L260 130 L260 145 Q260 155 250 155 L30 155 Q20 155 20 145 Z" fill="#2e2457" stroke="rgba(139,92,246,0.3)" strokeWidth="1"/>
                </svg>

                {/* Connection lines */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
                  <path d="M50 50 Q100 100 140 80" stroke="rgba(236,72,153,0.6)" strokeWidth="2" fill="none" strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1s" repeatCount="indefinite"/>
                  </path>
                  <path d="M350 150 Q300 120 260 130" stroke="rgba(6,182,212,0.6)" strokeWidth="2" fill="none" strokeDasharray="5 5">
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1s" repeatCount="indefinite"/>
                  </path>
                </svg>
              </div>

              {/* Phone left */}
              <div className="absolute bottom-8 left-0 animate-float-delayed">
                <svg width="80" height="130" viewBox="0 0 60 100" fill="none">
                  <rect x="5" y="5" width="50" height="90" rx="8" fill="#1e1b4b" stroke="rgba(139,92,246,0.5)" strokeWidth="2"/>
                  <rect x="10" y="15" width="40" height="60" rx="2" fill="#0f0a1e"/>
                  {/* Download icon */}
                  <text x="15" y="50" fill="rgba(236,72,153,0.8)" fontSize="10">50%</text>
                  <circle cx="30" cy="85" r="4" fill="rgba(139,92,246,0.5)"/>
                </svg>
                {/* Download arrows */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <svg width="20" height="30" viewBox="0 0 20 30">
                    <path d="M10 0 L10 25 M3 18 L10 25 L17 18" stroke="rgba(6,182,212,0.8)" strokeWidth="2" strokeLinecap="round">
                      <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
                    </path>
                  </svg>
                </div>
              </div>

              {/* Tablet right */}
              <div className="absolute bottom-4 right-0 animate-float">
                <svg width="140" height="110" viewBox="0 0 100 80" fill="none">
                  <rect x="5" y="5" width="90" height="70" rx="6" fill="#1e1b4b" stroke="rgba(139,92,246,0.5)" strokeWidth="2"/>
                  <rect x="10" y="10" width="80" height="55" rx="2" fill="#0f0a1e"/>
                  {/* Mini chart */}
                  <rect x="20" y="45" width="10" height="15" fill="rgba(236,72,153,0.6)"/>
                  <rect x="35" y="35" width="10" height="25" fill="rgba(139,92,246,0.8)"/>
                  <rect x="50" y="40" width="10" height="20" fill="rgba(6,182,212,0.6)"/>
                  <rect x="65" y="30" width="10" height="30" fill="rgba(139,92,246,0.7)"/>
                </svg>
              </div>

              {/* Floating arrows */}
              <div className="absolute top-20 right-10">
                <svg width="30" height="40" viewBox="0 0 30 40">
                  <path d="M15 40 L15 5 M5 15 L15 5 L25 15" stroke="rgba(6,182,212,0.8)" strokeWidth="3" strokeLinecap="round">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                  </path>
                </svg>
              </div>

              <div className="absolute bottom-20 left-10">
                <svg width="25" height="35" viewBox="0 0 25 35">
                  <path d="M12 0 L12 30 M4 22 L12 30 L20 22" stroke="rgba(6,182,212,0.8)" strokeWidth="2" strokeLinecap="round">
                    <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite"/>
                  </path>
                </svg>
              </div>

              {/* Neon glow base */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent blur-sm" />
            </div>
          </div>

          {/* Right side - Azure Logo and Text */}
          <div className="text-center lg:text-right flex flex-col items-center lg:items-end">
            {/* Azure Logo */}
            <div className="relative mb-8">
              <div className="relative">
                <Image
                  src="/azure-logo.svg"
                  alt="Microsoft Azure"
                  width={200}
                  height={200}
                  className="drop-shadow-2xl"
                />

                {/* Navigation arrow */}
                <button className="absolute top-1/2 -right-16 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Text content */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 text-balance">
              Venha para a{" "}
              <span className="font-extrabold">Mundo365</span>{" "}
              hospedar seus sistemas no Microsoft{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent font-extrabold">
                Azure
              </span>
            </h1>

            {/* Slide indicators */}
            <div className="flex gap-3 mt-4">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    activeSlide === index 
                      ? "w-8 bg-white" 
                      : "w-4 bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
