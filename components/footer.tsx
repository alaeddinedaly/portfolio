"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Facebook, Heart, Code } from "lucide-react"

export function Footer() {
  const socialLinks = [
<<<<<<< HEAD
    { icon: Github, href: "https://github.com/alaeddinedaly", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/daly-ala-eddine-604411341/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/ala.daly.564", label: "Facebook" },
=======
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
>>>>>>> a07d001e94d4834cee13f39d4afddd68990b20eb
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
              className="text-2xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent mb-2"
            >
              Portfolio
            </motion.h3>
<<<<<<< HEAD
            <p
                className="
                text-transparent bg-clip-text
                bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700
                transition duration-300 ease-in-out
                hover:from-indigo-400 hover:via-purple-400 hover:to-blue-400
                cursor-pointer
              "
            >
              Full-Stack Developer
            </p>
=======
            <p className="text-slate-400">Full-Stack Developer</p>
>>>>>>> a07d001e94d4834cee13f39d4afddd68990b20eb
            <p className="text-slate-500 text-sm mt-1">Tunisia</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
<<<<<<< HEAD
                target="_blank"
                rel="noopener noreferrer"
=======
>>>>>>> a07d001e94d4834cee13f39d4afddd68990b20eb
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl bg-slate-800/20 border border-slate-700/30 text-slate-400 hover:text-slate-200 hover:bg-slate-700/30 hover:border-slate-600/50 hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300 data-cursor-hover"
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
              className="text-slate-400 flex items-center justify-center md:justify-end gap-2 mb-2"
            >
              Made with <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> and{" "}
              <Code className="w-4 h-4 text-slate-400" />
            </motion.p>
<<<<<<< HEAD
            <p className="text-slate-500 text-sm">© 2025 Portfolio. All rights reserved.</p>
=======
            <p className="text-slate-500 text-sm">© 2024 Portfolio. All rights reserved.</p>
>>>>>>> a07d001e94d4834cee13f39d4afddd68990b20eb
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
