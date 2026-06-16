'use client'

import dynamic from 'next/dynamic'
import { heroLottieLayout } from '@/lib/constants/hero-lottie'

const HeroLottie = dynamic(() => import('@/components/hero-lottie').then((mod) => mod.HeroLottie), {
  ssr: false,
  loading: () => (
    <div className={`relative w-full aspect-square ${heroLottieLayout.minHeights}`} aria-hidden />
  ),
})

export function HeroVisual() {
  return <HeroLottie />
}
