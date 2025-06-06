"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    const isDark = theme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-1"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
                <Moon className="h-6 w-6 text-blue-500" />
            )}
        </button>
    )
}
