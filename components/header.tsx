"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Facebook, Menu, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import FlagToggle from "@/components/toggle-language";
import {useTranslations} from "next-intl";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const menuItems = [
    t('home'),
    t('about'),
    t('tech'),
    t('projects'),
    t('contact')
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/alaeddinedaly", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/daly-ala-eddine-604411341/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/ala.daly.564", label: "Facebook" },
    {
      icon: null, // no icon component here
      href: "/cvnew.pdf", // link to your CV file or wherever it's hosted
      label: "CV",
      imageSrc: "/cv.png", // path to your image inside /public folder
    },
  ]

  return (
      <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="fixed top-0 w-full z-40 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800/30"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="text-2xl font-bold bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                  <motion.button
                      key={item}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -1, scale: 1.02 }}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-slate-300 hover:text-slate-100 transition-all duration-300 data-cursor-hover"
                      data-cursor-hover
                  >
                    {item}
                  </motion.button>
              ))}
            </nav>

            {/* Social Links Desktop */}
            <div className="hidden md:flex space-x-4 items-center">
              {socialLinks.map(({ icon: Icon, href, label, imageSrc }, index) => (
                  <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-full bg-slate-800/30 text-slate-400 hover:text-slate-200 hover:bg-slate-700/30 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300 data-cursor-hover"
                      aria-label={label}
                      data-cursor-hover
                  >
                    {Icon ? (
                        <Icon size={18} />
                    ) : (
                        <img src={imageSrc} alt={label} className="w-5 h-5 object-contain" />
                    )}
                  </motion.a>
              ))}

            </div>

            {/* Mobile Menu Button */}
            <div className="gap-x-2 flex items-center">
              <FlagToggle className={"pt-6"}/>
              <ThemeToggle />
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 text-slate-300 data-cursor-hover"
                  data-cursor-hover
              >

                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>


          {/* Mobile Menu */}
          <motion.div
              initial={false}
              animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-4">
              {menuItems.map((item) => (
                  <motion.button
                      key={item}
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block w-full text-left text-slate-300 hover:text-slate-100 transition-colors data-cursor-hover"
                      data-cursor-hover
                  >
                    {item}
                  </motion.button>
              ))}

              {/* Social Links Mobile */}
              <div className="flex space-x-4 pt-4">
                {socialLinks.map(({ icon: Icon, href, label, imageSrc }) => (
                    <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="p-2 rounded-full bg-slate-800/30 text-slate-400 hover:text-slate-200 data-cursor-hover"
                        aria-label={label}
                        data-cursor-hover
                    >
                      {Icon ? (
                          <Icon size={18} />
                      ) : (
                          <img src={imageSrc} alt={label} className="w-5 h-5 object-contain" />
                      )}
                    </motion.a>
                ))}

              </div>
            </div>
          </motion.div>
        </div>
      </motion.header>
  )
}
