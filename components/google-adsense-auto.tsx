"use client"

import Script from 'next/script'

/**
 * Google AdSense Auto Ads Component
 * 
 * This component enables Google AdSense Auto Ads, which automatically:
 * - Analyzes your website layout and content
 * - Places ads in optimal positions
 * - Optimizes ad performance using AI
 * - Works across all pages with a single code snippet
 * 
 * Auto Ads Types Available:
 * - Text & Display Ads (standard banners)
 * - In-article Ads (within content)
 * - Anchor Ads (sticky mobile ads)
 * - Vignette Ads (full-screen between pages)
 * - In-feed Ads (in lists/feeds)
 * - Matched Content (recommendations)
 */

export function GoogleAdSenseAuto() {
  return (
    <Script
      id="google-adsense-auto"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (adsbygoogle = window.adsbygoogle || []).push({});
        `,
      }}
    />
  )
}

/**
 * Usage Instructions:
 * 
 * 1. Add this component to your layout.tsx
 * 2. Configure Auto Ads in your AdSense dashboard:
 *    - Go to AdSense → Ads → Auto ads
 *    - Enable desired ad types
 *    - Copy the generated code
 * 3. The ads will automatically appear across your site
 * 
 * Benefits:
 * - No manual ad placement needed
 * - AI-optimized positioning
 * - Responsive across all devices
 * - Continuous performance optimization
 * - Works alongside existing manual ads
 */ 