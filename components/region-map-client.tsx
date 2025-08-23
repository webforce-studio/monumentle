"use client"

import dynamic from "next/dynamic"

type Point = { id: number; name: string; latitude: number | null; longitude: number | null; country?: string }

const MonumentMap = dynamic(() => import("@/components/monument-map").then(m => m.MonumentMap), { ssr: false })

export default function RegionMapClient({ points }: { points: Point[] }) {
  return <MonumentMap points={points} />
}


