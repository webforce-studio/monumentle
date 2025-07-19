import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GeographyQuizStructuredData } from "./structured-data"

export const metadata: Metadata = {
  title: "Learn World Geography with Monumentle | Daily Monument Challenges",
  description:
    "Discover world geography through our daily monument guessing game. Each day, identify a famous landmark and learn about its location, culture, and history.",
  keywords: "world geography, monument game, daily challenge, geography learning, educational game, landmarks",
}

export default function GeographyQuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 monument-title">
              Learn World Geography with Daily Monument Challenges
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Discover world geography through our daily monument guessing game. Each day, identify a famous landmark
              and learn about its location, culture, and history.
            </p>
            <Link href="/">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">
                Play Today's Monument Challenge
              </Button>
            </Link>
          </div>

          {/* How Monumentle Teaches Geography */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              How Monumentle Teaches Geography
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Monumentle offers a unique approach to learning world geography. Instead of traditional quizzes, our daily
              monument guessing game helps you discover new places and cultures in an engaging way.
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 dark:text-gray-300 mb-6">
              <li>
                <b>Discover Countries:</b> Identify monuments located in different countries around the world.
              </li>
              <li>
                <b>Explore Continents:</b> Learn about the diverse landscapes and cultures of each continent.
              </li>
              <li>
                <b>Understand Cultural Regions:</b> Recognize monuments that represent unique cultural regions and
                historical periods.
              </li>
            </ul>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              By visually recognizing famous monuments, you'll naturally improve your geographic knowledge and develop a
              deeper appreciation for the world's diverse heritage.
            </p>
          </div>

          {/* Educational Content */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Why Learn Geography with Monumentle?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Visual Learning</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Learn through visual recognition of monuments</li>
                  <li>• Associate landmarks with their geographic locations</li>
                  <li>• Enhance memory through visual cues</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Daily Engagement</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Quick and easy daily challenge</li>
                  <li>• Consistent learning over time</li>
                  <li>• Discover new monuments every day</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Add this right before the closing </div> */}
          <GeographyQuizStructuredData />
        </div>
      </div>
    </div>
  )
}
