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
  metadataBase: new URL('https://www.bashacafe.com'),
  title: 'Basha Cafe | Top Restaurant & Sheesha Cafe in Islamabad',
  description: 'Experience the ultimate dining and lounge atmosphere at Basha Cafe, the top restaurant and sheesha cafe in Islamabad. Enjoy premium shisha, late-night food, and the best cafe vibes in the city.',
  keywords: [
    "top restaurant in islamabad",
    "basha cafe",
    "top sheesha cafe",
    "islamabad top cafe",
    "best cafe in islamabad",
    "top sheesha cafe in islamabad",
    "sheesha cafe in islamabad",
    "hookah lounge near me",
    "best shisha in town",
    "cafe near me",
    "tea and coffee shop",
    "late night food"
  ],
  generator: 'v0.app',
  verification: {
    google: "googleab0248803456ad93",
  },
  openGraph: {
    title: 'Basha Cafe | Top Restaurant & Sheesha Cafe in Islamabad',
    description: 'Experience the ultimate dining and lounge atmosphere at Basha Cafe. Premium shisha, late-night food, and the best vibrations in Islamabad.',
    url: 'https://www.bashacafe.com',
    siteName: 'Basha Cafe',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'Basha Cafe Interior',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Basha Cafe | Top Restaurant & Sheesha Cafe in Islamabad',
    description: 'Experience the ultimate dining and lounge atmosphere at Basha Cafe. Premium shisha, late-night food, and the best vibrations in Islamabad.',
    images: ['/images/hero-bg.jpg'],
  },
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
