"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"

export function Projects() {
  const t = useTranslations();
  const projects = [
    {
      title: "LynkAi",
      description: t('lynkai_description'),
      tech: ["Angular", "Spring Boot", "RAG", "JWT", "AI/ML"],
      github: null,
      image: "lynkai.png", // Add your screenshot here
      color: "blue-500",
    },
    {
      title: "AI Storyboard Generator",
      description: t('storyboard_description'),
      tech: ["Python", "AI/ML", "Computer Vision"],
      github: "https://github.com/alaeddinedaly/ai-storyboard-generator",
      image: "storyboard.png",
      color: "purple-500",
    },
    {
      title: "Nexus Down",
      description: t('nexusdown_description'),
      tech: ["Python", "Automation", "File Management"],
      github: "https://github.com/alaeddinedaly/nexus-down",
      image: "nexusdown.png",
      color: "green-500",
    },
    {
      title: "Secure File Service",
      description: t('securefile_description'),
      tech: ["Kotlin", "Security", "File Management"],
      github: "https://github.com/alaeddinedaly/secure-file-service",
      image: "securefile.png",
      color: "orange-500",
    },
    {
      title: "Finora",
      description: t('finora_description'),
      tech: ["React Native", "Expo", "JavaScript", "PostgreSQL"],
      github: "https://www.linkedin.com/feed/update/urn:li:activity:7333182985912942592/",
      image: "finora.png",
      color: "emerald-500",
    },
    {
      title: "OCR Application",
      description: t('ocr_description'),
      tech: ["HTML", "JavaScript", "OCR", "Computer Vision"],
      github: "https://github.com/alaeddinedaly/OCR",
      image: "ocr.png",
      color: "red-500",
    },
    {
      title: "Portfolio Website",
      description: t('portfolio_description'),
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/alaeddinedaly/portfolio",
      image: "portfolio.png",
      color: "slate-400",
    },
    {
      title: "FlameBot",
      description: t('flamebot_description'),
      tech: ["JavaScript", "HTML/CSS", "Gemini AI", "Chatbot"],
      github: "https://github.com/alaeddinedaly/FlameBot",
      image: "flamebot.jfif",
      color: "yellow-500",
    },
    {
      title: "Restaurant Management App",
      description: t('restaurant_description'),
      tech: ["Java", "Swing", "SQL", "JDBC"],
      github: "https://github.com/alaeddinedaly/restaurant",
      image: "restaurant.png",
      color: "pink-500",
    },
    {
      title: "2D Shooter Game",
      description: t('shooter_description'),
      tech: ["Unity", "C#", "Game Development"],
      github: "https://github.com/alaeddinedaly/simple-2D-shooting-game",
      image: "shooter.png",
      color: "indigo-500",
    },
    {
      title: "Zipit",
      description: t('zipit_description'),
      tech: ["Python", "Tkinter", "Zipfile"],
      github: "https://github.com/alaeddinedaly/Zip-it",
      image: "zipit.png",
      color: "teal-500",
    },
  ]

  return (
      <section id="projects" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-zinc-800 dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-300 dark:bg-clip-text dark:text-transparent">
              {t('featued_projects')}
            </span>
            </h2>
            <p className="text-lg text-zinc-700 dark:text-slate-400">{t('projects_info')}</p>

            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto mt-8"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group h-full data-cursor-hover"
                    data-cursor-hover
                >
                  <Card className="relative h-full bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 overflow-hidden hover:shadow-xl hover:shadow-slate-900/20">
                    <CardContent className="relative p-0 h-full flex flex-col">
                      {/* Project Image */}
                      <div className="relative w-full h-48 overflow-hidden bg-slate-900/50">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => {
                              // Fallback to gradient if image fails to load
                              e.currentTarget.style.display = 'none';
                            }}
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                      </div>

                      <div className="p-8 flex flex-col flex-grow">
                        <h3 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-slate-200 group-hover:dark:text-slate-100 transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="text-zinc-700 dark:text-slate-400 mb-6 leading-relaxed flex-grow group-hover:dark:text-slate-300 transition-colors">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tech.map((tech) => (
                              <motion.span
                                  key={tech}
                                  whileHover={{ scale: 1.05 }}
                                  className="px-3 py-1 bg-slate-700/30 text-zinc-800 dark:text-slate-300 rounded-md text-sm border border-slate-600/30 hover:border-slate-500/50 transition-colors"
                              >
                                {tech}
                              </motion.span>
                          ))}
                        </div>

                        <div className="flex justify-center">
                          {project.github ? (
                              <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-slate-600/50 text-zinc-800 dark:text-slate-300 hover:bg-slate-700/30 hover:border-slate-500/50 hover:dark:text-slate-200 transition-all duration-300 data-cursor-hover"
                                  asChild
                                  data-cursor-hover
                              >
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center gap-2"
                                >
                                  {project.github.includes('linkedin') ? (
                                      <>
                                        <Linkedin className="w-4 h-4" />
                                        {t('view_post')}
                                      </>
                                  ) : (
                                      <>
                                        <Github className="w-4 h-4" />
                                        {t('view_code')}
                                      </>
                                  )}
                                </motion.a>
                              </Button>
                          ) : (
                              <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-slate-600/50 text-zinc-800 dark:text-slate-300 hover:bg-slate-700/30 hover:border-slate-500/50 hover:dark:text-slate-200 transition-all duration-300 cursor-not-allowed opacity-60"
                                  disabled
                              >
                                <span className="flex items-center gap-2">
                                  <Github className="w-4 h-4" />
                                  Private Repository
                                </span>
                              </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}