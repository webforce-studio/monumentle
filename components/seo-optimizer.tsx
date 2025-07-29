"use client"

import { useEffect } from 'react'

export function SEOOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { rel: 'preload', href: '/og-image.png', as: 'image' },
      { rel: 'preload', href: '/Monumentle.png', as: 'image' },
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
      { rel: 'dns-prefetch', href: 'https://images.pexels.com' },
    ]

    preloadLinks.forEach(({ rel, href, as }) => {
      const link = document.createElement('link')
      link.rel = rel
      link.href = href
      if (as) link.setAttribute('as', as)
      document.head.appendChild(link)
    })

    // Add performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart
          console.log(`Page load time: ${loadTime}ms`)
        }
      })
    }

    // Add structured data for current page
    const addPageSpecificStructuredData = () => {
      const currentPath = window.location.pathname
      
      if (currentPath === '/') {
        // Homepage structured data
        const homePageData = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Monumentle - Daily Monument Guessing Game",
          "description": "Play the daily monument guessing game with 152+ world landmarks",
          "url": "https://monumentle.fun",
          "mainEntity": {
            "@type": "Game",
            "name": "Monumentle Daily Challenge",
            "description": "Daily monument guessing game"
          }
        }
        
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.textContent = JSON.stringify(homePageData)
        document.head.appendChild(script)
      }
    }

    addPageSpecificStructuredData()

    // Cleanup function
    return () => {
      // Remove any dynamically added elements if needed
    }
  }, [])

  return null
} 