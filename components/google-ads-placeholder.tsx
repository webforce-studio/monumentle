"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface GoogleAdsPlaceholderProps {
  darkMode?: boolean
  size?: "banner" | "large-banner" | "leaderboard"
}

const AD_SIZES = {
  banner: { width: "320px", height: "50px", name: "Mobile Banner" },
  "large-banner": { width: "320px", height: "100px", name: "Large Mobile Banner" },
  leaderboard: { width: "728px", height: "90px", name: "Leaderboard" },
}

export function GoogleAdsPlaceholder({ 
  darkMode = false, 
  size = "leaderboard" 
}: GoogleAdsPlaceholderProps) {
  const adSize = AD_SIZES[size]
  
  return (
    <div className="w-full flex justify-center py-4">
      <Card
        className={`transition-colors duration-300 border-dashed ${
          darkMode 
            ? "bg-slate-800/50 border-slate-600 hover:border-slate-500" 
            : "bg-amber-50/50 border-amber-300 hover:border-amber-400"
        }`}
        style={{ maxWidth: adSize.width }}
      >
        <CardContent className="p-4">
          <div 
            className={`flex flex-col items-center justify-center text-center space-y-2 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
            style={{ minHeight: adSize.height }}
          >
            {/* Ad Icon */}
            <div className={`p-2 rounded-lg ${
              darkMode ? "bg-slate-700" : "bg-amber-100"
            }`}>
              <ExternalLink className="w-5 h-5" />
            </div>
            
            {/* Ad Label */}
            <div className="space-y-1">
              <Badge 
                variant="outline" 
                className={`text-xs ${
                  darkMode 
                    ? "bg-slate-700 text-slate-300 border-slate-600" 
                    : "bg-amber-100 text-amber-700 border-amber-300"
                }`}
              >
                Advertisement
              </Badge>
              <p className="text-xs font-medium">
                {adSize.name} ({adSize.width} × {adSize.height})
              </p>
              <p className="text-xs opacity-75">
                Google AdSense Placement
              </p>
            </div>
            
            {/* Placeholder Content */}
            <div className={`w-full h-2 rounded ${
              darkMode ? "bg-slate-700" : "bg-amber-200"
            }`} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Alternative compact version for smaller spaces
export function CompactGoogleAdsPlaceholder({ darkMode = false }: { darkMode?: boolean }) {
  return (
    <div className="w-full flex justify-center py-2">
      <div
        className={`px-4 py-2 rounded-lg border border-dashed flex items-center gap-2 ${
          darkMode
            ? "bg-slate-800/30 border-slate-600 text-slate-400"
            : "bg-amber-50/30 border-amber-300 text-slate-600"
        }`}
      >
        <ExternalLink className="w-3 h-3" />
        <Badge 
          variant="outline" 
          className={`text-xs ${
            darkMode 
              ? "bg-slate-700 text-slate-300 border-slate-600" 
              : "bg-amber-100 text-amber-700 border-amber-300"
          }`}
        >
          Advertisement
        </Badge>
        <span className="text-xs font-medium">Google AdSense</span>
      </div>
    </div>
  )
} 