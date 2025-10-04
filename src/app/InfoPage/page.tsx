"use client"

import InfoCard from "../Components/InfoCard";

const locations = [
  { image: "/Photos/MB.jpg", name: "Main Building", aspect: 1/2 },
  { image: "/Photos/FH.jpg", name: "Foot House", aspect: 2/3 },
  { image: "/Photos/MH.jpg", name: "Martyn House", aspect: 1/1 },
  { image: "/Photos/HH.jpg", name: "Hyderabad House", aspect: 4/3 },
  { image: "/Photos/KH.jpg", name: "Kashmir House", aspect: 1/1.2 },
  { image: "/Photos/JH.jpg", name: "Jaipur House", aspect: 1.7/2 },
  { image: "/Photos/TH.jpg", name: "Tata House", aspect: 1.4/1.6 },
  { image: "/Photos/OH.jpg", name: "Oberoi House", aspect: 1.5/1.9 },
  { image: "/Photos/library.jpg", name: "Library", aspect: 1.7/1 },
];

export default function InfoPage() {
  return (
    <div className="w-full max-w-xs mx-auto bg-white rounded-3xl">
      <div className="text-lg font-bold px-2 mb-3 mt-3">Explore the School</div>
      <div className="relative mb-4 px-2">
        <input
          className="w-full rounded-xl border border-gray-200 px-3 py-2 pr-10 outline-none bg-gray-50"
          placeholder="Search any place. . ."
        />
        <button className="absolute top-1/2 right-4 -translate-y-1/2 bg-yellow-400 p-2 rounded-xl">
          <svg width={16} height={16} fill="none" viewBox="0 0 24 24">
            <circle cx={11} cy={11} r={7} stroke="#222" strokeWidth={2} />
            <path stroke="#222" strokeWidth={2} strokeLinecap="round" d="M20 20L16.65 16.65" />
          </svg>
        </button>
      </div>
      <div className="columns-2 gap-3">
        {locations.map((loc) => (
            <div key={loc.name}
            style={{ aspectRatio: loc.aspect }}
            className="mb-3 break-inside-avoid rounded-xl overflow-hidden shadow-md bg-white"
            >
            <InfoCard image1={loc.image} name={loc.name} />
            </div>
        ))}
      </div>
    </div>
  );
}