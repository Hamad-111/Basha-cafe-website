import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Basha Cafe | #1 Trending Cafe & Sheesha Lounge in Islamabad",
    short_name: "The Basha Cafe",
    description: "Islamabad's #1 trending rooftop cafe, restaurant and luxury sheesha lounge in E-11. Open daily 12 PM - 4 AM.",
    start_url: "/",
    display: "standalone",
    background_color: "#141517",
    theme_color: "#c5a059",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  }
}
