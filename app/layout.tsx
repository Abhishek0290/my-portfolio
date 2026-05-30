import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

const siteUrl = "https://abhishekdwivedi-portfolio.vercel.app"
const ogImage = `${siteUrl}/og-image.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Abhishek Dwivedi",

  description:
    "Full Stack Developer • React • Next.js • Node.js • TypeScript",

  keywords:
    "full stack developer, react developer, next.js developer, node.js developer, typescript, javascript, web development",

  authors: [{ name: "Abhishek Dwivedi" }],
  creator: "Abhishek Dwivedi",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,

    title: "Abhishek Dwivedi",

    description:
      "Full Stack Developer • React • Next.js • Node.js • TypeScript",

    siteName: "Abhishek Dwivedi Portfolio",

    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Abhishek Dwivedi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Abhishek Dwivedi",

    description:
      "Full Stack Developer • React • Next.js • Node.js • TypeScript",

    creator: "@Abhishe15086089",

    images: [ogImage],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}