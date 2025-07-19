import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Map, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Famous Landmarks Featured in Monumentle",
  description:
    "Explore the world's most iconic monuments through our daily guessing game. Each day features a different famous landmark for you to identify.",
  keywords: "famous landmarks, world monuments, monument identification, daily game, Monumentle",
}

export default function FamousLandmarksPage() {
  const landmarks = [
    {
      name: "Eiffel Tower",
      location: "Paris, France",
      description: "Iconic iron lattice tower and symbol of France",
    },
    {
      name: "Great Wall of China",
      location: "China",
      description: "Ancient fortification stretching thousands of miles",
    },
    {
      name: "Machu Picchu",
      location: "Peru",
      description: "Ancient Incan citadel high in the Andes Mountains",
    },
    {
      name: "Taj Mahal",
      location: "Agra, India",
      description: "Magnificent white marble mausoleum",
    },
    {
      name: "Colosseum",
      location: "Rome, Italy",
      description: "Ancient Roman amphitheater and architectural marvel",
    },
    {
      name: "Christ the Redeemer",
      location: "Rio de Janeiro, Brazil",
      description: "Art Deco statue overlooking the city",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 monument-title">
              Famous Landmarks Featured in Monumentle
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore the world's most iconic monuments through our daily guessing game. Each day features a different
              famous landmark for you to identify.
            </p>
            <Link href="/">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">Play Monumentle</Button>
            </Link>
          </div>

          {/* Featured Landmarks */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Landmarks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {landmarks.map((landmark, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{landmark.name}</CardTitle>
                    <CardDescription className="text-amber-600 font-medium">{landmark.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{landmark.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quiz Features */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <Camera className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Daily Landmark Reveal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Each day, Monumentle presents a new famous landmark to discover.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Map className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Learn Through Identification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Uncover historical facts and cultural significance as you identify each monument.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Share Your Daily Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Show off your monument knowledge and challenge your friends.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Educational Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Learn About World Heritage</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Famous landmarks represent the pinnacle of human achievement in architecture, engineering, and cultural
                expression. These monuments tell the stories of civilizations, showcase artistic mastery, and serve as
                symbols of national identity.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By learning about these landmarks, you gain insight into:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Historical significance and cultural context</li>
                <li>• Architectural styles and engineering innovations</li>
                <li>• Geographic distribution of world heritage sites</li>
                <li>• Conservation efforts and tourism impact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
