import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Basha Cafe | Best Restaurant & Sheesha Cafe in Islamabad",
    short_name: "Basha Cafe",
    description: "Top-rated rooftop restaurant and luxury sheesha lounge in E-11, Islamabad. Open daily 12 PM - 4 AM.",
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
