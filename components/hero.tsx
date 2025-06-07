"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, MapPin, Sparkles } from "lucide-react"
import { useTranslations } from "next-intl";

export function Hero() {
    const t = useTranslations();

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="space-y-8"
                >
                    {/* Floating elements */}
                    <motion.div
                        animate={{ y: [-8, 8, -8] }}
                        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        className="absolute -top-20 -left-20 w-32 h-32 bg-gradient-to-r from-black/20 to-black/20 rounded-full blur-xl dark:from-slate-700/20 dark:to-slate-600/20"
                    />
                    <motion.div
                        animate={{ y: [8, -8, 8] }}
                        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        className="absolute -top-10 -right-20 w-24 h-24 bg-gradient-to-r from-black/20 to-black/20 rounded-full blur-xl dark:from-slate-600/20 dark:to-slate-500/20"
                    />

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-black/30 dark:bg-slate-800/40 dark:border-slate-700/30"
                    >
                        <Sparkles className="w-4 h-4 text-black dark:text-slate-400" />
                        <span className="text-sm text-black dark:text-slate-100">{t('available')}</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-6xl md:text-8xl font-bold"
                    >
            <span
                className="
                text-black
                dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-300
                dark:bg-clip-text dark:text-transparent
              "
            >
              {t("hero_name")}
            </span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex items-center justify-center gap-3 text-lg text-black dark:text-slate-300"
                    >
                        <MapPin className="w-5 h-5 text-black dark:text-slate-400" />
                        <span className="
              text-black
              dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-300
              dark:bg-clip-text dark:text-transparent
            ">Tunisia</span>
                        <span className="w-1 h-1 bg-black rounded-full dark:bg-slate-500" />
                        <span
                            className="
                text-transparent bg-clip-text
                bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700
                transition duration-300 ease-in-out
                hover:from-indigo-400 hover:via-purple-400 hover:to-blue-400
                cursor-pointer
              "
                        >
              {t('developer')}
            </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="text-xl md:text-2xl text-black dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
                    >
                        {t("working_at")}
                        <span className="text-black font-semibold dark:text-slate-400"> SMOFT Tunisia</span>
                        {t('crafting')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                        className="pt-8"
                    >
                        <Button
                            onClick={scrollToProjects}
                            size="lg"
                            className="
                group relative overflow-hidden
                bg-blue-600 hover:bg-blue-700 text-white border border-blue-700 hover:border-blue-800
                px-8 py-4 text-lg font-medium transition-all duration-300 data-cursor-hover rounded-full shadow-lg hover:shadow-xl
                dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-600 dark:hover:border-slate-500
              "
                            data-cursor-hover
                        >
                            <motion.span className="relative z-10 flex items-center gap-2" whileHover={{ scale: 1.02 }}>
                                {t('projects_button')}
                                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            </motion.span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-6 h-10 border-2 border-blue-700 rounded-full flex justify-center dark:border-slate-600"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="w-1 h-3 bg-blue-600 rounded-full mt-2 dark:bg-slate-400"
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
