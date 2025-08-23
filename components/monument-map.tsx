"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"

type Point = {
  id: number
  name: string
  latitude: number | null
  longitude: number | null
  country?: string
}

const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export function MonumentMap({ points }: { points: Point[] }) {
  const first = points.find((p) => p.latitude && p.longitude)
  const center: [number, number] = first ? [first.latitude as number, first.longitude as number] : [20, 0]

  // Fix for SSR icon path issues
  useEffect(() => {
    // @ts-ignore
    delete (L.Icon.Default as any).prototype._getIconUrl
    L.Icon.Default.mergeOptions({
      iconUrl: defaultIcon.options.iconUrl,
      iconRetinaUrl: defaultIcon.options.iconRetinaUrl,
      shadowUrl: defaultIcon.options.shadowUrl,
    })
  }, [])

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden border">
      <MapContainer center={center} zoom={first ? 5 : 2} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
        {points
          .filter((p) => p.latitude && p.longitude)
          .map((p) => (
            <Marker key={p.id} position={[p.latitude as number, p.longitude as number]} icon={defaultIcon}>
              <Popup>
                <div className="text-sm">
                  <div className="font-semibold">{p.name}</div>
                  {p.country && <div className="text-slate-600">{p.country}</div>}
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  )
}


