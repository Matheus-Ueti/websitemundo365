"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { mainNavItems } from "@/lib/constants/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/mundo365-logo.png"
              alt="Mundo365"
              width={160}
              height={50}
              className="brightness-0 invert"
              priority
            />
          </Link>

          {/* Desktop Navigation - Pill shaped container */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1.5 border border-white/20">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:bg-white/10 transition-colors text-sm font-medium px-4 py-1.5 rounded-full"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right side - Accessibility & Language */}
          <div className="hidden md:flex items-center gap-4">
            {/* Accessibility icon */}
            <button className="text-white/80 hover:text-white transition-colors" aria-label="Acessibilidade">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="8" r="2"/>
                <path d="M12 10v4"/>
                <path d="M9 14l3 4 3-4"/>
                <path d="M8 12h8"/>
              </svg>
            </button>
            
            {/* Language selector */}
            <div className="flex items-center gap-1.5 text-white text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity">
              <span>PT</span>
              {/* Brazil flag */}
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="rounded-sm overflow-hidden">
                <rect width="24" height="18" fill="#009739"/>
                <path d="M12 2 L22 9 L12 16 L2 9 Z" fill="#FEDD00"/>
                <circle cx="12" cy="9" r="3.5" fill="#002776"/>
              </svg>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white/70">
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 bg-purple-900/90 backdrop-blur-md rounded-b-2xl">
            <nav className="flex flex-col gap-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white hover:bg-white/10 transition-colors text-sm font-medium py-3 px-4 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/20 px-4">
                <span className="text-white/80 text-sm">Idioma:</span>
                <div className="flex items-center gap-1.5 text-white text-sm font-medium">
                  <span>PT</span>
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" className="rounded-sm overflow-hidden">
                    <rect width="24" height="18" fill="#009739"/>
                    <path d="M12 2 L22 9 L12 16 L2 9 Z" fill="#FEDD00"/>
                    <circle cx="12" cy="9" r="3.5" fill="#002776"/>
                  </svg>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
