import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import {ToastProvider, ToastViewport} from "@/components/ui/toast";
import {IntlProvider} from "@/lib/intl-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio - Full-Stack Developer",
    description: "Stunning portfolio showcasing modern web development skills and creative projects.",
    icons: {
        icon: "/fav.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body className={`${inter.className} cursor-none`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey={undefined}
        >
            <ToastProvider>
                <IntlProvider>
                {children}
                </IntlProvider>
                <ToastViewport />
            </ToastProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
