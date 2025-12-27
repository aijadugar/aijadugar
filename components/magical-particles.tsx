"use client"

import { useEffect, useRef, useState } from "react"

type Particle = {
  id: string
  left: string
  top: string
  animationDelay: string
  animationDuration: string
}

export function MagicalParticles({
  count = 6,
  alwaysVisible = false,
}: {
  count?: number
  alwaysVisible?: boolean
}) {
  const initialized = useRef(false)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    setParticles(
      Array.from({ length: count }).map((_, i) => ({
        id: crypto.randomUUID(),
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${i * 0.2}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }))
    )
  }, [count])

  return (
    <div
      className={`absolute inset-0 pointer-events-none transition-opacity
        ${alwaysVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
      `}
    >
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute w-1 h-1 bg-primary rounded-full animate-float"
          style={p}
        />
      ))}
    </div>
  )
}
