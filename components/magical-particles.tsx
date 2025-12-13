"use client"

import { useEffect, useState } from "react"

type Particle = {
  left: string
  top: string
  delay: string
  duration: string
}

export function MagicalParticles({ count = 6 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated = Array.from({ length: count }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${i * 0.2}s`,
      duration: `${2 + Math.random() * 2}s`,
    }))

    setParticles(generated)
  }, [count])

  return (
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full animate-float"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  )
}
