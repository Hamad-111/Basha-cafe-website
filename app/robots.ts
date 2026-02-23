import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://bashcafecafe.online/sitemap.xml", // Replace with your actual domain when you know it
    }
}
