"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { IntlProvider } from "@/lib/intl-context";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body className={`${inter.className} cursor-none`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="theme"
        >
            <ThemeSetter />
            <ToastProvider>
                <IntlProvider>{children}</IntlProvider>
                <ToastViewport />
            </ToastProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}

// Client component to force dark mode after hydration
function ThemeSetter() {
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme("dark"); // force dark mode every load
    }, []);

    return null; // does not render anything
}
