import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full border border-white/20 bg-white/10 backdrop-blur-2x flex items-center justify-between px-4 py-3 shadow-sm">
      {/* Hamburger icon */}
      <div className="flex items-center">
        <img src="/hamburger.png" alt="Menu" className="w-8 h-8" />
      </div>
      {/* Profile circle */}
      <div className="flex items-center">
        <img
          src="/profile.svg"
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-gray-300 object-cover"
        />
      </div>
    </header>
  );
}