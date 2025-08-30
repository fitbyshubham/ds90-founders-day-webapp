"use client";

import { motion, useSpring, AnimatePresence } from "framer-motion";
import { MapPin, PersonStanding, ChevronDown, ChevronUp } from "lucide-react"; // or Heroicons if you prefer
import { useState} from 'react';
import AnimatedNumber from "./Animations";

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
    <div>
    {/*Mobile Layout*/}    
        <div
          className={`block md:hidden flex-1 bg-gradient-to-r ${gradientMap[gradient]} text-white rounded-3xl shadow-lg 
          shadow-gray-300/40 p-4 transition-transform duration-200 ease-out hover:scale-[1.02]`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center justify-between md:w-20 mb-2 md:mb-0">
          <span className="bg-white/20 text-xs font-semibold px-2 py-1 rounded-md">
            {day}{date}
          </span>
          {startTime && endTime && (
            <span className="text-xs font-medium">
              {startTime} to {endTime}
            </span>
          )}
        </div>
          <div>
            <h2 className="text-base md:text-lg font-bold">{eventName}</h2>
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>  


          <motion.div
            layout="size"
            transition={{type: "spring", bounce: 0.3, duration: 0.3}}
            className="my-2"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isExpanded ? (
                <motion.p
                key="detail"
                initial={{opacity: 0, y: -4}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y:4}}
                transition={{duration: 0.18}}
                className="text-sm md:text-base opacity-90"
                >{detail}</motion.p>
              ):
              <motion.p
                key="detail"
                initial={{opacity: 0, y: -4}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y:4}}
                transition={{duration: 0.18}}
                className="text-sm md:text-base opacity-90"
                >{desc}</motion.p>
              }
            </AnimatePresence>
          </motion.div>

          <p className="flex items-center text-sm md:text-base opacity-90">
            <PersonStanding size={14} className="mr-1" />
            Number of People Attending: <AnimatedNumber value={attendees} />
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
            className={`mt-3 w-full md:w-auto text-gray-800 text-sm md:text-base px-3 py-1 rounded-xl shadow transform 
            transition active:scale-95 active:opacity-80 duration-150 ${attending ? "bg-red-500 border-2 border-red-800" : 
            "bg-green-500 border-2 border-green-800"}`}
            >
              {attending ? "Don't Notify" : "Notify"}
            </button>
          </div>  
        </div>
        
      {/*Laptop Layout */}
        <div className="hidden md:flex flex-row md:space-x-4 mb-6">
          <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-4 md:w-20 mb-3 md:mb-0">
            <span className="text-base md:text-lg text-gray-500">{day}</span>
            <span className="text-base md:text-lg font-semibold text-gray-500">{date}</span>
            {startTime && endTime && (
              <>
                <span className="text-base md:text-lg font-bold mt-1">{startTime}</span>
                <span className="text-xs md:text-sm font-semibold text-gray-500 text-center">To</span>
                <span className="text-base md:text-lg font-bold">{endTime}</span>
              </>
            )}
          </div>

          <div
            className={`flex-1 bg-gradient-to-r ${gradientMap[gradient]} text-white rounded-xl shadow-lg p-4 
            transition-transform duration-200 ease-out hover:scale-[1.02]`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
          <div>
            <h2 className="text-base md:text-lg font-bold">{eventName}</h2>
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>  

          <motion.div
            layout="size"
            transition={{type: "spring", bounce: 0.25, duration: 0.5}}
            className="mt-2"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isExpanded ? (
                <motion.p
                key="detail"
                initial={{opacity: 0, y: -4}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y:4}}
                transition={{duration: 0.18}}
                className="text-sm md:text-base opacity-90"
                >{detail}</motion.p>
              ):
              <motion.p
                key="detail"
                initial={{opacity: 0, y: -4}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y:4}}
                transition={{duration: 0.18}}
                className="text-sm md:text-base opacity-90"
                >{desc}</motion.p>
              }
            </AnimatePresence>
          </motion.div>  

          <p className="flex items-center text-sm md:text-base opacity-90">
            <PersonStanding size={14} className="mr-1" />
            Number of People Attending: <AnimatedNumber value={attendees} />
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
            className={`w-full md:w-auto text-gray-800 text-sm md:text-base px-3 py-1 rounded-lg shadow transform 
            transition active:scale-95 active:opacity-80 ${attending ? "bg-red-500 border-2 border-red-800" : 
            "bg-green-500 border-2 border-green-800"}`}
            >
              {attending ? "Don't Notify" : "Notify"}
            </button>
          </div>  
        </div>
    </div>
  </div>    
  );
}
