import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ScrollAnimations } from "@/components/ScrollAnimations"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yong Jun Fai - Portfolio",
  description: "AI Developer and Data Science Enthusiast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ScrollAnimations />
      </body>
    </html>
  )
}

