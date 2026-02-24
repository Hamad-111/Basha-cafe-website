import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const _cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-cormorant'
});

const _inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Basha Cafe & Restaurant | Best Hookah Lounge & Cafe Near Me',
  description: 'Looking for a hookah lounge near me? Experience the finest shisha, delicious cuisine, and a luxurious lounge atmosphere at Basha Cafe. Open late daily.',
  keywords: [
    "best cafe in islamabad",
    "top sheesha cafe in islamabad",
    "sheesha cafe in islamabad",
    "hookah lounge near me",
    "best shisha in town",
    "cafe near me",
    "tea and coffee shop",
    "late night food",
    "shisha lounge",
    "hookah bar",
    "basha cafe"
  ],
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_cormorant.variable} ${_inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
