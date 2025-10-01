"use client"

import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";

interface StallsCardProps {
    image: string;
    alt: string;
    title1: string;
    title2: string;
    stallNo: string | number;
    rating: string | number;
    reviews: string | number;
}

export default function PopRestaurantsCard(props: StallsCardProps) {
    const router = useRouter();
    const handleRoute = () => {
        router.push('/FoodItems');
    }
    
    return (
      <div className="flex items-center justify-center mb-5">
        <div className="flex relative w-98 h-80 rounded-4xl overflow-hidden shadow-lg">
          {/* Image fills the card */}
          <img
            src={props.image}
            alt={props.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/5 to-transparent" />

          <div>
            <div className="absolute top-0 p-4 z-10">
              <div className="text-white font-bold top-2 text-2xl">
                  {props.title1}            
              </div>
              <div className="text-white font-bold top-2 text-2xl">
                  {props.title2}            
              </div>
            </div>
            <div className="absolute bottom-0 w-full p-4 z-10">
              <div className="flex flex-col text-yellow-400 text-sm mt-1">
                <div className="text-white font-bold text-xl mb-2">
                  <span>Stall No. {props.stallNo}</span>
                </div>
                <div>
                  <span className="flex">
                    <span className="text-yellow font-bold">★</span>
                    <span className="ml-1 text-white">{props.rating}</span>
                    <span className="ml-1 text-white">({props.reviews})</span>
                  </span>
                </div>
              </div>
              <span>
                <span>
                  <button className="mt-4 w-75 h-12 bg-white/90 text-gray-900 rounded-full py-2 font-semibold hover:bg-white transition">
                    More Details
                  </button>
                </span>
                <span>
                  <button className="absolute bottom-1 bg-white/20 backdrop-blur-sm border border-white/30 shadow-md m-3 px-3.5 h-12 py-0.5 text-3xl rounded-4xl">
                    ♡
                  </button>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
}