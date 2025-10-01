import React from "react";

type RestaurantCardProps = {
  image: string;
  offer?: string;
  rating: number | string;
  name: string;
  stallNo: number | string;
};

export default function RestaurantCard({
  image,
  offer,
  rating,
  name,
  stallNo,
}: RestaurantCardProps) {
  return (
    <div className="bg-white rounded-2xl w-[170px] pb-3 shadow-md overflow-hidden">
      <div className="relative w-full h-[110px]">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full rounded-t-2xl"
        />
        {offer && (
          <span className="absolute top-2 left-2 bg-black/70 text-white text-xs font-semibold rounded px-2 py-1">
            {offer}
          </span>
        )}
        <span className="absolute bottom-2 left-2 bg-green-600 text-white text-xs font-bold rounded flex items-center px-2 py-0.5 gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
          {rating}
        </span>
      </div>
      <div className="px-3 mt-3">
        <div className="text-black font-semibold text-base truncate">{name}</div>
        <div className="flex items-center text-slate-500 text-[13px] mt-1 gap-1">
          <h1>Stall No. </h1>
          {stallNo}
        </div>
      </div>
    </div>
  );
}