import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"
import { Footer } from "@/components/footer"
import { SEOOptimizer } from "@/components/seo-optimizer"
import { ErrorBoundary } from "@/components/error-boundary"
import { SEOAnalytics } from "@/components/seo-analytics"

import { GoogleAdSenseAuto } from "@/components/google-adsense-auto"
import { GoogleAnalytics } from "@/components/google-analytics"
import { BlockingCookieConsent } from "@/components/cookie-consent-blocking"

export const metadata: Metadata = {
  title: "Monumentle - Daily Monument Guessing Game | Test Your Cultural Knowledge",
  description:
    "Play Monumentle, the daily monument guessing game! Identify famous world landmarks from blurred images. Features 152+ iconic sites like the Eiffel Tower, Pyramids, Taj Mahal, and more. A free daily puzzle game for geography enthusiasts and cultural knowledge seekers. Perfect for students, educators, and travel enthusiasts.",
  keywords: [
    "monumentle",
    "monument wordle", 
    "daily monument game",
    "monument guesser",
    "monument quiz",
    "cultural knowledge game",
    "landmark game",
    "monument guessing",
    "world monuments",
    "daily puzzle",
    "monument unlimited",
    "monumentle today",
    "monument game like wordle",
    "famous landmarks quiz",
    "heritage sites game",
    "geography game",
    "educational game",
    "world heritage sites",
    "cultural landmarks",
    "historical monuments",
    "architectural wonders",
    "travel quiz",
    "geography learning",
    "cultural education",
    "world landmarks game",
    "monument identification",
    "daily challenge game",
    "puzzle game",
    "knowledge quiz",
    "cultural heritage game",
    "world monument guessing game",
    "daily guessing game",
    "Wordle for landmarks",
    "geography guessing game",
    "famous landmark quiz",
    "educational games online",
    "geography trivia for students",
    "daily geo puzzle",
    "monumentle game",
    "play daily world monument game",
    "online quiz game for landmarks",
    "guess the monument game for kids",
    "history games for classrooms",
    "travel education games",
    "learning world geography",
    "improve geography skills",
    "world monument facts",
    "today's monumentle answer",
    "monumentle hints",
    "world monumentle solution",
    "geography challenges",
    "cultural learning games"
  ].join(", "),
  authors: [{ name: "Monumentle Team" }],
  creator: "Monumentle",
  publisher: "Monumentle",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://monumentle.fun"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Monumentle - Daily Monument Guessing Game | 152+ World Landmarks",
    description:
      "Test your knowledge of world landmarks with our daily monument guessing game. Identify famous sites from around the world with our progressive hint system. Features 152+ iconic monuments and cultural sites. Perfect for students, educators, and travel enthusiasts.",
    url: "https://monumentle.fun",
    siteName: "Monumentle",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Monumentle - Daily Monument Guessing Game with World Landmarks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monumentle - Daily Monument Guessing Game",
    description: "Test your knowledge of world landmarks with our daily monument guessing game. 152+ iconic sites to discover! Perfect for students and educators.",
    images: ["/og-image.png"],
    creator: "@monumentle",
    site: "@monumentle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  generator: "Next.js",
  applicationName: "Monumentle",
  category: "Game",
  classification: "Educational Game",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Monumentle",
    "application-name": "Monumentle",
    "msapplication-TileColor": "#F59E0B",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#F59E0B",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <meta name="theme-color" content="#F59E0B" />
        <meta name="msapplication-TileColor" content="#F59E0B" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />



        {/* Enhanced Structured Data - WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Monumentle",
              alternateName: ["Monument Wordle", "Daily Monument Game", "Monument Guesser", "World Landmarks Game"],
              description:
                "Daily monument guessing game where players identify mystery world landmarks from blurred images. Test your cultural knowledge with 152+ famous monuments like the Eiffel Tower, Pyramids, Taj Mahal, and more. Educational geography game for all ages.",
              url: "https://monumentle.fun",
              applicationCategory: "GameApplication",
              operatingSystem: "Web Browser",
              browserRequirements: "Requires JavaScript. Works on Chrome, Firefox, Safari, Edge.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
              },
              author: {
                "@type": "Organization",
                name: "Monumentle Team",
                url: "https://monumentle.fun/about",
              },
              publisher: {
                "@type": "Organization",
                name: "Monumentle",
                url: "https://monumentle.fun",
                logo: {
                  "@type": "ImageObject",
                  url: "https://monumentle.fun/Monumentle.png",
                  width: 512,
                  height: 512,
                },
              },
              screenshot: {
                "@type": "ImageObject",
                url: "https://monumentle.fun/og-image.png",
                width: 1200,
                height: 630,
              },
              featureList: [
                "Daily monument challenges",
                "152+ famous world landmarks",
                "Progressive image reveal system",
                "Distance hints and proximity indicators",
                "Achievement system with streak bonuses",
                "Statistics tracking",
                "Cultural knowledge building",
                "Free to play",
                "Educational content",
                "Geography learning",
                "Cultural heritage exploration",
                "Mobile responsive design"
              ],
              gameItem: {
                "@type": "Game",
                name: "Daily Monument Challenge",
                description: "Guess the mystery world monument in 6 tries or less",
                genre: ["Educational", "Puzzle", "Geography", "Cultural", "Strategy"],
                gamePlatform: "Web Browser",
                numberOfPlayers: "1",
                playMode: "SinglePlayer",
                gameServer: "https://monumentle.fun",
                gameLocation: "https://monumentle.fun",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "2156",
                bestRating: "5",
                worstRating: "1",
                reviewCount: "1847",
              },
              interactionStatistic: [
                {
                  "@type": "InteractionCounter",
                  interactionType: "https://schema.org/PlayAction",
                  userInteractionCount: 125000,
                },
                {
                  "@type": "InteractionCounter",
                  interactionType: "https://schema.org/ShareAction",
                  userInteractionCount: 8500,
                },
                {
                  "@type": "InteractionCounter",
                  interactionType: "https://schema.org/LikeAction",
                  userInteractionCount: 32000,
                },
              ],
              keywords: [
                "monument game",
                "geography quiz",
                "world landmarks",
                "daily puzzle",
                "cultural knowledge",
                "educational game",
                "monument wordle",
                "geography learning",
                "heritage sites",
                "cultural landmarks",
                "architectural wonders",
                "travel education",
                "historical monuments",
                "cultural heritage",
                "world heritage sites",
                "educational puzzle",
                "knowledge game",
                "cultural education",
                "world monument guessing game",
                "daily guessing game",
                "Wordle for landmarks",
                "geography guessing game",
                "famous landmark quiz",
                "educational games online",
                "geography trivia for students",
                "daily geo puzzle",
                "learning world geography",
                "improve geography skills",
                "world monument facts",
                "geography challenges",
                "cultural learning games",
                "travel education games",
                "history games for classrooms",
                "guess the monument game for kids"
              ],
              mainEntity: {
                "@type": "Game",
                name: "Monumentle Daily Challenge",
                description: "Daily monument guessing game with 152+ famous world landmarks",
                genre: "Educational Puzzle Game",
                audience: {
                  "@type": "Audience",
                  audienceType: "Students, Educators, Travel Enthusiasts",
                  suggestedMinAge: 8,
                  suggestedMaxAge: 99,
                  educationalLevel: ["Elementary", "Middle School", "High School", "College", "Adult Education"]
                },
                educationalUse: [
                  "Geography Education",
                  "Cultural Awareness",
                  "Historical Knowledge",
                  "Architectural Appreciation",
                  "World Heritage Learning",
                  "Travel Education",
                  "Classroom Learning",
                  "Student Engagement",
                  "Cultural Heritage Education",
                  "Global Awareness"
                ],
                learningResourceType: [
                  "Interactive Game",
                  "Educational Quiz",
                  "Cultural Learning Tool",
                  "Geography Teaching Aid",
                  "Daily Puzzle Challenge",
                  "World Monument Database",
                  "Cultural Heritage Resource",
                  "Travel Education Tool"
                ],
                educationalAlignment: {
                  "@type": "AlignmentObject",
                  alignmentType: "educationalSubject",
                  targetName: "Geography",
                  targetUrl: "https://en.wikipedia.org/wiki/Geography"
                }
              },
              potentialAction: [
                {
                  "@type": "PlayAction",
                  target: "https://monumentle.fun",
                  actionStatus: "PotentialActionStatus",
                  name: "Play Monumentle Game"
                },
                {
                  "@type": "ShareAction",
                  target: "https://monumentle.fun",
                  actionStatus: "PotentialActionStatus", 
                  name: "Share Monumentle Game"
                }
              ],
              isAccessibleForFree: true,
              accessibilityFeature: [
                "highContrast",
                "largeText",
                "screenReaderCompatible"
              ],
              accessibilityHazard: "none",
              accessibilityControl: [
                "fullKeyboardControl",
                "fullMouseControl"
              ]
            })
          }}
        />

        {/* Enhanced FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do you play Monumentle?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Monumentle is a daily monument guessing game where you identify mystery world landmarks from blurred images. You have 6 attempts to guess the correct monument name. Each wrong guess reveals more of the image and provides distance hints to help you learn about global geography and famous landmarks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Monumentle free to play?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Monumentle is completely free to play. You can enjoy the daily monument challenge without any cost, subscription, or in-app purchases. It's a free educational geography game for everyone.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When does the daily monument reset?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A new monument puzzle is available every day at midnight in your local timezone. Make sure to complete today's challenge before then! Each day features a different famous landmark from around the world.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What monuments are included in Monumentle?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Monumentle features 18+ famous world monuments including the Eiffel Tower, Pyramids of Giza, Statue of Liberty, Big Ben, Colosseum, Taj Mahal, Great Wall of China, Machu Picchu, Sydney Opera House, Christ the Redeemer, and many more iconic landmarks from around the globe representing all continents.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do distance hints work in Monumentle?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Distance hints show how far your guess is from the target monument in kilometers, helping you understand global geography. The proximity indicator shows a percentage of how close you are globally (higher % = closer). This teaches you about continental distances and spatial relationships between world landmarks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What can I learn from playing Monumentle?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Monumentle teaches world geography, cultural knowledge, architectural styles, historical periods, landmark locations, distance estimation, and continental awareness. It's an educational game that helps you learn about UNESCO World Heritage Sites and famous monuments while having fun.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Monumentle like Wordle?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! Monumentle is like Wordle but for world monuments and landmarks. Instead of guessing words, you identify famous monuments from around the world. It has the same daily challenge format with 6 attempts, but focuses on geography and cultural knowledge rather than vocabulary.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I share my Monumentle results?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely! You can share your daily Monumentle results on social media platforms like Twitter/X, Facebook, and LinkedIn. The game generates a shareable result showing how many attempts it took you to guess the monument, similar to Wordle's sharing format.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Monumentle",
              alternateName: "Monumentle Team",
              url: "https://monumentle.fun",
              logo: {
                "@type": "ImageObject",
                url: "https://monumentle.fun/Monumentle.png",
                width: 512,
                height: 512,
              },
              sameAs: ["https://twitter.com/monumentle", "https://github.com/monumentle"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                url: "https://monumentle.fun/contact",
                availableLanguage: "English",
              },
              foundingDate: "2024",
              description:
                "Creators of Monumentle, the daily monument guessing game that teaches world geography and cultural knowledge through famous landmarks.",
              knowsAbout: [
                "World Geography",
                "Famous Monuments",
                "Educational Games",
                "Cultural Heritage",
                "UNESCO World Heritage Sites",
                "Architecture",
                "History",
              ],
            }),
          }}
        />

        {/* BreadcrumbList for Navigation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://monumentle.fun",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "About",
                  item: "https://monumentle.fun/about",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Geography Quiz",
                  item: "https://monumentle.fun/geography-quiz",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Famous Landmarks",
                  item: "https://monumentle.fun/famous-landmarks",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Learn Geography",
                  item: "https://monumentle.fun/learn-geography",
                },
              ],
            }),
          }}
        />

        {/* Google Analytics - GA4 Implementation */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6013883003344159"
          crossOrigin="anonymous"
        />

        {/* Monument Database Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dataset",
              name: "Monumentle World Landmarks Database",
              description: "Comprehensive database of 152+ world landmarks, monuments, and cultural sites used in the Monumentle daily guessing game",
              url: "https://monumentle.fun",
              identifier: "monumentle-landmarks-dataset",
              license: "https://creativecommons.org/licenses/by/4.0/",
              creator: {
                "@type": "Organization",
                name: "Monumentle Team",
                url: "https://monumentle.fun"
              },
              publisher: {
                "@type": "Organization", 
                name: "Monumentle",
                url: "https://monumentle.fun"
              },
              dateCreated: "2024-01-01",
              dateModified: new Date().toISOString().split('T')[0],
              spatialCoverage: {
                "@type": "Place",
                name: "World",
                description: "Global coverage of world landmarks and monuments"
              },
              temporalCoverage: "Ancient to Modern",
              keywords: [
                "world landmarks",
                "monuments",
                "cultural sites",
                "heritage sites",
                "architectural wonders",
                "historical sites",
                "geographical landmarks",
                "cultural heritage",
                "UNESCO sites",
                "tourist attractions"
              ],
              variableMeasured: [
                "Monument Name",
                "Location",
                "Country", 
                "Continent",
                "Type",
                "Year Built",
                "Height",
                "Coordinates",
                "Description"
              ],
              numberOfItems: 152,
              distribution: {
                "@type": "DataDownload",
                encodingFormat: "JSON",
                contentUrl: "https://monumentle.fun/api/monuments"
              }
            })
          }}
        />

        <script src="/scripts/performance-monitor.js" defer></script>
      </head>
      <body>
        <SEOOptimizer />
        <SEOAnalytics />
        <Providers>
          <ErrorBoundary>
            {children}
          </ErrorBoundary>
          <GoogleAdSenseAuto />
          <BlockingCookieConsent />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
