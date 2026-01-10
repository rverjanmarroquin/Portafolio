"use client"

import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="py-6 border-t border-border bg-card/30">
      <div className="max-w-[1040px] mx-auto px-4 text-center text-muted-foreground">
        <p>
          © {year} Ricardo Verjan Marroquin. {t.footer}
        </p>
      </div>
    </footer>
  )
}
