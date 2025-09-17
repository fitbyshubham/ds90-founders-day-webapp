"use client";

import { motion, useSpring, AnimatePresence, number } from "framer-motion";
import { MapPin, PersonStanding, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import AnimatedNumber from "./Animations";

interface ScheduleCardProps {
  day: string;
  date: string;
  startTime?: string;
  endTime?: string;
  eventName: string;
  desc: string;
  detail: string;
  location: string;
  gradient?: keyof typeof gradientMap;
  numberOfPeople: number;
}

const gradientMap: Record<string, string> = {
  purplePink: "from-[#F87C4A] to-[#D9414A]",
  blueCyan: "from-blue-600 to-cyan-400",
  indigoPurple: "from-indigo-600 to-purple-400",
  greenTeal: "from-green-600 to-teal-400",
  orangeRed: "from-[#F87C4A] to-[#D9414A]",
};

export default function ScheduleCard({
  day,
  date,
  startTime,
  endTime,
  eventName,
  desc,
  detail,
  location,
  gradient = "orangeRed",
  numberOfPeople,
}: ScheduleCardProps) {
  const [attendees, setAttendees] = useState(numberOfPeople);
  const [attending, setAttending] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(numberOfPeople, "these are the number of people");

  const handleClick = () => {
    if (attending) {
      setAttendees(attendees - 1);
      setAttending(false);
    } else {
      setAttendees(attendees + 1);
      setAttending(true);
    }
  };

  return (
    <div>
      {/*Mobile Layout*/}
      <div
        className={`block md:hidden flex-1 bg-gradient-to-br ${gradientMap[gradient]} text-white rounded-3xl shadow-lg shadow-gray-300/40 px-4 py-3 transition-transform duration-200 ease-out hover:scale-[1.03]`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center mb-2">
          <div className="flex flex-col items-center justify-center bg-white/90 rounded-xl px-3 py-2 mr-3 min-w-[64px]">
            <span className="text-lg font-bold text-[#D9414A]">{day}</span>
            <span className="text-base font-semibold text-[#D9414A]">{date}</span>
          </div>
          <div className="flex-1 flex flex-col">
            <span className="text-xs font-medium text-white/80">{startTime} {endTime && <>– {endTime}</>}</span>
            <span className="text-xs font-medium text-white/80">{location}</span>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-bold leading-tight">{eventName}</h2>
          <button
            className="rounded-full bg-white/20 p-1"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="Toggle details"
            tabIndex={-1}
            type="button"
          >
            {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
          </button>
        </div>

        <motion.div
          layout="size"
          transition={{ type: "spring", bounce: 0.3, duration: 0.3 }}
          className="my-2"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isExpanded ? (
              <motion.p
                key="detail"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.18 }}
                className="text-sm opacity-90"
              >
                {detail}
              </motion.p>
            ) : (
              <motion.p
                key="desc"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.18 }}
                className="text-sm opacity-90"
              >
                {desc}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <div className="flex items-center mt-2 gap-2">
          <div className="flex -space-x-3 overflow-hidden">
            <img src="/avatar1.png" alt="Person 1" className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 object-cover" />
            <img src="/avatar2.png" alt="Person 2" className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 object-cover" />
            <img src="/avatar3.png" alt="Person 3" className="w-7 h-7 rounded-full border-2 border-white bg-gray-200 object-cover" />
          </div>
          <span className="text-xs font-semibold">
            + <AnimatedNumber value={attendees} /> participants
          </span>
        </div>
        <div className="flex mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            className={`w-full font-semibold text-white rounded-xl py-2 transition duration-150 shadow ${
              attending
                ? "bg-[#D9414A] border-2 border-[#9E2B3C]"
                : "bg-[#F87C4A] border-2 border-[#F87C4A]"
            } active:scale-95 active:opacity-80`}
          >
            {attending ? "Don't Notify" : "Join Event"}
          </button>
        </div>
      </div>

      {/*Laptop Layout */}
      <div className="hidden md:flex flex-row md:space-x-4 mb-6">
        <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-4 md:w-20 mb-3 md:mb-0 border-2 border-[#F87C4A]">
          <span className="text-lg font-bold text-[#D9414A]">{day}</span>
          <span className="text-base font-semibold text-[#D9414A]">{date}</span>
          {startTime && endTime && (
            <>
              <span className="text-base font-bold mt-1 text-[#D9414A]">{startTime}</span>
              <span className="text-xs font-semibold text-gray-500 text-center">To</span>
              <span className="text-base font-bold text-[#D9414A]">{endTime}</span>
            </>
          )}
        </div>

        <div
          className={`flex-1 bg-gradient-to-br ${gradientMap[gradient]} text-white rounded-2xl shadow-lg p-6 transition-transform duration-200 ease-out hover:scale-[1.02]`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-xl font-bold leading-tight">{eventName}</h2>
            <button
              className="rounded-full bg-white/20 p-1"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-label="Toggle details"
              tabIndex={-1}
              type="button"
            >
              {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
            </button>
          </div>

          <motion.div
            layout="size"
            transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
            className="mt-2"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isExpanded ? (
                <motion.p
                  key="detail"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.18 }}
                  className="text-base opacity-90"
                >
                  {detail}
                </motion.p>
              ) : (
                <motion.p
                  key="desc"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.18 }}
                  className="text-base opacity-90"
                >
                  {desc}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="flex items-center mt-3 gap-3">
            <div className="flex -space-x-3 overflow-hidden">
              {/* Example avatars; update as needed */}
              <img src="/avatar1.png" alt="Person 1" className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 object-cover" />
              <img src="/avatar2.png" alt="Person 2" className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 object-cover" />
              <img src="/avatar3.png" alt="Person 3" className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 object-cover" />
            </div>
            <span className="text-sm font-semibold">
              + <AnimatedNumber value={attendees} /> participants
            </span>
          </div>

          <div className="flex mt-5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleClick();
              }}
              className={`w-full md:w-auto font-semibold text-white rounded-xl py-2 px-6 transition duration-150 shadow ${
                attending
                  ? "bg-[#D9414A] border-2 border-[#9E2B3C]"
                  : "bg-[#F87C4A] border-2 border-[#F87C4A]"
              } active:scale-95 active:opacity-80`}
            >
              {attending ? "Don't Notify" : "Join Event"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}