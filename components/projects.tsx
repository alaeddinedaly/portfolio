"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {Github, Folder, Linkedin} from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Zipit",
      description:
        "A modern file zipper tool with intuitive interface and lightning-fast compression algorithms for seamless file management.",
      tech: ["python", "tkinter", "zipfile"],
      github: "https://github.com/alaeddinedaly/Zip-it",
      color: "slate-500",
    },
    {
      title: "Restaurant Management App",
      description:
        "Complete restaurant management system featuring Java Swing frontend with robust SQL database backend for inventory and order management.",
      tech: ["Java", "Swing", "SQL", "JDBC"],
      github: "https://github.com/alaeddinedaly/restaurant",
      color: "slate-600",
    },
    {
      title: "Finora",
      description:
        "Mobile finance tracker built with React Native and Expo, featuring expense tracking, budget management, and financial insights.",
      tech: ["React Native", "Expo", "JavaScript", "PostgreSQL"],
      github: "https://www.linkedin.com/feed/update/urn:li:activity:7333182985912942592/",
      color: "slate-400",
    },
    {
      title: "Portfolio Website",
      description:
          "My personal portfolio website showcasing my projects, skills, and experience with a modern design and smooth animations.",
      tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/alaeddinedaly/portfolio",
      color: "slate-400",
    },
    {
      title: "2D Shooter Game",
      description:
          "A fast-paced 2D shooter game built with Unity.",
      tech: ["Unity", "C#", "Game Development"],
      github: "https://github.com/alaeddinedaly/simple-2D-shooting-game",
      color: "slate-400",
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
            <span className="text-slate-400
    dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-300
    dark:bg-clip-text dark:text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-slate-400">Some of my recent work that I'm proud of</p>

          {/* Animated section divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto mt-8"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group h-full data-cursor-hover"
              data-cursor-hover
            >
              <Card className="relative h-full bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 overflow-hidden hover:shadow-xl hover:shadow-slate-900/20">
                <CardContent className="relative p-8 h-full flex flex-col">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-16 h-16 rounded-2xl bg-${project.color}/20 border border-${project.color}/30 flex items-center justify-center mb-6 group-hover:border-${project.color}/50 transition-all duration-500`}
                  >
                    <Folder
                      className={`w-8 h-8 text-${project.color} group-hover:text-slate-300 transition-colors duration-300`}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4 text-slate-200 group-hover:text-slate-100 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mb-6 leading-relaxed flex-grow group-hover:text-slate-300 transition-colors">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.02 }}
                        className="px-3 py-1 bg-slate-700/30 text-slate-300 rounded-md text-sm border border-slate-600/30 hover:border-slate-500/50 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-600/50 text-slate-300 hover:bg-slate-700/30 hover:border-slate-500/50 hover:text-slate-200 transition-all duration-300 data-cursor-hover"
                      asChild
                      data-cursor-hover
                    >
                      {project.title !== "Finora" ? (<motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </motion.a>) :
                          (
                              <div>
                                <Linkedin className="w-4 h-4" />
                                View Post
                              </div>
                          )}
                    </Button>
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
