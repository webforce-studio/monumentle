import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MONUMENTS_DATABASE } from "@/lib/monument-database"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getArticleByKebabId } from "@/lib/monument-articles"
import RegionMapClient from "@/components/region-map-client"

type Params = { params: Promise<{ continent: string }> }

const MAP: Record<string, string> = {
  "europe": "Europe",
  "asia": "Asia",
  "north-america": "North America",
  "south-america": "South America",
  "americas": "Americas",
  "africa": "Africa",
  "oceania": "Oceania",
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { continent } = await params
  const pretty = MAP[continent]
  if (!pretty) return {}
  const description = `Explore ${pretty} monuments with a regional map and summaries of iconic sites.`
  return {
    title: `${pretty} Monuments | Monumentle`,
    description,
    alternates: { canonical: `/regions/${continent}` },
    openGraph: {
      title: `${pretty} Monuments | Monumentle`,
      description,
      url: `/regions/${continent}`,
      type: "website",
    },
  }
}

export default async function RegionPage({ params }: Params) {
  const { continent } = await params
  const pretty = MAP[continent]
  if (!pretty) return notFound()

  const monuments = MONUMENTS_DATABASE.filter((m) =>
    pretty === "Americas" ? m.continent === "North America" || m.continent === "South America" : m.continent === pretty,
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* ItemList structured data for region monuments */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: `${pretty} Monuments`,
              numberOfItems: monuments.length,
              itemListElement: monuments.map((m, idx) => ({
                "@type": "ListItem",
                position: idx + 1,
                name: m.name,
                url: `https://monumentle.fun/monuments/${m.kebabId || String(m.id)}`,
              })),
            }),
          }}
        />
        <h1 className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-4">{pretty} Monuments</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">Monuments and landmarks across {pretty}</p>

        {/* Region Map */}
        <div className="mb-8">
          <RegionMapClient
            points={monuments.map((m) => ({ id: m.id, name: m.name, latitude: m.latitude, longitude: m.longitude, country: m.country }))}
          />
        </div>

        {/* Monuments with placeholder summaries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {monuments.map((m) => {
            const href = `/monuments/${m.kebabId || String(m.id)}`
            const article = getArticleByKebabId(m.kebabId || "")
            return (
              <Link key={m.id} href={href} className="block">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="relative h-40">
                    <Image src={m.images.medium.jpg || "/placeholder.svg"} alt={m.name} fill className="object-cover" />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{m.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {article?.summary || "Coming soon"}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}


