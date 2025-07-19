import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/monument-overview/", "/api/"],
    },
    sitemap: "https://www.monumentle.fun/sitemap.xml",
  }
}
