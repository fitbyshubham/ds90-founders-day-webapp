"use client";
import React, { useState } from "react";

interface Images {
  name: string;
  
  description: string;
  
  image: string;
}

const countries: Images[] = [
  {
    name: "1",
    
    description: "w ws",
    
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bd/Oxford_Blue.png",
  },
  {
    name: "2",
    
    description: "ee",
    
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9Ni4GdI6a45CPX-yc58tEFYc1nYOO7-tfA&s",
  },
  {
    name: "sas",
    
    description: "sas",
    
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKkScH8JekkZH7iArkjZ3B0q_GBEbpsRAjKg&s",
  },
];

const App: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<Images | null>(null);

  if (!selectedImages) {
    return (
      <div className="mt-50 h-90 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto">
        {countries.map((c) => (
          <button
            key={c.name}
            onClick={() => setSelectedImages(c)}
            className="relative rounded-2xl overflow-hidden shadow-lg group w-full"
          >
            <img
              src={c.image}
              alt={c.name}
              className="h-40 w-40 object-cover transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-lg font-semibold">{c.name}</h2>
            </div>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1">
        <img
          src={selectedImages.image}
          alt={selectedImages.name}
          className="mt-80 h-90 w-90 object-cover"
        />
      </div>
      <div className="w-full bg-white shadow-lg rounded-t-2xl p-6">
        <h1 className="text-3xl font-bold mb-4">{selectedImages.name}</h1>
        <p className="mb-6 text-gray-700">{selectedImages.description}</p>
        <div className="flex gap-4 mb-4">
          
        </div>
        <button
          onClick={() => setSelectedImages(null)}
          className="mt-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          ← Back to details
        </button>
      </div>
    </div>
  );
};

export default App;
