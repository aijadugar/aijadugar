"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
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
        heading: "AI Researcher ~ The SMM Hub",
        description: "Jun 2025 ~ Jul 2025 | Mumbai, India",
        bullets: [
          "Developed a real-time Flask-based AI chatbot with 95% accurate user data capture for lead tracking.",
          "Proposed and delivered 5+ AI-driven media generation tools, improving creative team accuracy by 30%.",
          "Built AI agents for SEO automation, generating blog drafts with embedded image prompts from a single topic input.",
          "Integrated secure authentication systems and automated Google Sheets logging, boosting image & video generation efficiency by 40%.",
        ],
      },
      {
        heading: "Data Analytics Virtual Intern ~ Godrej Infotech",
        description: "Oct 2024 ~ Jan 2025 | Mumbai, India",
        bullets: [
          "Designed interactive Power BI dashboards using dynamic filters and advanced DAX measures.",
          "Enhanced market analytics and dashboard presentation for improved data-driven decision-making.",
          "Translated raw datasets into actionable business insights for stakeholders.",
        ],
      },
      {
        heading: "Artificial Intelligence Intern ~ Coincent AI",
        description: "Jul 2024 ~ Oct 2024 | Mumbai, India",
        bullets: [
          "Developed and integrated machine learning models into production-ready web applications.",
          "Worked on CNN-based NLP models, improving performance through hyperparameter tuning.",
          "Collaborated with cross-functional teams to deploy scalable AI solutions.",
        ],
      },
      {
        heading: "Data Science Intern ~ Acmegrade",
        description: "Dec 2023 ~ Feb 2024 | Mumbai, India",
        bullets: [
          "Preprocessed and cleaned 10,000+ data records using Python data science libraries.",
          "Conducted Exploratory Data Analysis (EDA) to identify trends, patterns, and insights.",
          "Strengthened practical understanding of data pipelines, statistics, and model readiness.",
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
            "I'm Ankit Bari, Founder of SiteVPN, an AI Researcher & Full-Stack Software Developer focused on building intelligent, real-world problem-solving services.",
            "With a good foundation in Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, and Blockchain, I design and deploy scalable, AI-powered applications.",
            "I enjoy working at the intersection of AI research, system design, and product engineering, contributing to open-source and solving complex, real-world problems.",
          ],
        },
        {
          heading: "Background",
          bullets: [
            "Currently leading the design, development, and long-term maintenance of SiteVPN.",
            "Competitive kaggler, consistent participation in competitions, notebooks, and write-ups.",
            "Open-source contributor, actively contributing to AI tool repositories and Python Foundation projects.",
            "Hackathon Competitor, regular participant in college and national-level hackathons and innovation challenges",
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
        heading: "Synapse Ledger",
        description: "Decentralized Data Marketplace for AI Training",
        bullets: [
          "Designed an Express.js backend enabling secure interaction between Developers and Contributors.",
          "Engineered a custom blockchain using Tendermint with an ABCI application for immutable data records.",
          "Built a scalable full-stack system integrating React, Node.js, Flask, and blockchain infrastructure.",
          "Focused on decentralized data ownership for AI model training pipelines.",
        ],
      },
      {
        heading: "ID Year Detection using Computer Vision",
        description: "Real-time Student Year Detection System",
        bullets: [
          "Developed a computer vision system to detect and rank students’ academic year in real time with ~85% accuracy.",
          "Automated student identification to reduce manual effort and confusion in laboratory environments.",
          "Implemented the system using OpenCV, Django backend, and Next.js frontend.",
        ],
      },
      {
        heading: "Comm AI",
        description: "Human Communication Analysis via Text & Speech",
        bullets: [
          "Built a full-stack AI platform for question answering, evaluation, conversation reports, and learning analysis.",
          "Developed backend APIs using Django for handling AI-driven workflows.",
          "Integrated NLP and speech-based interaction using Gemini API.",
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
          "Programming: Python, C++, C, JavaScript, SQL, Solidity",
          "AI & ML: Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, LLMs",
          "Frameworks & Libraries: PyTorch, TensorFlow (Keras), Scikit-learn, OpenCV, Hugging Face",
          "Full-Stack Development: React.js, Next.js, Vue.js, Django, Flask, Node.js, Express.js",
          "Databases & Cloud: PostgreSQL, MySQL, MongoDB, AWS, DigitalOcean, IPFS",
          "Developer Tools: Git, GitHub, Docker, Postman, Jupyter Notebook, Google Colab"
        ],
      },
      {
        heading: "Performance Skills",
        bullets: [
          "Problem Solving & Analytical Thinking",
          "Research-Oriented Mindset & Model Optimization",
          "Leadership, Ownership & Mentoring",
          "Cross-Team Collaboration & Communication",
          "Hackathon Execution & Rapid Prototyping",
          "End-to-End Project Delivery & System Design"
        ],
      },
    ],
  },
}
]

export function CornerPanels() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const popupRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
  if (!activeSection) return

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setActiveSection(null)
    }
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      setActiveSection(null)
    }
  }

  window.addEventListener("keydown", handleKeyDown)
  window.addEventListener("mousedown", handleClickOutside)

  return () => {
    window.removeEventListener("keydown", handleKeyDown)
    window.removeEventListener("mousedown", handleClickOutside)
  }
}, [activeSection])

  return (
    <>
      {/* Corner Panels */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`absolute pointer-events-auto ${getPositionClasses(section.position)}`}
            onMouseEnter={() => setActiveSection(section.id)}
            // onMouseLeave={() => setActiveSection(null)}
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
          <div
          ref={popupRef}
          className="relative pointer-events-auto animate-fade-in">
            {/* Background magical glow */}
            <div
              className="absolute inset-0 -m-8 opacity-50 blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(255, 140, 50, 0.4), rgba(100, 200, 255, 0.4))",
              }}
            />

            {/* Magical particles around popup */}
            <MagicalParticles alwaysVisible />

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
