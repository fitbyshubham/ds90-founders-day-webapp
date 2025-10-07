"use client";

import { useState } from "react";
import AnimatedNumber from "./Animations";

interface ScheduleCardProps {
  day: string;
  date: string;
  desc: string;
  online?: boolean;
  eventName: string;
  startTime: string;
  endTime: string;
  avatars: string[];
  numberOfPeople: number;
  peopleLabel?: string;
  coverImage: string;
  location: string;
}

export default function ScheduleCard({
  day,
  date,
  desc,
  online = false,
  eventName,
  startTime,
  endTime,
  avatars = [],
  numberOfPeople,
  coverImage,
  location,
}: ScheduleCardProps) {
  const [attending, setAttending] = useState(false);
  const [attendees, setAttendees] = useState(numberOfPeople);

  const handleJoin = () => {
    if (attending) {
      setAttendees(attendees - 1);
      setAttending(false);
    } else {
      setAttendees(attendees + 1);
      setAttending(true);
    }
  };

  return (
    <div className="relative shadow-2xl rounded-3xl bg-white w-full max-w-md mx-auto overflow-hidden pb-0 pt-0 px-0 transition hover:scale-[1.02] hover:shadow-3xl">
      {/* Event Image */}
      <div className="w-full h-[170px] relative">
        <img
          src={coverImage}
          alt="Event"
          className="w-full h-full object-cover rounded-t-3xl"
        />
        {/* Date badge */}
        <div
          className="absolute left-4 top-4 z-20 flex flex-col items-center bg-white/90 backdrop-blur-md rounded-xl px-4 pt-2 pb-1 shadow"
          style={{ minWidth: 64 }}
        >
          <span className="font-bold text-base text-blue-700 leading-tight">
            {day}
          </span>
          <span className="font-semibold text-sm text-blue-700 -mt-1">{date}</span>
        </div>
        {/* Online status */}
        {online && (
          <div className="absolute right-4 top-4 flex items-center space-x-1 z-10 bg-white/80 px-2 py-1 rounded shadow">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-xs text-green-700 font-medium">Online</span>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex flex-col px-6 pt-4 pb-5">
        {eventName && (
          <span className="flex flex-col items-start font-bold text-blue-900 text-2xl mb-2 mt-1 leading-tight truncate">
            {eventName}
          </span>
        )}
        <div className="flex flex-row justify-between items-center text-blue-700 text-sm mb-2">
          <span className="font-semibold">
            {startTime} – {endTime}
          </span>
          <span className="font-semibold">{location}</span>
        </div>
        {desc && (
          <p className="text-gray-600 text-sm mb-3">{desc}</p>
        )}
        {/* Avatars + join capsule */}
        <div className="flex items-center justify-between bg-blue-50 rounded-xl shadow-inner mt-2 py-2 px-3">
          <div className="flex items-center -space-x-3">
            {avatars.slice(0, 5).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Person ${i + 1}`}
                className="w-8 h-8 border-2 border-white bg-gray-200 object-cover rounded-full"
                style={{ zIndex: 10 - i }}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-blue-700 ml-2 mr-2">
            + <AnimatedNumber value={attendees} /> Attending
          </span>
          <button
            onClick={handleJoin}
            className={`ml-auto px-4 py-1 rounded-full font-semibold text-sm transition ${
              attending
                ? "bg-red-100 text-red-600 hover:bg-red-200"
                : "bg-green-100 text-green-700 hover:bg-green-200"
            } border border-green-200`}
            style={{ minWidth: 85 }}
          >
            {attending ? "Leave" : "Join"}
          </button>
        </div>
      </div>
    </div>
  );
}