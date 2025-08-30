import { MapPin, Utensils, Calendar } from "lucide-react"
import "../globals.css"

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-200 safe-bottom">
      <nav className="flex items-center justify-between w-full max-w-4xl mx-auto px-4 py-2">
        <button 
          className="flex-1 flex flex-col items-center justify-center text-gray-700 gap-1 p-2 md:p-3 active:bg-gray-100 rounded-lg transition-colors"
          aria-label="Map"
        >
          <MapPin className="h-6 w-6 md:h-7 md:w-7" />
          <span className="text-xs md:text-sm">Map</span>
        </button>
        
        <div className="w-px h-8 bg-gray-300 mx-1" />
        
        <button 
          className="flex-1 flex flex-col items-center justify-center text-gray-700 gap-1 p-2 md:p-3 active:bg-gray-100 rounded-lg transition-colors"
          aria-label="Food"
        >
          <Utensils className="h-6 w-6 md:h-7 md:w-7" />
          <span className="text-xs md:text-sm">Food</span>
        </button>
        
        <div className="w-px h-8 bg-gray-300 mx-1" />
        
        <button 
          className="flex-1 flex flex-col items-center justify-center text-gray-700 gap-1 p-2 md:p-3 active:bg-gray-100 rounded-lg transition-colors"
          aria-label="Schedule"
        >
          <Calendar className="h-6 w-6 md:h-7 md:w-7" />
          <span className="text-xs md:text-sm">Schedule</span>
        </button>
      </nav>
    </footer>
  )
}