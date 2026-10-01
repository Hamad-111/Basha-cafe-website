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
    default: "Basha Cafe | Best Restaurant & Sheesha Cafe in Islamabad (Rooftop Lounge)",
    template: "%s | Basha Cafe Islamabad",
  },
  description:
    "Experience Basha Cafe in E-11 Islamabad: the premier rooftop restaurant & luxury sheesha lounge. Gourmet dining, exclusive hookah flavors, scenic Margalla views & late-night vibes until 4 AM. Book now!",
  keywords: [
    "basha cafe",
    "the basha cafe",
    "basha cafe islamabad",
    "the basha cafe islamabad",
    "best sheesha cafe in islamabad",
    "top restaurant in islamabad",
    "sheesha cafe in islamabad",
    "hookah lounge islamabad",
    "rooftop cafe islamabad",
    "e11 rooftop cafe islamabad",
    "e-11 cafe islamabad",
    "casa bella hotel rooftop",
    "late night cafe islamabad",
    "best cafe in islamabad for couples",
    "shisha lounge near me",
    "best shisha in town",
    "top sheesha cafe",
    "basha cafe menu",
    "birthday celebration cafe islamabad",
    "russian sheesha islamabad",
    "cafe near me",
    "middle eastern food islamabad",
  ],
  authors: [{ name: "Haziq Khan", url: "https://www.thebashacafe.com" }],
  creator: "Basha Cafe",
  publisher: "Basha Cafe",
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
    title: "Basha Cafe | Best Restaurant & Sheesha Cafe in Islamabad",
    description:
      "Islamabad's premier rooftop restaurant and luxury sheesha lounge in E-11. Savor gourmet dining, world-class hookah flavors, and breathtaking Margalla skyline views until 4 AM.",
    url: "https://www.thebashacafe.com",
    siteName: "Basha Cafe",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Basha Cafe Rooftop Lounge and Restaurant in Islamabad",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basha Cafe | Best Restaurant & Sheesha Cafe in Islamabad",
    description:
      "Islamabad's premier rooftop restaurant and luxury sheesha lounge in E-11. Gourmet food, top hookah flavors & late night vibes.",
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
  category: "Restaurant & Cafe",
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
