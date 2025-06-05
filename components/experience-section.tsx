"use client";

import { useState } from "react";
import Image from "next/image";

export default function ExperienceSection() {
    const [activeTab, setActiveTab] = useState<"work" | "studies">("work");

    const workTimeline = [
        {
            date: "Currently Working on SMOFT",
            company: "SMOFT ERP",
            role: "Intern",
            description:
                "Doing a summer internship at SMOFT ERP, focusing on software development and system integration.",
            logo: "/smoft.png",
        },
    ];

    const studyTimeline = [
        {
            date: "2023 - Present",
            place:
                "Institut Supérieur d'Informatique et des Technologies de Communication de Hammam Sousse.(ISITCOM)",
            role: "Multimedia Licence Student",
            description:
                "Learning about multimedia technologies, web development, and software engineering.",
            logo: "/isitcom.png",
        },
    ];

    const activeTimeline = activeTab === "work" ? workTimeline : studyTimeline;

    return (
        <section className="py-20 px-6 max-w-5xl mx-auto w-full">
            {/* Tabs */}
            <div className="flex w-full rounded-full overflow-hidden border border-white/20 bg-black mb-12">
                <button
                    onClick={() => setActiveTab("work")}
                    className={`w-1/2 py-3 text-center transition-colors duration-200 ${
                        activeTab === "work"
                            ? "bg-white text-black"
                            : "text-white hover:bg-white/10"
                    }`}

                >
                    Work
                </button>
                <button
                    onClick={() => setActiveTab("studies")}
                    className={`w-1/2 py-3 text-center transition-colors duration-200 ${
                        activeTab === "studies"
                            ? "bg-white text-black"
                            : "text-white hover:bg-white/10"
                    }`}
                >
                    Studies
                </button>
            </div>

            {/* Timeline */}
            <div className="border border-white/20 rounded-2xl p-6 md:p-10 space-y-12 bg-black/30 w-full">
                {activeTimeline.map((item, idx) => (
                    <div key={idx} className="relative flex gap-6">
                        {/* Timeline vertical line */}
                        {idx < activeTimeline.length - 1 && (
                            <div className="absolute left-6 top-14 bottom-0 w-px bg-white/20" />
                        )}

                        {/* Icon */}
                        <div className="relative z-10 w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border border-white/30 bg-white">
                            <Image
                                src={item.logo}
                                alt={item.company || item.place}
                                width={48}
                                height={48}
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col text-white w-full">
                            <p className="text-sm text-white/60">{item.date}</p>
                            <h3 className="text-lg font-semibold">
                                {item.company || item.place}
                            </h3>
                            <p className="italic text-white/80">{item.role}</p>
                            <p className="text-white/80 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
