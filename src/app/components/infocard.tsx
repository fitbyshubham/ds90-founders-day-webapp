import React from "react";

type InfoCardProps = {
  image: string;
  name: string;
};

export default function InfoCard({ image, name }: InfoCardProps) {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden shadow-md group cursor-pointer">
      <img
        src={image}
        alt={name}
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute left-3 bottom-3 right-3 z-10">
        <div className="text-white text-xl font-bold drop-shadow capitalize tracking-wide">
          {name}
        </div>
      </div>
    </div>
  );
}