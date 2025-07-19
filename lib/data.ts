import { monuments, type Monument } from "./monument-database"

// Convert Monument type to the MonumentData interface expected by the game
export interface MonumentData {
  id: number
  name: string
  location: string
  country: string
  type: string
  yearBuilt: number
  latitude: number
  longitude: number
  image: string
  photographer?: string
  photographerUrl?: string
  imageSource?: string
}

export async function getMonuments(): Promise<MonumentData[]> {
  // Convert Monument objects to MonumentData format
  return monuments.map(
    (monument: Monument): MonumentData => ({
      id: monument.id,
      name: monument.name,
      location: monument.location,
      country: monument.country,
      type: monument.type,
      yearBuilt: monument.yearBuilt || 0,
      latitude: monument.latitude || 0,
      longitude: monument.longitude || 0,
      image: monument.images.large.jpg, // Use the large JPG image
      photographer: monument.attribution.photographer,
      photographerUrl: monument.attribution.photographerUrl,
      imageSource: monument.attribution.source,
    }),
  )
}

export function getTodaysMonument(): MonumentData {
  // For now, return a random monument based on the current date
  // This ensures the same monument appears for all users on the same day
  const today = new Date()
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24),
  )
  const monumentIndex = dayOfYear % monuments.length

  const monument = monuments[monumentIndex]
  return {
    id: monument.id,
    name: monument.name,
    location: monument.location,
    country: monument.country,
    type: monument.type,
    yearBuilt: monument.yearBuilt || 0,
    latitude: monument.latitude || 0,
    longitude: monument.longitude || 0,
    image: monument.images.large.jpg,
    photographer: monument.attribution.photographer,
    photographerUrl: monument.attribution.photographerUrl,
    imageSource: monument.attribution.source,
  }
}

export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371 // Radius of the Earth in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c // Distance in kilometers
  return Math.round(distance)
}
