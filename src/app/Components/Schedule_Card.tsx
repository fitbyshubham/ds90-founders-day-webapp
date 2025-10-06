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
    <div className="relative shadow-xl rounded-tl-[40px] rounded-tr-[36px] rounded-b-[36px] bg-blue-800 w-[350px] overflow-hidden pb-0 pt-0 px-0">
      {/* Date badge */}
      <div
        className="absolute shadow-xl left-0 top-0 z-20 flex flex-col items-center bg-white rounded-tl-[40px] rounded-br-[18px] px-4 pt-3 pb-2 mr-2 mb-2 "
        style={{ minWidth: 74 }}
      >
        <span className="font-bold text-lg text-black leading-tight">
          {day}
        </span>
        <span className="font-semibold text-base text-black -mt-1">{date}</span>
      </div>
      {/* Online status */}
      {online && (
        <div className="absolute right-5 top-3 flex items-center space-x-1 z-10">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-white/80 font-medium">Online</span>
        </div>
      )}

      {/* Main content */}
      <div className=" drop-shadow-lg flex flex-col px-6 pt-7 pb-0 relative">
        {eventName && (
          <span className="drop-shadow-lg flex flex-col items-end font-bold text-white text-3xl mb-4 mt-1 leading-tight truncate">
            {eventName}
          </span>
        )}
        <h2 className="text-white/80 drop-shadow-lg text-sm font-semibold mb-1"></h2>
        <div className=" drop-shadow-lg flex flex-row justify-between items-center text-white/90 text-sm mb-1">
          <span className="font-bold">
            {startTime} to {endTime}
          </span>
          <span className="font-bold">{location}</span>
        </div>
        {/* Avatars + join capsule */}
        <div className="flex items-center justify-between bg-white rounded-full shadow mt-3 py-2 px-3">
          <div className="flex items-center -space-x-3">
            {avatars.slice(0, 5).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Person ${i + 1}`}
                className="w-7 h-7  border-0 border-white bg-gray-200 object-cover"
                style={{ zIndex: 10 - i }}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-[#D9414A] ml-2 mr-2">
            + <AnimatedNumber value={attendees} /> Attending
          </span>
          <button
            onClick={handleJoin}
            className="ml-auto px-3 py-1 rounded-full bg-white text-green-600 font-semibold text-sm hover:bg-green-50  border-green-100 transition"
            style={{ minWidth: 85 }}
          >
            {attending ? "Leave" : "Join Event"}
          </button>
        </div>
      </div>

      {/* Event Image */}
      <div className="w-full mt-1 px-4 py-4 drop-shadow-lg">
        <img
          src={coverImage}
          alt="Event"
          className="w-full h-[170px] object-cover rounded-[36px]"
        />
      </div>
    </div>
  );
}
