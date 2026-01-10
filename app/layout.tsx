import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portafolio | Ricardo Verjan Marroquin",
  description: "Portafolio web de Ricardo Verjan Marroquin: Full Stack Developer, Data Analyst y Digital Marketing.",
  generator: "v0.app",
  icons: {
    icon: "/assets/img/imagen gato.jpg",
  },
  openGraph: {
    title: "Ricardo Verjan Marroquin - Portafolio",
    description: "Full Stack Developer | Data Analyst | Digital Marketing",
    images: ["/assets/img/perfil.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Font Awesome for skill icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
