"use client";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const team = [
  { name: "Shubham Sharma", role: "Mentor", img: "/Portraits/Shubham.jpg" },
  { name: "Samarth Pundeer", role: "Lead Developer", img: "/Portraits/Pundeer.jpg" },
  { name: "Hemant Khandelwal", role: "Lead Developer", img: "/Portraits/Hemant.jpg" },
  { name: "Vibhor Saraogi", role: "Developer", img: "/Portraits/Vibhor.jpg" },
  { name: "Ojas Tripathi", role: "Developer", img: "/Portraits/Ojas.jpg" },
  { name: "Aarav Anand", role: "Developer", img: "/Portraits/Aarav.jpg" }, 
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TeamPage() {
  const router = useRouter();

  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6 relative"
    >
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 transition"
      >
        ← Back
      </button>

      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="font-bold text-2xl mb-10 text-gray-800 text-center"
      >
        Meet the Team
      </motion.h2>

      <motion.div variants={containerVariants} className="flex flex-col items-center space-y-8">
        {/* Mentor (centered) */}
        <motion.div variants={cardVariants} className="flex justify-center">
          <div className="bg-white rounded-2xl shadow flex flex-col items-center p-6 w-44 h-56 mx-2">
            <img
              src={team[0].img}
              alt={team[0].name}
              className="w-24 h-24 rounded-full object-cover mb-3"
            />
            <div className="font-semibold text-center">{team[0].name}</div>
            <div className="text-sm text-gray-500 text-center">{team[0].role}</div>
          </div>
        </motion.div>

        {/* Row 1: Lead Developers */}
        <div className="flex justify-center space-x-8">
          {team.slice(1, 3).map((t) => (
            <motion.div key={t.name} variants={cardVariants}>
              <div className="bg-white rounded-2xl shadow flex flex-col items-center p-6 w-44 h-56">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover mb-3"
                />
                <div className="font-semibold text-center">{t.name}</div>
                <div className="text-sm text-gray-500 text-center">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2: 2 Developers */}
        <div className="flex justify-center space-x-8">
          {team.slice(3, 5).map((t) => (
            <motion.div key={t.name} variants={cardVariants}>
              <div className="bg-white rounded-2xl shadow flex flex-col items-center p-6 w-44 h-56">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover mb-3"
                />
                <div className="font-semibold text-center">{t.name}</div>
                <div className="text-sm text-gray-500 text-center">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 3: Last Developer (centered) */}
        <motion.div variants={cardVariants} className="flex justify-center">
          <div className="bg-white rounded-2xl shadow flex flex-col items-center p-6 w-44 h-56 mx-2">
            <img
              src={team[5].img}
              alt={team[5].name}
              className="w-24 h-24 rounded-full object-cover mb-3"
            />
            <div className="font-semibold text-center">{team[5].name}</div>
            <div className="text-sm text-gray-500 text-center">{team[5].role}</div>
          </div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
