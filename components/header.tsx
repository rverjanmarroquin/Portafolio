"use client"

import { useState } from "react"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang, t } = useLanguage()

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href)
    if (target) {
      setMobileMenuOpen(false)
      target.classList.add("scroll-target")
      setTimeout(() => target.classList.remove("scroll-target"), 1000)
      window.scrollTo({ top: (target as HTMLElement).offsetTop - 60, behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b-2 border-primary/20 backdrop-blur-xl bg-background/95 shadow-lg">
      <nav className="flex items-center justify-center h-16 px-4 md:px-8 gap-0">
        {/* Brand */}
        <div className="flex items-center gap-2 mr-auto cursor-default select-none group">
          <Image
            src="/assets/img/imagen gato.jpg"
            alt="Avatar"
            width={40}
            height={40}
            className="rounded-full border-2 border-primary/40 shadow-md transition-all duration-300 group-hover:border-primary group-hover:shadow-primary/30 group-hover:scale-110 group-hover:rotate-[5deg]"
          />
        </div>

        {/* Language Toggle */}
        <button
          onClick={toggleLang}
          className="px-3 py-2 rounded-lg border border-primary/30 bg-primary/10 font-bold text-sm transition-all duration-300 hover:bg-primary/25 hover:border-primary hover:scale-110 hover:rotate-[5deg] mr-3"
          aria-label="Cambiar idioma"
        >
          {lang.toUpperCase()}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/25 hover:border-primary hover:scale-115 hover:rotate-[20deg] mr-3"
          aria-label="Cambiar tema"
        >
          {theme === "dark" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-lg border border-primary/30 bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/25 hover:border-primary hover:scale-115"
          aria-label="Abrir menú"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Navigation Links */}
        <ul
          className={`${mobileMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:static top-16 left-0 right-0 bg-background md:bg-transparent p-4 md:p-0 gap-2 md:gap-2 items-center border-b md:border-0 border-primary/20`}
        >
          <li>
            <button
              onClick={() => scrollToSection("#sobre-mi")}
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-primary/15 hover:text-primary hover:-translate-y-0.5"
            >
              {t.nav.about}
            </button>
          </li>
          <li className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-primary/40 to-transparent mx-2" />
          <li>
            <button
              onClick={() => scrollToSection("#proyectos")}
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-primary/15 hover:text-primary hover:-translate-y-0.5"
            >
              {t.nav.projects}
            </button>
          </li>
          <li className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-primary/40 to-transparent mx-2" />
          <li>
            <button
              onClick={() => scrollToSection("#habilidades")}
              className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-primary/15 hover:text-primary hover:-translate-y-0.5"
            >
              {t.nav.skills}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
