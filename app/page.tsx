import { HeroSection } from "@/components/hero-section"
import { CornerPanels } from "@/components/corner-panels"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <CornerPanels />
    </main>
  )
}
