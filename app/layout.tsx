import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Portfolio - Full-Stack Developer",
    description: "Stunning portfolio showcasing modern web development skills and creative projects.",
    icons: {
        icon: "/fav.png",
    },
    generator: "v0.dev",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
        <body className={`${inter.className} cursor-none`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey={undefined} // ✅ Force fresh dark mode on every load
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
