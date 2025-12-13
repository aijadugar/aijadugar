"use client"

import type React from "react"

import { useState } from "react"
import { Sparkles, Code, Award, Wand2 } from "lucide-react"
import { MagicalParticles } from "./magical-particles"

interface Section {
  id: string
  title: string
  icon: React.ReactNode
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  content: {
    subtitle?: string
    items: {
      heading: string
      description?: string
      bullets?: string[]
    }[]
  }
}

const sections: Section[] = [
  {
    id: "experience",
    title: "Experience",
    icon: <Sparkles className="w-5 h-5" />,
    position: "top-left",
    content: {
      subtitle: "Professional Journey",
      items: [
        {
          heading: "Master Illusionist",
          description: "2018 - Present",
          bullets: [
            "Performed at 200+ exclusive events worldwide",
            "Specializing in close-up magic and grand illusions",
            "Featured at prestigious venues and private galas",
          ],
        },
        {
          heading: "Stage Performer",
          description: "2015 - 2018",
          bullets: [
            "Toured internationally with acclaimed magic shows",
            "Developed signature fire and levitation acts",
            "Mentored emerging magicians",
          ],
        },
      ],
    },
  },
  {
    id: "about",
    title: "About",
    icon: <Wand2 className="w-5 h-5" />,
    position: "top-right",
    content: {
      subtitle: "The Magician",
      items: [
        {
          heading: "Philosophy",
          bullets: [
            "Magic is the art of creating wonder in the impossible",
            "Every performance tells a unique story",
            "Blending classical techniques with modern innovation",
          ],
        },
        {
          heading: "Background",
          bullets: [
            "Trained under world-renowned illusionists",
            "Master of sleight of hand and misdirection",
            "Passionate about preserving magical traditions",
          ],
        },
      ],
    },
  },
  {
    id: "projects",
    title: "Projects",
    icon: <Code className="w-5 h-5" />,
    position: "bottom-left",
    content: {
      subtitle: "Signature Acts",
      items: [
        {
          heading: "The Phoenix Rising",
          description: "Fire Manipulation Spectacle",
          bullets: [
            "Conjuring flames from thin air",
            "Ancient fire-walking rituals",
            "Dramatic transformation sequences",
          ],
        },
        {
          heading: "Ethereal Levitation",
          description: "Defying Gravity",
          bullets: [
            "Floating objects and ethereal illusions",
            "Audience participation elements",
            "Mystical atmospheric effects",
          ],
        },
      ],
    },
  },
  {
    id: "skills",
    title: "Skills",
    icon: <Award className="w-5 h-5" />,
    position: "bottom-right",
    content: {
      subtitle: "Mastered Arts",
      items: [
        {
          heading: "Technical Skills",
          bullets: [
            "Sleight of Hand Mastery",
            "Fire Manipulation",
            "Mentalism & Mind Reading",
            "Grand Illusion Design",
          ],
        },
        {
          heading: "Performance Skills",
          bullets: ["Stage Presence & Showmanship", "Audience Engagement", "Theatrical Direction", "Improvisation"],
        },
      ],
    },
  },
]

export function CornerPanels() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  return (
    <>
      {/* Corner Panels */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`absolute pointer-events-auto ${getPositionClasses(section.position)}`}
            onMouseEnter={() => setActiveSection(section.id)}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div
              className={`
                relative w-32 h-32 backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5
                border border-white/20 transition-all duration-300 hover:scale-110
                ${getCornerShape(section.position)}
                group cursor-pointer
              `}
              style={{
                boxShadow: "0 0 30px rgba(255, 140, 50, 0.2), inset 0 0 20px rgba(100, 200, 255, 0.1)",
              }}
            >
              {/* Magical glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at center, rgba(255, 140, 50, 0.3), rgba(100, 200, 255, 0.3))",
                  filter: "blur(15px)",
                }}
              />

              {/* Content */}
              <div
                className={`relative z-10 h-full flex flex-col items-center justify-center gap-2 ${getContentPosition(section.position)}`}
              >
                <div className="text-primary group-hover:scale-110 transition-transform">{section.icon}</div>
                <span className="text-xs font-semibold text-foreground/90 tracking-wider uppercase">
                  {section.title}
                </span>
              </div>

              {/* Magical particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full animate-float"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Central Pop-up */}
      {activeSection && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          onMouseEnter={() => setActiveSection(activeSection)}
          onMouseLeave={() => setActiveSection(null)}
        >
          <div className="relative pointer-events-auto animate-fade-in">
            {/* Background magical glow */}
            <div
              className="absolute inset-0 -m-8 opacity-50 blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(255, 140, 50, 0.4), rgba(100, 200, 255, 0.4))",
              }}
            />

            {/* Magical particles around popup */}
            <MagicalParticles />

            {/* Main pop-up content */}
            <div
              className="relative max-w-2xl w-[90vw] max-h-[80vh] overflow-auto backdrop-blur-xl bg-gradient-to-br from-black/80 via-black/70 to-black/60 border-2 border-white/20 rounded-3xl p-8 shadow-2xl custom-scrollbar"
              style={{
                boxShadow:
                  "0 0 60px rgba(255, 140, 50, 0.3), 0 0 100px rgba(100, 200, 255, 0.2), inset 0 0 40px rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Magical runes decoration */}
              <div className="absolute top-4 right-4 text-primary/20 text-4xl font-serif">✦</div>
              <div className="absolute bottom-4 left-4 text-accent/20 text-4xl font-serif">✧</div>

              {sections
                .filter((s) => s.id === activeSection)
                .map((section) => (
                  <div key={section.id} className="animate-fade-in">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                      <div className="text-primary">{section.icon}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">{section.title}</h2>
                        {section.content.subtitle && (
                          <p className="text-muted-foreground text-sm mt-1">{section.content.subtitle}</p>
                        )}
                      </div>
                    </div>

                    {/* Content sections */}
                    <div className="space-y-6">
                      {section.content.items.map((item, idx) => (
                        <div key={idx} className="space-y-3">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                              <span className="text-primary text-sm">✦</span>
                              {item.heading}
                            </h3>
                            {item.description && <p className="text-sm text-primary/80 mt-1">{item.description}</p>}
                          </div>
                          {item.bullets && (
                            <ul className="space-y-2 ml-6">
                              {item.bullets.map((bullet, bulletIdx) => (
                                <li
                                  key={bulletIdx}
                                  className="text-foreground/80 flex items-start gap-3 leading-relaxed"
                                >
                                  <span className="text-primary mt-1 text-xs">▸</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function getPositionClasses(position: Section["position"]): string {
  switch (position) {
    case "top-left":
      return "top-0 left-0"
    case "top-right":
      return "top-0 right-0"
    case "bottom-left":
      return "bottom-0 left-0"
    case "bottom-right":
      return "bottom-0 right-0"
  }
}

function getCornerShape(position: Section["position"]): string {
  switch (position) {
    case "top-left":
      return "rounded-br-[100%]"
    case "top-right":
      return "rounded-bl-[100%]"
    case "bottom-left":
      return "rounded-tr-[100%]"
    case "bottom-right":
      return "rounded-tl-[100%]"
  }
}

function getContentPosition(position: Section["position"]): string {
  switch (position) {
    case "top-left":
      return "pb-4 pr-4"
    case "top-right":
      return "pb-4 pl-4"
    case "bottom-left":
      return "pt-4 pr-4"
    case "bottom-right":
      return "pt-4 pl-4"
  }
}
