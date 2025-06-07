"use client"

import { motion } from "framer-motion"
import { Code, Zap, Heart, Target } from "lucide-react"
import ExperienceSection from "@/components/experience-section";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations();
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable solutions",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized applications for the best user experience",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Love for creating innovative digital experiences",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail in every project",
    },
  ]

  return (
      <section id="about" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span
                className="
                text-slate-700
                dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-300
                dark:bg-clip-text dark:text-transparent
                transition-colors duration-300
              "
            >
              {t('experience')}
            </span>
            </h2>

            {/* Animated section divider */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto mt-8 dark:via-slate-600"
            />

            {/* Add Experience Here */}
            <ExperienceSection />
          </motion.div>
        </div>
      </section>
  )
}
