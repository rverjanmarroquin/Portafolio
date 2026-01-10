import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="main-wrapper relative">
        <Header />
        <main>
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
        </main>
      </div>
      <Footer />
    </div>
  )
}
