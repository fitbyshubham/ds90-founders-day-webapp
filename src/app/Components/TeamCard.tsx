import React from "react";
import { MoveRight } from "lucide-react";

export default function TeamCard() {
  return (
    <div className="bg-white rounded-2xl w-full pb-3 shadow-md overflow-hidden">
      <div className="relative w-full h-[230px]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHwq7gwxZBVYYf-kS-fVwpYoQ3s3zzhpJKA&s"
          alt=""
          className="object-cover w-full h-full rounded-t-2xl"
        />
      </div>
      <div className="px-3 mt-3">
        <div className="text-black font-semibold text-base truncate"></div>
        <div className="flex items-center justify-between text-slate-500 text-[13px] mt-1">
          <h1 className="text-black font-bold text-lg">Meet The Team</h1>
          <span>
            <MoveRight size={18} className="font-bold" />
          </span>
        </div>
      </div>
    </div>
  );
}
