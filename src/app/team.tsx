"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Team() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-white rounded-3xl shadow-xl p-8 w-full sm:w-[400px] flex flex-col items-center"
      >
        <h2 className="font-bold text-xl mb-4 text-gray-800 text-center">
          Meet the Team
        </h2>

   
        <img
          src="/Portraits/group.jpg"
          alt="Team Group"
          className="w-64 h-40 object-cover rounded-xl mb-6"
        />

        <button
          onClick={() => router.push("/team")}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          View More
        </button>
      </motion.div>
    </div>
  );
}
