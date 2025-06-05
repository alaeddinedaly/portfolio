"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { BotIcon as Robot, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {askAladinAI} from "@/api/ai-api";

type Message = {
    id: string
    content: string
    sender: "user" | "bot"
    timestamp: Date
}

export function AiButton() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const toggleChat = () => {
        setIsOpen(!isOpen)
        if (!isOpen && messages.length === 0) {
            // Add welcome message when first opened
            setTimeout(() => {
                addBotMessage("How can I help you today?")
            }, 500)
        }
    }

    const addMessage = (content: string, sender: "user" | "bot") => {
        const newMessage: Message = {
            id: Date.now().toString(),
            content,
            sender,
            timestamp: new Date(),
        }
        setMessages((prev) => [...prev, newMessage])
    }

    const addBotMessage = (content: any) => {
        setIsTyping(true)
        setTimeout(() => {
            addMessage(content, "bot")
            setIsTyping(false)
        }, 1000)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputValue.trim()) return

        addMessage(inputValue, "user")
        setInputValue("")

        // Mock response
        try{
            const response = await askAladinAI(inputValue);
            addBotMessage(response);
        }catch(err){
            console.log("Error fetching AI response:", err);
        }
    }

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, isTyping])

    return (
        <>
            {/* Chat Window */}
            <div
                className={cn(
                    "fixed bottom-24 right-6 w-80 md:w-96 rounded-2xl shadow-lg z-50 flex flex-col transition-all duration-300 ease-in-out",
                    "bg-gray-900 text-white",
                    isOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-4 pointer-events-none",
                )}
                style={{ maxHeight: "500px", height: "70vh" }}
            >
                {/* Chat Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <div className="flex items-center">
                        <div className="bg-white p-2 rounded-full mr-2">
                            <Robot className="h-5 w-5 text-black" />
                        </div>
                        <h3 className="font-medium text-white">Portfolio Assistant</h3>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={toggleChat}>
                        <X className="h-4 w-4 text-white" />
                    </Button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={cn("flex", message.sender === "user" ? "justify-end" : "justify-start")}
                        >
                            <div
                                className={cn(
                                    "max-w-[80%] rounded-2xl px-4 py-2",
                                    message.sender === "user"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-700 text-gray-200",
                                )}
                            >
                                {message.content}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-gray-700 max-w-[80%] rounded-2xl px-4 py-2">
                                <div className="flex space-x-1">
                                    <div
                                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                                        style={{ animationDelay: "0ms" }}
                                    ></div>
                                    <div
                                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                                        style={{ animationDelay: "150ms" }}
                                    ></div>
                                    <div
                                        className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                                        style={{ animationDelay: "300ms" }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSubmit} className="border-t border-gray-700 p-4 flex gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-4 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white border-gray-600 placeholder-gray-400"
                    />
                    <Button
                        type="submit"
                        size="icon"
                        className="border border-black rounded-full"
                        disabled={!inputValue.trim()}
                    >
                        <Send className="h-4 w-4 text-black" />
                    </Button>
                </form>
            </div>

            {/* Chat Button */}
            <button
                onClick={toggleChat}
                className={cn(
                    "fixed bottom-6 right-6 w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50",
                    "hover:scale-105 active:scale-95 border border-gray-200",
                    isOpen && "rotate-90",
                )}
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <div className="relative">
                        <Robot className="h-6 w-6" />
                        {messages.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {messages.filter((m) => m.sender === "bot").length}
              </span>
                        )}
                    </div>
                )}
            </button>
        </>
    )
}
