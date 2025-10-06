"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
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
  avatars,
  numberOfPeople,
  peopleLabel = "participants",
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
    <div className="w-full max-w-[360px] bg-[#F87C4A] rounded-[36px] relative shadow-xl overflow-hidden">
      {/* Date box */}
      <div className="absolute left-0 top-0 m-0 translate-y-[-8px] translate-x-[-8px] rounded-2xl bg-white text-[#D9414A] flex flex-col items-center px-3 py-2 z-10 shadow-md border border-[#F87C4A]">
        <span className="font-extrabold text-lg leading-tight">{day}</span>
        <span className="font-semibold text-base -mt-1">{date}</span>
      </div>
      {/* Main card content */}
      <div className="pt-6 pb-0 px-5">
        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col">
            <span className="font-bold text-white text-[1.15rem] truncate">{eventName}</span>
          </div>
          {online && (
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-1" />
              <span className="text-xs text-white/80">Online</span>
            </div>
          )}
        </div>
        <div className="mt-1">
          <h2 className="text-white/90 text-[13px] font-medium">{desc}</h2>
          <span className="block text-xs text-white/80 font-medium mt-1">{startTime} To {endTime}</span>
          <span className="block text-xs text-white/80 font-medium mt-1">{location}</span>
        </div>
        {/* Avatars and Join Event capsule */}
        <div className="flex items-center justify-between bg-white rounded-full shadow mt-3 py-2 px-3">
          <div className="flex items-center -space-x-3">
            {avatars.slice(0, 5).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Person ${i + 1}`}
                className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 object-cover"
                style={{ zIndex: 10 - i }}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-[#D9414A] ml-2 mr-2">
            + <AnimatedNumber value={attendees} /> {peopleLabel}
          </span>
          <button
            onClick={handleJoin}
            className="ml-auto px-3 py-1 rounded-full bg-white text-green-600 font-semibold text-sm hover:bg-green-50 border border-green-100 transition"
            style={{ minWidth: 85 }}
          >
            {attending ? "Leave" : "Join Event"}
          </button>
        </div>
      </div>
      {/* Event image */}
      <div className="w-full mt-3">
        <img
          src={coverImage}
          alt="Event"
          className="w-full h-40 object-cover rounded-b-[36px]"
        />
      </div>
    </div>
  );
}