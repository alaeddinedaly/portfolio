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
import {AiButton} from "@/components/ai-button";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        if (performance.navigation.type === 1) {
            console.log("Page was reloaded");
            document.documentElement.classList.add("dark")
            // Do something on reload
        }
    }, []);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
        <AiButton />
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
