'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Link } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export interface OrbitalTimelineItem {
  id: number
  title: string
  date: string
  content: string
  category: string
  icon: React.ElementType
  relatedIds: number[]
  status: 'completed' | 'in-progress' | 'pending'
  energy: number
}

interface RadialOrbitalTimelineProps {
  timelineData: OrbitalTimelineItem[]
}

export default function RadialOrbitalTimeline({ timelineData }: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({})
  const [rotationAngle, setRotationAngle] = useState<number>(0)
  const [autoRotate, setAutoRotate] = useState<boolean>(true)
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({})
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null)
  const [orbitalRadius, setOrbitalRadius] = useState(200)
  const [cardWidth, setCardWidth] = useState(256)
  const containerRef = useRef<HTMLDivElement>(null)
  const orbitRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({})
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Adapt orbital radius and card width to the container size
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      // Leave 50px each side for nodes/labels horizontally, 70px below for labels
      const r = Math.floor(Math.min(width / 2 - 50, height / 2 - 70, 200))
      setOrbitalRadius(Math.max(r, 80))
      setCardWidth(Math.min(Math.floor(width * 0.72), 256))
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Twinkling starfield canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.3 + 0.2,
      opacity: Math.random() * 0.55 + 0.15,
      speed: Math.random() * 0.025 + 0.008,
      phase: Math.random() * Math.PI * 2,
    }))

    let animFrame: number
    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.016
      for (const star of stars) {
        const opacity = star.opacity * (0.55 + 0.45 * Math.sin(t * star.speed * 30 + star.phase))
        ctx.beginPath()
        ctx.arc(star.x * canvas.width, star.y * canvas.height, star.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 220, 255, ${opacity})`
        ctx.fill()
      }
      animFrame = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({})
      setActiveNodeId(null)
      setPulseEffect({})
      setAutoRotate(true)
    }
  }

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev }
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false
      })
      newState[id] = !prev[id]

      if (!prev[id]) {
        setActiveNodeId(id)
        setAutoRotate(false)
        const newPulseEffect: Record<number, boolean> = {}
        getRelatedItems(id).forEach((relId) => {
          newPulseEffect[relId] = true
        })
        setPulseEffect(newPulseEffect)
        centerViewOnNode(id)
      } else {
        setActiveNodeId(null)
        setAutoRotate(true)
        setPulseEffect({})
      }

      return newState
    })
  }

  useEffect(() => {
    if (!autoRotate) return
    const rotationTimer = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)))
    }, 50)
    return () => clearInterval(rotationTimer)
  }, [autoRotate])

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId)
    const targetAngle = (nodeIndex / timelineData.length) * 360
    setRotationAngle(270 - targetAngle)
  }

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360
    const radian = (angle * Math.PI) / 180
    const x = orbitalRadius * Math.cos(radian)
    const y = orbitalRadius * Math.sin(radian)
    const zIndex = Math.round(100 + 50 * Math.cos(radian))
    const opacity = Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)))
    return { x, y, zIndex, opacity }
  }

  const getRelatedItems = (itemId: number): number[] => {
    return timelineData.find((item) => item.id === itemId)?.relatedIds ?? []
  }

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false
    return getRelatedItems(activeNodeId).includes(itemId)
  }

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center overflow-hidden relative"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#060d1f] to-[#0a1628]" />

      {/* Nebula glow spots */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-60 h-60 sm:w-80 sm:h-80 bg-blue-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-950/30 rounded-full blur-2xl pointer-events-none" />

      {/* Animated stars canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Orbital content */}
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: '1000px' }}
        >
          {/* Center orb */}
          <div className="absolute w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-700 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-cyan-400/35 animate-ping opacity-70" />
            <div
              className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-blue-400/20 animate-ping opacity-50"
              style={{ animationDelay: '0.5s' }}
            />
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md" />
          </div>

          {/* Orbit ring — size follows orbitalRadius */}
          <div
            className="absolute rounded-full border border-cyan-400/15"
            style={{ width: orbitalRadius * 2, height: orbitalRadius * 2 }}
          />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length)
            const isExpanded = expandedItems[item.id]
            const isRelated = isRelatedToActive(item.id)
            const isPulsing = pulseEffect[item.id]
            const Icon = item.icon

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el
                }}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => {
                  e.stopPropagation()
                  toggleItem(item.id)
                }}
              >
                {/* Glow halo */}
                <div
                  className={`absolute rounded-full ${isPulsing ? 'animate-pulse' : ''}`}
                  style={{
                    background: `radial-gradient(circle, rgba(6,182,212,0.22) 0%, rgba(6,182,212,0) 70%)`,
                    width: '60px',
                    height: '60px',
                    left: '-10px',
                    top: '-10px',
                  }}
                />

                {/* Node icon */}
                <div
                  className={[
                    'w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300',
                    isExpanded
                      ? 'bg-white text-blue-700 border-cyan-300 shadow-lg shadow-cyan-500/40 scale-150'
                      : isRelated
                        ? 'bg-cyan-500/20 text-white border-cyan-400 animate-pulse'
                        : 'bg-slate-950 text-cyan-300 border-cyan-500/45',
                  ].join(' ')}
                >
                  <Icon size={14} />
                </div>

                {/* Node label — centered on node, truncated */}
                <div
                  className={[
                    'absolute top-11 left-1/2 -translate-x-1/2 text-center text-[10px] sm:text-xs font-semibold tracking-wide transition-all duration-300 pointer-events-none',
                    isExpanded ? 'text-white scale-110' : 'text-white/65',
                  ].join(' ')}
                  style={{ width: `${Math.min(orbitalRadius * 0.9, 90)}px` }}
                >
                  <span className="block truncate">{item.title}</span>
                </div>

                {/* Expanded card */}
                {isExpanded && (
                  <Card
                    className="absolute top-20 left-1/2 -translate-x-1/2 bg-slate-950/95 backdrop-blur-lg border-cyan-500/25 shadow-xl shadow-cyan-900/30 overflow-visible"
                    style={{ width: cardWidth }}
                  >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-cyan-400/40" />
                    <CardHeader className="pb-2 pt-3 px-3 sm:pt-4 sm:px-4">
                      <CardTitle className="text-xs sm:text-sm text-white leading-snug">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-[11px] sm:text-xs text-white/75 px-3 pb-3 sm:px-4 sm:pb-4">
                      <p className="leading-relaxed">{item.content}</p>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-cyan-500/20">
                          <div className="flex items-center mb-2 gap-1">
                            <Link size={10} className="text-cyan-400" />
                            <h4 className="text-[10px] uppercase tracking-wider font-medium text-cyan-400">
                              Relacionados
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId)
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-6 px-2 py-0 text-[10px] sm:text-xs rounded-md border-cyan-400/25 bg-transparent hover:bg-cyan-500/15 text-cyan-300 hover:text-white transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    toggleItem(relatedId)
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1 text-cyan-400/60" />
                                </Button>
                              )
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
