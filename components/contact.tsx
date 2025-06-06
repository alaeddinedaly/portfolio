"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, User, Send, MapPin, Phone, Terminal } from "lucide-react"
import emailjs from 'emailjs-com'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  // status: "idle" | "success" | "error"
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:")
    emailjs
        .send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
            {
              name: formData.name,
              email: formData.email,
              message: formData.message,
            }
        )
        .then(() => {
          setStatus("success")
          setFormData({ name: "", email: "", message: "" })
        })
        .catch(() => {
          setStatus("error")
        })
  }

  // Auto-dismiss alert after 5 seconds
  useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(() => setStatus("idle"), 5000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => {
      const updated = { ...prev, [e.target.name]: e.target.value };
      console.log(updated); // Debug log
      return updated;
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "dalyalaeddine@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Tunisia-Sousse",
    },
    {
      icon: Phone,
      title: "Phone Number",
      value: "(+216) 58 247 509",
    },
  ]

  return (
      <section id="contact" className="py-32 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-slate-400
    dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-300
    dark:bg-clip-text dark:text-transparent">
              Get In Touch
            </span>
            </h2>
            <p className="text-xl text-slate-400">Let's create something amazing together</p>

            {/* Animated section divider */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto mt-8"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6 text-slate-400
    dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-300
    dark:bg-clip-text dark:text-transparent">Let's talk about your project</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Feel free to reach out or ask chatbot about me!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                    <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 group data-cursor-hover"
                        data-cursor-hover
                    >
                      <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="w-12 h-12 rounded-2xl bg-slate-700/30 border border-slate-600/30 flex items-center justify-center group-hover:border-slate-500/50 transition-all duration-300"
                      >
                        <info.icon className="w-6 h-6 text-slate-400 group-hover:text-slate-300 transition-colors duration-300" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-slate-400
    dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-300
    dark:bg-clip-text dark:text-transparent transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{info.value}</p>
                      </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
              <Card className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div className="relative" whileHover={{ scale: 1.01 }}>
                      <User
                          className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-300 ${
                              focusedField === "name" ? "text-slate-300" : "text-slate-400"
                          }`}
                      />
                      <Input
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className="pl-12 bg-slate-700/20 border-slate-600/30 text-white placeholder:text-slate-400 focus:border-slate-500/50 focus:ring-slate-500/25 transition-all duration-300 data-cursor-hover rounded-2xl"
                          required
                          data-cursor-hover
                      />
                    </motion.div>

                    <motion.div className="relative" whileHover={{ scale: 1.01 }}>
                      <Mail
                          className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-300 ${
                              focusedField === "email" ? "text-slate-300" : "text-slate-400"
                          }`}
                      />
                      <Input
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className="pl-12 bg-slate-700/20 border-slate-600/30 text-white placeholder:text-slate-400 focus:border-slate-500/50 focus:ring-slate-500/25 transition-all duration-300 data-cursor-hover rounded-2xl"
                          required
                          data-cursor-hover
                      />
                    </motion.div>

                    <motion.div className="relative" whileHover={{ scale: 1.01 }}>
                      <MessageSquare
                          className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-300 ${
                              focusedField === "message" ? "text-slate-300" : "text-slate-400"
                          }`}
                      />
                      <Textarea
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          className="pl-12 pt-12 bg-slate-700/20 border-slate-600/30 text-white placeholder:text-slate-400 focus:border-slate-500/50 focus:ring-slate-500/25 min-h-[120px] transition-all duration-300 data-cursor-hover rounded-2xl"
                          required
                          data-cursor-hover
                      />
                    </motion.div>

                    <motion.div>
                      <Button
                          type="submit"
                          className="w-full bg-slate-300 hover:bg-slate-300 transition-all duration-300 rounded-2xl text-slate-800 font-semibold flex items-center justify-center gap-2"
                          size="lg"
                          disabled={!formData.name || !formData.email || !formData.message}
                      >
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </motion.div>
                  </form>

                  {/* Alerts */}
                  {status === "success" && (
                      <Alert variant="default" className="mt-6">
                        <Terminal />
                        <AlertTitle>Message Sent ✅</AlertTitle>
                        <AlertDescription>Thanks! I'll get back to you as soon as I can.</AlertDescription>
                      </Alert>
                  )}

                  {status === "error" && (
                      <Alert variant="destructive" className="mt-6">
                        <Terminal />
                        <AlertTitle>Something went wrong ❌</AlertTitle>
                        <AlertDescription>Please try again later or contact me directly.</AlertDescription>
                      </Alert>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
