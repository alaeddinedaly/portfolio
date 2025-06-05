"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
    id: number
    x: number
    y: number
    size: number
    speedX: number
    speedY: number
}

const pastelColors = [
    "bg-pink-300",
    "bg-blue-300",
    "bg-purple-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-rose-300",
    "bg-orange-300",
]

export function AnimatedBackground() {
    const [particles, setParticles] = useState<Particle[]>([])
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const { theme } = useTheme()

    useEffect(() => {
        const generateParticles = () => {
            const newParticles: Particle[] = []
            for (let i = 0; i < 40; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 2 + 1,
                    speedX: (Math.random() - 0.5) * 0.3,
                    speedY: (Math.random() - 0.5) * 0.3,
                })
            }
            setParticles(newParticles)
        }

        generateParticles()
        window.addEventListener("resize", generateParticles)
        window.addEventListener("mousemove", (e) =>
            setMousePosition({ x: e.clientX, y: e.clientY }),
        )

        return () => {
            window.removeEventListener("resize", generateParticles)
            window.removeEventListener("mousemove", () => {})
        }
    }, [])

    useEffect(() => {
        const animateParticles = () => {
            setParticles((prevParticles) =>
                prevParticles.map((p) => {
                    let x = p.x + p.speedX
                    let y = p.y + p.speedY

                    if (x < 0 || x > window.innerWidth) p.speedX *= -1
                    if (y < 0 || y > window.innerHeight) p.speedY *= -1

                    return { ...p, x, y }
                }),
            )
        }

        const interval = setInterval(animateParticles, 50)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {/* Background gradient */}
            <div
                className={`absolute inset-0 transition-colors duration-500 ${
                    theme === "light"
                        ? "bg-gradient-to-br from-white via-slate-100 to-white"
                        : "bg-gradient-to-br from-slate-900/30 via-slate-950 to-slate-900/30"
                }`}
            />

            {/* Animated particles */}
            {particles.map((particle) => {
                const distance = Math.sqrt(
                    Math.pow(mousePosition.x - particle.x, 2) +
                    Math.pow(mousePosition.y - particle.y, 2),
                )
                const isNearMouse = distance < 80

                const lightColor = pastelColors[particle.id % pastelColors.length]
                const baseColor =
                    theme === "light"
                        ? `${lightColor} ${isNearMouse ? "shadow-md shadow-black/10" : ""}`
                        : isNearMouse
                            ? "bg-slate-400 shadow-sm shadow-slate-400/30"
                            : "bg-slate-500"

                return (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full"
                        style={{
                            left: particle.x,
                            top: particle.y,
                            width: particle.size,
                            height: particle.size,
                        }}
                        animate={{
                            scale: isNearMouse ? 1.5 : 1,
                            opacity: isNearMouse ? 0.8 : 0.4,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={`w-full h-full rounded-full ${baseColor}`} />
                    </motion.div>
                )
            })}

            {/* Grid pattern */}
            <div className={`absolute inset-0 ${theme === "light" ? "opacity-10" : "opacity-5"}`}>
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>
        </div>
    )
}
