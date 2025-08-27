"use client";

import { MapPin, PersonStanding } from "lucide-react"; // or Heroicons if you prefer

interface ScheduleCardProps {
  day: string;
  date: string;
  startTime?: string;   // optional (for multi-day events)
  endTime?: string;  // optional
  eventName: string;
  desc: string;
  location: string;
  status?: "accepted" | "pending"; // optional
  gradient?: keyof typeof gradientMap;
}

const gradientMap: Record<string, string> = {
  purplePink: "from-purple-500 to-pink-500",
  blueCyan: "from-blue-500 to-cyan-400",
  indigoPurple: "from-indigo-500 to-purple-500",
  greenTeal: "from-green-400 to-teal-500",
  orangeRed: "from-orange-400 to-red-500",
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
  gradient = "purplePink",
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
          className={`flex-1 bg-gradient-to-r ${gradientMap[gradient]} text-white rounded-xl shadow-lg p-4 transition-transform hover:scale-[1.02]`}
        >
        <h2 className="text-lg font-bold">{eventName}</h2>
        <p className="text-sm opacity-90">{desc}</p>
        <p className="flex items-center text-sm opacity-90">
          <PersonStanding size={14} className="mr-1" />
          No. of People Attending: 
        </p>

        <div className="flex items-center text-sm opacity-90">
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
