"use client";

import { useLanguage } from "@/components/language-provider";
import { skills } from "@/lib/data";

const skillColors: Record<
  string,
  { bg: string; border: string; text: string }
> = {
  html: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    text: "text-orange-500",
  },
  css: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-500",
  },
  javascript: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/30",
    text: "text-yellow-500",
  },
  git: {
    bg: "bg-red-500/10",
    border: "border-red-500/30",
    text: "text-red-500",
  },
  responsive: {
    bg: "bg-teal-500/10",
    border: "border-teal-500/30",
    text: "text-teal-500",
  },
  looker: {
    bg: "bg-orange-600/10",
    border: "border-orange-600/30",
    text: "text-orange-600",
  },
  python: {
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
    text: "text-blue-400",
  },
  sql: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    text: "text-cyan-500",
  },
  powerbi: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-500",
  },
  react: {
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/30",
    text: "text-cyan-400",
  },
  typescript: {
    bg: "bg-blue-600/10",
    border: "border-blue-600/30",
    text: "text-blue-600",
  },
  tailwind: {
    bg: "bg-teal-400/10",
    border: "border-teal-400/30",
    text: "text-teal-400",
  },
  vite: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    text: "text-purple-500",
  },
};

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="habilidades"
      className="section-card mx-auto my-8 max-w-[1100px] p-8 rounded-2xl bg-card/40 border border-primary/10 shadow-xl transition-all duration-400 hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-purple-500/2 hover:border-l-4 hover:border-l-purple-500"
    >
      <div className="max-w-[1040px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-br from-primary to-green-400 bg-clip-text text-transparent inline-block pb-2">
          {t.sections.skillsTitle}
        </h2>
        <p className="text-muted-foreground mb-8 text-lg tracking-wide">
          {t.sections.skillsDesc}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => {
            const colors = skillColors[skill.skill] || {
              bg: "bg-primary/10",
              border: "border-primary/30",
              text: "text-primary",
            };
            return (
              <article
                key={index}
                className={`flex flex-col items-center justify-center gap-3 p-5 rounded-xl ${colors.bg} border ${colors.border} transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg cursor-default`}
              >
                <i className={`${skill.icon} text-3xl ${colors.text}`} />
                <span className="font-semibold text-sm text-center">
                  {skill.name}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
