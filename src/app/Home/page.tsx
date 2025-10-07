"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";
import TeamCard from "../Components/TeamCard";

const specials = [
  {
    name: "Paneer Tikka Sandwich",
    price: "₹50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIB0-zFdFEGoh5VnYpk5WqWVZh88m5YjlNUQ&s",
    rating: 4.8,
    stall: "Stall No. 5",
    isTop: true,
  },
  {
    name: "Veg Noodles",
    price: "₹40",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    stall: "Stall No. 2",
    isTop: false,
  },
];
const events = [
  {
    name: "Science Exhibition",
    time: "Oct 6, 11:00 AM",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    desc: "Explore student projects in the main hall.",
  },
  {
    name: "Sports Meet",
    time: "Oct 6, 3:00 PM",
    image:
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80",
    desc: "Cheer on your house at the playground.",
  },
];
const team = [
  {
    name: "Shubham Sharma",
    role: "Mentor",
    img: "/Portraits/",
  },
  {
    name: "Samarth Pundeer",
    role: "Lead Developer",
    img: "/Portraits/Pundeer.jpg",
  },
  {
    name: "Hemant Khandelwal",
    role: "Lead Developer",
    img: "/Portraits/Hemant.jpg",
  },
  {
    name: "Vibhor Saraogi",
    role: "Developer",
    img: "/Portraits/",
  },
  {
    name: "Ojas Tripathi",
    role: "Developer",
    img: "/Portraits/",
  },
  //   { name: "Hemant Khandelwal", role: "Lead Developer", img: "https://randomuser.me/api/portraits/men/45.jpg" },
];

export default function HomePage() {
  const router = useRouter();
  const handleAboutRoute = () => {
    router.push("/InfoPage");
  }
  const handleTeamRoute = () => {
    router.push("/Team");
  };
  
    return (
    <div className="min-h-screen bg-gray-100 flex flex-col pb-10">
      {/* Header */}
      <div className="bg-gray-900 text-white px-4 pb-6 pt-8 rounded-b-3xl shadow flex flex-col relative">
        <div className="flex mb-4">
          <div className="flex items-left space-x-1.5 flex-col">
            <span className="text-2xl"> Welcome,</span>
            <span className="font-bold text-3xl">Samarth Pundeer!</span>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg mb-2 bg-gray-800">
          <img
            alt="Founders Day"
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
            className="w-full h-36 object-cover"
          />
          <div className="p-4">
            <div className="text-xl font-bold mb-1">Welcome to the DS90</div>
            <p className="text-gray-300 text-sm mb-2">
              On the 90th year of the school, get to know about some of the most
              famous places amongst Doscos.
            </p>
            <button 
            onClick={handleAboutRoute}
            className="bg-orange-500 text-white px-4 py-1 rounded-full font-semibold text-sm hover:bg-orange-600 transition">
              Get to Know
            </button>
          </div>
        </div>
      </div>

      {/* Specials (Top Food) */}
      <div className="px-4 mt-6">
        <h2 className="font-bold text-lg mb-2 text-gray-800">Top Rated Food</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2 hide-scrollbar">
          {specials.map((item, i) => (
            <div
              key={i}
              className={`min-w-[220px] scrollbar-hide bg-white rounded-2xl shadow-lg flex-shrink-0 ${
                item.isTop
                  ? "border-2 border-orange-400"
                  : "border border-gray-200"
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-28 object-cover rounded-t-2xl"
              />
              <div className="p-3 scrollbar-hide">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">
                    {item.price}
                  </span>
                </div>
                <div className="flex items-center mt-1">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-xs font-bold">{item.rating}</span>
                  <span className="ml-2 text-xs text-gray-500">
                    {item.stall}
                  </span>
                </div>
                {item.isTop && (
                  <span className="inline-block mt-2 text-xs bg-orange-100 text-orange-500 px-2 py-0.5 rounded-full font-semibold">
                    Most Popular
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="px-4 hide-scrollbar mt-7">
        <h2 className="font-bold text-lg mb-2 hide-scrollbar text-gray-800">
          Upcoming Events
        </h2>
        <div className="flex space-x-4 hide-scrollbar overflow-x-auto pb-2">
          {events.map((e, i) => (
            <div
              key={i}
              className="min-w-[200px] bg-white rounded-2xl shadow-lg flex-shrink-0"
            >
              <img
                src={e.image}
                alt={e.name}
                className="w-full h-24 object-cover rounded-t-2xl"
              />
              <div className="p-3">
                <div className="font-semibold">{e.name}</div>
                <div className="text-xs text-gray-500">{e.time}</div>
                <div className="text-xs text-gray-700 mt-1">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="flex flex-col items-center justify-center pt-3 mx-3">
        <button 
        onClick={handleTeamRoute}
        className="w-full">
          <TeamCard />
        </button>
      </div>
    </div>
  );
}
