"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const roles = [
  "AI Researcher",
  "Machine Learning Engineer",
  "Deep Learning Engineer",
  "Forward Deployed Engineer",
  "Applied ML Engineer",
  "AI Backend Developer",
]

export function RotatingRole() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative h-[60px] overflow-visible"
      style={{
        perspective: "1200px",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={roles[index]}
          animate={{
            rotateX: 0,
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          initial={{
            rotateX: -90,
            opacity: 0,
            y: -30,
            filter: "blur(8px)",
          }}
          exit={{
            rotateX: 90,
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
          className="
          font-serif
          text-4xl
          lg:text-5xl
          font-light
          italic
          bg-[linear-gradient(120deg,#60DFFF_0%,#9ABEFF_45%,#FFB06A_100%)]
          bg-clip-text
          text-transparent
          leading-[1.2]
        "
        >
          {roles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}