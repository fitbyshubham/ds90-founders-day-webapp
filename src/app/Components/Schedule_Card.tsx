"use client";

import { MapPin, PersonStanding, ChevronDown, ChevronUp } from "lucide-react"; // or Heroicons if you prefer
import {useState} from 'react';

interface ScheduleCardProps {
  day: string;
  date: string;
  startTime?: string;   // optional (for multi-day events)
  endTime?: string;  // optional
  eventName: string;
  desc: string;
  detail: string;
  location: string;
  gradient?: keyof typeof gradientMap;
}

const gradientMap: Record<string, string> = {
  purplePink: "from-purple-600 to-pink-400",
  blueCyan: "from-blue-600 to-cyan-400",
  indigoPurple: "from-indigo-600 to-purple-400",
  greenTeal: "from-green-600 to-teal-400",
  orangeRed: "from-red-600 to-orange-400",
}

export default function ScheduleCard({
  day,
  date,
  startTime,
  endTime,
  eventName,
  desc,
  detail,
  location,
  gradient = "purplePink",
}: ScheduleCardProps) {

  const [attendees, setAttendees] = useState(0)
  const [attending, setAttending] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const handleClick = () =>{
    if(attending){
      setAttendees(attendees - 1)
      setAttending(false)
    }else{
      setAttendees(attendees + 1)
      setAttending(true)
    }
  }

  return (
    <div className="flex flex-row md:space-x-4 mb-6">

      <div className="flex items-center justify-between md:w-20 mb-2 md:mb-0">
        <span className="bg-white/20 text-xs font-semibold px-2 py-1 rounded-md">
          {day}{date}
        </span>
        {startTime && endTime && (
          <span className="text-xs font-medium">
            {startTime} - {endTime}
          </span>
        )}
      </div>

        <div
          className={`flex-1 bg-gradient-to-r ${gradientMap[gradient]} text-white rounded-xl shadow-lg p-4 transition-transform duration-200 ease-out hover:scale-[1.02]`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
        <div>
          <h2 className="text-base md:text-lg font-bold">{eventName}</h2>
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>  

        <div
          className={`grid transition-all duration-500 overflow-hidden ${
            isExpanded ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"
          }`}
        >
          <p className="text-sm md:text-base opacity-90 mb-2">
            {isExpanded ? detail : desc}
          </p>
        </div>

        <p className="flex items-center text-sm md:text-base opacity-90">
          <PersonStanding size={14} className="mr-1" />
          Number of People Attending: {attendees}
        </p>

        <div className="flex items-center text-sm md:text-base opacity-90">
          <MapPin size={14} className="mr-1" />
          {location}
        </div>

        <div className="flex mt-3">
          <button
          onClick ={(e) => {
            e.stopPropagation();
            handleClick();
          }}  
          className={`w-full md:w-auto text-gray-800 text-sm md:text-base px-3 py-1 rounded-lg shadow ${attending ? "bg-red-500 border-2 border-red-800" : "bg-green-500 border-2 border-green-800"}`}>
            {attending ? "Don't Notify" : "Notify"}
          </button>
        </div>  
      </div>
    </div>
  );
}
