import { useState } from "react"
import { Link } from "react-router-dom"
import { FaRobot, FaUsers, FaBrain, FaUser, FaHeart } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050714]/95 backdrop-blur-md border-b border-[#00ffff]/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="/galatea-ai-white.png"
              alt="Galatea AI"
              className="w-8 h-8 object-contain"
            />
            <div className="flex flex-col">
              <h1 className="font-cyber text-xl text-[#00ffff] leading-none glitch-small" data-text="GALATEA AI">
                GALATEA AI
              </h1>
              <p className="text-xs text-[#ff0080] font-medium tracking-wider">
                FRIENDS WANTED
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/companions"
              className="flex items-center gap-2 text-gray-300 hover:text-[#00ffff] transition-colors duration-300 px-2 py-1 rounded-lg border border-transparent hover:border-[#00ffff]/30"
            >
              <FaUsers className="text-sm" />
              Companions
            </Link>
            <a
              href="/#how-it-works"
              className="flex items-center gap-2 text-gray-300 hover:text-[#00ffff] transition-colors duration-300 px-2 py-1 rounded-lg border border-transparent hover:border-[#00ffff]/30"
            >
              <FaBrain className="text-sm" />
              How It Works
            </a>
            <a
              href="/#about"
              className="flex items-center gap-2 text-gray-300 hover:text-[#00ffff] transition-colors duration-300 px-2 py-1 rounded-lg border border-transparent hover:border-[#00ffff]/30"
            >
              <FaRobot className="text-sm" />
              About
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#00ffff] hover:text-[#ff0080] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#050714]/98 border-t border-[#00ffff]/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/companions"
                className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-[#00ffff] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUsers className="text-sm" />
                Companions
              </Link>
              <a
                href="/#how-it-works"
                className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-[#00ffff] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaBrain className="text-sm" />
                How It Works
              </a>
              <a
                href="/#about"
                className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-[#00ffff] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaRobot className="text-sm" />
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
