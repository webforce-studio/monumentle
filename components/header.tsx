"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Calendar, BarChart3, Sun, Moon } from "lucide-react"

export function Header({
  darkMode,
  toggleDarkMode,
  showStats,
  setShowStats,
  showHowToPlay,
  setShowHowToPlay,
}: {
  darkMode?: boolean
  toggleDarkMode?: () => void
  showStats?: boolean
  setShowStats?: (show: boolean) => void
  showHowToPlay?: boolean
  setShowHowToPlay?: (show: boolean) => void
}) {
  const [mounted, setMounted] = useState(false)
  const [localDark, setLocalDark] = useState(false)
  const [localShowStats, setLocalShowStats] = useState(false)
  const [localShowHowToPlay, setLocalShowHowToPlay] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const effectiveDark = darkMode ?? localDark
  const handleToggleDark = toggleDarkMode ?? (() => {
    setLocalDark((prev) => {
      const next = !prev
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', next)
      }
      return next
    })
  })

  const effectiveShowStats = showStats ?? localShowStats
  const handleSetShowStats = setShowStats ?? setLocalShowStats

  const effectiveShowHowToPlay = showHowToPlay ?? localShowHowToPlay
  const handleSetShowHowToPlay = setShowHowToPlay ?? setLocalShowHowToPlay

  return (
    <header className="bg-white dark:bg-gray-800 py-4 shadow-md">
      <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image src="/Monumentle.png" alt="Monumentle" fill className="object-contain" />
            </div>
            <Link href="/" className="text-3xl font-bold text-amber-500 monument-title">
              Monumentle
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleSetShowHowToPlay(!effectiveShowHowToPlay)}
            className="p-2 rounded-xl bg-amber-500 text-gray-50 hover:bg-amber-400 transition-colors"
          >
            <Calendar size={20} />
          </button>
          <button
            onClick={() => handleSetShowStats(!effectiveShowStats)}
            className="p-2 rounded-xl bg-amber-500 text-gray-50 hover:bg-amber-400 transition-colors"
          >
            <BarChart3 size={20} />
          </button>
          <button
            onClick={handleToggleDark}
            className="p-2 rounded-xl bg-amber-500 text-gray-50 hover:bg-amber-400 transition-colors"
          >
            {effectiveDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
