// This is a new file to check how monuments are displayed in cards
import Image from "next/image"
import Link from "next/link"
import { MonumentAttribution } from "./monument-attribution"
import type { Monument } from "@/lib/monument-database"

interface MonumentCardProps {
  monument: Monument
}

export function MonumentCard({ monument }: MonumentCardProps) {
  const href = `/monuments/${monument.kebabId || String(monument.id)}`
  return (
    <Link href={href} className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={monument.images.medium.jpg || "/placeholder.svg"}
          alt={monument.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{monument.name}</h3>
        <p className="text-sm text-gray-600">
          {monument.location}, {monument.country}
        </p>
        <MonumentAttribution
          photographer={monument.attribution.photographer}
          photographerUrl={monument.attribution.photographerUrl}
          imageSource={monument.attribution.source}
        />
      </div>
    </Link>
  )
}
