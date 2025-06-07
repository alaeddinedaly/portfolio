"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Facebook, Heart, Code } from "lucide-react"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations();
  const socialLinks = [
    { icon: Github, href: "https://github.com/alaeddinedaly", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/daly-ala-eddine-604411341/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/ala.daly.564", label: "Facebook" },
  ]

  return (
      <footer className="py-16 px-6 border-t border-slate-800/30 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <div className="text-center md:text-left">
              <motion.h3
                  whileHover={{ scale: 1.02 }}
                  className="text-2xl font-bold bg-gradient-to-r from-black to-neutral-700 bg-clip-text text-transparent mb-2 dark:from-slate-200 dark:to-slate-400"
              >
                Portfolio
              </motion.h3>
              <p
                  className="
                text-transparent bg-clip-text
                bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700
                transition duration-300 ease-in-out
                hover:from-indigo-400 hover:via-purple-400 hover:to-blue-400
                cursor-pointer
              "
              >
                {t('developer')}
              </p>
              <p className="text-neutral-700 text-sm mt-1 dark:text-slate-500">Tunisia</p>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-2xl bg-slate-800/20 border border-slate-700/30 text-neutral-800 hover:text-black hover:bg-slate-700/30 hover:border-slate-600/50 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300 data-cursor-hover dark:text-slate-400 dark:hover:text-slate-200"
                      aria-label={label}
                      data-cursor-hover
                  >
                    <Icon size={20} />
                  </motion.a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <motion.p
                  whileHover={{ scale: 1.02 }}
                  className="text-neutral-800 flex items-center justify-center md:justify-end gap-2 mb-2 dark:text-slate-400"
              >
                {t('made_with')} <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> {t('and')}{" "}
                <Code className="w-4 h-4 text-neutral-800 dark:text-slate-400" />
              </motion.p>
              <p className="text-neutral-700 text-sm dark:text-slate-500">© 2025 Portfolio. {t('all_rights_reserved')}</p>
            </div>
          </motion.div>

          {/* Subtle decorative elements */}
          <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute top-4 left-4 w-1 h-1 bg-slate-600 rounded-full opacity-30"
          />
          <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute bottom-4 right-4 w-1 h-1 bg-slate-500 rounded-full opacity-20"
          />
        </div>
      </footer>
  )
}
