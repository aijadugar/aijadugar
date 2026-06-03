"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Sparkles, Code, Award, Wand2, ExternalLink, Github } from "lucide-react"
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
          description: "Jun 2025 ~ Nov 2025 | Mumbai, India",
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
            "I'm Ankit Bari, an AI Researcher & Full-Stack Software Developer focused on building intelligent, real-world problem-solving services.",
            "With a good foundation in Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, and Blockchain, I design and deploy scalable, AI-powered applications.",
            "I enjoy working at the intersection of AI research, system design, and product engineering, contributing to open-source and solving complex, real-world problems.",
          ],
        },
        {
          heading: "Background",
          bullets: [
            "Previously led the end-to-end design, development, and long-term maintenance of SiteVPN.",
            "Competitive kaggler, consistent participation in competitions, notebooks, and write-ups.",
            "Open-source contributor, actively contributing to AI tool repositories and Python Foundation projects.",
            "Hackathon Competitor, regular participant in national-level hackathons and innovation challenges",
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
          heading: "YAR Coin",
          description: "(React.js, Express.js, MongoDB, Python, Hardhat, Metamask) | Live: https://yarcoin.vercel.app/ | Code: https://github.com/aijadugar/YAR-Coin-2.0",
          bullets: [
            "Deployed a full-stack decentralized reputation and reward ecosystem with 8 core modules, including live auctions and contribution tracking.",
            "Architected backend infrastructure with secure WebSocket communication, reducing manual record management workload by 89%.",
          ],
        },
        {
          heading: "Comm AI",
          description: "(React.js, Django, SQLite, Python, NLP, Scikit-learn, PyTorch, Gemini API, ElevenLabs STT API) | Live: https://commai-f4kj.onrender.com/ | Code: https://github.com/aijadugar/commai-django",
          bullets: [
            "Created an AI-powered communication analysis tool supporting text and speech, delivering 7 core feedback and recommendation modules.",
            "Engineered a Django pipeline integrating LLMs, ML, and neural networks to automatically assess communication levels and generate actionable insights with 90% accuracy.",
          ],
        },
        {
          heading: "ID Year Detection Using CV",
          description: "(Next.js, TypeScript, Django, Python, OpenCV) | Live: https://id-year-detection-using-computer-vi.vercel.app/ | Code: https://github.com/aijadugar/ID-Year-Detection-Using-Computer-Vision-",
          bullets: [
            "Trained a computer vision-based classification model to detect students’ academic year in real time with integrated audio feedback.",
            "Optimized the system for lab assistants to quickly identify students during lab sessions, reducing identification confusion by 85%.",
          ],
        },
        {
          heading: "Technical Support SLM",
          description: "(Llama 3.2, Unsloth, LoRA, Transformers, Hugging Face, TRL) | Live: https://huggingface.co/spaces/aijadugar/ft_slm | Code: https://github.com/aijadugar/slm-fine-tuning-technical-bot",
          bullets: [
            "Fine-tuned a technical support chatbot using Llama 3.2 (3B), enabling efficient training.",
            "Implemented an end-to-end pipeline including instruction tuning, model optimization, and deployment, achieving efficient CPU inference.",
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
            "Programming: C, C++, Python, JavaScript, SQL, Solidity",
            "AI & ML: Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, LLMs, AI Agents, Model Fine-tuning",
            "Frameworks & Libraries: PyTorch, TensorFlow (Keras), Transformers, Scikit-learn, OpenCV, Hugging Face",
            "Full-Stack Development: React.js, Next.js, Vue.js, Django, Flask, FastAPI, Node.js, Express.js, Blockchain",
            "Databases & Cloud: PostgreSQL, MySQL, MongoDB, Azure, AWS, DigitalOcean, IPFS",
            "Developer Tools: Shell, Git, GitHub, Docker, Postman, Jupyter Notebook, Google Colab"
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
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!activeSection) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveSection(null)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node

      if ((e.target as HTMLElement).closest("[data-no-close]")) return

      if (popupRef.current && !popupRef.current.contains(target)) {
        setActiveSection(null)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("mousedown", handleClickOutside)

    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current)
      }
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeSection])

  const handleMouseEnter = (section: string) => {
    hoverTimeout.current = setTimeout(() => {
      setActiveSection(section)
    }, 100) // 1 second
  }

  const handleMouseLeave = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current)
    }
  }
  return (
    <>
      <div data-no-close>
        {/* Corner Panels */}
        <div className="fixed inset-0 pointer-events-none z-40">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`absolute pointer-events-auto ${getPositionClasses(section.position)}`}
              onMouseEnter={() => handleMouseEnter(section.id)}
              onMouseLeave={handleMouseLeave}
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
                              {item.description && (
                                <p className="text-sm text-primary/80 mt-1 flex flex-wrap items-center gap-2">
                                  {item.description.split("|").map((part, i) => {
                                    if (part.includes("Live:")) {
                                      const url = part.split("Live:")[1].trim();
                                      return (
                                        <a
                                          key={i}
                                          href={url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition"
                                        >
                                          <ExternalLink size={14} />
                                          Live
                                        </a>
                                      );
                                    }

                                    if (part.includes("Code:")) {
                                      const url = part.split("Code:")[1].trim();
                                      return (
                                        <a
                                          key={i}
                                          href={url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex items-center gap-1 px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition"
                                        >
                                          <Github size={14} />
                                          Code
                                        </a>
                                      );
                                    }

                                    return <span key={i}>{part}</span>;
                                  })}
                                </p>
                              )}
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
      </div>
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