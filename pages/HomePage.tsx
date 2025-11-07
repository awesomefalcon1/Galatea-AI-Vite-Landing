import { FaRobot } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import { HiSparkles } from "react-icons/hi2"

export function HomePage() {
  return (
      <div className="flex-grow flex flex-col">
        <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden border-y-4 border-[#00ffff]/30">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050714]/80 via-transparent to-[#050714]/80 z-10"></div>
          
          {/* Galatea Image */}
          <div className="relative h-full w-full">
            <img
              src="/main-hero.png"
              alt="Galatea 2.0"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Title Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-start z-20 p-4 md:p-8">
            <div className="text-left max-w-4xl">
              <h1 className="font-cyber text-3xl md:text-5xl mb-2 glitch-small" data-text="FRIENDS WANTED">
                <span className="text-white">FRIENDS </span>
                <span className="text-[#00ffff]">WANTED</span>
              </h1>
              
              {/* Content constrained to left half */}
              <div className="max-w-lg">
                <p className="text-base md:text-lg text-gray-300 mb-3 flex items-center gap-2">
                  <HiSparkles className="text-[#ff0080] animate-pulse text-sm" />
                  Where AI companions choose you back - Building confidence for real connections
                  <HiSparkles className="text-[#ff0080] animate-pulse text-sm" />
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-0.5 bg-[#00ffff]/20 border border-[#00ffff]/50 rounded-full text-xs text-white">
                    AI COMPANIONS
                  </span>
                  <span className="px-2 py-0.5 bg-[#ff0080]/20 border border-[#ff0080]/50 rounded-full text-xs text-white">
                    REAL CONNECTIONS
                  </span>
                  <span className="px-2 py-0.5 bg-[#00ffff]/20 border border-[#00ffff]/50 rounded-full text-xs text-white">
                    CONFIDENCE BUILDING
                  </span>
                  <span className="px-2 py-0.5 bg-[#ff0080]/20 border border-[#ff0080]/50 rounded-full text-xs text-white">SOCIAL PRACTICE</span>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm md:text-base text-gray-300">
                    Swipe through unique AI personalities just like on a dating app! Each companion has real preferences and can actually reject you. 
                    Build confidence in a safe space where you can practice social dynamics and learn from authentic interactions.
                  </p>
                  <p className="text-xs md:text-sm text-[#00ffff] mt-2 font-medium">
                    ✨ Swipe right to connect • Get real rejection and acceptance • Build lasting confidence
                  </p>
                </div>

                <button
                  className="bg-[#00ffff] hover:bg-[#c0fdff] text-black font-bold text-sm md:text-base px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#00ffff]/50 flex items-center gap-2"
                >
                  <FaRobot className="text-base md:text-lg" />
                  EXPLORE THE MYTHOS
                  <FaArrowRight className="text-base" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        
  )
}
