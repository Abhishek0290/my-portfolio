import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Abhishek Dwivedi - Full Stack Developer",
  description:
    "B.Tech CSE student and Full-Stack Developer specializing in React, Node.js, and modern web technologies. Founder of HelpingHands and Pennyfy. Available for internships and projects.",
  keywords: "full stack developer, react developer, node.js, web development, javascript, typescript, B.Tech CSE, AKTU",
  authors: [{ name: "Abhishek Dwivedi" }],
  creator: "Abhishek Dwivedi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekdwivedi.dev",
    title: "Abhishek Dwivedi - Full Stack Developer",
    description:
      "B.Tech CSE student and Full-Stack Developer specializing in React, Node.js, and modern web technologies.",
    siteName: "Abhishek Dwivedi Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhishek Dwivedi - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Dwivedi - Full Stack Developer",
    description:
      "B.Tech CSE student and Full-Stack Developer specializing in React, Node.js, and modern web technologies.",
    creator: "@Abhishe15086089",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
