"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const team = [
  {
    name: "Shubham Sharma",
    role: "Mentor",
    img: "/Portraits/Shubham.jpg",
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
    img: "/Portraits/Vibhor.jpg",
  },
  {
    name: "Ojas Tripathi",
    role: "Developer",
    img: "/Portraits/Ojas.jpg",
  },
];

export default function TeamCard() {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <motion.div
        layout
        transition={{ layout: { duration: 0.5, type: "spring" } }}
        className="bg-white rounded-3xl shadow-xl p-6 w-full sm:w-[400px] flex flex-col items-center"
      >
        <h2 className="font-bold text-xl mb-4 text-gray-800 text-center">
          Meet the Team
        </h2>

        <motion.img
          src="/Portraits/group.jpg"
          alt="Team Group"
          className="w-64 h-40 object-cover rounded-xl mb-4"
          layout="position"
        />

        <button
          onClick={() => setShowTeam(!showTeam)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          {showTeam ? "Hide Team" : "View More"}
        </button>

        <AnimatePresence>
          {showTeam && (
            <motion.div
              key="team-members"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full justify-items-center"
            >
              {team.map((t, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-50 rounded-2xl shadow flex flex-col items-center p-4 w-36 h-48"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-20 h-20 rounded-full object-cover mb-2"
                  />
                  <div className="font-semibold text-center text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    {t.role}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
