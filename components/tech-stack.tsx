"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useTranslations } from "next-intl"

export function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const t = useTranslations()

  const stackImages: Record<string, string> = {
    HTML: "/html.webp",
    CSS: "/css.png",
    JavaScript: "/js.png",
    TypeScript: "/ts.png",
    React: "/react.webp",
    "Next.js": "/nextjs.webp",
    "React Native": "/reactnative.png",
    Expo: "/expo.png",
    "Node.js": "/nodejs.png",
    PHP: "/php.png",
    Python: "/python.png",
    Java: "/java.png",
    "C#": "/csharp.png",
    C: "/c.png",
    SQL: "/sql.png",
    NoSQL: "/nosql.png",
    PostgreSQL: "/postgresql.png",
    Git: "/git.png",
    GitHub: "/github.png",
  }

  const technologies = [
    { name: "HTML", category: "Frontend", description: t("tech_descriptions.HTML") },
    { name: "CSS", category: "Frontend", description: t("tech_descriptions.CSS") },
    { name: "JavaScript", category: "Frontend", description: t("tech_descriptions.JavaScript") },
    { name: "TypeScript", category: "Frontend", description: t("tech_descriptions.TypeScript") },
    { name: "React", category: "Frontend", description: t("tech_descriptions.React") },
    { name: "Next.js", category: "Frontend", description: t("tech_descriptions.Next.js") },
    { name: "React Native", category: "Mobile", description: t("tech_descriptions.React Native") },
    { name: "Expo", category: "Mobile", description: t("tech_descriptions.Expo") },
    { name: "Node.js", category: "Backend", description: t("tech_descriptions.Node.js") },
    { name: "PHP", category: "Backend", description: t("tech_descriptions.PHP") },
    { name: "Python", category: "Backend", description: t("tech_descriptions.Python") },
    { name: "Java", category: "Backend", description: t("tech_descriptions.Java") },
    { name: "C#", category: "Backend", description: t("tech_descriptions.C#") },
    { name: "C", category: "Backend", description: t("tech_descriptions.C") },
    { name: "SQL", category: "Database", description: t("tech_descriptions.SQL") },
    { name: "NoSQL", category: "Database", description: t("tech_descriptions.NoSQL") },
    { name: "PostgreSQL", category: "Database", description: t("tech_descriptions.PostgreSQL") },
    { name: "Git", category: "Tools", description: t("tech_descriptions.Git") },
    { name: "GitHub", category: "Tools", description: t("tech_descriptions.GitHub") },
  ]

  const categories = [
    { key: "Frontend", label: t("frontend") },
    { key: "Backend", label: t("backend") },
    { key: "Mobile", label: t("mobile") },
    { key: "Database", label: t("database") },
    { key: "Tools", label: t("tools") },
  ]

  return (
      <section id="tech" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-neutral-900 dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 dark:bg-clip-text dark:text-transparent">
                {t("tech_stack")}
              </span>
            </h2>
            <p className="text-xl text-neutral-900 dark:text-slate-400">{t("tech_stack_info")}</p>

            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto mt-8"
            />
          </motion.div>

          <div className="space-y-16">
            {categories.map((categoryObj, categoryIndex) => (
                <motion.div
                    key={categoryObj.key}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold mb-8 text-center text-neutral-900 dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 dark:bg-clip-text dark:text-transparent">
                    {categoryObj.label}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {technologies
                        .filter((tech) => tech.category === categoryObj.key)
                        .map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="group relative flex flex-col items-center p-4 data-cursor-hover"
                                data-cursor-hover
                                onMouseEnter={() => setHoveredTech(tech.name)}
                                onMouseLeave={() => setHoveredTech(null)}
                            >
                              <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  className="w-12 h-12 mb-3 text-neutral-900 group-hover:text-black dark:text-slate-400 group-hover:dark:text-slate-200 transition-colors duration-300"
                              >
                                <img
                                    src={stackImages[tech.name]}
                                    alt={tech.name}
                                    className="w-full h-full object-contain"
                                    draggable={false}
                                />
                              </motion.div>

                              <span className="text-neutral-900 dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 dark:bg-clip-text dark:text-transparent font-medium transition-colors duration-300">
                                {tech.name}
                              </span>

                              <div className={`tooltip ${hoveredTech === tech.name ? "tooltip-visible" : ""}`}>
                                {tech.description}
                              </div>
                            </motion.div>
                        ))}
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
