"use client"

import { useState } from "react"
import { Github, Linkedin, Code2, Mail, Twitter } from "lucide-react"

export function ScrollIndicator() {
  const [isHovering, setIsHovering] = useState(false)

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: Linkedin, color: "hover:text-[#0077b5]" },
    { name: "GitHub", url: "https://github.com/yourprofile", icon: Github, color: "hover:text-[#6e5494]" },
    { name: "LeetCode", url: "https://leetcode.com/yourprofile", icon: Code2, color: "hover:text-[#ffa116]" },
    { name: "Twitter", url: "https://twitter.com/yourprofile", icon: Twitter, color: "hover:text-[#1da1f2]" },
    { name: "Email", url: "mailto:your.email@example.com", icon: Mail, color: "hover:text-primary" },
  ]

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

              <h3 className="text-lg font-serif text-center mb-4">
                Connect With Me
              </h3>

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
