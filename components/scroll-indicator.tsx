"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Github,
  Linkedin,
  Brain,
  Code2,
  Notebook,
  Download,
  ChevronUp,
  Mail
} from "lucide-react"

interface HubItem {
  id: string
  label: string
  href: string
  icon: React.ElementType
}

interface HubCategory {
  id: string
  label: string
  items: HubItem[]
}

// Minimal inline logo for X (Twitter) — not in every lucide build,
// so it's drawn by hand to guarantee it renders.
function XLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const CATEGORIES: HubCategory[] = [
  {
    id: "productive",
    label: "Productive",
    items: [
      { id: "github", label: "GitHub", href: "https://github.com/aijadugar", icon: Github },
      { id: "huggingface", label: "Hugging Face", href: "https://huggingface.co/aijadugar", icon: Brain },
    ],
  },
  {
    id: "social",
    label: "Social",
    items: [
      { id: "x", label: "X", href: "https://x.com/bariankitvinod", icon: XLogo },
      { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/aijadugar", icon: Linkedin },
    ],
  },
  {
    id: "competitive",
    label: "Competitive",
    items: [
      { id: "kaggle", label: "Kaggle", href: "https://kaggle.com/bariankitvinod", icon: Notebook },
      { id: "leetcode", label: "Leetcode", href: "https://leetcode.com/u/aijadugar/", icon: Code2 },
    ],
  },
]

const SPRING = { type: "spring" as const, stiffness: 380, damping: 30, mass: 0.6 }
const POPUP_SPRING = { type: "spring" as const, stiffness: 300, damping: 28, mass: 0.7 }

function ResumeCTA({ onOpen }: { onOpen: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href="/Ankit_Bari_Resume.pdf"
      download
      onClick={onOpen}
      className="relative flex items-center gap-3 px-5 py-3 rounded-xl cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-white/40 overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.97 }}
      transition={SPRING}
      aria-label="Download resume and open profile hub"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.05) 100%)",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: isHovered
          ? "0 0 0 1px rgba(255,255,255,0.18), 0 8px 32px rgba(0,0,0,0.4)"
          : "0 2px 12px rgba(0,0,0,0.25)",
      }}
    >
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

      <span className="relative z-10 flex items-center justify-center w-7 h-7 rounded-lg bg-white/10">
        <Download
          className="w-3.5 h-3.5"
          style={{ color: isHovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.7)" }}
        />
      </span>

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
    </motion.a>
  )
}

function HubToggle({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      transition={SPRING}
      aria-label={open ? "Close profile hub" : "Open profile hub"}
      aria-expanded={open}
      className="relative flex items-center justify-center w-11 h-11 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      style={{
        background: isHovered || open ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <motion.span
        animate={{ rotate: open ? 180 : 0 }}
        transition={SPRING}
        className="flex items-center justify-center"
      >
        <ChevronUp
          className="w-4 h-4"
          style={{ color: isHovered || open ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)" }}
        />
      </motion.span>
    </motion.button>
  )
}

function HubColumn({ category }: { category: HubCategory }) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const layoutId = `hub-pill-${category.id}`

  return (
    <div className="flex flex-col min-w-0">
      <span
        className="mb-2 px-1 text-[0.65rem] uppercase tracking-[0.16em] font-semibold"
        style={{
          color: "rgba(255,255,255,0.38)",
          fontFamily: "'DM Mono', 'Fira Mono', monospace",
        }}
      >
        {category.label}
      </span>

      <div className="flex flex-col gap-0.5" role="list">
        {category.items.map((item) => {
          const Icon = item.icon
          const isHovered = hoveredId === item.id
          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              role="listitem"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(item.id)}
              onBlur={() => setHoveredId(null)}
              className="relative flex items-center gap-2.5 px-3 py-2.5 rounded-lg cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              aria-label={item.label}
            >
              <AnimatePresence>
                {isHovered && (
                  <motion.span
                    layoutId={layoutId}
                    className="absolute inset-0 rounded-lg bg-white/[0.08] border border-white/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={SPRING}
                    style={{ zIndex: 0 }}
                  />
                )}
              </AnimatePresence>

              <Icon
                className="relative z-10 w-4 h-4 shrink-0 transition-colors duration-200"
                style={{ color: isHovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)" }}
              />
              <span
                className="relative z-10 text-sm font-medium tracking-tight truncate transition-colors duration-200"
                style={{
                  color: isHovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)",
                  fontFamily: "'DM Mono', 'Fira Mono', monospace",
                  fontSize: "0.8125rem",
                }}
              >
                {item.label}
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}

function HubPanel() {
  return (
    <motion.div
      role="dialog"
      aria-label="Ankit's Hub"
      aria-modal="true"
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.96 }}
      transition={POPUP_SPRING}
      className="fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100vw-2rem)] max-w-[560px] bottom-24 sm:bottom-28"
      style={{
        background: "rgba(10, 10, 12, 0.86)",
        backdropFilter: "blur(24px) saturate(160%)",
        WebkitBackdropFilter: "blur(24px) saturate(160%)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 12px 48px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.05) inset",
        borderRadius: "1.25rem",
      }}
    >
      <div className="px-6 pt-6 pb-2">
        <h2
          className="text-lg font-semibold tracking-tight"
          style={{
            color: "rgba(255,255,255,0.95)",
            fontFamily: "'DM Sans', 'Geist', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          Ankit's Hub
        </h2>
        <p
          className="mt-1 text-xs"
          style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'DM Mono', 'Fira Mono', monospace" }}
        >
          find me around the internet
        </p>
      </div>

      <div
        className="h-px mx-6 my-2"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)" }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-5 px-4 sm:px-5 pt-2 max-h-[50vh] overflow-y-auto">
        {CATEGORIES.map((category) => (
          <HubColumn key={category.id} category={category} />
        ))}
      </div>

      <div
        className="h-px mx-6 mt-1 mb-2"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.10), transparent)" }}
      />

      <div className="px-4 sm:px-5 pb-5">
        <EmailRow />
      </div>
    </motion.div>
  )
}

function EmailRow() {
  const [isHovered, setIsHovered] = useState(false)
  const email = "bariankitvinod@gmail.com"

  return (
    <a
      href={`mailto:${email}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="relative flex items-center gap-2.5 px-3 py-2.5 rounded-lg cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-white/30"
      aria-label={`Email ${email}`}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="absolute inset-0 rounded-lg bg-white/[0.08] border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={SPRING}
            style={{ zIndex: 0 }}
          />
        )}
      </AnimatePresence>

      <Mail
        className="relative z-10 w-4 h-4 shrink-0 transition-colors duration-200"
        style={{ color: isHovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)" }}
      />

      <span className="relative z-10 flex items-baseline gap-2 min-w-0 flex-1 flex-wrap">
        <span
          className="shrink-0 text-xs transition-colors duration-200"
          style={{
            color: isHovered ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.4)",
            fontFamily: "'DM Mono', 'Fira Mono', monospace",
          }}
        >
          or slide into my inbox
        </span>
        <span
          className="truncate text-sm font-medium tracking-tight transition-colors duration-200"
          style={{
            color: isHovered ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)",
            fontFamily: "'DM Mono', 'Fira Mono', monospace",
            fontSize: "0.8125rem",
          }}
        >
          {email}
        </span>
      </span>
    </a>
  )
}

export function ProfileDock() {
  const [open, setOpen] = useState(false)

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      {/* Backdrop — click anywhere on it (or any background pop-up) to close */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            style={{ background: "rgba(0,0,0,0.35)" }}
          />
        )}
      </AnimatePresence>

      {/* Hub popup */}
      <AnimatePresence>{open && <HubPanel />}</AnimatePresence>

      {/* Dock — always visible, never hidden by the popup */}
      <div
        className="fixed bottom-2 left-1/2 z-50 -translate-x-1/2"
        role="navigation"
        aria-label="Resume and profile hub"
      >
        <div
          className="absolute -inset-4 rounded-3xl pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.04) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <motion.div
          className="relative flex items-center gap-1.5 px-2 py-2 rounded-2xl"
          style={{
            background: "rgba(10, 10, 12, 0.82)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            border: "1px solid rgba(255,255,255,0.09)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05) inset",
          }}
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <ResumeCTA onOpen={() => setOpen(true)} />
          <HubToggle open={open} onToggle={() => setOpen((v) => !v)} />
        </motion.div>
      </div>
    </>
  )
}