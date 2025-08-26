"use client";

import { MapPin } from "lucide-react"; // or Heroicons if you prefer

interface ScheduleCardProps {
  day: string;
  date: string;
  startTime?: string;   // optional (for multi-day events)
  endTime?: string;  // optional
  eventName: string;
  desc: string;
  location: string;
  status?: "accepted" | "pending"; // optional
  gradientFrom?: string
  gradientTo?: string
}

export default function ScheduleCard({
  day,
  date,
  startTime,
  endTime,
  eventName,
  desc,
  location,
  status = "pending",
  gradientFrom = "pink-500",
  gradientTo = "purple-500",
}: ScheduleCardProps) {
  return (
    <div className="flex space-x-4 mb-6">

      <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-4 w-16">
        <span className="text-lg text-gray-500">{day}</span>
        <span className="text-lg font-bold">{date}</span>

        {startTime && endTime && (
          <>
            <span className="text-lg font-semi-bold mt-1">{startTime}</span>
            <span className="text-sm text-gray-500 text-center">To</span>
            <span className="text-lg font-semi-bold">{endTime}</span>
          </>
        )}
      </div>

        <div
          className={`flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl shadow-lg p-4 transition-transform hover:scale-[1.02]`}
        >
        <h2 className="font-semibold">{eventName}</h2>
        <p className="text-sm opacity-90">{desc}</p>

        <div className="flex items-center text-sm opacity-90 mt-1">
          <MapPin size={14} className="mr-1" />
          {location}
        </div>

        {status === "accepted" ? (
          <p className="text-xs mt-2">✔ Accepted</p>
        ) : (
          <div className="flex space-x-2 mt-3">
            <button className="bg-white text-gray-800 text-sm px-3 py-1 rounded-lg shadow">
              Accept
            </button>
            <button className="bg-white/20 border border-white/50 text-sm px-3 py-1 rounded-lg">
              Decline
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
