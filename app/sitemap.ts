import type { MetadataRoute } from "next"

// Ensure a stable, cache-friendly sitemap for crawlers
export const dynamic = "force-static"
export const revalidate = 86400 // 24h
import { monuments } from "@/lib/monument-database"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://monumentle.fun"
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/geography-quiz`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/famous-landmarks`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/learn-geography`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/regions`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ]

  // Dynamic continent region pages
  const continentSlugs = Array.from(
    new Set(
      monuments
        .map((m) => m.continent)
        .filter((c): c is string => Boolean(c))
    )
  )
    .map((c) => c.toLowerCase().replace(/ /g, '-'))
    .sort()

  const regionPages = continentSlugs.map((slug) => ({
    url: `${baseUrl}/regions/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Dynamic monument detail pages
  const monumentPages = monuments
    .filter((m) => Boolean(m.kebabId))
    .map((monument) => ({
      url: `${baseUrl}/monuments/${monument.kebabId}`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  return [...staticPages, ...regionPages, ...monumentPages]
}
