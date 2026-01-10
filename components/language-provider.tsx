"use client";

import type React from "react";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "es" | "en";

const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
    },
    hero: {
      role: "Desarrollo Full Stack | Análisis de Datos | Marketing Digital",
      bio: "Apasionado por el Desarrollo Web, Análisis de datos y tecnologías emergentes.",
      contact: "Contactar",
      cv: "Ver CV",
    },
    sections: {
      projectsTitle: "Proyectos",
      projectsDesc: "",
      skillsTitle: "Habilidades",
      skillsDesc: "Tecnologías y herramientas que utilizo.",
    },
    buttons: {
      demo: "Demo",
      code: "Código",
    },
    footer: "Todos los derechos reservados.",
  },
  en: {
    nav: {
      about: "About me",
      projects: "Projects",
      skills: "Skills",
    },
    hero: {
      role: "Full Stack Development | Data Analysis | Digital Marketing",
      bio: "Passionate about web development and data analysis.",
      contact: "Contact",
      cv: "View CV",
    },
    sections: {
      projectsTitle: "Projects",
      projectsDesc: "",
      skillsTitle: "Skills",
      skillsDesc: "Technologies and tools I use.",
    },
    buttons: {
      demo: "Live",
      code: "Code",
    },
    footer: "All rights reserved.",
  },
};

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: typeof translations.es;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang | null;
    if (savedLang) setLang(savedLang);
  }, []);

  const toggleLang = () => {
    const newLang = lang === "es" ? "en" : "es";
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider
      value={{ lang, toggleLang, t: translations[lang] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
