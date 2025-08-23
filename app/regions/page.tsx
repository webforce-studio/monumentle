import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Regions | Monumentle",
  description: "Explore monuments by region. Coming soon.",
}

const CONTINENTS = [
  { slug: "europe", label: "Europe" },
  { slug: "asia", label: "Asia" },
  { slug: "north-america", label: "North America" },
  { slug: "south-america", label: "South America" },
  { slug: "africa", label: "Africa" },
  { slug: "oceania", label: "Oceania" },
]

export default function RegionsIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-6">Browse by Region</h1>
        <p className="text-slate-600 dark:text-slate-300 mb-8">Coming soon</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTINENTS.map((c) => (
            <Link key={c.slug} href={`/regions/${c.slug}`}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{c.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Monuments in {c.label}. Coming soon</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


