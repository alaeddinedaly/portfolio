"use client"

import { CustomCursor } from "@/components/custom-cursor"
import { AnimatedBackground } from "@/components/animated-background"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <CustomCursor />
      <AnimatedBackground />
      <SmoothScroll>
        <Header />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </div>
  )
}
