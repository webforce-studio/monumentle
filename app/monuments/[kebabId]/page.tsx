import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MONUMENTS_DATABASE } from "@/lib/monument-database"
import { getArticleByKebabId } from "@/lib/monument-articles"
import Image from "next/image"
import MonumentMapClient from "./map-client"
import MarkdownContent from "@/components/markdown-content"
import Link from "next/link"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"

type Params = { params: Promise<{ kebabId: string }> }

export function generateStaticParams() {
  return MONUMENTS_DATABASE.map((m) => ({ kebabId: m.kebabId || String(m.id) }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { kebabId } = await params
  const monument = MONUMENTS_DATABASE.find((m) => (m.kebabId || String(m.id)) === kebabId)
  if (!monument) return {}
  const article = getArticleByKebabId(monument.kebabId || "")
  const description = article?.summary || `Discover ${monument.name}, a famous landmark in ${monument.location}, ${monument.country}.`
  return {
    title: `${monument.name} | Monumentle`,
    description,
    alternates: { canonical: `/monuments/${monument.kebabId || String(monument.id)}` },
    openGraph: {
      title: `${monument.name} | Monumentle`,
      description,
      images: monument.images?.large?.jpg ? [monument.images.large.jpg] : undefined,
      url: `/monuments/${monument.kebabId || String(monument.id)}`,
      type: "article",
    },
  }
}

export default async function MonumentDetailPage({ params }: Params) {
  const { kebabId } = await params
  const monument = MONUMENTS_DATABASE.find((m) => (m.kebabId || String(m.id)) === kebabId)
  if (!monument) return notFound()
  const article = getArticleByKebabId(monument.kebabId || "")
  const base = "https://monumentle.fun"
  const canonical = `${base}/monuments/${monument.kebabId || String(monument.id)}`
  const img = monument.images?.large?.jpg || "/og-image.png"
  const imageUrl = img.startsWith("http") ? img : `${base}${img}`

  // Region context for prev/next within the same continent
  const regionList = MONUMENTS_DATABASE
    .filter((m) => m.continent === monument.continent)
    .sort((a, b) => a.name.localeCompare(b.name))
  const currentIndex = regionList.findIndex((m) => (m.kebabId || String(m.id)) === (monument.kebabId || String(monument.id)))
  const prevItem = currentIndex > 0 ? regionList[currentIndex - 1] : null
  const nextItem = currentIndex >= 0 && currentIndex < regionList.length - 1 ? regionList[currentIndex + 1] : null

  const slugMap: Record<string, string> = {
    "Europe": "europe",
    "Asia": "asia",
    "North America": "north-america",
    "South America": "south-america",
    "Africa": "africa",
    "Oceania": "oceania",
  }
  const regionSlug = slugMap[monument.continent] || ""
  const regionHref = regionSlug ? `/regions/${regionSlug}` : "/regions"

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Article & Breadcrumb structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: monument.name,
              description: article?.summary || `Discover ${monument.name}, a famous landmark in ${monument.location}, ${monument.country}.`,
              image: [imageUrl],
              mainEntityOfPage: canonical,
              datePublished: new Date().toISOString(),
              author: { "@type": "Organization", name: "Monumentle" },
              publisher: { "@type": "Organization", name: "Monumentle", logo: { "@type": "ImageObject", url: `${base}/Monumentle.png` } },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: base },
                { "@type": "ListItem", position: 2, name: "Regions", item: `${base}/regions` },
                { "@type": "ListItem", position: 3, name: monument.continent, item: `${base}/regions/${(monument.continent === "North America" ? "north-america" : monument.continent === "South America" ? "south-america" : monument.continent.toLowerCase())}` },
                { "@type": "ListItem", position: 4, name: monument.name, item: canonical },
              ],
            }),
          }}
        />
        {/* Breadcrumbs under header */}
        <nav className="text-sm text-slate-600 dark:text-slate-300 mb-3 flex items-center gap-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href={regionHref} className="hover:underline">{monument.continent} Monuments</Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-100">{monument.name}</span>
        </nav>

        {/* Back / Prev / Next row */}
        <div className="flex items-center justify-between mb-5">
          <Link
            href={regionHref}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-800/90 text-white hover:bg-slate-700 transition-colors text-base"
          >
            <ArrowLeft size={18} /> Back to {monument.continent}
          </Link>
          <div className="flex items-center gap-3">
            {prevItem ? (
              <Link
                href={`/monuments/${prevItem.kebabId || String(prevItem.id)}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-800/90 text-white hover:bg-slate-700 transition-colors text-base"
              >
                <ChevronLeft size={18} /> Prev
              </Link>
            ) : (
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-600/40 text-slate-300 cursor-not-allowed" disabled>
                <ChevronLeft size={18} /> Prev
              </button>
            )}
            {nextItem ? (
              <Link
                href={`/monuments/${nextItem.kebabId || String(nextItem.id)}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-800/90 text-white hover:bg-slate-700 transition-colors text-base"
              >
                Next <ChevronRight size={18} />
              </Link>
            ) : (
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-600/40 text-slate-300 cursor-not-allowed" disabled>
                Next <ChevronRight size={18} />
              </button>
            )}
          </div>
        </div>

        <h1 className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">{monument.name}</h1>

        <div className="rounded-lg overflow-hidden border mb-6">
          <div className="relative w-full aspect-video">
            <Image
              src={monument.images.large.jpg || "/placeholder.svg"}
              alt={monument.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li><strong>Location:</strong> {monument.location}, {monument.country}</li>
              <li><strong>Continent:</strong> {monument.continent}</li>
              <li><strong>Type:</strong> {monument.type}</li>
              {monument.yearBuilt !== null && (
                <li><strong>Built:</strong> {monument.yearBuilt > 0 ? monument.yearBuilt : `${Math.abs(monument.yearBuilt)} BCE`}</li>
              )}
              {monument.height && <li><strong>Height:</strong> {monument.height} m</li>}
            </ul>

            {/* Article content if available */}
            {(() => {
              if (!article) return null
              return (
                <div className="prose dark:prose-invert mt-6 max-w-none">
                  <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{article.summary}</p>
                  <div className="mt-4 text-slate-700 dark:text-slate-200 text-[15px] leading-relaxed">
                    <MarkdownContent content={article.content} />
                  </div>
                  {article.sources?.length > 0 && (
                    <div className="mt-4 text-sm">
                      <div className="font-semibold mb-1">Sources</div>
                      <ul className="list-disc ml-5">
                        {article.sources.map((s) => (
                          <li key={s.url}>
                            <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:underline">
                              {s.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })()}
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Map</h2>
            <MonumentMapClient points={[{ id: monument.id, name: monument.name, latitude: monument.latitude, longitude: monument.longitude, country: monument.country }]} />
          </div>
        </div>
      </div>
    </div>
  )
}


