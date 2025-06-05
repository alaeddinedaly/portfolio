import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
<<<<<<< HEAD
import {ThemeProvider} from "next-themes";
=======
>>>>>>> a07d001e94d4834cee13f39d4afddd68990b20eb

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Full-Stack Developer",
  description: "Stunning portfolio showcasing modern web development skills and creative projects.",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
<<<<<<< HEAD
      <body className={`${inter.className} cursor-none`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider></body>
=======
      <body className={`${inter.className} cursor-none`}>{children}</body>
>>>>>>> a07d001e94d4834cee13f39d4afddd68990b20eb
    </html>
  )
}
