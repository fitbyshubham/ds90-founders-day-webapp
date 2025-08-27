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
    <div className="flex space-x-4 mb-6">

      <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-4 w-16">
        <span className="text-lg text-gray-500">{day}</span>
        <span className="text-lg font-semibold text-gray-500">{date}</span>

        {startTime && endTime && (
          <>
            <span className="text-lg font-bold mt-1">{startTime}</span>
            <span className="text-sm font-semibold text-gray-500 text-center">To</span>
            <span className="text-lg font-bold">{endTime}</span>
          </>
        )}
      </div>

        <div
          className={`flex-1 bg-gradient-to-r ${gradientMap[gradient]} text-white rounded-xl shadow-lg p-4 transition-transform hover:scale-[1.02]`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
        <div>
          <h2 className="text-lg font-bold">{eventName}</h2>
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>  

        <div
          className={`transition-all duration-500 overflow-hidden ${
            isExpanded ? "max-h-40 my-2" : "max-h-0" {desc}
          }`}
        >
          <p className="text-sm opacity-90">{detail}</p>
        </div>

        <p className="flex items-center text-sm opacity-90">
          <PersonStanding size={14} className="mr-1" />
          No. of People Attending: {attendees}
        </p>

        <div className="flex items-center text-sm opacity-90">
          <MapPin size={14} className="mr-1" />
          {location}
        </div>

        <div className="flex space-x-2 mt-3">
          <button
          onClick ={(e) => {
            e.stopPropagation();
            handleClick();
          }}  
          className={`text-gray-800 text-sm px-3 py-1 rounded-lg shadow ${attending ? "bg-red-500 border-2 border-red-800" : "bg-green-500 border-2 border-green-800"}`}>
            {attending ? "Decline" : "Accept"}
          </button>
        </div>  
      </div>
    </div>
  );
}
