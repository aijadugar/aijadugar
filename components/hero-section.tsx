import { ScrollIndicator } from "@/components/scroll-indicator"
import { RotatingRole } from "@/components/RotatingRole"
import { Flame, Calendar } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/magician.png"
          alt="aijadugar - Master Magician"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />

        {/* Gradient Overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl space-y-8 pt-20">
            {/* Subtitle */}
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-primary filter drop-shadow-[0_0_6px_rgba(255,120,0,0.6)]" />

              <span className="font-medium tracking-wide text-primary/90 text-large">
                Researching. Building. Open to new opportunities.
              </span>
            </div>


            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-serif text-6xl font-bold leading-tight tracking-tight text-foreground lg:text-7xl xl:text-8xl text-balance">
                {"Ankit Bari"}
              </h1>
              <RotatingRole />
            </div>

            {/* Description */}
            <p
              style={{ fontFamily: "Times New Roman, serif" }}
              className="max-w-xl text-xl leading-relaxed text-white/85 font-light tracking-wide"
            >
              <span>
                Researching🔎... the world of AI and turning ideas into real products. I'm
                the kind of person who reads AI research papers for fun, quickly dives into
                new technologies, and enjoys figuring out how things work under the hood.
              </span>

              <span className="block mt-2">
                🏭Building has become such a habit that if I go too long without shipping
                something, my parents start asking, "What did you build today?"
              </span>
            </p>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  )
}