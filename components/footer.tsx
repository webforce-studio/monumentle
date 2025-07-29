import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <Image src="/Monumentle.png" alt="Monumentle" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold text-amber-400">Monumentle</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Daily monument guessing game. Test your knowledge of world landmarks and cultural heritage sites.
            </p>
          </div>

          {/* Game Links */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4">Game</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Play Today
                </Link>
              </li>
              <li>
                <Link href="/how-to-play" className="hover:text-amber-400 transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/geography-quiz" className="hover:text-amber-400 transition-colors">
                  Geography Quiz
                </Link>
              </li>
              <li>
                <Link href="/famous-landmarks" className="hover:text-amber-400 transition-colors">
                  Famous Landmarks
                </Link>
              </li>
            </ul>
          </div>

          {/* More Games */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4">More Games</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.daily-challenge.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors font-medium"
                >
                  Daily Challenge Hub 🎮
                </a>
              </li>
              <li>
                <a
                  href="https://www.flagguesser.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Flag Guesser 🏳️
                </a>
              </li>
              <li>
                <a
                  href="https://www.classic-snake.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Classic Snake 🐍
                </a>
              </li>
              <li>
                <a
                  href="https://www.supercardle.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Supercardle 🏎️
                </a>
              </li>
            </ul>
          </div>

          {/* Friends Links */}
          <div>
            <h4 className="font-semibold text-amber-400 mb-4">Friends</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://browse-ai.tools/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Browse AI Tools 🤖
                </a>
              </li>
              <li>
                <a
                  href="https://www.stop-watch.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Stopwatch Online ⏱️
                </a>
              </li>
              <li>
                <a
                  href="https://www.flip-a-coin.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Flip A Coin Online 🪙
                </a>
              </li>
              <li>
                <a
                  href="https://www.wheel-spinner.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Wheel Spinner Online 🎡
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm text-slate-400">© 2025 Webforce Studio. All rights reserved.</p>
            <p className="text-xs text-slate-500 mt-2">Celebrating world heritage through interactive learning</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-amber-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
