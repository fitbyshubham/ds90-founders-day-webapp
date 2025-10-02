"use client";
import { useState } from "react";

export default function Sections() {
  const [active, setActive] = useState("All");

  const categories = [
    { label: "All", icon: "https://img.icons8.com/color/48/pizza.png" },
    { label: "Fast food", icon: "https://img.icons8.com/color/48/hamburger.png" },
    { label: "Drink", icon: "https://img.icons8.com/color/48/coffee-to-go.png" },
  ];

  return (
    <div className="flex gap-3">
      {categories.map((u) => (
        <button
          key={u.label}
          onClick={() => setActive(u.label)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border transition ${
            active === u.label
              ? "bg-yellow-400 text-black font-semibold"
              : "bg-white text-gray-500 border-gray-300"
          }`}
        >
          <img src={u.icon} alt={u.label} className={`w-6 h-6 transition ${
      active === u.label ? "grayscale-0" : "grayscale"
    }`}  />
          <span>{u.label.length > 7 ? u.label.slice(0, 7) + "..." : u.label}
</span>
        </button>
      ))}
    </div>
  );
}
