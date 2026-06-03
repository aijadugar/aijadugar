"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Code2, Mail, Notebook, Download } from "lucide-react"

interface DockItem {
  id: string
  label: string
  shortLabel?: string
  href: string
  icon: React.ElementType
  isDownload?: boolean
  external?: boolean
}

const SECONDARY_LINKS: DockItem[] = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/aijadugar",
    icon: Github,
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/aijadugar",
    icon: Linkedin,
    external: true,
  },
  {
    id: "kaggle",
    label: "Kaggle",
    href: "https://kaggle.com/bariankitvinod",
    icon: Notebook,
    external: true,
  },
  {
    id: "leetcode",
    label: "LeetCode",
    shortLabel: "LC",
    href: "https://leetcode.com/u/aijadugar",
    icon: Code2,
    external: true,
  },
  {
    id: "email",
    label: "vbari8527@gmail.com",
    href: "mailto:vbari8527@gmail.com",
    icon: Mail,
  },
]

const HOVER_SPRING = {
  type: "spring" as const,
  stiffness: 380,
  damping: 30,
  mass: 0.6,
}

const PRESS_SCALE = { scale: 0.96 }
const HOVER_SCALE = { scale: 1.02 }

interface DockButtonProps {
  item: DockItem
  isHovered: boolean
  onHover: (id: string | null) => void
  layoutId: string
}

function DockButton({ item, isHovered, onHover, layoutId }: DockButtonProps) {
  const Icon = item.icon

  const Tag = item.href.startsWith("mailto") ? "a" : item.isDownload ? "a" : "a"

  return (
    <motion.a
      href={item.href}
      download={item.isDownload ? "" : undefined}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      onHoverStart={() => onHover(item.id)}
      onHoverEnd={() => onHover(null)}
      onFocus={() => onHover(item.id)}
      onBlur={() => onHover(null)}
      whileHover={HOVER_SCALE}
      whileTap={PRESS_SCALE}
      transition={HOVER_SPRING}
      aria-label={item.label}
    >
      {/* Shared sliding highlight */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            layoutId={layoutId}
            className="absolute inset-0 rounded-xl bg-white/[0.07] border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={HOVER_SPRING}
            style={{ zIndex: 0 }}
          />
        )}
      </AnimatePresence>

      <Icon
        className="relative z-10 w-4 h-4 text-white/60 transition-colors duration-200"
        style={{ color: isHovered ? "rgba(255,255,255,0.95)" : undefined }}
        aria-hidden="true"
      />
      <span
        className="relative z-10 text-sm font-medium tracking-tight transition-colors duration-200"
        style={{
          color: isHovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.50)",
          fontFamily: "'DM Mono', 'Fira Mono', monospace",
          fontSize: "0.8125rem",
          letterSpacing: "0.01em",
        }}
      >
        {item.label}
      </span>
    </motion.a>
  )
}

function ResumeCTA() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href="/Ankit_Bari_Resume.pdf"
      download
      className="relative flex items-center gap-3 px-5 py-3 rounded-xl cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-white/40 overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.97 }}
      transition={HOVER_SPRING}
      aria-label="Download Resume"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 100%)",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: isHovered
          ? "0 0 0 1px rgba(255,255,255,0.18), 0 8px 32px rgba(0,0,0,0.4)"
          : "0 2px 12px rgba(0,0,0,0.25)",
      }}
    >
      {/* Animated shimmer sweep on hover */}
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-xl"
        animate={
          isHovered
            ? {
              background: [
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)",
                "linear-gradient(105deg, transparent 60%, rgba(255,255,255,0.06) 70%, transparent 80%)",
              ],
            }
            : { background: "transparent" }
        }
        transition={{ duration: 0.55, ease: "easeOut" }}
      />

      {/* Icon */}
      <span className="relative z-10 flex items-center justify-center w-7 h-7 rounded-lg bg-white/10">
        <Download
          className="w-3.5 h-3.5"
          style={{ color: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.7)" }}
        />
      </span>

      {/* Label */}
      <span className="relative z-10 flex flex-col leading-none">
        <span
          className="text-[0.7rem] uppercase tracking-[0.14em] font-semibold transition-colors duration-200"
          style={{
            color: isHovered ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.35)",
            fontFamily: "'DM Mono', 'Fira Mono', monospace",
          }}
        >
          Download
        </span>
        <span
          className="text-sm font-semibold tracking-tight transition-colors duration-200"
          style={{
            color: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.85)",
            fontFamily: "'DM Sans', 'Geist', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          Résumé
        </span>
      </span>

      {/* Right arrow glyph */}
      <motion.span
        className="relative z-10 ml-1 text-xs"
        animate={{ x: isHovered ? 2 : 0, opacity: isHovered ? 0.8 : 0.35 }}
        transition={HOVER_SPRING}
        style={{ color: "rgba(255,255,255,0.9)" }}
        aria-hidden="true"
      >
        ↓
      </motion.span>
    </motion.a>
  )
}

function Divider() {
  return (
    <span
      className="hidden sm:block self-stretch w-px mx-1"
      style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)" }}
      aria-hidden="true"
    />
  )
}

export function ScrollIndicator() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const LAYOUT_ID = "dock-hover-pill"

  return (
    <div
      className="fixed bottom-2 left-1/2 z-50 -translate-x-1/2"
      role="navigation"
      aria-label="Profile links and resume"
    >
      {/* Outer glow halo — very subtle */}
      <div
        className="absolute -inset-4 rounded-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Dock container */}
      <motion.div
        className="relative flex flex-wrap sm:flex-nowrap items-center gap-1 sm:gap-1.5 px-2 py-2 rounded-2xl"
        style={{
          background: "rgba(10, 10, 12, 0.82)",
          backdropFilter: "blur(20px) saturate(160%)",
          WebkitBackdropFilter: "blur(20px) saturate(160%)",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05) inset",
        }}
        initial={{ opacity: 0, y: 16, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        {/* Primary CTA */}
        <ResumeCTA />

        {/* Divider */}
        <Divider />

        {/* Secondary links with shared hover indicator */}
        <div className="flex items-center gap-0.5" role="list">
          {SECONDARY_LINKS.map((item) => (
            <div key={item.id} role="listitem">
              <DockButton
                item={item}
                isHovered={hoveredId === item.id}
                onHover={setHoveredId}
                layoutId={LAYOUT_ID}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}