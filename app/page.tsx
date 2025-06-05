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
<<<<<<< HEAD
import {AiButton} from "@/components/ai-button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
        <AiButton />
        <CustomCursor />
=======

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <CustomCursor />
>>>>>>> a07d001e94d4834cee13f39d4afddd68990b20eb
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
<<<<<<< HEAD

=======
>>>>>>> a07d001e94d4834cee13f39d4afddd68990b20eb
    </div>
  )
}
