"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { projects, tagMeta } from "@/lib/data"

export function ProjectsSection() {
  const { lang, t } = useLanguage()

  return (
    <section
      id="proyectos"
      className="section-card mx-auto my-8 max-w-[1100px] p-8 rounded-2xl bg-card/40 border border-primary/10 shadow-xl transition-all duration-400 hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-blue-500/2 hover:border-l-4 hover:border-l-blue-500"
    >
      <div className="max-w-[1040px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-br from-primary to-green-400 bg-clip-text text-transparent inline-block pb-2">
          {t.sections.projectsTitle}
        </h2>
        <p className="text-muted-foreground mb-8 text-lg tracking-wide">{t.sections.projectsDesc}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-card/60 rounded-xl border border-primary/20 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 flex flex-col"
            >
              {/* Project Image */}
              {project.image &&
                project.image !== "#" &&
                (project.demo && project.demo !== "#" ? (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={lang === "en" && project.titleEn ? project.titleEn : project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                ) : (
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={lang === "en" && project.titleEn ? project.titleEn : project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                ))}

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {lang === "en" && project.titleEn ? project.titleEn : project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {lang === "en" && project.descriptionEn ? project.descriptionEn : project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(lang === "en" && project.tagsEn ? project.tagsEn : project.tags).map((tag, i) => {
                    const meta = tagMeta[tag as keyof typeof tagMeta]
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-muted/50 text-xs font-medium"
                      >
                        {meta?.icon && <i className={meta.icon} style={{ color: meta.color }} />}
                        {tag}
                      </span>
                    )
                  })}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-transparent text-foreground px-4 py-2 rounded-lg font-semibold border border-border transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:text-primary"
                    >
                      {t.buttons.demo}
                    </a>
                  )}
                  {project.code && project.code !== "#" && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-primary/80"
                    >
                      {t.buttons.code}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
