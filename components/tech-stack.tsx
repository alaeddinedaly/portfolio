"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  // Define your stack images here (make sure these files exist in /public)
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
    { name: "HTML", category: "Frontend", description: "Semantic markup language" },
    { name: "CSS", category: "Frontend", description: "Styling and layout" },
    { name: "JavaScript", category: "Frontend", description: "Dynamic programming language" },
    { name: "TypeScript", category: "Frontend", description: "Typed JavaScript" },
    { name: "React", category: "Frontend", description: "UI component library" },
    { name: "Next.js", category: "Frontend", description: "React framework" },
    { name: "React Native", category: "Mobile", description: "Cross-platform mobile" },
    { name: "Expo", category: "Mobile", description: "React Native platform" },
    { name: "Node.js", category: "Backend", description: "JavaScript runtime" },
    { name: "PHP", category: "Backend", description: "Server-side scripting" },
    { name: "Python", category: "Backend", description: "Versatile programming language" },
    { name: "Java", category: "Backend", description: "Enterprise programming" },
    { name: "C#", category: "Backend", description: "Microsoft framework" },
    { name: "C", category: "Backend", description: "System programming" },
    { name: "SQL", category: "Database", description: "Relational database queries" },
    { name: "NoSQL", category: "Database", description: "Document databases" },
    { name: "PostgreSQL", category: "Database", description: "Advanced SQL database" },
    { name: "Git", category: "Tools", description: "Version control system" },
    { name: "GitHub", category: "Tools", description: "Code collaboration platform" },
  ]

  const categories = ["Frontend", "Backend", "Mobile", "Database", "Tools"]

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
            <span className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
            </h2>
            <p className="text-xl text-slate-400">Technologies I work with</p>

            {/* Animated section divider */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto mt-8"
            />
          </motion.div>

          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
                <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold mb-8 text-center text-slate-300">{category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {technologies
                        .filter((tech) => tech.category === category)
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
                                  className="w-12 h-12 mb-3 text-slate-400 group-hover:text-slate-200 transition-colors duration-300"
                              >
                                {/* Show image from public folder */}
                                <img
                                    src={stackImages[tech.name]}
                                    alt={tech.name}
                                    className="w-full h-full object-contain"
                                    draggable={false}
                                />
                              </motion.div>

                              <span className="text-slate-300 group-hover:text-slate-100 font-medium transition-colors duration-300">
                        {tech.name}
                      </span>

                              {/* Tooltip */}
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
