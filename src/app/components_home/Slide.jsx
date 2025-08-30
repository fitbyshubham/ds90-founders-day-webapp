"use client";

import { useEffect, useState } from "react";
import { FaMapMarkedAlt, FaUtensils, FaCalendarAlt, FaUserSecret } from "react-icons/fa";

const slides = [
  {
    icon: <FaUtensils size={80} className="text-yellow-500 mb-4" />,
    title: "Order Favorite Dishes!",
    desc: "Order your meals and see what's being served each day. Enjoy a variety of options tailored for you.",
    bg: "bg-yellow-50",
    blobs: [
      "top-4 right-4 w-16 h-16 bg-yellow-100 opacity-40 rounded-full blur-2xl",
      "bottom-8 left-8 w-20 h-20 bg-yellow-100 opacity-30 rounded-full blur-2xl"
    ]
  },
  {
    icon: <FaMapMarkedAlt size={80} className="text-green-500 mb-4" />,
    title: "School Map!",
    desc: "Navigate the campus easily with an interactive map. Find your way to every event and classroom.",
    bg: "bg-green-50",
    blobs: [
      "top-6 left-10 w-14 h-14 bg-green-100 opacity-40 rounded-full blur-2xl",
      "bottom-10 right-10 w-20 h-20 bg-green-100 opacity-30 rounded-full blur-2xl"
    ]
  },
  {
    icon: <FaCalendarAlt size={80} className="text-blue-500 mb-4" />,
    title: "Founder's Schedule!",
    desc: "Stay updated with the founder's events and activities. Never miss an important moment.",
    bg: "bg-blue-50",
    blobs: [
      "top-8 right-8 w-16 h-16 bg-blue-100 opacity-40 rounded-full blur-2xl",
      "bottom-6 left-6 w-20 h-20 bg-blue-100 opacity-30 rounded-full blur-2xl"
    ]
  },
  {
    icon: <FaUserSecret size={80} className="text-gray-700 mb-4" />,
    title: "Ask Batman!",
    desc: "Get instant answers to your school-related questions. Your personal AI campus superhero.",
    bg: "bg-gray-100",
    blobs: [
      "top-6 left-8 w-14 h-14 bg-gray-300 opacity-40 rounded-full blur-2xl",
      "bottom-8 right-8 w-20 h-20 bg-gray-300 opacity-30 rounded-full blur-2xl"
    ]
  }
];

export default function Slide() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 250); // fade out duration
    }, 4000);
    return () => clearTimeout(timer);
  }, [index]);

  const slide = slides[index];

  return (
    <div className="  flexitems-center justify-center min-h-[25vh] w-full">
      <div>
        
      </div>
      <div className={`relative  border-gray-300 border-b-2 flex flex-col items-center justify-center  w-full  transition-all duration-500 overflow-hidden`}
        style={{ minHeight: "200px" }}
      >
        {/* Blobs */}
        {slide.blobs.map((cls, i) => (
          <div key={i} className={`absolute ${cls}`} />
        ))}
        <div className={`relative z-10 flex flex-col items-center justify-center pt-10 pb-20 px-6
          ${fade ? "animate-fade-in" : "animate-fade-out"}`}>
          {slide.icon}
          <h2 className="text-xl font-bold text-center text-gray-700 mb-2">{slide.title}</h2>
          <p className="text-gray-600 text-center text-sm">{slide.desc}</p>
        </div>
        {/* Dots */}
        <div className="absolute mb-7 bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`inline-block w-2 h-2 rounded-full ${i === index ? "bg-gray-700" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.98);}
          to { opacity: 1; transform: scale(1);}
        }
        @keyframes fade-out {
          from { opacity: 1; transform: scale(1);}
          to { opacity: 0; transform: scale(0.98);}
        }
        .animate-fade-in {
          animation: fade-in 0.3s cubic-bezier(.4,0,.2,1);
        }
        .animate-fade-out {
          animation: fade-out 0.25s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </div>
  );
}