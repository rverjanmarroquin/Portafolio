"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { profile } from "@/lib/data"

export function HeroSection() {
  const { t } = useLanguage()
  const [displayName, setDisplayName] = useState("")

  // Typewriter effect
  useEffect(() => {
    let i = 0
    let timeoutId: NodeJS.Timeout

    const type = () => {
      if (i < profile.name.length) {
        setDisplayName(profile.name.slice(0, i + 1))
        i++
        timeoutId = setTimeout(type, 80)
      } else {
        // Reset after 7 seconds
        timeoutId = setTimeout(() => {
          i = 0
          setDisplayName("")
          type()
        }, 7000)
      }
    }

    type()
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section
      id="sobre-mi"
      className="section-card mx-auto my-8 max-w-[1100px] p-8 rounded-2xl bg-card/40 border border-primary/10 shadow-xl transition-all duration-400 hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/2 hover:border-l-4 hover:border-l-primary"
    >
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 items-stretch">
        {/* Profile Image */}
        <div className="w-60 h-60 mx-auto md:mx-0 overflow-hidden border-3 border-primary/30 shadow-lg shadow-primary/15 bg-card">
          <Image
            src="/assets/img/perfil.jpg"
            alt="Foto de perfil"
            width={240}
            height={240}
            className="w-full h-full object-contain transition-transform duration-400 hover:scale-105"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex-1 bg-card/60 p-8 rounded-xl border border-primary/20 backdrop-blur-sm shadow-lg text-center animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-br from-primary to-green-400 bg-clip-text text-transparent">
            {displayName}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-primary font-semibold mb-4 text-lg tracking-wide">{t.hero.role}</p>
          <p className="text-muted-foreground leading-relaxed text-lg">{t.hero.bio}</p>

          {/* Actions */}
          <div className="flex gap-3 mt-6 justify-center flex-wrap">
            <a
              href={`mailto:${profile.email}`}
              className="inline-block bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold border border-primary/70 transition-all duration-300 hover:bg-primary/80 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
            >
              {t.hero.contact}
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent text-foreground px-5 py-2.5 rounded-lg font-semibold border border-border transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:text-primary hover:shadow-lg hover:shadow-primary/20"
            >
              {t.hero.cv}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-6 justify-center">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-[#0a66c2]/10 border-2 border-[#0a66c2] text-[#0a66c2] flex items-center justify-center transition-all duration-300 hover:bg-[#0a66c2]/20 hover:-translate-y-1 hover:scale-110 hover:shadow-lg hover:shadow-[#0a66c2]/30"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-foreground/10 border-2 border-foreground/50 text-foreground flex items-center justify-center transition-all duration-300 hover:bg-foreground/20 hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
