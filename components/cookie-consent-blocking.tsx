"use client"

import { useState, useEffect } from 'react'
import CookieConsent from 'react-cookie-consent'
import { Cookie, Shield, AlertCircle } from 'lucide-react'

// Google Consent Mode v2 integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export function BlockingCookieConsent() {
  const [consentGiven, setConsentGiven] = useState<boolean | null>(null)
  // Start hidden to avoid SSR white-screen; decide after hydration
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem('monumentle-cookie-consent')
    if (consent === 'granted' || consent === 'denied') {
      setConsentGiven(consent === 'granted')
      setShowOverlay(false)
    } else {
      // Only show overlay after hydration if no choice stored
      setShowOverlay(true)
    }
  }, [])

  // Prevent background scroll while the overlay is visible
  useEffect(() => {
    if (showOverlay) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [showOverlay])

  const handleAccept = () => {
    localStorage.setItem('monumentle-cookie-consent', 'granted')
    setConsentGiven(true)
    setShowOverlay(false)
    
    // Enable Google Analytics and AdSense
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      })
    }
    console.log('\u2705 All cookies accepted')
  }

  const handleDecline = () => {
    localStorage.setItem('monumentle-cookie-consent', 'denied')
    setConsentGiven(false)
    setShowOverlay(false)
    
    // Only necessary cookies
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
      })
    }
    console.log('\u274c Optional cookies declined')
  }

  // Blocking overlay that prevents interaction
  if (showOverlay) {
    return (
      <>
        {/* Blocking overlay */}
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 consent-overlay">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h2 className="text-xl font-bold text-gray-900">Privacy Notice</h2>
                <p className="text-sm text-gray-600">We need your consent to continue</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-700 mb-2">
                    This website uses cookies and similar technologies to:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Analyze site traffic and usage</li>
                    <li>• Show personalized advertisements</li>
                    <li>• Improve your browsing experience</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">
                  <strong>Important:</strong> You must make a choice to continue using this website. 
                  This ensures compliance with privacy regulations.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={handleDecline}
                className="flex-1 px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
              >
                Decline All
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Accept All
              </button>
            </div>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              By continuing, you agree to our use of cookies and similar technologies.
            </p>
          </div>
        </div>
      </>
    )
  }

  // No additional banner after consent is given
  return null
} 