"use client"

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

interface GoogleAnalyticsProps {
  measurementId: string
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Initialize Consent Mode v2 with default denied state
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag() {
        window.dataLayer.push(arguments)
      }
      
      // Set default consent state (denied) before GA loads
      window.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        functionality_storage: 'denied',
        personalization_storage: 'denied',
        wait_for_update: 500, // Wait 500ms for consent management platform
      })

      // Initialize GA4
      window.gtag('js', new Date())
      window.gtag('config', measurementId, {
        // Enhanced measurement settings
        enhanced_measurements: {
          scrolls: true,
          outbound_clicks: true,
          site_search: true,
          video_engagement: true,
          file_downloads: true,
        },
        // Privacy settings
        anonymize_ip: true,
        allow_google_signals: false, // Will be enabled only with consent
        allow_ad_personalization_signals: false, // Will be enabled only with consent
      })
    }
  }, [measurementId])

  return (
    <>
      {/* Google Tag Manager / GA4 Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      
      {/* Custom event tracking helpers */}
      <Script
        id="ga-helpers"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Helper functions for custom event tracking
            window.trackMonumentGuess = function(monumentName, guessNumber, isCorrect) {
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'monument_guess', {
                  event_category: 'gameplay',
                  monument_name: monumentName,
                  guess_number: guessNumber,
                  is_correct: isCorrect,
                  value: isCorrect ? guessNumber : 0
                });
              }
            };
            
            window.trackGameComplete = function(monumentName, totalGuesses, won) {
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'game_complete', {
                  event_category: 'gameplay',
                  monument_name: monumentName,
                  total_guesses: totalGuesses,
                  game_won: won,
                  value: won ? (7 - totalGuesses) : 0
                });
              }
            };
            
            window.trackStreakAchievement = function(streakLength, milestoneTitle) {
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'streak_achievement', {
                  event_category: 'achievement',
                  streak_length: streakLength,
                  milestone_title: milestoneTitle,
                  value: streakLength
                });
              }
            };
            
            window.trackShare = function(platform, result) {
              if (typeof window.gtag === 'function') {
                window.gtag('event', 'share', {
                  method: platform,
                  content_type: 'game_result',
                  content_id: result
                });
              }
            };
          `,
        }}
      />
    </>
  )
}

// Hook for tracking custom events
export function useGoogleAnalytics() {
  const trackEvent = (eventName: string, parameters: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters)
    }
  }

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
        page_path: pagePath,
        page_title: pageTitle,
      })
    }
  }

  return { trackEvent, trackPageView }
} 