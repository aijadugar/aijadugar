import { ScrollIndicator } from "@/components/scroll-indicator"
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

  <span className="font-light tracking-[0.2em] text-primary uppercase text-sm">
    Experience an Extraordinary
  </span>
</div>


            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="font-serif text-6xl font-bold leading-tight tracking-tight text-foreground lg:text-7xl xl:text-8xl text-balance">
                {"aijadugar"}
              </h1>
              <p className="font-serif text-4xl font-light italic text-muted-foreground lg:text-5xl text-balance">
                {"Master of Magic"}
              </p>
            </div>

            {/* Description */}
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground/90 font-light">
              {
                "Where reality bends and wonder comes alive. Experience spellbinding illusions, mystical performances, and unforgettable moments of pure enchantment."
              }
            </p>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  )
}
