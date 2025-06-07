"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ExperienceSection() {
    const t = useTranslations();
    const [activeTab, setActiveTab] = useState<"work" | "studies">("work");

    const workTimeline = [
        {
            date: t("currently"),
            company: "SMOFT ERP",
            role: t("intern"),
            description: t("intern_description"),
            logo: "/smoft.png",
        },
    ];

    const studyTimeline = [
        {
            date: t("studies_timeline"),
            place: t("isitcom"),
            role: t("isitcom_role"),
            description: t("isitcom_learning"),
            logo: "/isitcom.png",
        },
    ];

    const activeTimeline = activeTab === "work" ? workTimeline : studyTimeline;

    return (
        <section className="py-20 px-6 max-w-5xl mx-auto w-full">
            {/* Tabs */}
            <div className="flex w-full rounded-full overflow-hidden border border-slate-400 bg-slate-100 dark:border-white/20 dark:bg-slate-700 mb-12">
                <button
                    onClick={() => setActiveTab("work")}
                    className={`w-1/2 py-3 text-center transition-colors duration-200
          ${
                        activeTab === "work"
                            ? "bg-blue-600 text-white dark:bg-white dark:text-slate-700"
                            : "text-slate-700 hover:bg-blue-100 dark:text-white dark:hover:bg-white/10"
                    }`}
                >
                    {t("work")}
                </button>

                <button
                    onClick={() => setActiveTab("studies")}
                    className={`w-1/2 py-3 text-center transition-colors duration-200
          ${
                        activeTab === "studies"
                            ? "bg-blue-600 text-white dark:bg-white dark:text-slate-700"
                            : "text-slate-700 hover:bg-blue-100 dark:text-white dark:hover:bg-white/10"
                    }`}
                >
                    {t("education")}
                </button>
            </div>

            {/* Timeline */}
            <div className="border border-slate-400 rounded-2xl p-6 md:p-10 space-y-12 bg-slate-100/70 dark:border-white/20 dark:bg-black/30 w-full">
                {activeTimeline.map((item, idx) => (
                    <div key={idx} className="relative flex gap-6">
                        {/* Timeline vertical line */}
                        {idx < activeTimeline.length - 1 && (
                            <div className="absolute left-6 top-14 bottom-0 w-px bg-slate-400 dark:bg-white/20" />
                        )}

                        {/* Icon */}
                        <div className="relative z-10 w-12 h-12 flex-shrink-0 rounded-full overflow-hidden border border-slate-400 bg-white dark:border-white/30">
                            <Image
                                src={item.logo}
                                alt={item.company || item.place}
                                width={48}
                                height={48}
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col text-slate-900 dark:text-white w-full">
                            <p className="text-sm text-slate-600 dark:text-white/60">{item.date}</p>
                            <h3 className="text-lg font-semibold">{item.company || item.place}</h3>
                            <p className="italic text-slate-700 dark:text-white/80">{item.role}</p>
                            <p className="text-slate-700 dark:text-white/80 text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
