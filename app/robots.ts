import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/contact", 
          "/privacy",
          "/terms",
          "/geography-quiz",
          "/famous-landmarks",
          "/learn-geography"
        ],
        disallow: [
          "/monument-overview/",
          "/api/",
          "/admin/",
          "/fix-images/",
          "/image-test/",
          "/url-test/",
          "/direct-test/",
          "/attribution-test/",
          "/.next/",
          "/node_modules/"
        ],
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/monument-overview/",
          "/api/",
          "/admin/",
          "/fix-images/",
          "/image-test/",
          "/url-test/",
          "/direct-test/",
          "/attribution-test/"
        ],
        crawlDelay: 0.5,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/monument-overview/",
          "/api/",
          "/admin/",
          "/fix-images/",
          "/image-test/",
          "/url-test/",
          "/direct-test/",
          "/attribution-test/"
        ],
        crawlDelay: 1,
      }
    ],
    sitemap: "https://monumentle.fun/sitemap.xml",
    host: "https://monumentle.fun",
  }
}
