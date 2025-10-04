"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InfoCard from "./components/infocard";

const locations = [
  { image: "/MB.jpg", name: "Main Building", description: "The iconic main building.", aspect: 1 / 2 },
  { image: "/FH.jpg", name: "Foot House", description: "Known for its vibrant culture.", aspect: 2 / 3 },
  { image: "/MH.jpg", name: "Martyn House", description: "Home to many scholars.", aspect: 1 / 1 },
  { image: "/HH.jpg", name: "Hyderabad House", description: "A hub of creativity.", aspect: 4 / 3 },
  { image: "/KH.jpg", name: "Kashmir House", description: "Peaceful and scenic.", aspect: 1 / 1.2 },
  { image: "/JH.jpg", name: "Jaipur House", description: "Known for arts.", aspect: 1.7 / 2 },
  { image: "/TH.jpg", name: "Tata House", description: "Strong legacy.", aspect: 1.4 / 1.6 },
  { image: "/OH.jpg", name: "Oberoi House", description: "Modern and elegant.", aspect: 1.5 / 1.9 },
  { image: "/library.jpg", name: "Library", description: "Center of knowledge.", aspect: 1.7 / 1 },
];

export default function InfoPage() {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 mt-200">
      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex flex-col bg-white rounded-t-2xl shadow-xl overflow-y-auto"
          >
            <div className="flex-1">
              <img
                src={selectedImage.image}
                alt={selectedImage.name}
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="p-6 mb-100">
              <h1 className="text-3xl font-bold">{selectedImage.name}</h1>
              <p className="mb-6 text-gray-700">{selectedImage.description}</p>
              <button
                onClick={() => setSelectedImage(null)}
                className="mt-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                ← Back to Houses
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xs mx-auto bg-white rounded-3xl p-4"
          >
            <div className="text-lg font-bold mb-3 mt-3">Explore the School</div>
            <div className="columns-2 gap-3">
              {locations.map((loc) => (
                <div
                  key={loc.name}
                  style={{ aspectRatio: loc.aspect }}
                  className="mb-3 break-inside-avoid rounded-xl overflow-hidden shadow-md bg-white cursor-pointer"
                  onClick={() => setSelectedImage(loc)}
                >
                  <InfoCard image={loc.image} name={loc.name} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
