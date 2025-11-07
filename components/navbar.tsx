import { Link } from "react-router-dom"

export function Navbar() {
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
        </div>
      </div>
    </nav>
  )
}
