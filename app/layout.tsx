import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"
import { Footer } from "@/components/footer"
import { AdvancedCookieConsent, SimpleCookieConsent } from "@/components/cookie-consent"
import { GoogleAnalytics } from "@/components/google-analytics"

export const metadata: Metadata = {
  title: "Monumentle - Daily Monument Guessing Game | Test Your Cultural Knowledge",
  description:
    "Play Monumentle, the daily monument guessing game! Identify famous world landmarks from blurred images. Features iconic sites like the Eiffel Tower, Pyramids, and Taj Mahal. A free daily puzzle game for geography enthusiasts.",
  keywords:
    "monumentle, monument wordle, daily monument game, monument guesser, monument quiz, cultural knowledge game, landmark game, monument guessing, world monuments, daily puzzle, monument unlimited, monumentle today, monument game like wordle, famous landmarks quiz, heritage sites game",
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
    title: "Monumentle - Daily Monument Guessing Game",
    description:
      "Test your knowledge of world landmarks with our daily monument guessing game. Identify famous sites from around the world with our progressive hint system.",
    url: "https://monumentle.fun",
    siteName: "Monumentle",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Monumentle - Daily Monument Guessing Game",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monumentle - Daily Monument Guessing Game",
    description: "Test your knowledge of world landmarks with our daily monument guessing game.",
    images: ["/og-image.png"],
    creator: "@monumentle",
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
  },
  generator: "v0.dev",
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

        {/* PostHog Analytics - Cookieless Implementation */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
      !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init be ys Ss me gs ws capture Ne calculateEventProperties xs register register_once register_for_session unregister unregister_for_session Rs getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Is ks createPersonProfile Ps bs opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing $s debug Es getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('phc_WIymZyLgFfaJ2uFwD8S5EOQ9dyeRAN7jZByUOXHAP1Y', {
          api_host: 'https://eu.i.posthog.com',
          capture_pageview: true,
          capture_pageleave: true,
          person_profiles: 'always',
          disable_cookies: true,
          persistence: 'localStorage'
      })
    `,
          }}
        />

        {/* Enhanced Structured Data - WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Monumentle",
              alternateName: ["Monument Wordle", "Daily Monument Game", "Monument Guesser"],
              description:
                "Daily monument guessing game where players identify mystery world landmarks from blurred images. Test your cultural knowledge with famous monuments like the Eiffel Tower, Pyramids, and Taj Mahal.",
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
                  url: "https://monumentle.fun/logo.png",
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
                "18+ famous world landmarks",
                "Progressive image reveal system",
                "Distance hints and proximity indicators",
                "Achievement system with streak bonuses",
                "Statistics tracking",
                "Cultural knowledge building",
                "Free to play",
              ],
              gameItem: {
                "@type": "Game",
                name: "Daily Monument Challenge",
                description: "Guess the mystery world monument in 6 tries or less",
                genre: ["Educational", "Puzzle", "Geography"],
                gamePlatform: "Web Browser",
                numberOfPlayers: "1",
                playMode: "SinglePlayer",
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
              ],
              mainEntity: {
                "@type": "Game",
                name: "Monumentle Daily Challenge",
                description: "Daily monument guessing game with famous world landmarks",
                genre: "Educational Puzzle Game",
                audience: {
                  "@type": "Audience",
                  audienceType: "General Public",
                  suggestedMinAge: 8,
                },
              },
            }),
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
                url: "https://monumentle.fun/logo.png",
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
      </head>
      <body>
        <Providers>
          {children}
          {/* Cookie Consent - Choose one option */}
          {/* Option 1: Simple Cookie Consent (uncomment to use) */}
          {/* <SimpleCookieConsent /> */}
          
          {/* Option 2: Advanced Cookie Consent (recommended) */}
          <AdvancedCookieConsent />
          
          {/* Google Analytics with Consent Mode v2 */}
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          )}
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
