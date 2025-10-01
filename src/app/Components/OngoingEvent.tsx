import React, { useState } from "react";

interface EventCardProps {
  date: string;
  location: string;
  eventName: string;
  time: string;
}

export default function EventCard(props: EventCardProps) {
  const [attendees, setAttendees] = useState(120)
  const [attending, setAttending] = useState(false);

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
    <div className="flex items-center justify-center">
        <div className="flex flex-col bg-[#F87C4A] rounded-[30px] p-0 shadow-lg w-[350px]">
        <div className="flex">
            {/* Left sidebar for date */}
            <div className="flex items-center bg-white rounded-[22px] px-2 py-3 ml-3 mt-3 w-[66px] h-[80px] shadow">
            <span className="flex flex-col text-center text-lg font-bold text-[#D9414A]">{props.date}</span>
            </div>
            {/* Main event info */}
            <div className="flex-1 ml-2 mt-3 mr-3">
            <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white/80">{props.location}</span>
                <span className="text-xs flex items-center gap-1 font-semibold text-white/80">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-1"></span>
                Currently Going On
                </span>
            </div>
            <div className="mt-1">
                <div className="text-base font-semibold text-white leading-tight truncate">{props.eventName}</div>
                <div className="text-xs font-medium text-white/80 mt-1">{props.time}</div>
            </div>
            </div>
        </div>
        {/* Participants and button */}
        <div className="bg-white rounded-[16px] flex items-center justify-between px-4 py-2 mx-3 mt-3">
            <div className="flex items-center">
            {/* Avatars (replace src with real images) */}
            <div className="flex -space-x-3">
                <img src="/avatar1.png" className="w-7 h-7 rounded-full border-2 border-white object-cover bg-gray-200" />
                <img src="/avatar2.png" className="w-7 h-7 rounded-full border-2 border-white object-cover bg-gray-200" />
                <img src="/avatar3.png" className="w-7 h-7 rounded-full border-2 border-white object-cover bg-gray-200" />
            </div>
            <span className="text-xs font-semibold ml-3 text-gray-700">+ 120 people attending</span>
            </div>
            <button
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            className={`text-white font-semibold rounded-xl px-4 py-1 text-sm shadow active:scale-95 active:opacity-80 ${
              attending
                ? "bg-[#D9414A] border-2 border-[#9E2B3C]"
                : "bg-[#28D67F] border-2 border-[#22a262]"
            } active:scale-95 active:opacity-80`}
          >
            {attending ? "Leave" : "Notify"}
          </button>
            {/* <button className="bg-[#28D67F] text-white font-semibold rounded-xl px-4 py-1 text-sm shadow active:scale-95 active:opacity-80">
            Join Event
            </button> */}
        </div>
        {/* Event image */}
        <div className="mx-3 mt-3 mb-3 rounded-[17px] overflow-hidden">
            <img
            src="/Schedule/mainBuilding.jpeg"
            alt="Event"
            className="w-full h-[250px] object-cover"
            />
        </div>
        </div>
    </div>
  );
}