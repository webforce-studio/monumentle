"use client"

import dynamic from "next/dynamic"

type Point = { id: number; name: string; latitude: number | null; longitude: number | null; country?: string }

export default function MonumentMapClient({ points }: { points: Point[] }) {
  const MonumentMap = dynamic(() => import("@/components/monument-map").then(m => m.MonumentMap), { ssr: false })
  return <MonumentMap points={points} />
}


