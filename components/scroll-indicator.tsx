"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Code2, Mail, Notebook } from "lucide-react"

export function ScrollIndicator() {
  const [isHovering, setIsHovering] = useState(false)

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/aijadugar", icon: Github, color: "hover:text-[#6e5494]" },
    { name: "LinkedIn", url: "https://linkedin.com/in/aijadugar", icon: Linkedin, color: "hover:text-[#0077b5]" },
    { name: "Kaggle", url: "https://kaggle.com/bariankitvinod", icon: Notebook, color: "hover:text-[#1da1f2]" },
    { name: "LeetCode", url: "https://leetcode.com/u/aijadugar", icon: Code2, color: "hover:text-[#ffa116]" },
    { name: "Email", url: "mailto:vbari8527@gmail.com", icon: Mail, color: "hover:text-primary" },
  ]

  useEffect(() => {
  if (!isHovering) return

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsHovering(false)
    }
  }

  window.addEventListener("keydown", handleKeyDown)
  return () => window.removeEventListener("keydown", handleKeyDown)
}, [isHovering])


  return (
    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2">
      <div
        className="relative flex flex-col items-center"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* TEXT (hidden on hover) */}
        <div
          className={`flex flex-col items-center gap-2 transition-all duration-300 ${
            isHovering ? "opacity-0 pointer-events-none" : "opacity-100 animate-bounce"
          }`}
        >
          <span className="text-xs font-light tracking-widest text-muted-foreground uppercase">
            WHO I AM?
          </span>

          <div className="h-8 w-[1px] bg-gradient-to-b from-primary to-transparent" />
        </div>

        {/* POPUP */}
        {isHovering && (
          <div className="absolute bottom-full mb-6 animate-fade-in">
            <div className="relative bg-card/95 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-2xl p-6 min-w-[280px]">
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

              <a 
  href="/Ankit's_CV.pdf"
  download
  className="group relative flex items-center gap-4 px-6 py-4 mb-4 rounded-2xl border border-primary/30 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all"
>
<img
  src="images/resume-spell.png"
  alt="Magical Resume Bottle"
  className="w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(255,200,120,0.6)] group-hover:scale-110 transition-transform"
/>

  <span className="text-sm font-medium tracking-wide text-foreground group-hover:text-primary transition-colors">
    Download Resume
  </span>
</a>

              <div className="space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary/80 transition-all group border border-border/50 hover:border-primary/50 ${link.color}`}
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
