import React from "react"
import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { JsonLd } from "@/components/json-ld"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#c5a059",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thebashacafe.com"),
  title: {
    default: "The Basha Cafe | #1 Trending Cafe, Restaurant & Sheesha Lounge in Islamabad",
    template: "%s | The Basha Cafe Islamabad",
  },
  description:
    "The Basha Cafe is Islamabad's #1 trending rooftop cafe, restaurant & luxury sheesha lounge in E-11. Discover gourmet dining, viral birthday setups, premium Russian hookah, Margalla views & late-night vibes until 4 AM.",
  keywords: [
    "the basha cafe",
    "basha cafe",
    "the basha cafe islamabad",
    "basha cafe islamabad",
    "trending cafe in islamabad",
    "top trending cafe islamabad",
    "best cafe in islamabad",
    "best sheesha cafe in islamabad",
    "top sheesha cafe in islamabad",
    "sheesha cafe in islamabad",
    "rooftop cafe islamabad",
    "e11 rooftop cafe",
    "e-11 cafe islamabad",
    "hookah lounge islamabad",
    "late night cafe islamabad",
    "aesthetic cafe in islamabad",
    "best cafe in islamabad for couples",
    "birthday celebration cafe islamabad",
    "casa bella hotel rooftop",
    "top restaurant in islamabad",
    "russian sheesha islamabad",
    "shisha lounge near me",
    "best shisha in town",
    "basha cafe menu",
    "cafe near me",
    "islamabad nightlife cafes",
    "middle eastern food islamabad",
  ],
  authors: [{ name: "Haziq Khan", url: "https://www.thebashacafe.com" }],
  creator: "The Basha Cafe",
  publisher: "The Basha Cafe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.thebashacafe.com",
    languages: {
      "en-PK": "https://www.thebashacafe.com",
      "en-US": "https://www.thebashacafe.com",
      "x-default": "https://www.thebashacafe.com",
    },
  },
  openGraph: {
    title: "The Basha Cafe | #1 Trending Cafe, Restaurant & Sheesha Lounge in Islamabad",
    description:
      "Islamabad's #1 trending rooftop destination in E-11. Gourmet multi-cuisine dining, signature Russian hookah, VIP birthday setups, and panoramic Margalla views until 4 AM.",
    url: "https://www.thebashacafe.com",
    siteName: "The Basha Cafe",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "The Basha Cafe Rooftop Lounge and Restaurant in Islamabad",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Basha Cafe | #1 Trending Cafe, Restaurant & Sheesha Lounge in Islamabad",
    description:
      "Islamabad's #1 trending rooftop destination in E-11. Gourmet dining, top hookah flavors & late-night vibes until 4 AM.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "googleab0248803456ad93",
  },
  category: "Trending Cafe & Restaurant",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Local Geo SEO Tags for Islamabad */}
        <meta name="geo.region" content="PK-IS" />
        <meta name="geo.placename" content="Islamabad" />
        <meta name="geo.position" content="33.7042;72.9798" />
        <meta name="ICBM" content="33.7042, 72.9798" />
        <JsonLd />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
