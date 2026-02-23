import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://bashacafe.com/sitemap.xml", // Replace with your actual domain when you know it
    }
}
